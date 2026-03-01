import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const isAdminPath = pathname.startsWith("/page/admin");
  const isGuruPath = pathname.startsWith("/page/guru");

  if (isAdminPath || isGuruPath) {
    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      console.log(`[Middleware] No token found for ${pathname}. Redirecting to login.`);
      const url = new URL("/page/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }

    try {
      const payload = await verifyJWT(token);
      
      if (!payload) {
         throw new Error("Invalid token or signature mismatch");
      }

      const role = payload.role;
      console.log(`[Middleware] Path: ${pathname}, User Role: ${role}`);

      // Check role access
      if (isAdminPath && role !== "ADMIN") {
        console.warn(`[Middleware] Unauthorized: Admin path accessed by ${role}`);
        return NextResponse.redirect(new URL("/page/login", request.url));
      }

      if (isGuruPath && role !== "GURU") {
        console.warn(`[Middleware] Unauthorized: Guru path accessed by ${role}`);
        return NextResponse.redirect(new URL("/page/login", request.url));
      }

      return NextResponse.next();
    } catch (error: any) {
      console.error(`[Middleware] JWT Verification Failed for ${pathname}:`, error.message);
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
