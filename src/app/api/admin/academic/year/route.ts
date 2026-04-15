import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/app/service/authService";

export async function GET(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const academicYears = await prisma.academicYear.findMany({
            orderBy: {
                year: 'desc'
            }
        });

        return NextResponse.json(academicYears);
    } catch (error) {
        console.error("Error fetching academic years:", error);
        return NextResponse.json({ error: "Failed to fetch academic years" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        // Frontend sends data: { yearId: "2023/2024" } wait, looking at service it passes yearId
        // but it is meant to represent the "year" string value as user typed "2023/2024". (It's a bit misnamed in service payload if it's yearId, but let's map it to year).
        const yearString = body.yearId || body.year;

        if (!yearString) {
            return NextResponse.json({ error: "Year is required" }, { status: 400 });
        }

        const newAcademicYear = await prisma.academicYear.create({
            data: {
                year: yearString,
            }
        });

        return NextResponse.json({ success: true, result: newAcademicYear });
    } catch (error) {
        console.error("Error creating academic year:", error);
        return NextResponse.json({ error: "Failed to create academic year" }, { status: 500 });
    }
}