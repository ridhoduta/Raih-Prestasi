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
      message: "Berhasil mengajukan laporan prestasi",
      data: { achievement },
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Gagal mengajukan laporan prestasi, periksa kembali data Anda",
    });
  }
}

