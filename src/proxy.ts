import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback_secret_keep_it_safe"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const isAdminPath = pathname.startsWith("/page/admin");
  const isGuruPath = pathname.startsWith("/page/guru");

  if (isAdminPath || isGuruPath) {
    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      const url = new URL("/page/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      const role = payload.role as string;

      // Check role access
      if (isAdminPath && role !== "ADMIN") {
        return NextResponse.redirect(new URL("/page/login", request.url));
      }

      if (isGuruPath && role !== "GURU") {
        return NextResponse.redirect(new URL("/page/login", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      const url = new URL("/page/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/page/admin/:path*",
    "/page/guru/:path*",
  ],
};
