import { NextRequest, NextResponse } from "next/server";
import { getVisitStats } from "@/lib/cosmos";

export async function GET(req: NextRequest) {
  try {
    if (!process.env.COSMOS_CONNECTION_STRING) {
      return NextResponse.json({
        totalViews: 0,
        uniqueSessions: 0,
        dailyCounts: [],
        topPages: [],
        topReferrers: [],
      });
    }
    const { searchParams } = req.nextUrl;
    const range = searchParams.get("range") || "7d";
    const now = new Date();
    let startDate: Date;

    switch (range) {
      case "24h":
        startDate = new Date(now.getTime() - 86400000);
        break;
      case "30d":
        startDate = new Date(now.getTime() - 30 * 86400000);
        break;
      case "90d":
        startDate = new Date(now.getTime() - 90 * 86400000);
        break;
      default:
        startDate = new Date(now.getTime() - 7 * 86400000);
    }

    const stats = await getVisitStats({
      startDate: startDate.toISOString(),
      endDate: now.toISOString(),
    });
    return NextResponse.json(stats);
  } catch (err) {
    console.error("Analytics error:", err);
    return NextResponse.json(
      { error: "Failed to load analytics" },
      { status: 500 }
    );
  }
}
