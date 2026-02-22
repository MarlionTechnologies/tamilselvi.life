import { NextRequest, NextResponse } from "next/server";
import { getContact, updateContact } from "@/lib/cosmos";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    if (!process.env.COSMOS_CONNECTION_STRING) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const contact = await getContact(id);
    if (!contact) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(contact);
  } catch (err) {
    console.error("Get contact error:", err);
    return NextResponse.json(
      { error: "Failed to load inquiry" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    if (!process.env.COSMOS_CONNECTION_STRING) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const body = await req.json();
    const { status, adminNotes } = body;

    const validStatuses = ["new", "read", "replied", "archived"];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const updated = await updateContact(id, { status, adminNotes });
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    console.error("Update contact error:", err);
    return NextResponse.json(
      { error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}
