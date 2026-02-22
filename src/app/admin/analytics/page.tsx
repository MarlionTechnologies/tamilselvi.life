"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { MetricCard } from "@/components/admin/MetricCard";

interface AnalyticsData {
  totalViews: number;
  uniqueSessions: number;
  dailyCounts: { date: string; count: number }[];
  topPages: { page: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
}

const RANGES = [
  { value: "24h", label: "24h" },
  { value: "7d", label: "7d" },
  { value: "30d", label: "30d" },
  { value: "90d", label: "90d" },
];

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState("7d");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/analytics?range=${range}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [range]);

  const maxDaily = data
    ? Math.max(...data.dailyCounts.map((d) => d.count), 1)
    : 1;

  return (
    <AdminShell>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#E8DDD3",
            }}
          >
            Analytics
          </h1>

          {/* Range picker */}
          <div
            style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              overflow: "hidden",
            }}
          >
            {RANGES.map((r) => (
              <button
                key={r.value}
                onClick={() => setRange(r.value)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  background: range === r.value ? "rgba(44, 95, 110, 0.3)" : "transparent",
                  color: range === r.value ? "#E8DDD3" : "rgba(232, 221, 211, 0.4)",
                  fontSize: "0.8125rem",
                  fontWeight: range === r.value ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 200ms",
                  minHeight: "36px",
                }}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary cards */}
        {loading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[1, 2].map((i) => (
              <div key={i} className="admin-card admin-skeleton" style={{ height: "110px" }} />
            ))}
          </div>
        ) : data ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <MetricCard
              icon={<PageViewIcon />}
              value={data.totalViews}
              label="Total Page Views"
            />
            <MetricCard
              icon={<UserIcon />}
              value={data.uniqueSessions}
              label="Unique Sessions"
            />
          </div>
        ) : null}

        {/* Daily chart */}
        <div className="admin-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#E8DDD3",
              marginBottom: "1.25rem",
            }}
          >
            Daily Views
          </h2>
          {data && data.dailyCounts.length > 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "4px",
                height: "160px",
                paddingBottom: "1.5rem",
                position: "relative",
              }}
            >
              {data.dailyCounts.map((day) => {
                const pct = (day.count / maxDaily) * 100;
                return (
                  <div
                    key={day.date}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      height: "100%",
                      position: "relative",
                    }}
                    title={`${day.date}: ${day.count} views`}
                  >
                    <div
                      style={{
                        width: "100%",
                        maxWidth: "32px",
                        height: `${Math.max(pct, 2)}%`,
                        background: "linear-gradient(180deg, #3A7A8C 0%, #2C5F6E 100%)",
                        borderRadius: "4px 4px 0 0",
                        transition: "height 400ms cubic-bezier(0.22, 1, 0.36, 1)",
                        minHeight: "2px",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-1.25rem",
                        fontSize: "0.5625rem",
                        color: "rgba(232, 221, 211, 0.3)",
                        whiteSpace: "nowrap",
                        transform: "rotate(-45deg)",
                        transformOrigin: "center",
                      }}
                    >
                      {day.date.slice(5)}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.4)" }}>
              No visit data for this period
            </p>
          )}
        </div>

        {/* Two-column: Top pages + Referrers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
          className="admin-two-col"
        >
          {/* Top Pages */}
          <div className="admin-card" style={{ padding: "1.5rem" }}>
            <h2
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "#E8DDD3",
                marginBottom: "1rem",
              }}
            >
              Top Pages
            </h2>
            {data && data.topPages.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {data.topPages.slice(0, 10).map((page) => (
                  <div
                    key={page.page}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(232, 221, 211, 0.7)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "70%",
                      }}
                    >
                      {page.page || "/"}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#E8DDD3",
                      }}
                    >
                      {page.count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.4)" }}>
                No page data
              </p>
            )}
          </div>

          {/* Top Referrers */}
          <div className="admin-card" style={{ padding: "1.5rem" }}>
            <h2
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "#E8DDD3",
                marginBottom: "1rem",
              }}
            >
              Top Referrers
            </h2>
            {data && data.topReferrers.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {data.topReferrers.slice(0, 10).map((ref) => (
                  <div
                    key={ref.referrer}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(232, 221, 211, 0.7)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "70%",
                      }}
                    >
                      {ref.referrer}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#E8DDD3",
                      }}
                    >
                      {ref.count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "0.8125rem", color: "rgba(232, 221, 211, 0.4)" }}>
                No referrer data
              </p>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function PageViewIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
