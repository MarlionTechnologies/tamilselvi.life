/**
 * Sarvam AI Client — Server-side utilities
 *
 * APIs used:
 * - Chat Completions (Sarvam-M): Authorization: Bearer
 * - STT (Saaras v3): api-subscription-key
 * - TTS (Bulbul v3): api-subscription-key
 * - Translate (Mayura v1): api-subscription-key
 */

const API_KEY = process.env.SARVAM_API_KEY;
if (!API_KEY) {
  console.warn("SARVAM_API_KEY not set — AI assistant features will be unavailable");
}
const BASE_URL = "https://api.sarvam.ai";

// --- Chat Completions (Sarvam-M, FREE) ---

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  id: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export async function chat(messages: ChatMessage[]): Promise<ChatResponse> {
  if (!API_KEY) {
    throw new Error("Sarvam AI API key not configured");
  }
  const res = await fetch(`${BASE_URL}/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "sarvam-m",
      messages,
      temperature: 0.3,
      max_tokens: 800,
      stream: false,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sarvam Chat error ${res.status}: ${err}`);
  }

  return res.json();
}

// --- Speech-to-Text (Saaras v3) ---

export interface STTResponse {
  request_id: string;
  transcript: string;
  language_code: string;
  language_probability: number;
}

export async function speechToText(
  audioBuffer: Buffer,
  languageCode: string = "unknown"
): Promise<STTResponse> {
  if (!API_KEY) {
    throw new Error("Sarvam AI API key not configured");
  }
  const formData = new FormData();
  const uint8 = new Uint8Array(audioBuffer);
  formData.append(
    "file",
    new Blob([uint8], { type: "audio/webm" }),
    "audio.webm"
  );
  formData.append("model", "saaras:v3");
  formData.append("language_code", languageCode);

  const res = await fetch(`${BASE_URL}/speech-to-text`, {
    method: "POST",
    headers: {
      "api-subscription-key": API_KEY,
    },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sarvam STT error ${res.status}: ${err}`);
  }

  return res.json();
}

// --- Text-to-Speech (Bulbul v3) ---

export interface TTSResponse {
  request_id: string;
  audios: string[]; // base64-encoded audio
}

const VOICE_MAP: Record<string, string> = {
  "en-IN": "anushka",
  "ta-IN": "kavitha",
  "hi-IN": "manisha",
};

export async function textToSpeech(
  text: string,
  languageCode: string = "en-IN"
): Promise<TTSResponse> {
  if (!API_KEY) {
    throw new Error("Sarvam AI API key not configured");
  }
  const speaker = VOICE_MAP[languageCode] || "anushka";

  const res = await fetch(`${BASE_URL}/text-to-speech`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-subscription-key": API_KEY,
    },
    body: JSON.stringify({
      text,
      target_language_code: languageCode,
      model: "bulbul:v3",
      speaker,
      pace: 1.0,
      speech_sample_rate: "24000",
      output_audio_codec: "mp3",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sarvam TTS error ${res.status}: ${err}`);
  }

  return res.json();
}

// --- Translate (Mayura v1) ---

export interface TranslateResponse {
  request_id: string;
  translated_text: string;
  source_language_code: string;
}

export async function translate(
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<TranslateResponse> {
  if (!API_KEY) {
    throw new Error("Sarvam AI API key not configured");
  }
  const res = await fetch(`${BASE_URL}/translate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-subscription-key": API_KEY,
    },
    body: JSON.stringify({
      input: text,
      source_language_code: sourceLang,
      target_language_code: targetLang,
      model: "mayura:v1",
      mode: "formal",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sarvam Translate error ${res.status}: ${err}`);
  }

  return res.json();
}
