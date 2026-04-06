import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback_secret_keep_it_safe"
);

export type JWTPayload = {
  id: string;
  email?: string | null;
  nisn?: string | null;
  role: string | null;
  name: string;
};

export async function signJWT(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

export async function getSession() {
  // 1. Try to get token from cookies (for Web)
  const cookieStore = await cookies();
  const tokenFromCookie = cookieStore.get("auth_token")?.value;

  if (tokenFromCookie) {
    return await verifyJWT(tokenFromCookie);
  }

  // 2. Try to get token from Authorization header (for Flutter/Mobile)
  const headerList = await headers();
  const authHeader = headerList.get("authorization");
  
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const tokenFromHeader = authHeader.substring(7); // "Bearer <token>"
    return await verifyJWT(tokenFromHeader);
  }

  return null;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });
}
