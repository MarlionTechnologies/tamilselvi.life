import { NextRequest, NextResponse } from "next/server";
import { chat, type ChatMessage } from "@/lib/sarvam";
import { SYSTEM_PROMPT } from "@/lib/knowledge-base";
import { saveChat } from "@/lib/cosmos";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "anonymous";
    if (!rateLimit(`assistant:${ip}`, { limit: 15, windowMs: 60_000 })) {
      return Response.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

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

    // Cap conversation length
    const recentMessages = Array.isArray(messages) ? messages.slice(-20) : [];

    // Build system prompt with language instruction
    let systemContent = SYSTEM_PROMPT;
    if (language && language !== "en-IN") {
      const langName = language === "ta-IN" ? "Tamil" : "Hindi";
      systemContent += `\n\nIMPORTANT: The visitor is speaking ${langName}. Respond in ${langName}. You may use a few English technical terms where natural.`;
    }

    const fullMessages: ChatMessage[] = [
      { role: "system", content: systemContent },
      ...recentMessages,
    ];

    const response = await chat(fullMessages);
    const reply = response.choices[0]?.message?.content || "";

    // Log conversation to Cosmos DB (non-blocking)
    if (process.env.COSMOS_CONNECTION_STRING) {
      const lastUserMsg = recentMessages.filter((m: ChatMessage) => m.role === "user").pop();
      saveChat({
        sessionId: body.sessionId || "anonymous",
        language: language || "en-IN",
        userMessage: lastUserMsg?.content || "",
        assistantReply: reply,
      }).catch((err) => console.error("Chat log error:", err));
    }

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
