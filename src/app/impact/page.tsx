import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapIndia } from "@/components/ui/MapIndia";
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
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-text-primary mb-6">
              This is what 10 years of listening looks like.
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mx-auto max-w-2xl">
              From Madurai to Pondicherry, from special schools to medical
              institutions — technology meeting children in their own world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                Where we have been
              </p>
              <h2 className="text-text-primary">
                10+ institutions across South India
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <MapIndia schools={schools} />
          </ScrollReveal>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-16 sm:py-24 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-text-primary mb-4">Schools & Institutions</h2>
              <p className="text-text-secondary mx-auto">
                Each visit is a conversation. Each child teaches us something new.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, i) => (
              <ScrollReveal key={school.name} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">
                  {school.image && (
                    <div
                      className="w-full h-40 rounded-xl bg-cover bg-center mb-4 img-warm"
                      style={{
                        backgroundImage: `url(${school.image})`,
                        backgroundColor: "var(--warmth)",
                      }}
                    />
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        school.highlight ? "bg-heart" : "bg-depth"
                      }`}
                    />
                    <div>
                      <h3 className="text-base font-semibold text-text-primary">
                        {school.name}
                      </h3>
                      <p className="text-xs text-depth font-medium">
                        {school.location}, {school.state}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {school.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Letter */}
      <section className="py-24 sm:py-32 bg-depth text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-sky-light/60 mb-8">
                Letter of Appreciation — Sathya Special School
              </p>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal italic mb-8">
                The VR therapy sessions have brought visible improvement in the
                attention span and social interaction of our children. We are
                grateful for Dr. Tamilselvi&apos;s dedication and the team&apos;s
                consistent engagement with our school.
              </blockquote>
              <p className="text-sky-light font-medium">
                Director, Sathya Special School
              </p>
              <p className="text-white/40 text-sm mt-1">
                Pondicherry
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recognition Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                Who believes in this work
              </p>
              <h2 className="text-text-primary">Recognition & Endorsements</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recognitions.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="border border-border rounded-xl p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-2">
                    {r.issuer} · {r.year}
                  </p>
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {r.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Button href="/connect/partner" variant="primary" size="lg">
                Partner With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
