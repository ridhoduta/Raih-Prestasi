import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createAndSendNotification } from "@/app/service/pushNotif";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

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
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Anda tidak memiliki akses" },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await request.json();
    const { status } = body;

    // Rule 7: Input validation
    if (!["MENUNGGU", "TERVERIFIKASI", "DITOLAK", "DIBATALKAN"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Status tidak valid" },
        { status: 400 }
      );
    }

    const achievement = await prisma.achievement.findUnique({
      where: { id },
      select: { id: true, studentId: true, status: true },
    });


    if (!achievement) {
      return NextResponse.json(
        { success: false, message: "Achievement tidak ditemukan" },
        { status: 404 }
      );
    }

    const isGuruOrAdmin = session.role === "GURU" || session.role === "ADMIN";

    // Role-specific validation
    if (!isGuruOrAdmin) {
      if (achievement.studentId !== session.id) {
        return NextResponse.json(
          { success: false, message: "Anda hanya dapat membatalkan pengajuan milik sendiri" },
          { status: 403 }
        );
      }
      if (status !== "DIBATALKAN") {
        return NextResponse.json(
          { success: false, message: "Anda tidak memiliki akses untuk mengubah status ini" },
          { status: 403 }
        );
      }
    }

    if (achievement.status !== "MENUNGGU") {
      return NextResponse.json(
        { success: false, message: "Achievement sudah tidak bisa diubah" },
        { status: 400 }
      );
    }

    const updated = await prisma.achievement.update({
      where: { id },
      data: {
        status,
        verifiedBy: (session.role === "GURU" || session.role === "ADMIN") ? session.id : undefined,
      },
      select: achievementDetailSelect,
    });

    // Kirim Notifikasi ke Siswa (Hanya jika diupdate oleh Guru/Admin)
    if (isGuruOrAdmin) {
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
    }

    triggerPusher(CHANNELS.PRESTASI, EVENTS.PRESTASI_UPDATE, {
      id: updated.id,
      studentId: updated.studentId,
      status: updated.status,
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

    triggerPusher(CHANNELS.PRESTASI, EVENTS.PRESTASI_DELETE, { id });

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
