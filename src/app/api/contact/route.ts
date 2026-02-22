import { NextRequest, NextResponse } from "next/server";
import { saveContact } from "@/lib/cosmos";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "anonymous";
    if (!rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 })) {
      return Response.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, audience, ...rest } = body;

    if (!name || !email || !audience) {
      return NextResponse.json(
        { error: "Name, email, and audience are required" },
        { status: 400 }
      );
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Remove empty values
    const fields: Record<string, string> = {};
    for (const [k, v] of Object.entries(rest)) {
      if (v) fields[k] = String(v);
    }

    // Save to Azure Cosmos DB
    if (process.env.COSMOS_CONNECTION_STRING) {
      await saveContact({ name, email, audience, fields });
    }

    // Also log for local dev
    console.log("New contact submission received:", { audience, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
