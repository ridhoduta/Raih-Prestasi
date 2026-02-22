import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const { status, rejectionNote, reviewedBy, recommendationLetter } = body;

    if (!status || !reviewedBy) {
      return NextResponse.json(
        {
          success: false,
          message: "status dan reviewedBy wajib dikirim",
        },
        { status: 400 }
      );
    }

    if (!["MENUNGGU", "DITERIMA", "DITOLAK"].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Status tidak valid",
        },
        { status: 400 }
      );
    }

    if (status === "DITOLAK" && !rejectionNote) {
      return NextResponse.json(
        {
          success: false,
          message: "Alasan penolakan wajib diisi",
        },
        { status: 400 }
      );
    }

    const submission =
      await prisma.independentCompetitionSubmission.findUnique({
        where: { id },
      });

    if (!submission) {
      return NextResponse.json(
        { success: false, message: "Pengajuan tidak ditemukan" },
        { status: 404 }
      );
    }

    const updated = await prisma.independentCompetitionSubmission.update({
      where: { id },
      data: {
        status,
        rejectionNote: status === "DITOLAK" ? rejectionNote : null,
        reviewedBy,
        recommendationLetter
      },
    });

    return NextResponse.json({
      success: true,
      message:
        status === "DITERIMA"
          ? "Pengajuan diterima"
          : status === "DITOLAK" 
          ? "Pengajuan ditolak"
          : "Pengajuan diatur ke menunggu",
      data: updated,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal memverifikasi pengajuan",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;
    const submission = await prisma.independentCompetitionSubmission.findUnique({
      where: { id },
    });

    if (!submission) {
      return NextResponse.json(
        { success: false, message: "Pengajuan tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.independentCompetitionSubmission.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Pengajuan dihapus",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus pengajuan",
      },
      { status: 500 }
    );
  }
}

export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;
    const submissions = await prisma.independentCompetitionSubmission.findMany({
      where:{id},
      include: {
        student: {
          select: {
            id: true,
            name: true,
            nisn: true,
            kelas: true,
          },
        },
        guru: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: submissions,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil daftar pengajuan lomba mandiri",
      },
      { status: 500 }
    );
  }
}
