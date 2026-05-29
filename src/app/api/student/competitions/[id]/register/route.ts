import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

type Context = {
  params: Promise<{ id: string }>;
};

type RegistrationPayload = {
  studentId: string;
  answers: Array<{ fieldId: string; value: any }>;
};

export async function POST(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;
    const body = await req.json();

    const registrations: RegistrationPayload[] = body.registrations;

    // 🔒 1. Validasi Struktur Payload
    if (!Array.isArray(registrations) || registrations.length === 0) {
      return NextResponse.json(
        { success: false, message: "Data registrations wajib diisi dan berupa array" },
        { status: 400 },
      );
    }

    // Ekstrak semua studentId yang didaftarkan
    const studentIds = registrations.map((r) => r.studentId);

    // Pastikan tidak ada studentId duplikat di dalam satu payload request
    const uniqueStudentIds = new Set(studentIds);
    if (uniqueStudentIds.size !== studentIds.length) {
      return NextResponse.json(
        { success: false, message: "Terdapat studentId ganda di dalam daftar pendaftaran" },
        { status: 400 },
      );
    }

    // 🔒 2. Cek apakah Kompetisi Aktif
    const competition = await prisma.competition.findFirst({
      where: { id: competitionId, isActive: true },
    });

    if (!competition) {
      return NextResponse.json(
        { success: false, message: "Kompetisi tidak ditemukan / tidak aktif" },
        { status: 404 },
      );
    }

    // 🔒 3. Cek Double Daftar untuk seluruh siswa sekaligus
    const existing = await prisma.competitionRegistration.findMany({
      where: {
        competitionId,
        studentId: { in: studentIds },
        status: { not: "DITOLAK" },
      },
      include: { student: { select: { name: true } } },
    });

    if (existing.length > 0) {
      const names = existing.map((r : any) => r.student.name).join(", ");
      return NextResponse.json(
        { success: false, message: `Siswa (${names}) sudah mendaftar kompetisi ini` },
        { status: 409 },
      );
    }

    // 🔒 4. Cek Limit 3 Pendaftaran Menunggu untuk seluruh siswa
    for (const studentId of studentIds) {
      const pendingCount = await prisma.competitionRegistration.count({
        where: { studentId, status: "MENUNGGU" },
      });

      if (pendingCount >= 3) {
        const student = await prisma.student.findUnique({
          where: { id: studentId },
          select: { name: true },
        });
        return NextResponse.json(
          {
            success: false,
            message: `Siswa (${student?.name || studentId}) tidak bisa mendaftar, maksimal 3 pendaftaran berstatus menunggu`,
          },
          { status: 400 },
        );
      }
    }

    // 🚀 5. Jalankan Transaksi Database secara Dinamis untuk Semua Siswa
    const createdRegistrations = await prisma.$transaction(async (tx : any) => {
      const results = [];

      for (const reg of registrations) {
        // Buat pendaftaran
        const newReg = await tx.competitionRegistration.create({
          data: {
            competitionId,
            studentId: reg.studentId,
            status: "MENUNGGU",
          },
        });

        // Buat jawaban formulir
        const answerData = reg.answers.map((ans) => ({
          registrationId: newReg.id,
          fieldId: ans.fieldId,
          value: ans.value,
        }));

        await tx.registrationAnswer.createMany({
          data: answerData,
        });

        results.push({
          registrationId: newReg.id,
          studentId: reg.studentId,
        });
      }

      return results;
    });

    // 📢 6. Kirim Notifikasi Pusher untuk masing-masing pendaftaran
    createdRegistrations.forEach((reg : any) => {
      triggerPusher(CHANNELS.PRESTASI, EVENTS.REGISTRASI_CREATE, {
        id: reg.registrationId,
        competitionId,
        studentId: reg.studentId,
      });
    });

    return NextResponse.json({
      success: true,
      message: "Seluruh pendaftaran berhasil diproses",
      data: createdRegistrations,
    });

  } catch (error) {
    console.error("Gagal melakukan pendaftaran kompetisi:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mendaftar kompetisi" },
      { status: 500 },
    );
  }
}

