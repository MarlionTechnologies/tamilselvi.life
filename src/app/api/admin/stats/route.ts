import { NextResponse } from "next/server";
import { getDashboardStats } from "@/lib/cosmos";

export async function GET() {
  try {
    if (!process.env.COSMOS_CONNECTION_STRING) {
      return NextResponse.json({
        totalInquiries: 0,
        pendingInquiries: 0,
        visitsToday: 0,
        visitsWeek: 0,
        visitsMonth: 0,
        chatSessions: 0,
        inquiriesByAudience: [],
      });
    }
    const stats = await getDashboardStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("Dashboard stats error:", err);
    return NextResponse.json(
      { error: "Failed to load stats" },
      { status: 500 }
    );
  }
}
