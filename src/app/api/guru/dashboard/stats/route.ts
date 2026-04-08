import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();

    if (!session || (session.role !== "GURU" && session.role !== "ADMIN")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const [totalPrestasiSiswa, activeCompetitions, pendingSubmissions, announcementsCount] = await Promise.all([
      prisma.achievement.count({ where: { status: "TERVERIFIKASI" } }),
      prisma.competition.count({ where: { isActive: true } }),
      prisma.independentCompetitionSubmission.count({ where: { status: "MENUNGGU" } }),
      prisma.announcement.count({ where: { isPublished: true } }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalPrestasiSiswa,
        activeCompetitions,
        pendingSubmissions,
        announcements: announcementsCount,
      },
    });
  } catch (error) {
    console.error("GET /api/guru/dashboard/stats error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data statistik dashboard" },
      { status: 500 }
    );
  }
}
