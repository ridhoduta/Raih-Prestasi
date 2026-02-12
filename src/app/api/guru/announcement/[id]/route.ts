import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

/**
 * GET DETAIL ANNOUNCEMENT
 */
export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const data = await prisma.announcement.findUnique({
      where: { id },
      include: {
        guru: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Pengumuman tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mendapatkan data pengumuman" },
      { status: 500 }
    );
  }
}

/**
 * UPDATE ANNOUNCEMENT
 */
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

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
    });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui pengumuman" },
      { status: 500 }
    );
  }
}

/**
 * DELETE ANNOUNCEMENT
 */
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
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

    await prisma.announcement.delete({ where: { id } });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil dihapus",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus pengumuman" },
      { status: 500 }
    );
  }
}
