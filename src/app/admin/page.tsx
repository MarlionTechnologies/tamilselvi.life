"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { MetricCard } from "@/components/admin/MetricCard";

interface DashboardStats {
  totalInquiries: number;
  pendingInquiries: number;
  visitsToday: number;
  visitsWeek: number;
  visitsMonth: number;
  chatSessions: number;
  inquiriesByAudience: { audience: string; count: number }[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <AdminShell>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Welcome */}
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#E8DDD3",
              marginBottom: "0.25rem",
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(232, 221, 211, 0.5)",
            }}
          >
            Here&apos;s what&apos;s happening on tamilselvi.life
          </p>
        </div>

        {/* Metric cards */}
        {loading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="admin-card admin-skeleton" style={{ height: "120px" }} />
            ))}
          </div>
        ) : stats ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <MetricCard
              icon={<InboxSvg />}
              value={stats.pendingInquiries}
              label="New Inquiries"
              delta={stats.pendingInquiries > 0 ? "Action needed" : undefined}
              deltaType="negative"
            />
            <MetricCard
              icon={<EyeSvg />}
              value={stats.visitsToday}
              label="Visits Today"
            />
            <MetricCard
              icon={<CalendarSvg />}
              value={stats.visitsWeek}
              label="This Week"
            />
            <MetricCard
              icon={<ChatSvg />}
              value={stats.chatSessions}
              label="AI Chats (30d)"
            />
          </div>
        ) : null}

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
          className="admin-two-col"
        >
          {/* Inquiry breakdown */}
          <div className="admin-card" style={{ padding: "1.25rem" }}>
            <h2
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "#E8DDD3",
                marginBottom: "1rem",
              }}
            >
              Inquiries by Pathway
            </h2>
            {stats && stats.inquiriesByAudience.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {stats.inquiriesByAudience.map((item) => {
                  const max = Math.max(...stats.inquiriesByAudience.map((a) => a.count));
                  const pct = max > 0 ? (item.count / max) * 100 : 0;
                  return (
                    <div key={item.audience}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.8125rem",
                          marginBottom: "0.375rem",
                        }}
                      >
                        <span style={{ color: "rgba(232, 221, 211, 0.7)", textTransform: "capitalize" }}>
                          {item.audience}
                        </span>
                        <span style={{ color: "#E8DDD3", fontWeight: 600 }}>{item.count}</span>
                      </div>
                      <div
                        style={{
                          height: "6px",
                          borderRadius: "3px",
                          background: "rgba(255, 255, 255, 0.06)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${pct}%`,
                            borderRadius: "3px",
                            background: "linear-gradient(90deg, #2C5F6E, #3A7A8C)",
                            transition: "width 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.4)" }}>
                No inquiry data yet
              </p>
            )}
          </div>

          {/* Quick stats summary */}
          <div className="admin-card" style={{ padding: "1.25rem" }}>
            <h2
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "#E8DDD3",
                marginBottom: "1rem",
              }}
            >
              Visitor Overview
            </h2>
            {stats ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <StatRow label="Total Inquiries" value={stats.totalInquiries} />
                <StatRow label="Visits This Month" value={stats.visitsMonth} />
                <StatRow label="Visits This Week" value={stats.visitsWeek} />
                <StatRow label="Visits Today" value={stats.visitsToday} />
              </div>
            ) : (
              <p style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.4)" }}>
                Loading...
              </p>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function StatRow({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.625rem 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <span style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.6)" }}>{label}</span>
      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#E8DDD3" }}>{value}</span>
    </div>
  );
}

function InboxSvg() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function EyeSvg() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CalendarSvg() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChatSvg() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
