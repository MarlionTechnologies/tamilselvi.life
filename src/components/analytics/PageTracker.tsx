"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getSessionId() {
  if (typeof window === "undefined") return "server";
  let id = sessionStorage.getItem("sid");
  if (!id) {
    id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    sessionStorage.setItem("sid", id);
  }
  return id;
}

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to not block page load
    const timer = setTimeout(() => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page: pathname,
          referrer: document.referrer || undefined,
          sessionId: getSessionId(),
        }),
      }).catch(() => {
        // Silently fail — analytics should never break the site
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
