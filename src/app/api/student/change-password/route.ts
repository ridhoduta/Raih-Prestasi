import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt"

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { oldPassword, newPassword, studentId } = body;

        if (!oldPassword || !newPassword || !studentId) {
            return NextResponse.json(
                { success: false, message: "Password lama dan baru harus diisi" },
                { status: 400 }
            );
        }

        // Ambil data user dari database
        const student = await prisma.student.findUnique({
            where: { id: studentId },
        });

        if (!student) {
            return NextResponse.json(
                { success: false, message: "User tidak ditemukan" },
                { status: 404 }
            );
        }

        // Verifikasi password lama
        const isPasswordValid = await bcrypt.compare(oldPassword, student.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Password lama salah" },
                { status: 400 }
            );
        }

        // Validasi aturan password (opsional di backend juga)
        if (newPassword.length < 8) {
            return NextResponse.json(
                { success: false, message: "Password baru minimal 8 karakter" },
                { status: 400 }
            );
        }

        // Hash password baru
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update password di database
        await prisma.student.update({
            where: { id: studentId },
            data: { password: hashedNewPassword },
        });

        return NextResponse.json({
            success: true,
            message: "Password berhasil diubah",
        });

    } catch (error) {
        console.error("Change password error:", error);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan pada server" },
            { status: 500 }
        );
    }
}
