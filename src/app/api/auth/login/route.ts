import { prisma } from "@/lib/prisma";
import { signJWT } from "@/lib/auth";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, nisn, password } = await request.json();

    if ((!email && !nisn) || !password) {
      return NextResponse.json(
        { message: "Email/NISN and password are required" },
        { status: 400 }
      );
    }

    let user = null;
    let role = null;

    if (nisn) {
      user = await prisma.student.findUnique({
        where: { nisn },
      });
      role = "STUDENT";
    } else {
      user = await prisma.user.findUnique({
        where: { email },
      });
      role = user?.role;
    }

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { message: "Account is inactive" },
        { status: 403 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await signJWT({
      id: user.id,
      email: nisn ? null : (user as any).email,
      nisn: nisn || null,
      role: role ? role : "admin",
      name: user.name,
    });

    const response = NextResponse.json(
      { 
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: nisn ? null : (user as any).email,
          nisn: nisn || null,
          role: role
        }
      },
      { status: 200 }
    );

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
