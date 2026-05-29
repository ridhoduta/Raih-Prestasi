import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { nisn: { contains: search } },
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
        dateBirth: true,
        gender: true,
        isActive: true,
      },
      orderBy: { name: "asc" },
      take: limit + 1,
      ...(cursor
        ? {
            cursor: { id: cursor },
            skip: 1,
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
    console.error("GET /api/student error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil data siswa",
      },
      { status: 500 }
    );
  }
}