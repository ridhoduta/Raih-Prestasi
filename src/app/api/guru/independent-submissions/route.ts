import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const submissions = await prisma.independentCompetitionSubmission.findMany({
      include: {
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
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: submissions,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil daftar pengajuan lomba mandiri",
      },
      { status: 500 }
    );
  }
}
