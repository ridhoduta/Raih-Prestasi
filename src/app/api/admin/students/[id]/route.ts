import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const studentSelect = {
    id: true,
    nisn: true,
    name: true,
    kelas: true,
    angkatan: true,
    isActive: true,
};

// =======================
// GET - Student Detail
// =======================
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;

        // Rule 2: Use select
        const student = await prisma.student.findUnique({
            where: { id },
            select: studentSelect,
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
        // Rule 6: Log server errors, don't expose raw DB errors
        console.error("GET /api/admin/students/[id] error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal mengambil data siswa" },
            { status: 500 }
        );
    }
}

// =======================
// PUT - Update Student
// =======================
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

        // Rule 8: Prevent duplicate NISN when updating
        if (nisn) {
            const existing = await prisma.student.findUnique({
                where: { nisn },
                select: { id: true },
            });
            if (existing && existing.id !== id) {
                return NextResponse.json(
                    { success: false, message: "NISN sudah dipakai siswa lain" },
                    { status: 400 }
                );
            }
        }

        // Rule 2: Use select on update return
        const student = await prisma.student.update({
            where: { id },
            data: updateData,
            select: studentSelect,
        });

        return NextResponse.json({
            success: true,
            data: student,
        });
    } catch (error) {
        console.error("PUT /api/admin/students/[id] error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal mengupdate data siswa" },
            { status: 500 }
        );
    }
}

// =======================
// DELETE - Delete Student
// =======================
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;

        await prisma.student.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Siswa berhasil dihapus",
        });
    } catch (error) {
        console.error("DELETE /api/admin/students/[id] error:", error);
        return NextResponse.json(
            {
                success: false,
                message:
                    "Gagal menghapus siswa. Mungkin masih ada data terkait (seperti registrasi).",
            },
            { status: 500 }
        );
    }
}
