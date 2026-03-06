import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
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
                const nisn = String(row["NISN"] || row["nisn"] || "").trim();
                const name = String(
                    row["Nama"] || row["nama"] || row["Name"] || row["name"] || ""
                ).trim();
                const kelas = String(row["Kelas"] || row["kelas"] || "").trim();
                const angkatanRaw = row["Angkatan"] || row["angkatan"];

                // Rule 7: Validate each row
                if (!nisn || !name || !kelas || !angkatanRaw) {
                    errors.push(`Baris hilang data wajib: NISN=${nisn}, Nama=${name}`);
                    continue;
                }

                const angkatan = Number(angkatanRaw);
                if (isNaN(angkatan)) {
                    errors.push(
                        `Siswa ${name} memiliki angkatan tidak valid: ${angkatanRaw}`
                    );
                    continue;
                }

                // Rule 8: Prevent duplicate - check before create
                const existingStudent = await prisma.student.findUnique({
                    where: { nisn },
                    select: { id: true }, // Rule 2: Only select what's needed
                });

                if (existingStudent) {
                    errors.push(
                        `Siswa dengan NISN ${nisn} sudah terdaftar, baris dilewati.`
                    );
                    continue;
                }

                const hashedPassword = await bcrypt.hash(nisn, 10);

                await prisma.student.create({
                    data: {
                        nisn,
                        name,
                        kelas,
                        angkatan,
                        password: hashedPassword,
                    },
                    select: { id: true }, // Rule 2: Minimal select since we only need success confirmation
                });

                importedCount++;
            } catch (err: any) {
                // Rule 6: Log error details but give user a generic message
                console.error("Bulk import row error:", err);
                errors.push(`Gagal import baris: ${err.message}`);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Berhasil mengimport ${importedCount} data siswa.${errors.length > 0 ? " Beberapa data gagal (lihat detail)." : ""
                }`,
            data: {
                imported: importedCount,
                errors: errors.length > 0 ? errors : undefined,
            },
        });
    } catch (error) {
        // Rule 6: Log server errors
        console.error("Bulk import students error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Terjadi kesalahan pada server saat import data",
            },
            { status: 500 }
        );
    }
}
