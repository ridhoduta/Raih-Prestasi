import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ studentId: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { studentId } = await context.params;

    const registrations = await prisma.competitionRegistration.findMany({
      where: {
        studentId: studentId,
      },
      include: {
        competition: {
          select: {
            id: true,
            title: true,
            description: true,
            thumbnail: true,
            startDate: true,
            endDate: true,
            category: true,
            level: true,
          },
        },
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
            angkatan: true,
          },
        },
        answers: {
          include: {
            field: true,
          },
          orderBy: {
            field: {
              order: "asc",
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    console.error("[GURU_STUDENT_REGISTRATIONS_GET]", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil daftar pendaftaran siswa" },
      { status: 500 }
    );
  }
}
