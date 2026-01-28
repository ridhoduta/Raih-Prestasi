import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
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

  return NextResponse.json({
    success: true,
    data: submission,
  });
}

export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

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
          message: "Pengajuan tidak dapat diubah setelah diverifikasi",
        },
        { status: 403 }
      );
    }

    const updated = await prisma.independentCompetitionSubmission.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        documentUrl: body.documentUrl,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Pengajuan berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui pengajuan" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

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
          message: "Pengajuan tidak dapat dihapus setelah diverifikasi",
        },
        { status: 403 }
      );
    }

    await prisma.independentCompetitionSubmission.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Pengajuan berhasil dihapus",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal menghapus pengajuan" },
      { status: 500 }
    );
  }
}
