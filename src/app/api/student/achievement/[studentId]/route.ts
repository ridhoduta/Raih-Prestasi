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
      message: "student ID required",
    }, { status: 400 });
  }

  const achievements = await prisma.achievement.findMany({
    where: { studentId },
    include: {
      guru: {
        select: {
          name: true,
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
    message: "berhasil mengambil data",
    data,
    nextCursor,
  });
}
