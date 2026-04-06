import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { token } = body;
    
    if (!token) {
      return NextResponse.json({ success: false, message: "Token is required" }, { status: 400 });
    }

    // Upsert token: if exists, it stays. If not, create.
    await prisma.fCMToken.upsert({
      where: { token },
      update: { studentId: session.id },
      create: { token, studentId: session.id },
    });

    return NextResponse.json({ success: true, message: "Token saved successfully" });
  } catch (error) {
    console.error("POST /api/student/fcm-token error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
