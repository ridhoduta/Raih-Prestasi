import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createAndSendNotification } from "@/app/service/pushNotif";

const submissionSelect = {
  id: true,
  title: true,
  description: true,
  documentUrl: true,
  status: true,
  rejectionNote: true,
  recommendationLetter: true,
  reviewedBy: true,
  studentId: true,
  createdAt: true,
  updatedAt: true,
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
};

type Context = {
  params: Promise<{ id: string }>;
};

// =======================
// GET - Detail Submission
// =======================
export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;
    const submission = await prisma.independentCompetitionSubmission.findUnique({
      where: { id },
      select: submissionSelect,
    });

    if (!submission) {
      return NextResponse.json(
        { success: false, message: "Pengajuan tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("GET /api/guru/independent-submissions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil detail pengajuan lomba mandiri" },
      { status: 500 }
    );
  }
}

// =======================
// PUT - Review Submission
// =======================
export async function PUT(req: Request, context: Context) {
  try {
    const session = await getSession();
    if (!session || (session.role !== "GURU" && session.role !== "ADMIN")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await req.json();
    const { status, rejectionNote, recommendationLetter } = body;

    // Rule 7: Input validation
    if (!status) {
      return NextResponse.json(
        { success: false, message: "status wajib dikirim" },
        { status: 400 }
      );
    }

    if (!["MENUNGGU", "DITERIMA", "DITOLAK"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Status tidak valid" },
        { status: 400 }
      );
    }

    if (status === "DITOLAK" && !rejectionNote) {
      return NextResponse.json(
        { success: false, message: "Alasan penolakan wajib diisi" },
        { status: 400 }
      );
    }

    // Rule 2: Check existence with select
    const submission = await prisma.independentCompetitionSubmission.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!submission) {
      return NextResponse.json(
        { success: false, message: "Pengajuan tidak ditemukan" },
        { status: 404 }
      );
    }

    let finalRecommendationLetter = recommendationLetter;
    if (typeof recommendationLetter === "object" && recommendationLetter !== null && "publicUrl" in recommendationLetter) {
      finalRecommendationLetter = (recommendationLetter as any).publicUrl;
    }

    const updated = await prisma.independentCompetitionSubmission.update({
      where: { id },
      data: {
        status,
        rejectionNote: status === "DITOLAK" ? rejectionNote : null,
        reviewedBy: session.id,
        recommendationLetter: finalRecommendationLetter,
      },
      select: submissionSelect,
    });

    // Kirim Notifikasi ke Siswa
    await createAndSendNotification({
      studentId: updated.studentId,
      title: "Update Pengajuan Lomba Mandiri 📢",
      body: `Pengajuan "${updated.title}" kamu sekarang: ${updated.status}`,
      type: "SUBMISSION",
      data: {
        id: updated.id,
        screen: "submission_detail",
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
    console.error("PUT /api/guru/independent-submissions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal memverifikasi pengajuan" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE - Delete Submission
// =======================
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    const submission = await prisma.independentCompetitionSubmission.findUnique({
      where: { id },
      select: { id: true },
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
    console.error("DELETE /api/guru/independent-submissions/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus pengajuan" },
      { status: 500 }
    );
  }
}
