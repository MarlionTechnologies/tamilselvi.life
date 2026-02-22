"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warmth-light/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-depth flex items-center justify-center text-white text-sm font-display font-bold">
              DT
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text-primary leading-tight">
                Dr. D. Tamilselvi
              </p>
              <p className="text-xs text-text-secondary leading-tight">
                Assistive Technology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-depth transition-colors duration-200 rounded-lg hover:bg-warmth/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + Language + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 text-xs">
              <button className="px-2 py-1 rounded-full bg-depth text-white font-medium">
                EN
              </button>
              <button className="px-2 py-1 rounded-full text-text-secondary hover:bg-warmth transition-colors">
                TA
              </button>
              <button className="px-2 py-1 rounded-full text-text-secondary hover:bg-warmth transition-colors">
                HI
              </button>
            </div>

            {/* Connect CTA */}
            <Link
              href="/connect"
              className="hidden md:inline-flex px-5 py-2 bg-heart text-white text-sm font-medium rounded-full hover:bg-heart-dark transition-colors duration-200"
            >
              Connect
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
