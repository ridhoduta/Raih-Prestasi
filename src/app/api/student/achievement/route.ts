import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

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

    triggerPusher(CHANNELS.PRESTASI, EVENTS.PRESTASI_CREATE, {
      id: achievement.id,
      studentId: achievement.studentId,
      competitionName: achievement.competitionName,
    });

    triggerPusher(CHANNELS.DASHBOARD, EVENTS.DASHBOARD_UPDATE, {
      resource: "achievement",
      action: "create",
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


