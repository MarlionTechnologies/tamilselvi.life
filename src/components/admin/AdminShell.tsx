"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { href: "/admin", label: "Home", icon: HomeIcon },
  { href: "/admin/inquiries", label: "Inquiries", icon: InboxIcon },
  { href: "/admin/analytics", label: "Analytics", icon: ChartIcon },
  { href: "/admin/settings", label: "Settings", icon: GearIcon },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "linear-gradient(180deg, #0F1A1F 0%, #121F26 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(15, 26, 31, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "0.75rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2C5F6E 0%, #1E4350 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                color: "#E8DDD3",
              }}
            >
              DT
            </span>
          </div>
          <span
            style={{
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "#E8DDD3",
            }}
          >
            Dashboard
          </span>
        </div>
      </header>

      {/* Desktop sidebar + content */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Sidebar — hidden on mobile, visible on lg+ */}
        <nav
          className="admin-sidebar"
          style={{
            width: "220px",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
            padding: "1.5rem 0",
            flexShrink: 0,
          }}
        >
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  width: "100%",
                  padding: "0.75rem 1.5rem",
                  background: active ? "rgba(44, 95, 110, 0.15)" : "transparent",
                  border: "none",
                  borderLeft: active ? "3px solid #3A7A8C" : "3px solid transparent",
                  color: active ? "#E8DDD3" : "rgba(232, 221, 211, 0.5)",
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 200ms",
                  textAlign: "left",
                }}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Main content */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.5rem",
            paddingBottom: "calc(4.5rem + env(safe-area-inset-bottom, 0px))",
          }}
          className="admin-main"
        >
          {children}
        </main>
      </div>

      {/* Bottom tab bar — mobile only */}
      <nav
        className="admin-bottom-tabs"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(15, 26, 31, 0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "0.5rem",
          paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
          zIndex: 40,
        }}
      >
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <button
              key={tab.href}
              onClick={() => router.push(tab.href)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                background: "none",
                border: "none",
                color: active ? "#3A7A8C" : "rgba(232, 221, 211, 0.4)",
                fontSize: "0.625rem",
                fontWeight: active ? 600 : 400,
                cursor: "pointer",
                padding: "0.25rem 0.75rem",
                minWidth: "64px",
                minHeight: "44px",
                transition: "color 200ms",
              }}
            >
              <tab.icon size={22} />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/* ─── Inline SVG Icons ─── */

function HomeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InboxIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function ChartIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function GearIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
