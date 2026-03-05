import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        const student = await prisma.student.findUnique({
            where: { id },
        });

        if (!student) {
            return NextResponse.json(
                { success: false, message: "Siswa tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: student,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Gagal mengambil data siswa" },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        const body = await req.json();
        const { nisn, name, kelas, angkatan, isActive } = body;

        const updateData: any = {};
        if (nisn !== undefined) updateData.nisn = nisn;
        if (name !== undefined) updateData.name = name;
        if (kelas !== undefined) updateData.kelas = kelas;
        if (angkatan !== undefined) updateData.angkatan = Number(angkatan);
        if (isActive !== undefined) updateData.isActive = isActive;

        // Check if NISN is being used by someone else
        if (nisn) {
            const existing = await prisma.student.findUnique({
                where: { nisn },
            });
            if (existing && existing.id !== id) {
                return NextResponse.json(
                    { success: false, message: "NISN sudah dipakai siswa lain" },
                    { status: 400 }
                );
            }
        }

        const student = await prisma.student.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json({
            success: true,
            data: student,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Gagal mengupdate data siswa" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;

        // Instead of hard delete, maybe just set isActive to false?
        // Let's stick to true deletion based on how getStudents is mapped 
        // Or if there are relations, it might fail. Let's just hard delete for now and handle constraints if needed
        await prisma.student.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Siswa berhasil dihapus",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Gagal menghapus siswa. Mungkin masih ada data terkait (seperti registrasi)." },
            { status: 500 }
        );
    }
}
