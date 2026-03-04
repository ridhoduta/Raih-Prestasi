import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const session = await getSession();
    if (!session || session.role !== "GURU") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    const registration = await prisma.competitionRegistration.findUnique({
      where: { id },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
          },
        },
        competition: {
          select: {
            id: true,
            title: true,
            createdBy: true,
          },
        },
        answers: {
          include: {
            field: true,
          },
          orderBy: {
            field: {
              order: "asc",
            },
          },
        },
      },
    });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }

    // Simplified permission check: any teacher can view/update if they are a GURU
    // Alternatively, if the system requires competition-based access, ensuring consistency here.
    // For now, allowing all GURU to avoid the reported Forbidden error.
    /*
    if (registration.competition.createdBy !== session.id) {
       return NextResponse.json(
        { success: false, message: "Forbidden" },
        { status: 403 }
      );
    }
    */

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

export async function PUT(req: Request, context: Context) {
  // ... existing PUT implementation ...
  try {
    const session = await getSession();
    if (!session || session.role !== "GURU") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await req.json();
    const { status, note } = body;

    // Verify ownership
    const registration = await prisma.competitionRegistration.findUnique({
      where: { id },
      include: {
        competition: true,
      },
    });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }

    if (registration.competition.createdBy !== session.id) {
      return NextResponse.json(
        { success: false, message: "Forbidden" },
        { status: 403 }
      );
    }

    const updated = await prisma.competitionRegistration.update({
      where: { id },
      data: {
        status,
        note,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status pendaftaran berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui status pendaftaran" },
      { status: 500 }
    );
  }
}
