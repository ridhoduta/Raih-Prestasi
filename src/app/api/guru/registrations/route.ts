import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    const registrations = await prisma.competitionRegistration.findMany({
      where: {
        ...(studentId ? { studentId } : {
          competition: {
            createdBy: session.id,
          }
        }),
      },
      include: {
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
            category: true,
            level: true,
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
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data pendaftaran" },
      { status: 500 }
    );
  }
}
