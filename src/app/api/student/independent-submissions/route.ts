import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);

    if (!studentId) {
      return NextResponse.json(
        { success: false, message: "studentId wajib dikirim" },
        { status: 400 }
      );
    }

    const submissions = await prisma.independentCompetitionSubmission.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = submissions.length > limit;
    const data = hasMore ? submissions.slice(0, limit) : submissions;
    const nextCursor = hasMore ? data[data.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data,
      nextCursor,
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
