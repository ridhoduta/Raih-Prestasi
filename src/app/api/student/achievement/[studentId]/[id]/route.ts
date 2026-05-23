import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ 
    studentId: string,
    id : string

}>;
};

export async function GET(_: Request, context: Context) {
  const { studentId, id } = await context.params;
  if (!studentId) {
    return NextResponse.json({
      success: false,
      message: "ID siswa wajib diisi",
    });
  }
  const data = await prisma.achievement.findFirst({
    where: { studentId, id },
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
  });

  if (!data) {
    return NextResponse.json({
      success: false,
      message: "Achievement tidak ditemukan",
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    message: "Berhasil mengambil data",
    data,
  });
}
