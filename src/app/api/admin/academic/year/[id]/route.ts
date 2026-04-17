import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

type Context = {
  params: Promise<{ id: string }>;
};

export async function DELETE(request: Request, context: Context) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await context.params; 

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        // Cek dan Hapus jika ID exist
        await prisma.academicYear.delete({
            where: {
                id: id,
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting academic year:", error);
        return NextResponse.json({ error: "Failed to delete academic year" }, { status: 500 });
    }
}