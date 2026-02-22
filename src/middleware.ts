import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken, COOKIE_NAME } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // ── Subdomain routing: admin.* → /admin/* ──
  const isAdminSubdomain =
    hostname.startsWith("admin.tamilselvi.life") ||
    hostname.startsWith("admin.localhost");

  if (isAdminSubdomain) {
    // Let static assets and framework paths pass through
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.startsWith("/admin-icons") ||
      pathname === "/admin-sw.js"
    ) {
      return NextResponse.next();
    }

    // Rewrite non-admin paths to /admin/*
    if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? "/admin" : `/admin${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // ── Auth protection for /admin/* (except login + auth API) ──
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    // Public admin routes — no auth needed
    if (
      pathname === "/admin/login" ||
      pathname === "/api/admin/auth" ||
      pathname.endsWith("/manifest.json") ||
      pathname === "/admin-sw.js"
    ) {
      return NextResponse.next();
    }

    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }

    const payload = await verifyAdminToken(token);
    if (!payload) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
