import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentId, competitionName, result, certificate } = body;
    const achievement = await prisma.achievement.create({
      data: {
        studentId,
        competitionName,
        result,
        certificate,
      },
    });
    return NextResponse.json({
      success: true,
      message: "berhasil mengajukan laporan prestasi",
      data: { achievement },
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "gagal mengajukan laporan prestasi coba koreksi",
    });
  }
}

