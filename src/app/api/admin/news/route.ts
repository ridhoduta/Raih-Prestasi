import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =======================
// GET - List News
// =======================
export async function GET() {
  try {
    const newsList = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: newsList,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch news" },
      { status: 500 },
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

    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "title and content are required",
        },
        { status: 400 },
      );
    }

    let authorId = createdBy;

    // Fallback: use first admin if not provided
    if (!authorId) {
      const firstAdmin = await prisma.user.findFirst({
        where: { role: "ADMIN" },
      });
      if (firstAdmin) {
        authorId = firstAdmin.id;
      } else {
        // Fallback: use first user (e.g. Guru) if no admin exists (dev only)
        const firstUser = await prisma.user.findFirst();
        if (firstUser) authorId = firstUser.id;
      }
    }

    if (!authorId) {
       return NextResponse.json(
        { success: false, message: "No user found to assign as author" },
        { status: 500 },
      );
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        thumbnail,
        isPublished: isPublished ?? false,
        createdBy: authorId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "News created",
      data: news,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 },
    );
  }
}


