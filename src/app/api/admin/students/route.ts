import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// =======================
// GET - List Students (Cursor Pagination + Select)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = { isActive: true };

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { nisn: { contains: search } },
        { kelas: { contains: search, mode: "insensitive" } },
      ];
    }

    const students = await prisma.student.findMany({
      where,
      select: {
        id: true,
        nisn: true,
        name: true,
        kelas: true,
        angkatan: true,
        isActive: true,
      },
      orderBy: { name: "asc" },
      take: limit + 1, // fetch one extra to determine if there's a next page
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1, // skip the cursor itself
        }
        : {}),
    });

    const hasMore = students.length > limit;
    const data = hasMore ? students.slice(0, limit) : students;
    const nextCursor = hasMore ? data[data.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/admin/students error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data siswa" },
      { status: 500 }
    );
  }
}

// =======================
// POST - Create Student
// =======================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nisn, name, kelas, angkatan } = body;

    // Rule 7: Input validation
    if (!nisn || !name || !kelas || !angkatan) {
      return NextResponse.json(
        { success: false, message: "Field wajib belum lengkap (nisn, name, kelas, angkatan)" },
        { status: 400 }
      );
    }

    // Rule 8: Prevent duplicate before create
    const existing = await prisma.student.findUnique({
      where: { nisn },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "NISN sudah terdaftar" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(nisn, 10);

    // Rule 2: Use select on create return
    const student = await prisma.student.create({
      data: {
        nisn,
        password: hashedPassword,
        name,
        kelas,
        angkatan: Number(angkatan),
      },
      select: {
        id: true,
        nisn: true,
        name: true,
        kelas: true,
        angkatan: true,
        isActive: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.error("POST /api/admin/students error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan siswa" },
      { status: 500 }
    );
  }
}
