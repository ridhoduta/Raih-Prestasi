import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.competition.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        category: true,
        level: true,
        CompetitionFormField: true,
      }
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
      thumbnail,
      categoryId,
      levelId,
      startDate,
      endDate,
      createdById,
      formFields,
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
        thumbnail,
        categoryId,
        levelId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        createdBy: createdById,
        CompetitionFormField: {
          create: formFields?.map((f: any, idx: number) => ({
            label: f.label,
            fieldType: f.fieldType,
            isRequired: f.isRequired || false,
            options: f.options,
            order: f.order || idx,
          })) || [],
        }
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
