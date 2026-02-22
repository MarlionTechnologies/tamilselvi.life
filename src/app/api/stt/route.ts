import { NextRequest, NextResponse } from "next/server";
import { speechToText } from "@/lib/sarvam";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "anonymous";
    if (!rateLimit(`stt:${ip}`, { limit: 10, windowMs: 60_000 })) {
      return Response.json({ error: "Too many requests." }, { status: 429 });
    }

    const formData = await req.formData();
    const audioFile = formData.get("audio") as File | null;
    const language = (formData.get("language") as string) || "unknown";

    if (!audioFile) {
      return NextResponse.json(
        { error: "audio file is required" },
        { status: 400 }
      );
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await speechToText(buffer, language);

    return NextResponse.json({
      transcript: result.transcript,
      language: result.language_code,
      confidence: result.language_probability,
    });
  } catch (error) {
    console.error("STT API error:", error);
    return NextResponse.json(
      { error: "Failed to transcribe audio" },
      { status: 500 }
    );
  }
}
