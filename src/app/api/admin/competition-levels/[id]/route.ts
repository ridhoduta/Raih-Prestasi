import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  const { id } = await context.params;
  const level = await prisma.competitionLevel.findUnique({
    where: { id },
  });

  if (!level) {
    return NextResponse.json(
      { success: false, message: "Tingkat kompetisi tidak ditemukan" },
      { status: 404 },
    );
  }

  return NextResponse.json({
    success: true,
    data: level,
  });
}
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID tingkat kompetisi wajib diisi" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const { name, order, isActive } = body;

    const level = await prisma.competitionLevel.update({
      where: { id },
      data: {
        name,
        order,
        isActive,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Tingkat kompetisi berhasil diperbarui",
      data: level,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui tingkat kompetisi" },
      { status: 500 },
    );
  }
}
export async function DELETE(req: Request, context: Context) {
  try {
    const { searchParams } = new URL(req.url);
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID tingkat kompetisi wajib diisi" },
        { status: 400 },
      );
    }

    await prisma.competitionLevel.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: "Tingkat kompetisi berhasil dinonaktifkan",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal menonaktifkan tingkat kompetisi" },
      { status: 500 },
    );
  }
}
