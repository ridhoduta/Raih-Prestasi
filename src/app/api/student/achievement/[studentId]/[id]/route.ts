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
      message: "student ID required",
    });
  }
  const data = await prisma.achievement.findMany({
    where: {studentId, id },
    include: {
      guru: {
        select: {
          name: true,
        },
      },
    },
  });
  return NextResponse.json({
    success: true,
    message: "berhasil mengmabil data",
    data: { data },
  });
}
