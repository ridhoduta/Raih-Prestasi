import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

        // Process each student individually to handle duplicates gracefully
        for (const row of body) {
            try {
                const nisn = String(row["NISN"] || row["nisn"] || "").trim();
                const name = String(row["Nama"] || row["nama"] || row["Name"] || row["name"] || "").trim();
                const kelas = String(row["Kelas"] || row["kelas"] || "").trim();
                const angkatanRaw = row["Angkatan"] || row["angkatan"];

                if (!nisn || !name || !kelas || !angkatanRaw) {
                    errors.push(`Baris hilang data wajib: NISN=${nisn}, Nama=${name}`);
                    continue;
                }

                const angkatan = Number(angkatanRaw);
                if (isNaN(angkatan)) {
                    errors.push(`Siswa ${name} memiliki angkatan tidak valid: ${angkatanRaw}`);
                    continue;
                }

                // Cek jika siswa sudah ada
                const existingStudent = await prisma.student.findUnique({
                    where: { nisn }
                });

                if (existingStudent) {
                    errors.push(`Siswa dengan NISN ${nisn} sudah terdaftar, baris dilewati.`);
                    continue;
                }

                // Sesuai requirement: Password didapat dari NISN
                const hashedPassword = await bcrypt.hash(nisn, 10);

                await prisma.student.create({
                    data: {
                        nisn,
                        name,
                        kelas,
                        angkatan,
                        password: hashedPassword,
                    },
                });

                importedCount++;
            } catch (err: any) {
                errors.push(`Gagal import baris: ${err.message}`);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Berhasil mengimport ${importedCount} data siswa. ${errors.length > 0 ? 'Beberapa data gagal (lihat detail).' : ''}`,
            data: { imported: importedCount, errors: errors.length > 0 ? errors : undefined },
        });
    } catch (error) {
        console.error("Bulk import students error:", error);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan pada server saat import data" },
            { status: 500 }
        );
    }
}
