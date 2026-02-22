import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { products } from "@/content/products";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Ecosystem Vision",
  description:
    "Nine interconnected assistive products. One shared intelligence layer. Building practical independence at community scale.",
};

const categories = [
  {
    label: "Sense",
    description: "Detecting and interpreting the world through adaptive input modalities",
    products: ["neurosense", "echo-hear", "echo-voice"],
    color: "var(--neurosense)",
  },
  {
    label: "Understand",
    description: "Processing sensory data into meaning through tactile and visual intelligence",
    products: ["emboss", "sightline"],
    color: "var(--emboss)",
  },
  {
    label: "Act",
    description: "Translating understanding into physical independence and mobility",
    products: ["smart-wheelchair", "exoforce"],
    color: "var(--wheelchair)",
  },
  {
    label: "Connect",
    description: "Coordinating care across caregivers, institutions, and communities",
    products: ["caresync", "smart-care-vision"],
    color: "var(--caresync)",
  },
];

export default function EcosystemPage() {
  return (
    <main>
      {/* ═══ Hero ═══ */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h1 className="text-text-primary mb-6">
                  Nine products. One shared intelligence.
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  From our proven VR therapy work, a bigger picture has emerged:
                  an interconnected ecosystem of assistive products that share
                  data, adapt together, and build practical independence at
                  community scale.
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  This is a roadmap — some products are research-ready, others
                  are aspirational. All are grounded in real needs observed
                  across 10 years of fieldwork.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-display font-bold text-depth">9</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Products</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-depth">4</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Pillars</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-depth">1</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Mission</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
                    <Image
                      src="/images/ecosystem/covers/front-cover.png"
                      alt="Smart Assistive Technology Ecosystem — roadmap book cover"
                      fill
                      className="object-contain bg-warmth"
                      sizes="(max-width: 1024px) 90vw, 400px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Framework: Sense → Understand → Act → Connect ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-text-primary mb-4">
                Sense &rarr; Understand &rarr; Act &rarr; Connect
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Each product addresses a specific need. Together, they form a
                continuous loop of sensing, understanding, acting, and
                coordinating care — sharing intelligence across the ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {categories.map((cat, ci) => (
              <div key={cat.label}>
                {/* Category header */}
                <ScrollReveal delay={ci * 60}>
                  <div className="flex items-start gap-4 mb-8">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5"
                      style={{ background: cat.color }}
                    >
                      {ci + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-text-primary">
                        {cat.label}
                      </h3>
                      <p className="text-text-secondary mt-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Product cards with images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-0 sm:pl-14">
                  {cat.products.map((slug, pi) => {
                    const product = products.find((p) => p.slug === slug);
                    if (!product) return null;
                    return (
                      <ScrollReveal key={slug} delay={ci * 60 + pi * 80}>
                        <Link
                          href={`/ecosystem/${slug}`}
                          className="group block h-full"
                        >
                          <div className="bg-warmth-light rounded-2xl h-full relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-border/50 hover:border-border">
                            {/* Product image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={product.heroImage}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ objectPosition: product.heroPosition }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              {/* Gradient overlay at bottom */}
                              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-warmth-light to-transparent" />
                              {/* Domain badge */}
                              <div
                                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider shadow-sm"
                                style={{ backgroundColor: `var(${product.color})` }}
                              >
                                {product.domain}
                              </div>
                            </div>

                            {/* Product info */}
                            <div className="p-5 pt-2">
                              <h4 className="text-base font-semibold text-text-primary group-hover:text-depth transition-colors mb-1">
                                {product.name}
                              </h4>
                              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                                {product.tagline}
                              </p>

                              {product.stat && (
                                <div className="pt-3 border-t border-border/40">
                                  <p className="text-xs text-text-muted">
                                    <span
                                      className="font-bold text-sm"
                                      style={{ color: `var(${product.color})` }}
                                    >
                                      {product.stat.value}
                                    </span>
                                    {" "}&mdash; {product.stat.label}
                                  </p>
                                </div>
                              )}

                              <span className="inline-flex items-center gap-1.5 text-xs text-depth font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Explore &rarr;
                              </span>
                            </div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Collaboration CTA ═══ */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-text-primary mb-4">
              This vision needs collaborators.
            </h2>
            <p className="text-text-secondary leading-relaxed mx-auto mb-4">
              These nine products are at various stages — from concept to
              prototype. We are looking for researchers, engineers, sponsors,
              and institutions who want to co-develop assistive technology that
              reaches real people.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mx-auto mb-8">
              Whether you can contribute research, funding, engineering
              capacity, or field-testing partnerships — there is a place for
              you in this ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/connect/collaborate" variant="primary" size="lg">
                Collaborate With Us
              </Button>
              <Button href="/connect/sponsor" variant="outline" size="lg">
                Become a Sponsor
              </Button>
              <Button href="/connect/join" variant="secondary" size="lg">
                Join the Team
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
