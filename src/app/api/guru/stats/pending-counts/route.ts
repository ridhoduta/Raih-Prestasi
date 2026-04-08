import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [registrations, submissions, achievements] = await Promise.all([
      prisma.competitionRegistration.count({
        where: { status: "MENUNGGU" },
      }),
      prisma.independentCompetitionSubmission.count({
        where: { status: "MENUNGGU" },
      }),
      prisma.achievement.count({
        where: { status: "MENUNGGU" },
      }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        registrations,
        submissions,
        achievements,
      },
    });
  } catch (error) {
    console.error("GET /api/guru/stats/pending-counts error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data statistik" },
      { status: 500 }
    );
  }
}
