import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{
    id: string;
    registrationid: string;
  }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { id, registrationid: registrationId } = await context.params;

    const registration = await prisma.competitionRegistration.findFirst({
      where: {
        id: registrationId,
        competitionId : id,
      },
      select: {
        id: true,
        status: true,
        note: true,
        createdAt: true,
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
          },
        },
        answers: {
          orderBy: {
            field: {
              order: "asc",
            },
          },
          select: {
            value: true,
            field: {
              select: {
                id: true,
                label: true,
                fieldType: true,
                isRequired: true,
              },
            },
          },
        },
        competition :{
          select :{
            title: true
          }
        }
      },
    });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Data pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: registration,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil detail pendaftaran" },
      { status: 500 }
    );
  }
}
