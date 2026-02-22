import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
  signAdminToken,
  adminCookieOptions,
  clearAdminCookie,
} from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "anonymous";
  if (!rateLimit(`admin-login:${ip}`, { limit: 5, windowMs: 60_000 })) {
    return NextResponse.json(
      { error: "Too many login attempts. Try again in a minute." },
      { status: 429 }
    );
  }

  try {
    const { username, password } = await req.json();
    const validUsername = process.env.ADMIN_USERNAME;
    const validHash = process.env.ADMIN_PASSWORD_HASH;

    if (!validUsername || !validHash) {
      console.error("Admin credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (username !== validUsername) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await bcrypt.compare(password, validHash);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await signAdminToken(username);
    const response = NextResponse.json({ success: true });
    response.cookies.set(adminCookieOptions(token));
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(clearAdminCookie());
  return response;
}
