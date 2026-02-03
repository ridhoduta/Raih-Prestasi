import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt"

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context:Context) {
  try {
    const {id} = await context.params; 

    // 👉 GET BY ID
    if (id) {
      const guru = await prisma.user.findFirst({
        where: {
          id,
          role: "GURU",
        },
        select: {
          id: true,
          name: true,
          email: true,
          isActive: true,
          createdAt: true,
        },
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
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch gurus" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, context: Context) {
  try {
    
    const {id} = await context.params; 

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Guru ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, email, password, isActive } = body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data : any= {
      name,
      email,
      isActive,
    };

    if (email) {
      const existing = await prisma.user.findFirst({
        where: { 
          email,
          NOT: { id } // Exclude self
        },
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

    const guru = await prisma.user.update({
      where: { id },
      data,
    });

    return NextResponse.json({
      success: true,
      message: "Guru updated",
      data: {
        id: guru.id,
        name: guru.name,
        email: guru.email,
        isActive: guru.isActive,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update guru" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE - Deactivate Guru
// =======================
export async function DELETE(_: Request, context:Context) {
  try {
    
    const {id} = await context.params; 

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Guru ID is required" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: "Guru deactivated",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete guru" },
      { status: 500 }
    );
  }
}