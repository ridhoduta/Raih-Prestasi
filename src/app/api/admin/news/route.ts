import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { triggerPusher, CHANNELS, EVENTS } from "@/lib/pusher";

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

// =======================
// GET - List News (Cursor Pagination + Select + Search)
// =======================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search") || "";

    const where: any = {};

    if (search) {
      where.title = { contains: search, mode: "insensitive" };
    }

    const newsList = await prisma.news.findMany({
      where,
      select: newsSelect,
      orderBy: { createdAt: "desc" },
      take: limit + 1,
      ...(cursor
        ? {
          cursor: { id: cursor },
          skip: 1,
        }
        : {}),
    });

    const hasMore = newsList.length > limit;
    const data = hasMore ? newsList.slice(0, limit) : newsList;
    const nextCursor = hasMore ? data[data.length - 1].id : null;

    return NextResponse.json({
      success: true,
      data,
      nextCursor,
    });
  } catch (error) {
    console.error("GET /api/admin/news error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil daftar berita" },
      { status: 500 }
    );
  }
}

// =======================
// POST - Create News
// =======================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, thumbnail, isPublished, createdBy } = body;

    // Rule 7: Input validation
    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Judul dan konten wajib diisi" },
        { status: 400 }
      );
    }

    let authorId = createdBy;

    // Fallback: use first admin if not provided
    if (!authorId) {
      const firstAdmin = await prisma.user.findFirst({
        where: { role: "ADMIN" },
        select: { id: true },
      });
      if (firstAdmin) {
        authorId = firstAdmin.id;
      } else {
        const firstUser = await prisma.user.findFirst({
          select: { id: true },
        });
        if (firstUser) authorId = firstUser.id;
      }
    }

    if (!authorId) {
      return NextResponse.json(
        { success: false, message: "Admin tidak ditemukan untuk mengaitkan penulis" },
        { status: 500 }
      );
    }

    // Rule 2: Use select on create return
    const news = await prisma.news.create({
      data: {
        title,
        content,
        thumbnail,
        isPublished: isPublished ?? false,
        createdBy: authorId,
      },
      select: newsSelect,
    });

    triggerPusher(CHANNELS.PRESTASI, EVENTS.BERITA_CREATE, {
      id: news.id,
      title: news.title,
    });

    return NextResponse.json({
      success: true,
      message: "Berita berhasil dibuat",
      data: news,
    });
  } catch (error) {
    // Rule 6: Log error, don't expose raw error to client
    console.error("POST /api/admin/news error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal membuat berita" },
      { status: 500 }
    );
  }
}
