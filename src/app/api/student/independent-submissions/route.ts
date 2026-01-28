import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    if (!studentId) {
      return NextResponse.json(
        { success: false, message: "studentId wajib dikirim" },
        { status: 400 }
      );
    }

    const submissions = await prisma.independentCompetitionSubmission.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: submissions,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data pengajuan" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentId, title, description, documentUrl } = body;

    if (!studentId || !title || !documentUrl) {
      return NextResponse.json(
        { success: false, message: "Field wajib belum lengkap" },
        { status: 400 }
      );
    }

    const submission = await prisma.independentCompetitionSubmission.create({
      data: {
        studentId,
        title,
        description,
        documentUrl,
        status: "MENUNGGU",
      },
    });

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal mengajukan lomba mandiri" },
      { status: 500 }
    );
  }
}
