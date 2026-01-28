import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const { status, rejectionNote, reviewedBy } = body;

    if (!status || !reviewedBy) {
      return NextResponse.json(
        {
          success: false,
          message: "status dan reviewedBy wajib dikirim",
        },
        { status: 400 }
      );
    }

    if (!["DITERIMA", "DITOLAK"].includes(status)) {
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

    if (submission.status !== "MENUNGGU") {
      return NextResponse.json(
        {
          success: false,
          message: "Pengajuan sudah diverifikasi sebelumnya",
        },
        { status: 403 }
      );
    }

    const updated = await prisma.independentCompetitionSubmission.update({
      where: { id },
      data: {
        status,
        rejectionNote: status === "DITOLAK" ? rejectionNote : null,
        reviewedBy,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        status === "DITERIMA"
          ? "Pengajuan diterima"
          : "Pengajuan ditolak",
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
