"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export default function SettingsPage() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
    } catch {
      setLoggingOut(false);
    }
  }

  return (
    <AdminShell>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#E8DDD3",
            marginBottom: "1.5rem",
          }}
        >
          Settings
        </h1>

        {/* App info */}
        <div className="admin-card" style={{ padding: "1.5rem", marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#E8DDD3",
              marginBottom: "1rem",
            }}
          >
            About
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <InfoRow label="App" value="DT Admin Dashboard" />
            <InfoRow label="Version" value="1.0.0" />
            <InfoRow label="Site" value="tamilselvi.life" />
            <InfoRow label="Platform" value="Next.js + Azure Cosmos DB" />
          </div>
        </div>

        {/* Quick links */}
        <div className="admin-card" style={{ padding: "1.5rem", marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#E8DDD3",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a
              href="https://tamilselvi.life"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                color: "#3A7A8C",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              View Live Site
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="https://portal.azure.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                color: "#3A7A8C",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Azure Portal
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Logout */}
        <div className="admin-card" style={{ padding: "1.5rem" }}>
          <h2
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#E8DDD3",
              marginBottom: "1rem",
            }}
          >
            Session
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(232, 221, 211, 0.5)",
              marginBottom: "1.25rem",
            }}
          >
            Your session expires after 24 hours. Sign out to clear the session immediately.
          </p>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              padding: "0.75rem 1.5rem",
              background: "rgba(196, 113, 78, 0.15)",
              border: "1px solid rgba(196, 113, 78, 0.3)",
              borderRadius: "10px",
              color: "#D4896A",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: loggingOut ? "not-allowed" : "pointer",
              transition: "all 200ms",
              minHeight: "44px",
            }}
          >
            {loggingOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </div>
    </AdminShell>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <span style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.5)" }}>{label}</span>
      <span style={{ fontSize: "0.875rem", color: "#E8DDD3" }}>{value}</span>
    </div>
  );
}
