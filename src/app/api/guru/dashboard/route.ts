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

    const now = new Date();
    const next14Days = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

    const [
      totalPrestasiSiswa,
      activeCompetitions,
      pendingSubmissions,
      pendingAchievements,
      pendingRegistrations,
      announcementsCount,
      expiringCompetitions,
      recentActivities,
      announcementsList
    ] = await Promise.all([
      prisma.achievement.count({ where: { status: "TERVERIFIKASI" } }),
      prisma.competition.count({ where: { isActive: true } }),
      prisma.independentCompetitionSubmission.count({ where: { status: "MENUNGGU" } }),
      prisma.achievement.count({ where: { status: "MENUNGGU" } }),
      prisma.competitionRegistration.count({ where: { status: "MENUNGGU" } }),
      prisma.announcement.count({ where: { isPublished: true } }),
      prisma.competition.findMany({
        where: {
          endDate: {
            gte: now,
            lte: next14Days
          },
          isActive: true
        },
        take: 5,
        orderBy: { endDate: 'asc' }
      }),
      // Unified Activities Aggregation
      Promise.all([
        prisma.competition.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { guru: { select: { name: true } } }
        }),
        prisma.competitionRegistration.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { student: { select: { name: true } }, competition: { select: { title: true } } }
        }),
        prisma.achievement.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { student: { select: { name: true } } }
        }),
        prisma.independentCompetitionSubmission.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { student: { select: { name: true } } }
        })
      ]).then(([comps, regs, achs, subs]) => {
        const activities = [
          ...comps.map((c: any) => ({
            id: c.id,
            type: "COMPETITION",
            description: `${c.guru.name} menambahkan kompetisi "${c.title}"`,
            createdAt: c.createdAt
          })),
          ...regs.map((r: any) => ({
            id: r.id,
            type: "REGISTRATION",
            description: `${r.student.name} mendaftar ke "${r.competition.title}"`,
            createdAt: r.createdAt
          })),
          ...achs.map((a: any) => ({
            id: a.id,
            type: "ACHIEVEMENT",
            description: `${a.student.name} mengklaim prestasi "${a.competitionName}"`,
            createdAt: a.createdAt
          })),
          ...subs.map((s: any) => ({
            id: s.id,
            type: "SUBMISSION",
            description: `${s.student.name} mengajukan "${s.title}"`,
            createdAt: s.createdAt
          }))
        ];
        return activities.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
      }),
      prisma.announcement.findMany({
        where: { isPublished: true },
        take: 3,
        orderBy: { createdAt: "desc" },
        select: { id: true, title: true, createdAt: true }
      })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalPrestasiSiswa,
        activeCompetitions,
        pendingSubmissions,
        pendingAchievements,
        pendingRegistrations,
        announcements: announcementsCount,
        expiringCompetitions: expiringCompetitions.map((comp: any) => {
          const daysLeft = Math.ceil((new Date(comp.endDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
          return {
            id: comp.id,
            title: comp.title,
            description: comp.description || "",
            time: daysLeft === 0 ? "Berakhir hari ini" : `Berakhir dalam ${daysLeft} hari`
          };
        }),
        recentActivities: (recentActivities as any[]).map((act: any) => ({
          id: act.id,
          title: act.type,
          description: act.description,
          time: act.createdAt
        })),
        announcementsList: (announcementsList as any[]).map((ann: any) => ({
          id: ann.id,
          title: ann.title,
          date: ann.createdAt
        })),
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
