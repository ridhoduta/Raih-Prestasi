import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET ANNOUNCEMENTS
 * Default: hanya yang published
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";

    const data = await prisma.announcement.findMany({
      where: showAll ? {} : { isPublished: true },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        guru: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mendapatkan data pengumuman",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE ANNOUNCEMENT
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      content,
      createdBy,
      isPublished = true,
    } = body;

    // 🔒 VALIDASI DASAR
    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      typeof createdBy !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Format data tidak valid",
        },
        { status: 400 }
      );
    }

    if (title.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Judul minimal 5 karakter",
        },
        { status: 400 }
      );
    }

    if (content.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Konten minimal 10 karakter",
        },
        { status: 400 }
      );
    }

    // 🔎 CEK GURU ADA ATAU TIDAK
    const guru = await prisma.user.findUnique({
      where: { id: createdBy },
      select: { id: true },
    });

    if (!guru) {
      return NextResponse.json(
        {
          success: false,
          message: "Guru tidak ditemukan",
        },
        { status: 404 }
      );
    }

    // ✅ CREATE ANNOUNCEMENT
    const announcement = await prisma.announcement.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        createdBy,
        isPublished,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Pengumuman berhasil dibuat",
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal membuat pengumuman",
      },
      { status: 500 }
    );
  }
}
