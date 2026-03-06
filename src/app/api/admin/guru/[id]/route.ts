import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

const guruSelect = {
  id: true,
  name: true,
  email: true,
  isActive: true,
  createdAt: true,
};

type Context = {
  params: Promise<{ id: string }>;
};

// =======================
// GET - Guru Detail
// =======================
export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    // Rule 2: Use select
    const guru = await prisma.user.findFirst({
      where: { id, role: "GURU" },
      select: guruSelect,
    });

    if (!guru) {
      return NextResponse.json(
        { success: false, message: "Guru not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: guru,
    });
  } catch (error) {
    console.error("GET /api/admin/guru/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch guru" },
      { status: 500 }
    );
  }
}

// =======================
// PUT - Update Guru
// =======================
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { name, email, password, isActive } = body;

    const data: any = {};
    if (name !== undefined) data.name = name;
    if (email !== undefined) data.email = email;
    if (isActive !== undefined) data.isActive = isActive;

    // Rule 8: Duplicate email check
    if (email) {
      const existing = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id },
        },
        select: { id: true },
      });

      if (existing) {
        return NextResponse.json(
          { success: false, message: "Email already in use" },
          { status: 400 }
        );
      }
    }

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    // Rule 2: Use select on update return
    const guru = await prisma.user.update({
      where: { id },
      data,
      select: guruSelect,
    });

    return NextResponse.json({
      success: true,
      message: "Guru updated",
      data: guru,
    });
  } catch (error) {
    console.error("PUT /api/admin/guru/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update guru" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE - Deactivate Guru
// =======================
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    await prisma.user.update({
      where: { id },
      data: { isActive: false },
      select: { id: true },
    });

    return NextResponse.json({
      success: true,
      message: "Guru deactivated",
    });
  } catch (error) {
    console.error("DELETE /api/admin/guru/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete guru" },
      { status: 500 }
    );
  }
}