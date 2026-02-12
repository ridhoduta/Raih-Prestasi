import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;

    const registrations = await prisma.competitionRegistration.findMany({
      where: { competitionId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        status: true,
        createdAt: true,
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil daftar pendaftar" },
      { status: 500 }
    );
  }
}
