import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!Array.isArray(body) || body.length === 0) {
            return NextResponse.json(
                { success: false, message: "Data tidak valid atau kosong" },
                { status: 400 }
            );
        }

        let importedCount = 0;
        const errors = [];

        // Process each teacher individually to handle duplicates gracefully
        for (const row of body) {
            try {
                const name = String(row["Nama"] || row["nama"] || row["Name"] || row["name"] || "").trim();
                const email = String(row["Email"] || row["email"] || "").trim();

                if (!name || !email) {
                    errors.push(`Baris hilang data wajib: Nama=${name}, Email=${email}`);
                    continue;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email },
                });

                if (existingUser) {
                    errors.push(`Guru dengan email ${email} sudah terdaftar, baris dilewati.`);
                    continue;
                }

                // Generate a random password of 8 characters
                const defaultPassword = "guruSMKN1Boyolangu2026";
                const hashedPassword = await bcrypt.hash(defaultPassword, 10);

                await prisma.user.create({
                    data: {
                        name,
                        email,
                        password: hashedPassword,
                        role: "GURU",
                    },
                });

                importedCount++;
            } catch (err: any) {
                errors.push(`Gagal import baris: ${err.message}`);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Berhasil mengimport ${importedCount} data guru. ${errors.length > 0 ? 'Beberapa data gagal (lihat detail).' : ''}`,
            data: { imported: importedCount, errors: errors.length > 0 ? errors : undefined },
        });
    } catch (error) {
        console.error("Bulk import guru error:", error);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan pada server saat import data" },
            { status: 500 }
        );
    }
}
