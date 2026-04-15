import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.id) {
      return NextResponse.json({ success: false, message: "Anda tidak memiliki akses" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "20");
    const cursor = searchParams.get("cursor");

    const notifications = await prisma.notification.findMany({
      where: { studentId: session.id },
      take: limit + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      orderBy: { createdAt: "desc" },
    });

    let nextCursor: string | null = null;
    if (notifications.length > limit) {
      const lastItem = notifications.pop();
      nextCursor = lastItem?.id || null;
    }

    return NextResponse.json({
      success: true,
      data: notifications,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/student/notifications error:", error);
    return NextResponse.json({ success: false, message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.id) {
      return NextResponse.json({ success: false, message: "Anda tidak memiliki akses" }, { status: 401 });
    }

    const body = await req.json();
    const { id, isRead } = body;
    
    if (id) {
      // Mark specific as read
      await prisma.notification.update({
        where: { id, studentId: session.id },
        data: { isRead: isRead ?? true },
      });
    } else {
      // Mark all as read
      await prisma.notification.updateMany({
        where: { studentId: session.id },
        data: { isRead: true },
      });
    }

    return NextResponse.json({ success: true, message: "Notifikasi berhasil diperbarui" });
  } catch (error) {
    console.error("PATCH /api/student/notifications error:", error);
    return NextResponse.json({ success: false, message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
