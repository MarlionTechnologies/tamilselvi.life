import { NextRequest, NextResponse } from "next/server";
import { saveContact } from "@/lib/cosmos";

export async function POST(req: NextRequest) {
  try {
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
    console.log("New contact:", { audience, name, email });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
