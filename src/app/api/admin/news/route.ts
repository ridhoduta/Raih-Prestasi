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

    if (!title || !content || !createdBy) {
      return NextResponse.json(
        {
          success: false,
          message: "title, content, and createdBy are required",
        },
        { status: 400 },
      );
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        thumbnail,
        isPublished: isPublished ?? false,
        createdBy,
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


