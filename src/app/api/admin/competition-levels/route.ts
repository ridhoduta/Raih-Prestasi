import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =======================
// GET - List Levels
// =======================
export async function GET() {
  try {
    const levels = await prisma.competitionLevel.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: levels,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch competition levels" },
      { status: 500 },
    );
  }
}

// =======================
// POST - Create Level
// =======================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, order } = body;

    if (!name || order === undefined) {
      return NextResponse.json(
        { success: false, message: "Name and order are required" },
        { status: 400 },
      );
    }

    const level = await prisma.competitionLevel.create({
      data: {
        name,
        order,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Competition level created",
      data: level,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create competition level" },
      { status: 500 },
    );
  }
}


// =======================
// DELETE - Soft Disable
// =======================

