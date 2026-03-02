import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  const { id } = await context.params;
  const data = await prisma.achievement.findFirst({
    where: { id },
    include: {
      student: true,
      guru: {
        select: {
          name: true,
        },
      },
    },
  });
  return NextResponse.json({
    success: true,
    message: "berhasil mengambil data",
    data: data,
  });
}
export async function PUT(request: Request, context: Context) {
  try {
    const session = await getSession();
    if (!session || session.role !== "GURU") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await request.json();

    const { status } = body;

    // validasi status
    if (!["MENUNGGU", "TERVERIFIKASI", "DITOLAK"].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Status tidak valid",
        },
        { status: 400 }
      );
    }

    const updated = await prisma.achievement.update({
      where: { id },
      data: {
        status,
        verifiedBy: session.id,
      },
      include: {
        student: true,
        guru: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Achievement berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal memverifikasi achievement",
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const deleted = await prisma.achievement.delete({
      where: { id },
    });
    return NextResponse.json({
      success: true,
      message: "Achievement berhasil dihapus",
      data: deleted,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus achievement",
      },
      { status: 500 }
    );
  }
}

