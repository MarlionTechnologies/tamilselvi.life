"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AiPanelProps {
  open: boolean;
  onClose: () => void;
}

const LANGUAGES = [
  { code: "en-IN", label: "EN" },
  { code: "ta-IN", label: "TA" },
  { code: "hi-IN", label: "HI" },
];

export function AiPanel({ open, onClose }: AiPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en-IN");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isRecording, startRecording, stopRecording } = useAudioRecorder();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Send text message
  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || loading) return;

      const userMsg: Message = { role: "user", content: text.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMsg].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            language,
          }),
        });

        const data = await res.json();
        if (data.reply) {
          const assistantMsg: Message = {
            role: "assistant",
            content: data.reply,
          };
          setMessages((prev) => [...prev, assistantMsg]);

          // Auto-speak the response
          speakText(data.reply);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm sorry, I couldn't process that. Please try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, language, loading]
  );

  // Speak text via TTS
  const speakText = async (text: string) => {
    try {
      setSpeaking(true);
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language }),
      });

      if (!res.ok) {
        setSpeaking(false);
        return;
      }

      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => {
        setSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = () => {
        setSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.play();
    } catch {
      setSpeaking(false);
    }
  };

  // Voice input
  const handleVoice = async () => {
    if (isRecording) {
      const blob = await stopRecording();
      if (!blob) return;

      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("audio", blob, "recording.webm");
        formData.append("language", language);

        const res = await fetch("/api/stt", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.transcript) {
          sendMessage(data.transcript);
        }
      } catch {
        setLoading(false);
      }
    } else {
      startRecording();
    }
  };

  // Stop speaking
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setSpeaking(false);
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-50 sm:bg-transparent"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[85vh] sm:h-[600px] sm:max-h-[80vh] bg-warmth-light sm:rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-white/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-depth to-sky flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Ask me anything
              </p>
              <p className="text-xs text-text-muted">
                About Dr. Tamilselvi&apos;s work
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Language pills */}
            <div className="flex gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                    language === lang.code
                      ? "bg-depth text-white"
                      : "text-text-secondary hover:bg-warmth"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close assistant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-depth/10 flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--depth)" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
              </div>
              <p className="text-sm text-text-secondary mb-1">
                What brings you here today?
              </p>
              <p className="text-xs text-text-muted">
                Ask about VR therapy, the ecosystem, or how to get involved.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-depth text-white rounded-br-md"
                    : "bg-white text-text-primary shadow-sm border border-border rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-depth/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-depth/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-depth/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="px-4 py-3 border-t border-border bg-white/60 backdrop-blur-sm">
          {speaking && (
            <button
              onClick={stopSpeaking}
              className="w-full mb-2 py-1.5 text-xs text-heart font-medium bg-heart/5 rounded-lg hover:bg-heart/10 transition-colors"
            >
              Stop speaking
            </button>
          )}
          <div className="flex items-end gap-2">
            {/* Voice button */}
            <button
              onClick={handleVoice}
              disabled={loading}
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-heart text-white animate-pulse"
                  : "bg-warmth text-depth hover:bg-warmth-dark"
              }`}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                {isRecording ? (
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                ) : (
                  <>
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </>
                )}
              </svg>
            </button>

            {/* Text input */}
            <div className="flex-1 relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder={
                  isRecording
                    ? "Listening..."
                    : "Type your question..."
                }
                disabled={loading || isRecording}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-depth/20 focus:border-depth transition-all"
              />
            </div>

            {/* Send button */}
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-depth text-white flex items-center justify-center hover:bg-depth-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="m5 12 14-7-4 7 4 7-14-7zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
