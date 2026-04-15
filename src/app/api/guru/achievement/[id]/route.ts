import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createAndSendNotification } from "@/app/service/pushNotif";

const achievementDetailSelect = {
  id: true,
  competitionName: true,
  result: true,
  certificate: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  studentId: true,
  verifiedBy: true,
  student: {
    select: {
      id: true,
      name: true,
      nisn: true,
      kelas: true,
      angkatan: true,
    },
  },
  guru: {
    select: {
      name: true,
    },
  },
};

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;
    const data = await prisma.achievement.findFirst({
      where: { id },
      select: achievementDetailSelect,
    });

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Achievement tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "berhasil mengambil data",
      data,
    });
  } catch (error) {
    console.error("GET /api/guru/achievement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data achievement" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, context: Context) {
  try {
    const session = await getSession();
    if (!session || session.role !== "GURU") {
      return NextResponse.json(
        { success: false, message: "Anda tidak memiliki akses" },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await request.json();
    const { status } = body;

    // Rule 7: Input validation
    if (!["MENUNGGU", "TERVERIFIKASI", "DITOLAK"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Status tidak valid" },
        { status: 400 }
      );
    }

    const updated = await prisma.achievement.update({
      where: { id },
      data: {
        status,
        verifiedBy: session.id,
      },
      select: achievementDetailSelect,
    });

    // Kirim Notifikasi ke Siswa
    await createAndSendNotification({
      studentId: updated.studentId,
      title: "Update Status Prestasi 🎉",
      body: `Status prestasi "${updated.competitionName}" kamu sekarang: ${updated.status}`,
      type: "ACHIEVEMENT",
      data: {
        id: updated.id,
        screen: "achievement_detail",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Achievement berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error("PUT /api/guru/achievement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal memverifikasi achievement" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    await prisma.achievement.delete({
      where: { id },
    });
    return NextResponse.json({
      success: true,
      message: "Achievement berhasil dihapus",
    });
  } catch (error) {
    console.error("DELETE /api/guru/achievement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus achievement" },
      { status: 500 }
    );
  }
}
