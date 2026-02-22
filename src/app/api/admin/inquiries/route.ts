import { NextRequest, NextResponse } from "next/server";
import { listContacts } from "@/lib/cosmos";

export async function GET(req: NextRequest) {
  try {
    if (!process.env.COSMOS_CONNECTION_STRING) {
      return NextResponse.json({ items: [], total: 0 });
    }
    const { searchParams } = req.nextUrl;
    const audience = searchParams.get("audience") || undefined;
    const status = searchParams.get("status") || undefined;
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    const result = await listContacts({ audience, status, limit, offset });
    return NextResponse.json(result);
  } catch (err) {
    console.error("Inquiries list error:", err);
    return NextResponse.json(
      { error: "Failed to load inquiries" },
      { status: 500 }
    );
  }
}
