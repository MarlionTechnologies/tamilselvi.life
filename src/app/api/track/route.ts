import { NextRequest, NextResponse } from "next/server";
import { trackVisit } from "@/lib/cosmos";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { page, referrer, audience, sessionId } = body;

    if (!page) {
      return NextResponse.json({ error: "page is required" }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || undefined;

    if (process.env.COSMOS_CONNECTION_STRING) {
      await trackVisit({ page, referrer, userAgent, audience, sessionId });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track error:", err);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
