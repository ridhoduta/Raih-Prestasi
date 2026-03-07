import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const registrationSelect = {
  id: true,
  status: true,
  note: true,
  createdAt: true,
  updatedAt: true,
  studentId: true,
  competitionId: true,
  student: {
    select: {
      id: true,
      name: true,
      nisn: true,
      kelas: true,
      angkatan: true,
    },
  },
  competition: {
    select: {
      id: true,
      title: true,
      description: true,
      thumbnail: true,
      startDate: true,
      endDate: true,
      category: {
        select: { id: true, name: true },
      },
      level: {
        select: { id: true, name: true },
      },
    },
  },
  answers: {
    select: {
      id: true,
      value: true,
      fieldId: true,
      field: {
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
    },
    orderBy: {
      field: {
        order: "asc" as const,
      },
    },
  },
};

// =======================
// GET - List Registrations (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = {};
    if (studentId) where.studentId = studentId;

    if (search) {
      where.OR = [
        { student: { name: { contains: search, mode: "insensitive" } } },
        { competition: { title: { contains: search, mode: "insensitive" } } },
      ];
    }

    const registrations = await prisma.competitionRegistration.findMany({
      where,
      select: registrationSelect,
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = registrations.length > limit;
    const data = hasMore ? registrations.slice(0, limit) : registrations;
    const nextCursor = hasMore ? data[data.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/guru/registrations error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data pendaftaran" },
      { status: 500 }
    );
  }
}
