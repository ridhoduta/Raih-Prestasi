import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

// =======================
// GET - List Guru
// =======================
export async function GET() {
  try {
    // 👉 GET ALL
    const gurus = await prisma.user.findMany({
      where: { role: "GURU" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: gurus,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch gurus" },
      { status: 500 },
    );
  }
}

// =======================
// POST - Create Guru
// =======================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "name, email, password are required" },
        { status: 400 },
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Email already in use" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const guru = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "GURU",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Guru created",
      data: {
        id: guru.id,
        name: guru.name,
        email: guru.email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create guru" },
      { status: 500 },
    );
  }
}
