import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (id) {
      const news = await prisma.news.findUnique({
        where: { id },
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

      if (!news) {
        return NextResponse.json(
          { success: false, message: "News not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({
        success: true,
        data: news,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
// =======================
// PUT - Update News
// =======================
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "News ID is required" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const { title, content, thumbnail, isPublished } = body;

    const news = await prisma.news.update({
      where: { id },
      data: {
        title,
        content,
        thumbnail,
        isPublished,
      },
    });

    return NextResponse.json({
      success: true,
      message: "News updated",
      data: news,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update news" },
      { status: 500 },
    );
  }
}

// =======================
// DELETE - Delete News
// =======================
export async function DELETE(_: Request, context: Context) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "News ID is required" },
        { status: 400 },
      );
    }

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "News deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete news" },
      { status: 500 },
    );
  }
}
