import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// =======================
// GET - List All Grades
// =======================
export async function GET(req: NextRequest) {
    try {
        const grades = await prisma.grade.findMany({
            select: {
                id: true,
                gradeName: true,
                points: true,
                createdAt: true,
                _count: {
                    select: { achievements: true }
                }
            },
            orderBy: { gradeName: "asc" },
        });

        return NextResponse.json({
            success: true,
            data: grades,
        });
    } catch (error) {
        console.error("GET /api/admin/grade error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal mengambil data grade" },
            { status: 500 }
        );
    }
}

// =======================
// POST - Create Grade
// =======================
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { gradeName, points } = body;

        // Input validation
        if (!gradeName || points === undefined || points === null) {
            return NextResponse.json(
                { success: false, message: "Field wajib belum lengkap (gradeName, points)" },
                { status: 400 }
            );
        }

        // Check if gradeName already exists
        const existingGrade = await prisma.grade.findUnique({
            where: { gradeName: gradeName.toUpperCase() },
            select: { id: true },
        });

        if (existingGrade) {
            return NextResponse.json(
                { success: false, message: `Grade "${gradeName}" sudah ada` },
                { status: 409 }
            );
        }

        const grade = await prisma.grade.create({
            data: {
                gradeName: gradeName.toUpperCase(),
                points: Number(points),
            },
            select: {
                id: true,
                gradeName: true,
                points: true,
                createdAt: true,
            },
        });

        return NextResponse.json({
            success: true,
            data: grade,
        });
    } catch (error) {
        console.error("POST /api/admin/grade error:", error);
        return NextResponse.json(
            { success: false, message: "Gagal menambahkan grade" },
            { status: 500 }
        );
    }
}
