import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;
    const body = await req.json();

    // 🔥 VALIDASI HARUS ARRAY
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { success: false, message: "Payload harus berupa array field" },
        { status: 400 }
      );
    }

    // 🔒 VALIDASI TIAP FIELD
    for (const field of body) {
      if (!field.label || !field.fieldType || field.order === undefined) {
        return NextResponse.json(
          { success: false, message: "Ada field yang tidak lengkap" },
          { status: 400 }
        );
      }
    }

    // 🚀 BULK INSERT
    const fields = await prisma.competitionFormField.createMany({
      data: body.map((field) => ({
        competitionId,
        label: field.label,
        fieldType: field.fieldType,
        isRequired: field.isRequired ?? false,
        options: field.options ?? null,
        order: field.order,
      })),
    });

    return NextResponse.json({
      success: true,
      message: "Form fields berhasil dibuat",
      insertedCount: fields.count,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal membuat form field" },
      { status: 500 }
    );
  }
}
export async function GET(_: Request, context : Context) {
  try {
    const {id} = await context.params;
    const fields = await prisma.competitionFormField .findMany({
      where: { competitionId : id },
      orderBy: { order: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: fields,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal mengambil form field" },
      { status: 500 }
    );
  }
}
export async function PUT(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;
    const body = await req.json();

    const {
      fieldId,
      label,
      fieldType,
      isRequired,
      options,
      order,
    } = body;

    if (!fieldId) {
      return NextResponse.json(
        { success: false, message: "fieldId is required" },
        { status: 400 },
      );
    }

    // 🔒 Pastikan field milik competition ini
    const field = await prisma.competitionFormField.findFirst({
      where: {
        id: fieldId,
        competitionId,
      },
    });

    if (!field) {
      return NextResponse.json(
        { success: false, message: "Form field not found" },
        { status: 404 },
      );
    }

    const updated = await prisma.competitionFormField.update({
      where: { id: fieldId },
      data: {
        label,
        fieldType,
        isRequired,
        options,
        order,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Form field updated",
      data: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to update form field" },
      { status: 500 },
    );
  }
}
export async function DELETE(req: Request, context: Context) {
  try {
    const { id: competitionId } = await context.params;
    const body = await req.json();
    const { fieldId } = body;

    if (!fieldId) {
      return NextResponse.json(
        { success: false, message: "fieldId is required" },
        { status: 400 },
      );
    }

    // 🔒 Validasi ownership
    const field = await prisma.competitionFormField.findFirst({
      where: {
        id: fieldId,
        competitionId,
      },
    });

    if (!field) {
      return NextResponse.json(
        { success: false, message: "Form field not found" },
        { status: 404 },
      );
    }

    await prisma.competitionFormField.delete({
      where: { id: fieldId },
    });

    return NextResponse.json({
      success: true,
      message: "Form field deleted",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to delete form field" },
      { status: 500 },
    );
  }
}


