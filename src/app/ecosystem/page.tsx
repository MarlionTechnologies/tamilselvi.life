import type { Metadata } from "next";
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
    description: "Detecting and interpreting the world",
    products: ["neurosense", "echo-hear", "echo-voice"],
  },
  {
    label: "Understand",
    description: "Processing and responding",
    products: ["emboss", "sightline"],
  },
  {
    label: "Act",
    description: "Physical independence and mobility",
    products: ["smart-wheelchair", "exoforce"],
  },
  {
    label: "Connect",
    description: "Coordination and care at community scale",
    products: ["caresync", "smart-care-vision"],
  },
];

export default function EcosystemPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-warmth-light to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                  The Vision
                </p>
                <h1 className="text-text-primary mb-6">
                  Nine products. One shared intelligence.
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  From our proven VR therapy work, a bigger picture has emerged:
                  an interconnected ecosystem of assistive products that share
                  data, adapt together, and build practical independence at
                  community scale.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  This is a roadmap — some products are research-ready, others
                  are aspirational. All are grounded in real needs observed
                  across 10 years of fieldwork.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div
                className="w-full h-80 sm:h-96 rounded-2xl bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/ecosystem/covers/front-cover.png)",
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Framework: Sense → Understand → Act → Connect */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                The Framework
              </p>
              <h2 className="text-text-primary">
                Sense &rarr; Understand &rarr; Act &rarr; Connect
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {categories.map((cat, ci) => (
              <div key={cat.label}>
                <ScrollReveal delay={ci * 100}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-semibold text-text-primary mb-1">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {cat.description}
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.products.map((slug, pi) => {
                    const product = products.find((p) => p.slug === slug);
                    if (!product) return null;
                    return (
                      <ScrollReveal key={slug} delay={ci * 100 + pi * 80}>
                        <Link
                          href={`/ecosystem/${slug}`}
                          className="group block"
                        >
                          <div className="border border-border rounded-xl p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 h-full">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg"
                                style={{
                                  backgroundColor: `var(${product.color})`,
                                }}
                              >
                                {product.icon}
                              </div>
                              <div>
                                <h4 className="text-base font-semibold text-text-primary group-hover:text-depth transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-text-muted">
                                  {product.domain}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed mb-3">
                              {product.tagline}
                            </p>
                            <span className="text-xs text-depth font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Learn more &rarr;
                            </span>
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

      {/* NeuroSense Spotlight */}
      <section className="py-20 sm:py-28 bg-depth text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-sky-light/60 mb-4">
              Spotlight
            </p>
            <h2 className="text-white mb-6">
              NeuroSense: Where current work meets future vision
            </h2>
            <p className="text-sky-light/80 leading-relaxed mx-auto mb-8">
              NeuroSense is the bridge between our proven VR therapy research and
              the broader ecosystem. It combines EEG-based brain-computer
              interfaces with immersive VR to create adaptive, responsive therapy
              environments that learn from each child&apos;s neural patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ecosystem/neurosense" variant="primary" size="lg">
                Explore NeuroSense
              </Button>
              <Button href="/connect/collaborate" variant="outline" size="lg">
                Collaborate
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
