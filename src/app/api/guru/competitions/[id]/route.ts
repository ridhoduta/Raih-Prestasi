import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Competition ID is required" },
        { status: 400 },
      );
    }

    const competition = await prisma.competition.findUnique({
      where: { id },
      include: {
        category: true,
        level: true,
      },
    });

    if (!competition) {
      return NextResponse.json(
        { success: false, message: "Competition not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: competition,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch competition" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request, context : Context) {
  try {
    const {id}= await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Competition ID is required" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const {
      title,
      description,
      categoryId,
      levelId,
      startDate,
      endDate,
      isActive,
    } = body;

    const competition = await prisma.competition.update({
      where: { id },
      data: {
        title,
        description,
        categoryId,
        levelId,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        isActive,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Competition updated",
      data: competition,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal update kompetisi" },
      { status: 500 },
    );
  }
}
export async function DELETE(_: Request, context : Context) {
  try {
    const {id} = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Competition ID is required" },
        { status: 400 },
      );
    }

    await prisma.competition.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: "Competition disabled",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus kompetisi" },
      { status: 500 },
    );
  }
}

