import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();

    if (!session || session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get current date and 6 months ago
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    sixMonthsAgo.setHours(0, 0, 0, 0);

    const [
      totalGuru,
      totalSiswa,
      activeStudents,
      inactiveStudents,
      totalCompetitions,
      activeCompetitions,
      inactiveCompetitions,
      totalPrestasi,
      totalAnnouncements,
      recentActivities,
      monthlyStudents,
      monthlyAchievements,
      monthlyCompetitions,
      expiringCompetitions
    ] = await Promise.all([
      prisma.user.count({ where: { role: "GURU" } }),
      prisma.student.count(),
      prisma.student.count({ where: { isActive: true } }),
      prisma.student.count({ where: { isActive: false } }),
      prisma.competition.count(),
      prisma.competition.count({ where: { isActive: true } }),
      prisma.competition.count({ where: { isActive: false } }),
      prisma.achievement.count(),
      prisma.announcement.count(),
      prisma.competition.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { guru: { select: { name: true } } }
      }),
      // Trend Data
      prisma.student.groupBy({
        by: ['createdAt'],
        where: { createdAt: { gte: sixMonthsAgo } },
        _count: true,
      }),
      prisma.achievement.groupBy({
        by: ['createdAt'],
        where: { createdAt: { gte: sixMonthsAgo } },
        _count: true,
      }),
      prisma.competition.groupBy({
        by: ['createdAt'],
        where: { createdAt: { gte: sixMonthsAgo } },
        _count: true,
      }),
      prisma.competition.findMany({
        where: {
          endDate: {
            gte: now,
            lte: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)
          },
          isActive: true
        },
        take: 5,
        orderBy: { endDate: 'asc' }
      })
    ]);

    // Helper to format chart data
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
    const chartData = Array.from({ length: 6 }).map((_, i) => {
      const d = new Date();
      d.setMonth(now.getMonth() - (5 - i));
      const monthLabel = monthNames[d.getMonth()];
      const monthIndex = d.getMonth();
      const year = d.getFullYear();

      const studentCount = monthlyStudents.filter((s: any) => 
        new Date(s.createdAt).getMonth() === monthIndex && 
        new Date(s.createdAt).getFullYear() === year
      ).reduce((acc: number, curr: any) => acc + curr._count, 0);

      const achievementCount = monthlyAchievements.filter((s: any) => 
        new Date(s.createdAt).getMonth() === monthIndex && 
        new Date(s.createdAt).getFullYear() === year
      ).reduce((acc: number, curr: any) => acc + curr._count, 0);

      const competitionCount = monthlyCompetitions.filter((s: any) => 
        new Date(s.createdAt).getMonth() === monthIndex && 
        new Date(s.createdAt).getFullYear() === year
      ).reduce((acc: number, curr: any) => acc + curr._count, 0);

      return {
        name: monthLabel,
        siswa: studentCount,
        prestasi: achievementCount,
        kompetisi: competitionCount
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        totalGuru,
        totalSiswa,
        activeStudents,
        inactiveStudents,
        totalCompetitions,
        activeCompetitions,
        inactiveCompetitions,
        totalPrestasi,
        totalAnnouncements,
        chartData,
        recentActivities: (recentActivities as any[]).map((comp: any) => ({
          id: comp.id,
          title: comp.title,
          description: `${comp.guru.name} menambahkan kompetisi "${comp.title}"`,
          time: comp.createdAt
        })),
        expiringCompetitions: (expiringCompetitions as any[]).map((comp: any) => {
           const daysLeft = Math.ceil((new Date(comp.endDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
           return {
             id: comp.id,
             title: comp.title,
             description: comp.description || "",
             time: daysLeft === 0 ? "Berakhir hari ini" : `Berakhir dalam ${daysLeft} hari`
           };
        })
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

