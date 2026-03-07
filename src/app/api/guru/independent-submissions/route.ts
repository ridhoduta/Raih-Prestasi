import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const submissionSelect = {
  id: true,
  title: true,
  description: true,
  documentUrl: true,
  status: true,
  rejectionNote: true,
  recommendationLetter: true,
  reviewedBy: true,
  studentId: true,
  createdAt: true,
  updatedAt: true,
  student: {
    select: {
      id: true,
      name: true,
      nisn: true,
      kelas: true,
    },
  },
  guru: {
    select: {
      id: true,
      name: true,
    },
  },
};

// =======================
// GET - List Independent Submissions (Cursor Pagination + Select + Search)
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
        { title: { contains: search, mode: "insensitive" } },
        { student: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    const data = await prisma.independentCompetitionSubmission.findMany({
      where,
      select: submissionSelect,
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
    console.error("GET /api/guru/independent-submissions error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil daftar pengajuan lomba mandiri" },
      { status: 500 }
    );
  }
}
