import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

const guruSelect = {
  id: true,
  name: true,
  email: true,
  isActive: true,
  createdAt: true,
};

// =======================
// GET - List Guru (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = { role: "GURU", isActive: true };

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const gurus = await prisma.user.findMany({
      where,
      select: guruSelect,
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = gurus.length > limit;
    const data = hasMore ? gurus.slice(0, limit) : gurus;
    const nextCursor = hasMore ? data[data.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/admin/guru error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil daftar guru" },
      { status: 500 }
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

    // Rule 7: Input validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Nama, email, dan password wajib diisi" },
        { status: 400 }
      );
    }

    // Rule 8: Duplicate check with select
    const existing = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Email sudah digunakan" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Rule 2: Use select on create return
    const guru = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "GURU",
      },
      select: guruSelect,
    });

    return NextResponse.json({
      success: true,
      message: "Guru berhasil ditambahkan",
      data: guru,
    });
  } catch (error) {
    console.error("POST /api/admin/guru error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan guru" },
      { status: 500 }
    );
  }
}
