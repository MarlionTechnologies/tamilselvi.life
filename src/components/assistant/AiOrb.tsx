"use client";

import { useState } from "react";
import { AiPanel } from "./AiPanel";

export function AiOrb() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating orb button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-depth to-sky shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-breathe"
          aria-label="Open AI assistant"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="w-6 h-6 group-hover:scale-110 transition-transform"
          >
            <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-sky/40 animate-ping opacity-30" />
        </button>
      )}

      {/* Panel */}
      <AiPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
