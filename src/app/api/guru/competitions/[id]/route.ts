import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const competitionDetailSelect = {
  id: true,
  title: true,
  description: true,
  thumbnail: true,
  isActive: true,
  startDate: true,
  endDate: true,
  categoryId: true,
  levelId: true,
  createdBy: true,
  createdAt: true,
  category: {
    select: { id: true, name: true },
  },
  level: {
    select: { id: true, name: true },
  },
  CompetitionFormField: {
    select: {
      id: true,
      label: true,
      fieldType: true,
      isRequired: true,
      options: true,
      order: true,
      competitionId: true,
    },
    orderBy: { order: "asc" as const },
  },
};

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { id } = await context.params;

    const competition = await prisma.competition.findUnique({
      where: { id },
      select: competitionDetailSelect,
    });

    if (!competition) {
      return NextResponse.json(
        { success: false, message: "Competition not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: competition,
    });
  } catch (error) {
    console.error("GET /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch competition" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const {
      title,
      description,
      thumbnail,
      categoryId,
      levelId,
      startDate,
      endDate,
      isActive,
      formFields,
    } = body;

    const competition = await prisma.competition.update({
      where: { id },
      data: {
        title,
        description,
        thumbnail,
        categoryId,
        levelId,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        isActive,
        CompetitionFormField: {
          deleteMany: {},
          create:
            formFields?.map((f: any, idx: number) => ({
              label: f.label,
              fieldType: f.fieldType,
              isRequired: f.isRequired || false,
              options: f.options,
              order: f.order || idx,
            })) || [],
        },
      },
      select: competitionDetailSelect,
    });

    return NextResponse.json({
      success: true,
      message: "Competition updated",
      data: competition,
    });
  } catch (error) {
    console.error("PUT /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal update kompetisi" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    await prisma.competition.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Competition deleted",
    });
  } catch (error) {
    console.error("DELETE /api/guru/competitions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus kompetisi" },
      { status: 500 }
    );
  }
}
