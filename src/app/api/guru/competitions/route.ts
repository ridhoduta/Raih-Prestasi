import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.competition.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        title: true,
        description: true,
        isActive: true,
        startDate: true,
        endDate: true,
        category: true,
        level: true,
        createdBy: true,
      },
    });
    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch gurus" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      description,
      categoryId,
      levelId,
      startDate,
      endDate,
      createdById,
    } = body;

    // 🔒 Validasi wajib
    if (
      !title ||
      !categoryId ||
      !levelId ||
      !startDate ||
      !endDate ||
      !createdById
    ) {
      return NextResponse.json(
        { success: false, message: "Field wajib belum lengkap" },
        { status: 400 },
      );
    }

    const competition = await prisma.competition.create({
      data: {
        title,
        description,
        categoryId,
        levelId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        createdBy: createdById, // ✅ FIX DI SINI
      },
    });

    return NextResponse.json({
      success: true,
      data: competition,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal membuat kompetisi" },
      { status: 500 },
    );
  }
}
