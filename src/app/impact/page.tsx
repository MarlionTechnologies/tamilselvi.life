import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { schools, recognitions } from "@/content/schools";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "10 years of bringing VR therapy to special schools across Tamil Nadu and Puducherry. Real outcomes, real children, real change.",
};

export default function ImpactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-warmth-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-text-primary mb-6">
              When technology walks into a child&apos;s world, everything changes.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto max-w-2xl">
              8+ schools. 1000+ children. A decade of VR therapy sessions,
              breakthroughs, and small moments that proved it works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-text-primary mb-4">
                8+ Special Schools & Institutions
              </h2>
              <p className="text-text-secondary mx-auto max-w-lg">
                Each visit is a conversation. Each child teaches us something new.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {schools.map((school, i) => (
              <ScrollReveal key={school.name} delay={i * 60}>
                <div className="bg-warmth-light rounded-xl overflow-hidden h-full flex flex-col border border-transparent hover:border-border hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                  {/* Image — every school now has one */}
                  {school.image && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={school.image}
                        alt={school.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2.5 mb-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          background: school.highlight ? "var(--heart)" : "var(--sky-dark)",
                        }}
                      />
                      <div>
                        <h3 className="text-base font-semibold text-text-primary leading-tight">
                          {school.name}
                        </h3>
                        <p className="text-xs font-medium mt-0.5" style={{ color: "var(--depth)" }}>
                          {school.location}, {school.state}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mt-2">
                      {school.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Letter — warm charcoal (was bg-depth) */}
      <section
        className="py-20 sm:py-28"
        style={{ background: "linear-gradient(180deg, #2E2723 0%, #252120 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <blockquote
                className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal italic mb-8"
                style={{ color: "#F5F0EB" }}
              >
                The VR therapy sessions have brought visible improvement in the
                attention span and social interaction of our children. We are
                grateful for Dr. Tamilselvi&apos;s dedication and the team&apos;s
                consistent engagement with our school.
              </blockquote>
              <p className="font-medium" style={{ color: "var(--sky)" }}>
                Director, Sathya Special School
              </p>
              <p className="text-sm mt-1" style={{ color: "#9A8E82" }}>
                Pondicherry
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recognition Grid */}
      <section className="py-16 sm:py-24 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-text-primary">Recognition & Endorsements</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recognitions.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 h-full flex flex-col">
                  {r.image && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--depth)" }}>
                      {r.issuer} · {r.year}
                    </p>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {r.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Button href="/gallery" variant="outline" size="lg">
                View Photo Gallery
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stakeholder CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-text-primary mb-4">How can you be part of this?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Whether you want to support this work, find therapy for a child, or understand the technology — there is a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/connect/partner" variant="primary" size="lg">
                Partner With Us
              </Button>
              <Button href="/connect/support" variant="secondary" size="lg">
                Find Support for a Child
              </Button>
              <Button href="/work#vr-therapy" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
