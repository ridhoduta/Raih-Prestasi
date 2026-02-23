import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();
    if (!session || session.role !== "GURU") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const registrations = await prisma.competitionRegistration.findMany({
      where: {
        competition: {
          createdBy: session.id,
        },
      },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
          },
        },
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
