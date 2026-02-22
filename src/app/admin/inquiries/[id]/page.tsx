"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";

interface ContactDetail {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  audience: string;
  status: string;
  message: string;
  adminNotes?: string;
  timestamp: string;
  [key: string]: unknown;
}

const STATUS_OPTIONS = ["new", "read", "replied", "archived"];
const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  new: { bg: "rgba(251, 191, 36, 0.15)", text: "#FBBF24" },
  read: { bg: "rgba(96, 165, 250, 0.15)", text: "#60A5FA" },
  replied: { bg: "rgba(74, 222, 128, 0.15)", text: "#4ADE80" },
  archived: { bg: "rgba(255, 255, 255, 0.08)", text: "rgba(232, 221, 211, 0.5)" },
};

export default function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [contact, setContact] = useState<ContactDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`/api/admin/inquiries/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        setContact(data);
        setNotes(data.adminNotes || "");
        setStatus(data.status || "new");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, adminNotes: notes }),
      });
      if (res.ok) {
        const updated = await res.json();
        setContact(updated);
      }
    } catch {
      // silently fail
    }
    setSaving(false);
  }

  if (loading) {
    return (
      <AdminShell>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="admin-card admin-skeleton" style={{ height: "300px" }} />
        </div>
      </AdminShell>
    );
  }

  if (!contact) {
    return (
      <AdminShell>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", paddingTop: "4rem" }}>
          <p style={{ color: "rgba(232, 221, 211, 0.5)" }}>Inquiry not found</p>
          <button
            onClick={() => router.push("/admin/inquiries")}
            className="admin-btn-secondary"
            style={{ marginTop: "1rem" }}
          >
            Back to Inquiries
          </button>
        </div>
      </AdminShell>
    );
  }

  const colors = STATUS_COLORS[contact.status] || STATUS_COLORS.new;

  return (
    <AdminShell>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Back button */}
        <button
          onClick={() => router.push("/admin/inquiries")}
          style={{
            background: "none",
            border: "none",
            color: "rgba(232, 221, 211, 0.5)",
            fontSize: "0.8125rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            marginBottom: "1.5rem",
            padding: 0,
          }}
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Inquiries
        </button>

        {/* Header */}
        <div className="admin-card" style={{ padding: "1.5rem", marginBottom: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "#E8DDD3",
              }}
            >
              {contact.name}
            </h1>
            <span
              className="admin-badge"
              style={{ background: colors.bg, color: colors.text }}
            >
              {contact.status}
            </span>
          </div>

          {/* Details grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <DetailField label="Email" value={contact.email} isLink />
            {contact.phone && <DetailField label="Phone" value={contact.phone} />}
            {contact.organization && <DetailField label="Organization" value={contact.organization} />}
            <DetailField label="Pathway" value={contact.audience} />
            <DetailField
              label="Received"
              value={new Date(contact.timestamp).toLocaleString()}
            />
          </div>
        </div>

        {/* Message */}
        <div className="admin-card" style={{ padding: "1.5rem", marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "rgba(232, 221, 211, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.75rem",
            }}
          >
            Message
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#E8DDD3",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
            }}
          >
            {contact.message || "No message provided"}
          </p>
        </div>

        {/* Actions */}
        <div className="admin-card" style={{ padding: "1.5rem" }}>
          <h2
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "rgba(232, 221, 211, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            Actions
          </h2>

          {/* Status dropdown */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "rgba(232, 221, 211, 0.5)",
                marginBottom: "0.375rem",
              }}
            >
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="admin-input"
              style={{ width: "100%", maxWidth: "240px" }}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Admin notes */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "rgba(232, 221, 211, 0.5)",
                marginBottom: "0.375rem",
              }}
            >
              Admin Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="admin-input"
              rows={4}
              style={{ width: "100%", resize: "vertical" }}
              placeholder="Add private notes about this inquiry..."
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={handleSave}
              disabled={saving}
              className="admin-btn-primary"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <a
              href={`mailto:${contact.email}?subject=Re: Your inquiry on tamilselvi.life&body=Dear ${contact.name},%0A%0A`}
              className="admin-btn-secondary"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              Reply via Email
            </a>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function DetailField({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "rgba(232, 221, 211, 0.4)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </div>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          style={{
            fontSize: "0.9375rem",
            color: "#3A7A8C",
            textDecoration: "none",
          }}
        >
          {value}
        </a>
      ) : (
        <div
          style={{
            fontSize: "0.9375rem",
            color: "#E8DDD3",
            textTransform: "capitalize",
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
}
