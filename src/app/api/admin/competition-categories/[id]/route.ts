import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

// GET /api/admin/competition-categories/:id
export async function GET(_: Request,  context: Context) {
  const { id } = await context.params; // ✅ WAJIB await

  const category = await prisma.competitionCategory.findUnique({
    where: { id },
  });

  if (!category) {
    return NextResponse.json(
      { success: false, message: "Category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: category,
  });
}

// PUT /api/admin/competition-categories/:id
export async function PUT(req: Request, context: Context) {
  const { name, isActive } = await req.json();
  const { id } = await context.params; 

  const updated = await prisma.competitionCategory.update({
    where: { id },
    data: { name, isActive },
  });

  return NextResponse.json({
    success: true,
    data: updated,
  });
}

// DELETE /api/admin/competition-categories/:id
export async function DELETE(_: Request, context: Context) {
  const { id } = await context.params; 
  await prisma.competitionCategory.update({
    where: { id },
    data: { isActive: false },
  });

  return NextResponse.json({
    success: true,
    message: "Category deactivated",
  });
}
