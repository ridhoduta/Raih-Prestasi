import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const competitionListSelect = {
  id: true,
  title: true,
  description: true,
  thumbnail: true,
  isActive: true,
  startDate: true,
  endDate: true,
  categoryId: true,
  levelId: true,
  createdBy: true,
  createdAt: true,
  category: {
    select: { id: true, name: true },
  },
  level: {
    select: { id: true, name: true },
  },
  CompetitionFormField: {
    select: {
      id: true,
      label: true,
      fieldType: true,
      isRequired: true,
      options: true,
      order: true,
      competitionId: true,
    },
  },
};

// =======================
// GET - List Competitions (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = {};

    if (search) {
      where.title = { contains: search, mode: "insensitive" };
    }

    const data = await prisma.competition.findMany({
      where,
      select: competitionListSelect,
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
    console.error("GET /api/guru/competitions error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data kompetisi" },
      { status: 500 }
    );
  }
}

// =======================
// POST - Create Competition
// =======================
export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || (session.role !== "GURU" && session.role !== "ADMIN")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Hanya Guru atau Admin yang dapat membuat kompetisi" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      title,
      description,
      thumbnail,
      categoryId,
      levelId,
      startDate,
      endDate,
      formFields,
    } = body;

    // Rule 7: Input validation
    if (!title || !categoryId || !levelId || !startDate || !endDate) {
      return NextResponse.json(
        { success: false, message: "Field wajib belum lengkap" },
        { status: 400 }
      );
    }

    // Rule 2: Use select on create return
    const competition = await prisma.competition.create({
      data: {
        title,
        description,
        thumbnail,
        categoryId,
        levelId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        createdBy: session.id,
        CompetitionFormField: {
          create:
            formFields?.map((f: any, idx: number) => ({
              label: f.label,
              fieldType: f.fieldType,
              isRequired: f.isRequired || false,
              options: f.options,
              order: f.order || idx,
            })) || [],
        },
      },
      select: competitionListSelect,
    });

    return NextResponse.json({
      success: true,
      data: competition,
    });
  } catch (error) {
    console.error("POST /api/guru/competitions error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal membuat kompetisi" },
      { status: 500 }
    );
  }
}
