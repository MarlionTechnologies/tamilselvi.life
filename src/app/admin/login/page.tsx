"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0F1A1F 0%, #162229 50%, #0F1A1F 100%)",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Monogram */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2C5F6E 0%, #1E4350 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(44, 95, 110, 0.3)",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#E8DDD3",
                letterSpacing: "0.05em",
              }}
            >
              DT
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#E8DDD3",
            marginBottom: "0.5rem",
          }}
        >
          Admin Dashboard
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "rgba(232, 221, 211, 0.5)",
            marginBottom: "2rem",
          }}
        >
          tamilselvi.life
        </p>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "2rem",
            backdropFilter: "blur(12px)",
          }}
        >
          {error && (
            <div
              style={{
                background: "rgba(196, 113, 78, 0.12)",
                border: "1px solid rgba(196, 113, 78, 0.25)",
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                color: "#D4896A",
              }}
            >
              {error}
            </div>
          )}

          <div style={{ marginBottom: "1.25rem" }}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "rgba(232, 221, 211, 0.6)",
                marginBottom: "0.5rem",
              }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                color: "#E8DDD3",
                fontSize: "0.9375rem",
                outline: "none",
                transition: "border-color 200ms",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(44, 95, 110, 0.6)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)")
              }
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "rgba(232, 221, 211, 0.6)",
                marginBottom: "0.5rem",
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                color: "#E8DDD3",
                fontSize: "0.9375rem",
                outline: "none",
                transition: "border-color 200ms",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(44, 95, 110, 0.6)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)")
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.875rem",
              background: loading
                ? "rgba(44, 95, 110, 0.4)"
                : "linear-gradient(135deg, #2C5F6E 0%, #3A7A8C 100%)",
              border: "none",
              borderRadius: "10px",
              color: "#E8DDD3",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity 200ms",
              minHeight: "48px",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer hint */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "rgba(232, 221, 211, 0.3)",
            marginTop: "2rem",
          }}
        >
          Authorized access only
        </p>
      </div>
    </div>
  );
}
