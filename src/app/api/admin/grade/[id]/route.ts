import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const gradeSelect = {
    id: true,
    gradeName: true,
    points: true,
    createdAt: true,
    _count: {
        select: { achievements: true }
    }
};

// =======================
// GET - Grade Detail
// =======================
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;

        const grade = await prisma.grade.findUnique({
            where: { id },
            select: gradeSelect,
        });

        if (!grade) {
            return NextResponse.json(
                { success: false, message: "Grade tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: grade,
        });
    } catch (error) {
        console.error("GET /api/admin/grade/[id] error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal mengambil data grade" },
            { status: 500 }
        );
    }
}

// =======================
// PUT - Update Grade
// =======================
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        const body = await req.json();
        const { gradeName, points } = body;

        const updateData: any = {};
        if (gradeName !== undefined) updateData.gradeName = gradeName.toUpperCase();
        if (points !== undefined) updateData.points = Number(points);

        // If gradeName is being updated, check for duplicate
        if (gradeName) {
            const existingGrade = await prisma.grade.findUnique({
                where: { gradeName: gradeName.toUpperCase() },
                select: { id: true },
            });

            if (existingGrade && existingGrade.id !== id) {
                return NextResponse.json(
                    { success: false, message: `Grade "${gradeName}" sudah ada` },
                    { status: 409 }
                );
            }
        }

        const grade = await prisma.grade.update({
            where: { id },
            data: updateData,
            select: gradeSelect,
        });

        return NextResponse.json({
            success: true,
            data: grade,
        });
    } catch (error) {
        console.error("PUT /api/admin/grade/[id] error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal mengupdate grade" },
            { status: 500 }
        );
    }
}

// =======================
// DELETE - Delete Grade
// =======================
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;

        // Check if grade is being used by achievements
        const gradeInUse = await prisma.achievement.findFirst({
            where: { gradeId: id },
            select: { id: true },
        });

        if (gradeInUse) {
            return NextResponse.json(
                { success: false, message: "Grade sedang digunakan oleh achievement. Tidak dapat dihapus." },
                { status: 400 }
            );
        }

        await prisma.grade.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Grade berhasil dihapus",
        });
    } catch (error) {
        console.error("DELETE /api/admin/grade/[id] error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal menghapus grade" },
            { status: 500 }
        );
    }
}
