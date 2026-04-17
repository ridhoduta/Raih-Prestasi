import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

type Context = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;
    const body = await req.json();

    const { studentId, answers } = body;

    // 🔒 Validasi dasar
    if (!studentId || !Array.isArray(answers)) {
      return NextResponse.json(
        { success: false, message: "studentId & answers wajib diisi" },
        { status: 400 },
      );
    }

    // 🔒 Cek kompetisi aktif
    const competition = await prisma.competition.findFirst({
      where: {
        id: competitionId,
        isActive: true,
      },
      include: {
        CompetitionFormField: true,
      },
    });

    if (!competition) {
      return NextResponse.json(
        { success: false, message: "Kompetisi tidak ditemukan / tidak aktif" },
        { status: 404 },
      );
    }

    // 🔒 Cegah double daftar (kecuali jika sebelumnya ditolak)
    const existing = await prisma.competitionRegistration.findFirst({
      where: {
        competitionId,
        studentId,
        status: {
          not: "DITOLAK",
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Siswa sudah mendaftar kompetisi ini" },
        { status: 409 },
      );
    }

    // ✅ Buat pendaftaran
    const registration = await prisma.competitionRegistration.create({
      data: {
        competitionId,
        studentId,
        status: "MENUNGGU",
      },
    });

    // ✅ Simpan jawaban
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const answerData = answers.map((ans: any) => ({
      registrationId: registration.id,
      fieldId: ans.fieldId,
      value: ans.value,
    }));

    await prisma.registrationAnswer.createMany({
      data: answerData,
    });

    triggerPusher(CHANNELS.PRESTASI, EVENTS.REGISTRASI_CREATE, {
      id: registration.id,
      competitionId,
      studentId,
    });

    return NextResponse.json({
      success: true,
      message: "Pendaftaran berhasil",
      data: {
        registrationId: registration.id,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mendaftar kompetisi" },
      { status: 500 },
    );
  }
}
