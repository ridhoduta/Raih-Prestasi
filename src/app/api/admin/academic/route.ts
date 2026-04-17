import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Semester } from "@/generated/prisma";
import { getSession } from "@/app/service/authService";
import { CHANNELS, EVENTS, triggerPusher } from "@/lib/pusher";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || undefined;
    const yearId = searchParams.get("yearId") || undefined;
    const semester = (searchParams.get("semester") as Semester) || undefined;

    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        // Fetch only students who have achievements
        const students = await prisma.student.findMany({
            where: {
                achievements: {
                    some: {} // Only students with at least one achievement
                },
                OR: search ? [
                    { name: { contains: search, mode: 'insensitive' } },
                    { nisn: { contains: search, mode: 'insensitive' } },
                ] : undefined,
            },
            include: {
                academicScores: {
                    where: {
                        yearId: yearId,
                        semester: semester,
                    },
                },
                achievements: {
                    where: {
                        status: 'TERVERIFIKASI'
                    }
                }
            },
            orderBy: {
                name: 'asc'
            }
        });

        return NextResponse.json(students);
    } catch (error) {
        console.error("Error fetching academic data:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const body = await request.json();
        const { action, data } = body;

        if (action === "saveScores") {
            const { studentId, scores, yearId, semester } = data;

            // Upsert pattern or Delete and Create
            await prisma.academicScore.deleteMany({
                where: {
                    studentId,
                    yearId,
                    semester,
                }
            });

            const createdScores = await prisma.academicScore.createMany({
                data: scores.map((s: any) => ({
                    studentId,
                    subject: s.subject,
                    score: parseFloat(s.score),
                    yearId,
                    semester,
                }))
            });

            triggerPusher(CHANNELS.AKADEMIK, EVENTS.NILAI_CREATE, {
                studentId: studentId,
                title: "Nilai Akademik",
                isPublished: true,
            });

            return NextResponse.json({ success: true, result: createdScores });
        }

        if (action === "saveAcademicFile") {
            const { fileUrl, yearId, semester } = data;
            const result = await prisma.academicFile.create({
                data: {
                    fileUrl,
                    yearId,
                    semester,
                }
            });
            return NextResponse.json({ success: true, result });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (error) {
        console.error("Error in academic API:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}