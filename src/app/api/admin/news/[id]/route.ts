import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const newsSelect = {
  id: true,
  title: true,
  content: true,
  thumbnail: true,
  isPublished: true,
  createdAt: true,
  admin: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
};

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    const news = await prisma.news.findUnique({
      where: { id },
      select: newsSelect,
    });

    if (!news) {
      return NextResponse.json(
        { success: false, message: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("GET /api/admin/news/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data berita" },
      { status: 500 }
    );
  }
}

// =======================
// PUT - Update News
// =======================
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { title, content, thumbnail, isPublished } = body;

    const news = await prisma.news.update({
      where: { id },
      data: { title, content, thumbnail, isPublished },
      select: newsSelect,
    });

    return NextResponse.json({
      success: true,
      message: "Berita berhasil diperbarui",
      data: news,
    });
  } catch (error) {
    console.error("PUT /api/admin/news/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui berita" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE - Delete News
// =======================
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Berita berhasil dihapus",
    });
  } catch (error) {
    console.error("DELETE /api/admin/news/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal menghapus berita" },
      { status: 500 }
    );
  }
}
