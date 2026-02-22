"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(href);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
  <>
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{
        background: "rgba(245, 240, 235, 0.85)",
        backdropFilter: "blur(16px) saturate(1.3)",
        WebkitBackdropFilter: "blur(16px) saturate(1.3)",
        borderColor: "var(--border-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-display font-bold transition-shadow duration-300 group-hover:shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, var(--depth) 0%, var(--depth-dark) 100%)",
              }}
            >
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
          <nav className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                {...(item.children ? { "aria-haspopup": "true" as const } : {})}
                onMouseEnter={() =>
                  item.children ? handleMouseEnter(item.href) : undefined
                }
                onMouseLeave={item.children ? handleMouseLeave : undefined}
                onKeyDown={(e) => {
                  if (item.children) {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setDropdownOpen(dropdownOpen === item.href ? null : item.href);
                    } else if (e.key === "Escape") {
                      setDropdownOpen(null);
                    }
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  {...(item.children ? { "aria-expanded": dropdownOpen === item.href } : {})}
                  style={{
                    color: isActive(item.href) ? "var(--depth)" : "var(--text-light)",
                    background: isActive(item.href)
                      ? "rgba(44, 95, 110, 0.06)"
                      : "transparent",
                  }}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      aria-hidden="true"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="transition-transform duration-200"
                      style={{
                        transform:
                          dropdownOpen === item.href
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        opacity: 0.5,
                      }}
                    >
                      <path d="M3 4.5l3 3 3-3" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && dropdownOpen === item.href && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      role="menu"
                      className="min-w-[220px] py-2 rounded-xl overflow-hidden"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid var(--border-light)",
                        boxShadow:
                          "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm transition-colors duration-150"
                          style={{
                            color: isActive(child.href)
                              ? "var(--depth)"
                              : "var(--text-light)",
                            background: isActive(child.href)
                              ? "rgba(44, 95, 110, 0.05)"
                              : "transparent",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Connect CTA */}
            <Link
              href="/connect"
              className="hidden md:inline-flex px-5 py-2 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, var(--heart) 0%, var(--heart-dark) 100%)",
              }}
            >
              Connect
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </header>

    {/* Mobile Menu — outside header to avoid backdrop-filter containing block */}
    <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
  </>
  );
}
