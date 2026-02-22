"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { products } from "@/content/products";
import { sponsorTiers } from "@/content/sponsor-tiers";
import { sponsors } from "@/content/sponsors";

/* ------------------------------------------------------------------ */
/*  Tier Icons                                                         */
/* ------------------------------------------------------------------ */

function TierIcon({ icon, color }: { icon: string; color: string }) {
  const style = { color: `var(${color})` };
  const cls = "w-6 h-6";

  switch (icon) {
    case "spark":
      return (
        <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l6-8v4h4l-6 8z" />
        </svg>
      );
    case "lamp":
      return (
        <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
        </svg>
      );
    case "bridge":
      return (
        <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 21h2v-2h6v2h2v-2h1a2 2 0 002-2v-1c0-2.97-2.16-5.43-5-5.91V9h3V7H6v2h3v1.09C6.16 10.57 4 13.03 4 16v1a2 2 0 002 2h1v2zm-1-5c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v1H6v-1zM22 3H2v2h20V3z" />
        </svg>
      );
    case "beacon":
      return (
        <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 3.8l4.3 12.07L12 15.89l-4.3 1.98L12 5.8z" />
        </svg>
      );
    case "constellation":
      return (
        <svg className={cls} style={style} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Main Client Component                                              */
/* ------------------------------------------------------------------ */

export function SponsorPageClient({
  initialProduct,
}: {
  initialProduct?: string;
}) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /* Pre-select product from search params */
  useEffect(() => {
    if (initialProduct) {
      const valid = products.find((p) => p.slug === initialProduct);
      if (valid) {
        setSelectedProducts([initialProduct]);
      }
    }
  }, [initialProduct]);

  /* Tier selection — scroll to form */
  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setTimeout(() => {
      document
        .getElementById("sponsor-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  /* Product toggle */
  const toggleProduct = (slug: string) => {
    setSelectedProducts((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  /* Form submit */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    /* Attach tier & products */
    data.audience = "sponsor";
    data.tier = selectedTier || "";
    data.products = selectedProducts.join(", ");

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

      setFormState("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
      setFormState("error");
    }
  };

  /* Helpers */
  const selectedTierData = sponsorTiers.find((t) => t.id === selectedTier);
  const hasSponsors = sponsors.length > 0;

  return (
    <main>
      {/* ============================================================ */}
      {/* Section A: Hero                                               */}
      {/* ============================================================ */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-heart uppercase tracking-wider mb-4">
              Sponsor a Product
            </p>
            <h1 className="text-text-primary mb-6">
              You&apos;re not just funding technology.
              <br />
              You&apos;re giving someone a way in.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Every product in our ecosystem was born from a decade of working
              with children, the elderly, and persons with disabilities. Your
              sponsorship doesn&apos;t just fund research — it accelerates the
              day someone gets access to technology that understands them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section B: How It Works                                       */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-text-primary mb-12">How It Works</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Choose",
                description:
                  "Pick a sponsorship tier and the product that speaks to you.",
              },
              {
                step: 2,
                title: "Connect",
                description:
                  "Fill in your details. We\u2019ll schedule a conversation with Dr.\u00a0Tamilselvi\u2019s team.",
              },
              {
                step: 3,
                title: "Contribute",
                description:
                  "Meet with us, see the work firsthand, and contribute in the way that feels right.",
              },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={item.step * 150}>
                <div className="text-center">
                  <div className="bg-heart text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section C: Tier Cards                                         */}
      {/* ============================================================ */}
      <section id="tiers" className="py-16 sm:py-20 bg-warmth-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-text-primary mb-10">
              Choose Your Tier
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {sponsorTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 100}>
                <div
                  onClick={() => handleTierSelect(tier.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleTierSelect(tier.id);
                    }
                  }}
                  className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 cursor-pointer ${
                    selectedTier === tier.id
                      ? "border-heart shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                      : "border-transparent shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 right-6 px-3 py-1 bg-heart text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `color-mix(in srgb, var(${tier.color}) 15%, #F5F0EB)`,
                      }}
                    >
                      <TierIcon icon={tier.icon} color={tier.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3 mb-1">
                        <h3 className="text-lg font-display font-semibold text-text-primary">
                          {tier.name}
                        </h3>
                        <span className="text-sm font-medium text-text-muted">
                          {tier.range}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary italic mb-4">
                        {tier.tagline}
                      </p>
                      <ul className="space-y-2">
                        {tier.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0 text-heart"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Selection indicator */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                        selectedTier === tier.id
                          ? "border-heart bg-heart"
                          : "border-border"
                      }`}
                    >
                      {selectedTier === tier.id && (
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section D: Product Selection                                  */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-text-primary mb-3">
                Which product inspires you?
              </h2>
              <p className="text-text-secondary">
                Select one or more products to sponsor — or support the general
                fund.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* General Fund card */}
              <div
                onClick={() => toggleProduct("general-fund")}
                role="checkbox"
                aria-checked={selectedProducts.includes("general-fund")}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleProduct("general-fund");
                  }
                }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedProducts.includes("general-fund")
                    ? "border-current shadow-md"
                    : "border-transparent bg-warmth-light hover:bg-warmth"
                }`}
                style={{
                  color: selectedProducts.includes("general-fund")
                    ? "var(--heart)"
                    : undefined,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "var(--heart)" }}
                  />
                  <p className="text-sm font-semibold text-text-primary">
                    General Fund
                  </p>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Support wherever it&apos;s needed most
                </p>
              </div>

              {/* Product cards */}
              {products.map((product) => (
                <div
                  key={product.slug}
                  onClick={() => toggleProduct(product.slug)}
                  role="checkbox"
                  aria-checked={selectedProducts.includes(product.slug)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleProduct(product.slug);
                    }
                  }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedProducts.includes(product.slug)
                      ? "border-current shadow-md"
                      : "border-transparent bg-warmth-light hover:bg-warmth"
                  }`}
                  style={{
                    color: selectedProducts.includes(product.slug)
                      ? `var(${product.color})`
                      : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: `var(${product.color})` }}
                    />
                    <p className="text-sm font-semibold text-text-primary">
                      {product.name}
                    </p>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section E: Sponsor Form                                       */}
      {/* ============================================================ */}
      <section
        id="sponsor-form"
        className="py-16 sm:py-20 bg-warmth-light scroll-mt-8"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-text-primary mb-8">
              Tell us about you
            </h2>

            {/* Selection summary */}
            {(selectedTierData || selectedProducts.length > 0) && (
              <div className="flex flex-wrap items-center gap-2 mb-8 justify-center">
                {selectedTierData && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-heart/10 text-heart text-sm font-medium rounded-full">
                    <TierIcon
                      icon={selectedTierData.icon}
                      color={selectedTierData.color}
                    />
                    {selectedTierData.name}
                  </span>
                )}
                {selectedProducts.map((slug) => {
                  const prod = products.find((p) => p.slug === slug);
                  const label = slug === "general-fund" ? "General Fund" : prod?.name;
                  const clr =
                    slug === "general-fund"
                      ? "--heart"
                      : prod?.color || "--heart";
                  return (
                    <span
                      key={slug}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full"
                      style={{
                        background: `color-mix(in srgb, var(${clr}) 12%, transparent)`,
                        color: `var(${clr})`,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: `var(${clr})` }}
                      />
                      {label}
                    </span>
                  );
                })}
              </div>
            )}

            {/* Success state */}
            {formState === "success" ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <div className="w-16 h-16 rounded-full bg-depth/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--depth)"
                    strokeWidth="2"
                    className="w-8 h-8"
                  >
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Thank you for your interest.
                </h3>
                <p className="text-text-secondary max-w-md mx-auto px-4">
                  Thank you for your interest in sponsoring this work.
                  Dr.&nbsp;Tamilselvi&apos;s team will reach out within 3
                  working days to schedule a conversation.
                </p>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Your Name
                      <span className="text-heart ml-0.5">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Email
                      <span className="text-heart ml-0.5">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Company or foundation name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Preferred Time for a Call
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all"
                    >
                      <option value="">Select a time slot...</option>
                      <option value="Morning (9am-12pm)">
                        Morning (9am &ndash; 12pm)
                      </option>
                      <option value="Afternoon (12pm-4pm)">
                        Afternoon (12pm &ndash; 4pm)
                      </option>
                      <option value="Evening (4pm-7pm)">
                        Evening (4pm &ndash; 7pm)
                      </option>
                      <option value="Flexible">
                        Flexible — any time works
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What draws you to this work? Anything you'd like us to know?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-depth/30 focus:border-depth transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {formState === "error" && errorMessage && (
                    <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto px-8 py-3 bg-heart text-white text-sm font-medium rounded-full hover:bg-heart-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting"
                      ? "Sending..."
                      : "Send Sponsorship Inquiry"}
                  </button>
                </form>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section F: Hall of Fame                                       */}
      {/* ============================================================ */}
      <section
        className="py-16 sm:py-24"
        style={{
          background: "linear-gradient(180deg, #2E2723, #252120)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasSponsors ? (
            /* --- Populated Hall of Fame --- */
            <>
              <ScrollReveal>
                <h2
                  className="text-center font-display text-3xl sm:text-4xl font-bold mb-12"
                  style={{ color: "#F5F0EB" }}
                >
                  Hall of Fame
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsors.map((sponsor) => {
                  const tierData = sponsorTiers.find(
                    (t) => t.id === sponsor.tier
                  );
                  return (
                    <ScrollReveal key={sponsor.id}>
                      <div
                        className="rounded-2xl p-6 border border-[#4A3F38]"
                        style={{ background: "#352F2A" }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <p
                            className="font-semibold"
                            style={{ color: "#F5F0EB" }}
                          >
                            {sponsor.name}
                          </p>
                          {tierData && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: `color-mix(in srgb, var(${tierData.color}) 20%, transparent)`,
                                color: `var(${tierData.color})`,
                              }}
                            >
                              {tierData.name}
                            </span>
                          )}
                        </div>
                        {sponsor.organization && (
                          <p
                            className="text-sm mb-2"
                            style={{ color: "#9A8E82" }}
                          >
                            {sponsor.organization}
                          </p>
                        )}
                        {sponsor.products.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {sponsor.products.map((slug) => {
                              const prod = products.find(
                                (p) => p.slug === slug
                              );
                              return (
                                <span
                                  key={slug}
                                  className="w-2.5 h-2.5 rounded-full"
                                  title={prod?.name || slug}
                                  style={{
                                    background: prod
                                      ? `var(${prod.color})`
                                      : "var(--heart)",
                                  }}
                                />
                              );
                            })}
                          </div>
                        )}
                        {sponsor.quote && (
                          <p
                            className="text-sm italic leading-relaxed"
                            style={{ color: "#C4B8AA" }}
                          >
                            &ldquo;{sponsor.quote}&rdquo;
                          </p>
                        )}
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </>
          ) : (
            /* --- Empty Hall of Fame --- */
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2
                  className="font-display text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: "#F5F0EB" }}
                >
                  The Hall of Fame
                </h2>
                <p
                  className="text-xl sm:text-2xl font-display"
                  style={{ color: "#9A8E82" }}
                >
                  is waiting for its first name.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[120px] rounded-xl border-2 border-dashed flex items-center justify-center opacity-40"
                    style={{ borderColor: "#4A3F38" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#4A3F38" }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("tiers")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="inline-flex items-center justify-center px-8 py-3 bg-heart text-white text-sm font-medium rounded-full hover:bg-heart-dark transition-colors duration-200"
                >
                  Be the First
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </main>
  );
}
