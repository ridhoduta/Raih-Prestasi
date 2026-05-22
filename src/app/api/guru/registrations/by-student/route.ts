import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const where: any = {
      registrations: {
        some: {}, // Only fetch students who have at least one registration
      },
    };

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
        name: true,
        nisn: true,
        kelas: true,
        angkatan: true,
        registrations: {
          select: {
            id: true,
            status: true,
            createdAt: true,
            documentUrl: true,
            note: true,
            competition: {
              select: {
                id: true,
                title: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      data: students,
    });
  } catch (error) {
    console.error("GET /api/guru/registrations/by-student error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data pendaftaran per siswa" },
      { status: 500 }
    );
  }
}
