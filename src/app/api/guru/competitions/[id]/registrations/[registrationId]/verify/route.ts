import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{
    id: string; // Match folder [id]
    registrationId: string;
  }>;
};

export async function PATCH(req: Request, context: Context) {
  try {
    const { id: competitionId, registrationId } = await context.params;
    const body = await req.json();

    const { status, note } = body;

    // 🔒 Validasi status
    const allowedStatus = ["MENUNGGU", "DITERIMA", "DITOLAK"];
    if (!allowedStatus.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Status tidak valid" },
        { status: 400 }
      );
    }

    // 🔒 Note wajib jika DITOLAK
    if (status === "DITOLAK" && (!note || note.trim() === "")) {
      return NextResponse.json(
        { success: false, message: "Note wajib diisi jika pendaftaran ditolak" },
        { status: 400 }
      );
    }

    // 🔍 Cek data pendaftaran
    const existing = await prisma.competitionRegistration.findFirst({
      where: {
        id: registrationId,
        competitionId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }

    const updated = await prisma.competitionRegistration.update({
      where: { id: registrationId },
      data: {
        status,
        note: status === "DITOLAK" ? note : null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status pendaftaran berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal memverifikasi pendaftaran" },
      { status: 500 }
    );
  }
}
