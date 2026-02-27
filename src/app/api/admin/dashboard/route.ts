import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalGuru,
      totalSiswa,
      activeCompetitions,
      totalPrestasi,
      recentActivities // Placeholder or actual query if available
    ] = await Promise.all([
      prisma.user.count({ where: { role: "GURU" } }),
      prisma.student.count(),
      prisma.competition.count({ where: { isActive: true } }),
      prisma.achievement.count(),
      // For recent activities, simplest is maybe latest competitions or news
      prisma.competition.findMany({
        take: 3,
        orderBy: { createdAt: "desc" },
        include: { guru: { select: { name: true } } }
      })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalGuru,
        totalSiswa,
        activeCompetitions,
        totalPrestasi,
        recentActivities: (recentActivities as any[]).map((comp: any) => ({
          id: comp.id,
          title: comp.title, // Or generic message
          description: `${comp.guru.name} menambahkan kompetisi baru`,
          time: comp.createdAt
        }))
      },
    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}
