import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Semester } from "@/generated/prisma";
import { CHANNELS, EVENTS, triggerPusher } from "@/lib/pusher";
import { getSession } from "@/lib/auth";


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
                achievements: {
                    where: {
                        status: 'TERVERIFIKASI'
                    },
                    include: {
                        academicScore: {
                            where: {
                                yearId: yearId || undefined,
                                semester: semester || undefined,
                            },
                            include: {
                                academicYear: true
                            }
                        }
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
            const { studentId, achievementId, subject, score, yearId, semester } = data;

            if (!achievementId) {
                return NextResponse.json({ error: "Achievement ID is required" }, { status: 400 });
            }

            const result = await prisma.academicScore.upsert({
                where: {
                    achievementId: achievementId
                },
                update: {
                    subject,
                    score: parseFloat(score),
                    yearId,
                    semester,
                    studentId, // Ensure it's linked correctly
                },
                create: {
                    achievementId,
                    studentId,
                    subject,
                    score: parseFloat(score),
                    yearId,
                    semester,
                }
            });

            triggerPusher(CHANNELS.AKADEMIK, EVENTS.NILAI_CREATE, {
                studentId: studentId,
                title: "Nilai Akademik Reward",
                isPublished: true,
            });

            return NextResponse.json({ success: true, result });
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