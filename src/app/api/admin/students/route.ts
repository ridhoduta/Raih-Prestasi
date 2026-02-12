import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  const students = await prisma.student.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });

  return NextResponse.json({
    success: true,
    data: students,
  });
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nisn, name, kelas, angkatan } = body;

    if (!nisn || !name || !kelas || !angkatan) {
      return NextResponse.json(
        { success: false, message: "Field wajib belum lengkap" },
        { status: 400 },
      );
    }

    const student = await prisma.student.create({
      data: {
        nisn,
        name,
        kelas,
        angkatan,
      },
    });

    return NextResponse.json({
      success: true,
      data: student,
    });
  } catch (error) {
    if (error) {
      return NextResponse.json(
        { success: false, message: "NISN sudah terdaftar" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Gagal menambahkan siswa" },
      { status: 500 },
    );
  }
}
