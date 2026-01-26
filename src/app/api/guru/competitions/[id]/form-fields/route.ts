import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, context : Context) {
  try {
    const {id} = await context.params;
    const body = await req.json();

    const {
      label,
      fieldType,
      isRequired = false,
      options,
      order,
    } = body;

    if (!label || !fieldType || order === undefined) {
      return NextResponse.json(
        { success: false, message: "Field tidak lengkap" },
        { status: 400 }
      );
    }

    const field = await prisma.competitionFormField.create({
      data: {
        competitionId: id,
        label,
        fieldType,
        isRequired,
        options,
        order,
      },
    });

    return NextResponse.json({
      success: true,
      data: field,
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

