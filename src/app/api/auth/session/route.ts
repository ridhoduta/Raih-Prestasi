import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Anda tidak memiliki akses" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error("Session fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}
