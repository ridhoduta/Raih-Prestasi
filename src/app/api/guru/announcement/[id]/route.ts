import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

type Context = {
  params: Promise<{ id: string }>;
};

// =======================
// GET - Detail Announcement
// =======================
export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    const data = await prisma.announcement.findUnique({
      where: { id },
      select: announcementSelect,
    });

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Pengumuman tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET /api/guru/announcement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mendapatkan data pengumuman" },
      { status: 500 }
    );
  }
}

// =======================
// PUT - Update Announcement
// =======================
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { title, content, isPublished } = body;

    if (
      title === undefined &&
      content === undefined &&
      isPublished === undefined
    ) {
      return NextResponse.json(
        { success: false, message: "Tidak ada data yang diupdate" },
        { status: 400 }
      );
    }

    const exists = await prisma.announcement.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      return NextResponse.json(
        { success: false, message: "Pengumuman tidak ditemukan" },
        { status: 404 }
      );
    }

    const updated = await prisma.announcement.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(content !== undefined && { content }),
        ...(isPublished !== undefined && { isPublished }),
      },
      select: announcementSelect,
    });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error("PUT /api/guru/announcement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui pengumuman" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE - Delete Announcement
// =======================
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    const exists = await prisma.announcement.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      return NextResponse.json(
        { success: false, message: "Pengumuman tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.announcement.delete({ where: { id } });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil dihapus",
    });
  } catch (error) {
    console.error("DELETE /api/guru/announcement/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus pengumuman" },
      { status: 500 }
    );
  }
}
