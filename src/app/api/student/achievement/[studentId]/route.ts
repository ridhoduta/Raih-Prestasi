import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ studentId: string }>;
};

export async function GET(req: Request, context: Context) {
  const { studentId } = await context.params;
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get("cursor");
  const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);

  if (!studentId) {
    return NextResponse.json({
      success: false,
      message: "ID siswa wajib diisi",
    }, { status: 400 });
  }

  const achievements = await prisma.achievement.findMany({
    where: { studentId },
    select: {
      id: true,
      competitionName: true,
      result: true,
      certificate: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      verifiedBy: true,
      guru: {
        select: {
          name: true,
        },
      },
      grade: {
        select: {
          id: true,
          gradeName: true,
          points: true,
        },
      },
      gradeCompetition: {
        select: {
          id: true,
          gradeCompetitionName: true,
          points: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: limit + 1,
    ...(cursor
      ? {
        cursor: { id: cursor },
        skip: 1,
      }
      : {}),
  });

  const hasMore = achievements.length > limit;
  const data = hasMore ? achievements.slice(0, limit) : achievements;
  const nextCursor = hasMore ? data[data.length - 1].id : null;

  return NextResponse.json({
    success: true,
    message: "Berhasil mengambil data",
    data,
    nextCursor,
  });
}
