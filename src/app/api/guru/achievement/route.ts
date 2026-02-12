import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.achievement.findMany();
    return NextResponse.json({ success: true, data: { data } });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "gagal mengajukan laporan prestasi coba koreksi",
    });
  }
}