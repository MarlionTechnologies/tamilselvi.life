import { NextRequest, NextResponse } from "next/server";

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

    // Build a readable message from all fields
    const fields = Object.entries(rest)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const submission = {
      timestamp: new Date().toISOString(),
      audience,
      name,
      email,
      fields,
    };

    // Log to server console for now — can be replaced with:
    // - Email service (SendGrid, Resend, AWS SES)
    // - Database (Azure Cosmos, Supabase)
    // - Google Sheets API
    // - Webhook (Slack, Discord, Zapier)
    console.log("📩 New contact form submission:", JSON.stringify(submission, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
