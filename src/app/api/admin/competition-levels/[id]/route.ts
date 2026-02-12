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
      { success: false, message: "Competition level not found" },
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
        { success: false, message: "Level ID is required" },
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
      message: "Competition level updated",
      data: level,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update competition level" },
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
        { success: false, message: "Level ID is required" },
        { status: 400 },
      );
    }

    await prisma.competitionLevel.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: "Competition level disabled",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete competition level" },
      { status: 500 },
    );
  }
}
