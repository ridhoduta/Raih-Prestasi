import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendNotification } from "@/app/service/pushNotif";
import { getSession } from "@/lib/auth";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

const announcementSelect = {
  id: true,
  title: true,
  content: true,
  isPublished: true,
  createdBy: true,
  createdAt: true,
  updatedAt: true,
  guru: {
    select: {
      id: true,
      name: true,
    },
  },
};



// =======================
// GET - List Announcements (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = showAll ? {} : { isPublished: true };

    if (search) {
      where.title = { contains: search, mode: "insensitive" };
    }

    const data = await prisma.announcement.findMany({
      where,
      select: announcementSelect,
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = data.length > limit;
    const results = hasMore ? data.slice(0, limit) : data;
    const nextCursor = hasMore ? results[results.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data: results,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/guru/announcement error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mendapatkan data pengumuman" },
      { status: 500 }
    );
  }
}

// =======================
// POST - Create Announcement
// =======================
export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Anda harus login terlebih dahulu" },
        { status: 401 }
      );
    }
    const body = await req.json();
    const { title, content, isPublished = true } = body;

    // Rule 7: Input validation
    if (
      typeof title !== "string" ||
      typeof content !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Format data tidak valid" },
        { status: 400 }
      );
    }

    if (title.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Judul minimal 5 karakter" },
        { status: 400 }
      );
    }

    if (content.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Konten minimal 10 karakter" },
        { status: 400 }
      );
    }

    // Rule 8: Check guru exists with select
    const guru = await prisma.user.findUnique({
      where: { id: session.id },
      select: { id: true },
    });

    if (!guru) {
      return NextResponse.json(
        { success: false, message: "Guru tidak ditemukan" },
        { status: 404 }
      );
    }

    // Rule 2: Use select on create return
    const announcement = await prisma.announcement.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        createdBy: session.id,
        isPublished,
      },
      select: announcementSelect,
    });

    // Create and send notification to all students
    const students = await prisma.student.findMany({
      where: { isActive: true },
      select: { id: true, fcmTokens: true },
    });


    const notificationPromises = students.map(async (student: any) => {
      const notification = await prisma.notification.create({
        data: {
          title: announcement.title,
          body: announcement.content,
          type: "ANNOUNCEMENT",
          data: {
            screen: "announcement_detail",
            id: announcement.id,
          },
          studentId: student.id,
        },
      });

      // Send push notification if FCM tokens exist
      if (student.fcmTokens && student.fcmTokens.length > 0) {
        await sendNotification(
          student.fcmTokens.map((t: any) => t.token),
          announcement.title,
          announcement.content
        );
      }

      return notification;
    });

    await Promise.all(notificationPromises);

    triggerPusher(CHANNELS.PRESTASI, EVENTS.PENGUMUMAN_CREATE, {
      id: announcement.id,
      title: announcement.title,
      isPublished: announcement.isPublished,
    });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil dibuat",
      data: announcement,
    });
  } catch (error) {
    console.error("POST /api/guru/announcement error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal membuat pengumuman" },
      { status: 500 }
    );
  }
}
