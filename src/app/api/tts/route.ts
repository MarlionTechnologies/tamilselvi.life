import { NextRequest, NextResponse } from "next/server";
import { textToSpeech } from "@/lib/sarvam";

export async function POST(req: NextRequest) {
  try {
    const { text, language } = (await req.json()) as {
      text: string;
      language?: string;
    };

    if (!text) {
      return NextResponse.json(
        { error: "text is required" },
        { status: 400 }
      );
    }

    // Truncate to API limit
    const truncated = text.slice(0, 2500);
    const langCode = language || "en-IN";

    const result = await textToSpeech(truncated, langCode);
    const audioBase64 = result.audios[0];

    if (!audioBase64) {
      return NextResponse.json(
        { error: "No audio generated" },
        { status: 500 }
      );
    }

    // Return audio as binary
    const audioBuffer = Buffer.from(audioBase64, "base64");
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("TTS API error:", error);
    return NextResponse.json(
      { error: "Failed to generate speech" },
      { status: 500 }
    );
  }
}
