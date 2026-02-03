import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  const { id } = await context.params;
  const data = await prisma.achievement.findMany({
    where: { id },
    include: {
      guru: {
        select: {
          name: true,
        },
      },
    },
  });
  return NextResponse.json({
    success: true,
    message: "berhasil mengmabil data",
    data: { data },
  });
}
export async function PUT(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const { status, verifiedBy } = body;

    // validasi status
    if (!["TERVERIFIKASI", "DITOLAK"].includes(status)) {
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
        verifiedBy,
      },
      include: {
        guru: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Achievement berhasil diverifikasi",
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
