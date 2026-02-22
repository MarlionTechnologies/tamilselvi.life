import { NextRequest, NextResponse } from "next/server";
import { chat, type ChatMessage } from "@/lib/sarvam";
import { SYSTEM_PROMPT } from "@/lib/knowledge-base";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, language } = body as {
      messages: ChatMessage[];
      language?: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 }
      );
    }

    // Build system prompt with language instruction
    let systemContent = SYSTEM_PROMPT;
    if (language && language !== "en-IN") {
      const langName = language === "ta-IN" ? "Tamil" : "Hindi";
      systemContent += `\n\nIMPORTANT: The visitor is speaking ${langName}. Respond in ${langName}. You may use a few English technical terms where natural.`;
    }

    const fullMessages: ChatMessage[] = [
      { role: "system", content: systemContent },
      ...messages,
    ];

    const response = await chat(fullMessages);
    const reply = response.choices[0]?.message?.content || "";

    return NextResponse.json({
      reply,
      usage: response.usage,
    });
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from assistant" },
      { status: 500 }
    );
  }
}
