import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Semester } from "@/generated/prisma";

type Context = {
  params: Promise<{ studentId: string }>;
};

export async function GET(req: Request, context: Context) {
  const { studentId } = await context.params;
  const { searchParams } = new URL(req.url);
  const yearId = searchParams.get("yearId") || undefined;
  const semester = (searchParams.get("semester") as Semester) || undefined;

  if (!studentId) {
    return NextResponse.json(
      {
        success: false,
        message: "ID siswa wajib diisi",
      },
      { status: 400 }
    );
  }

  try {
    // Check if student exists and has at least one verified achievement
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        achievements: {
          where: { status: "TERVERIFIKASI" },
          take: 1,
        },
      },
    });

    if (!student) {
      return NextResponse.json(
        {
          success: false,
          message: "Siswa tidak ditemukan",
        },
        { status: 404 }
      );
    }



    // Build filter for scores and files
    const scoreFilter: { studentId: string; yearId?: string; semester?: Semester } = {
      studentId,
    };
    const fileFilter: { yearId?: string; semester?: Semester } = {};

    if (yearId) {
      scoreFilter.yearId = yearId;
      fileFilter.yearId = yearId;
    }
    if (semester) {
      scoreFilter.semester = semester;
      fileFilter.semester = semester;
    }

    // Fetch academic scores and files in parallel
    const [scores, files, achievement] = await Promise.all([
      prisma.academicScore.findMany({
        where: scoreFilter,
        include: {
          academicYear: true,
        },
        orderBy: [{ yearId: "desc" }, { subject: "asc" }],
      }),
      prisma.academicFile.findMany({
        where: fileFilter,
        include: {
          academicYear: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.achievement.findMany({
        where: {
          studentId,
          status: "TERVERIFIKASI",
        },
        include: {
          academicScore: {
            include: {
              academicYear: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      })
    ]);

    return NextResponse.json({
      success: true,
      message: "Berhasil mengambil data akademik",
      data: {
        scores,
        files,
        achievement,
      },
    });
  } catch (error) {
    console.error("Error fetching academic data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil data akademik",
      },
      { status: 500 }
    );
  }
}
