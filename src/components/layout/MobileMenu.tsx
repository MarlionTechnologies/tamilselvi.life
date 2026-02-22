"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { mainNav } from "@/content/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + auto-focus
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Focus close button after render
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape handler
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      />

      {/* Menu panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={handleKeyDown}
        className="absolute inset-y-0 right-0 w-full max-w-sm bg-warmth-light shadow-xl"
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-2 text-text-primary"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-2 flex-1">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-lg font-medium text-text-primary hover:bg-warmth rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-depth hover:bg-warmth/50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="pt-6 border-t border-border space-y-4">
            {/* Connect CTA */}
            <Link
              href="/connect"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 bg-heart text-white font-medium rounded-full hover:bg-heart-dark transition-colors"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
