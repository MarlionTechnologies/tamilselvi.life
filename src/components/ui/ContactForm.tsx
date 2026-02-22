"use client";

import { useState } from "react";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder: string;
  options?: string[];
  required?: boolean;
}

interface ContactFormProps {
  fields: Field[];
  audience: string;
}

export function ContactForm({ fields, audience }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-depth/10 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--depth)" strokeWidth="2" className="w-8 h-8">
            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Thank you for reaching out.
        </h3>
        <p className="text-text-secondary">
          Dr. Tamilselvi&apos;s team will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
          data[key] = value.toString();
        });

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || "Something went wrong");
          }

          setSubmitted(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
      className="space-y-5"
    >
      <input type="hidden" name="audience" value={audience} />
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {field.label}
            {field.required && <span className="text-heart ml-0.5">*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all resize-none"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
            />
          )}
        </div>
      ))}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3 bg-heart text-white text-sm font-medium rounded-full hover:bg-heart-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
