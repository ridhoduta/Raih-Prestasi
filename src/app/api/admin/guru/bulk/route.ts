import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Rule 7: Input validation
        if (!Array.isArray(body) || body.length === 0) {
            return NextResponse.json(
                { success: false, message: "Data tidak valid atau kosong" },
                { status: 400 }
            );
        }

        let importedCount = 0;
        const errors: string[] = [];

        for (const row of body) {
            try {
                const name = String(
                    row["Nama"] || row["nama"] || row["Name"] || row["name"] || ""
                ).trim();
                const email = String(row["Email"] || row["email"] || "").trim();

                // Rule 7: Validate each row
                if (!name || !email) {
                    errors.push(`Baris hilang data wajib: Nama=${name}, Email=${email}`);
                    continue;
                }

                // Rule 8: Prevent duplicate with select
                const existingUser = await prisma.user.findUnique({
                    where: { email },
                    select: { id: true },
                });

                if (existingUser) {
                    errors.push(
                        `Guru dengan email ${email} sudah terdaftar, baris dilewati.`
                    );
                    continue;
                }

                const defaultPassword = "guruSMKN1Boyolangu2026";
                const hashedPassword = await bcrypt.hash(defaultPassword, 10);

                await prisma.user.create({
                    data: {
                        name,
                        email,
                        password: hashedPassword,
                        role: "GURU",
                    },
                    select: { id: true }, // Rule 2: Minimal select
                });

                importedCount++;
            } catch (err: any) {
                console.error("Bulk import guru row error:", err);
                errors.push(`Gagal import baris: ${err.message}`);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Berhasil mengimport ${importedCount} data guru.${errors.length > 0 ? " Beberapa data gagal (lihat detail)." : ""
                }`,
            data: {
                imported: importedCount,
                errors: errors.length > 0 ? errors : undefined,
            },
        });
    } catch (error) {
        console.error("Bulk import guru error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Terjadi kesalahan pada server saat import data",
            },
            { status: 500 }
        );
    }
}
