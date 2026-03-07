import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const achievementSelect = {
  id: true,
  competitionName: true,
  result: true,
  certificate: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  studentId: true,
  verifiedBy: true,
  student: {
    select: {
      name: true,
      nisn: true,
      kelas: true,
    },
  },
  guru: {
    select: {
      name: true,
    },
  },
};

// =======================
// GET - List Achievements (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = {};

    if (search) {
      where.OR = [
        { competitionName: { contains: search, mode: "insensitive" } },
        { student: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    const data = await prisma.achievement.findMany({
      where,
      select: achievementSelect,
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = data.length > limit;
    const results = hasMore ? data.slice(0, limit) : data;
    const nextCursor = hasMore ? results[results.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data: results,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/guru/achievement error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data prestasi" },
      { status: 500 }
    );
  }
}