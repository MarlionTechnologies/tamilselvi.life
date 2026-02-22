"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";

interface Contact {
  id: string;
  name: string;
  email: string;
  audience: string;
  status: string;
  message?: string;
  timestamp: string;
}

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  new: { bg: "rgba(251, 191, 36, 0.15)", text: "#FBBF24" },
  read: { bg: "rgba(96, 165, 250, 0.15)", text: "#60A5FA" },
  replied: { bg: "rgba(74, 222, 128, 0.15)", text: "#4ADE80" },
  archived: { bg: "rgba(255, 255, 255, 0.08)", text: "rgba(232, 221, 211, 0.5)" },
};

const AUDIENCES = ["all", "partner", "collaborate", "join", "support", "sponsor"];
const STATUSES = ["all", "new", "read", "replied", "archived"];

export default function InquiriesPage() {
  const router = useRouter();
  const [items, setItems] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [audience, setAudience] = useState("all");
  const [status, setStatus] = useState("all");
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const fetchInquiries = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (audience !== "all") params.set("audience", audience);
    if (status !== "all") params.set("status", status);
    params.set("limit", String(limit));
    params.set("offset", String(offset));

    fetch(`/api/admin/inquiries?${params}`)
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [audience, status, offset]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  function handleFilterChange(type: "audience" | "status", value: string) {
    setOffset(0);
    if (type === "audience") setAudience(value);
    else setStatus(value);
  }

  return (
    <AdminShell>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#E8DDD3",
            marginBottom: "1.5rem",
          }}
        >
          Inquiries
        </h1>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <select
            value={audience}
            onChange={(e) => handleFilterChange("audience", e.target.value)}
            className="admin-input"
            style={{ minWidth: "140px" }}
          >
            {AUDIENCES.map((a) => (
              <option key={a} value={a}>
                {a === "all" ? "All Pathways" : a.charAt(0).toUpperCase() + a.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="admin-input"
            style={{ minWidth: "120px" }}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.8125rem",
              color: "rgba(232, 221, 211, 0.4)",
              marginLeft: "auto",
            }}
          >
            {total} total
          </span>
        </div>

        {/* List */}
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="admin-card admin-skeleton" style={{ height: "80px" }} />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div
            className="admin-card"
            style={{
              padding: "3rem",
              textAlign: "center",
              color: "rgba(232, 221, 211, 0.4)",
              fontSize: "0.875rem",
            }}
          >
            No inquiries found
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {items.map((item) => {
              const colors = STATUS_COLORS[item.status] || STATUS_COLORS.new;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(`/admin/inquiries/${item.id}`)}
                  className="admin-card"
                  style={{
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "rgba(255, 255, 255, 0.03)",
                    transition: "background 200ms",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "#E8DDD3",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="admin-badge"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          flexShrink: 0,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(232, 221, 211, 0.5)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.email}
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(232, 221, 211, 0.4)",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.audience}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "rgba(232, 221, 211, 0.3)",
                        marginTop: "0.125rem",
                      }}
                    >
                      {new Date(item.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {total > limit && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            <button
              onClick={() => setOffset(Math.max(0, offset - limit))}
              disabled={offset === 0}
              className="admin-btn-secondary"
            >
              Previous
            </button>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.8125rem",
                color: "rgba(232, 221, 211, 0.5)",
              }}
            >
              {offset + 1}–{Math.min(offset + limit, total)} of {total}
            </span>
            <button
              onClick={() => setOffset(offset + limit)}
              disabled={offset + limit >= total}
              className="admin-btn-secondary"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
