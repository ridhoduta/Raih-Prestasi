import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// =======================
// GET - List All Grades
// =======================
export async function GET(req: NextRequest) {
    try {
        const grades = await prisma.gradeCompetition.findMany({
            select: {
                id: true,
                gradeCompetitionName: true,
                points: true,
                createdAt: true,
                _count: {
                    select: { achievements: true }
                }
            },
            orderBy: { gradeCompetitionName: "asc" },
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
        const { gradeCompetitionName, points } = body;

        // Input validation
        if (!gradeCompetitionName || points === undefined || points === null) {
            return NextResponse.json(
                { success: false, message: "Field wajib belum lengkap (gradeCompetitionName, points)" },
                { status: 400 }
            );
        }

        // Check if gradeCompetitionName already exists
        const existingGrade = await prisma.gradeCompetition.findUnique({
            where: { gradeCompetitionName: gradeCompetitionName.toUpperCase() },
            select: { id: true },
        });

        if (existingGrade) {
            return NextResponse.json(
                { success: false, message: `Grade "${gradeCompetitionName}" sudah ada` },
                { status: 409 }
            );
        }

        const grade = await prisma.gradeCompetition.create({
            data: {
                gradeCompetitionName: gradeCompetitionName.toUpperCase(),
                points: Number(points),
            },
            select: {
                id: true,
                gradeCompetitionName: true,
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
