import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { getSession } from "@/lib/auth";

export async function PUT(req: Request) {
    try {
        const session = await getSession();

        if (!session || session.role !== "GURU") {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const { oldPassword, newPassword } = body;

        if (!oldPassword || !newPassword) {
            return NextResponse.json(
                { success: false, message: "Password lama dan baru harus diisi" },
                { status: 400 }
            );
        }

        // Ambil data user dari database
        const user = await prisma.user.findUnique({
            where: { id: session.id },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User tidak ditemukan" },
                { status: 404 }
            );
        }

        // Verifikasi password lama
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
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
        await prisma.user.update({
            where: { id: session.id },
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
