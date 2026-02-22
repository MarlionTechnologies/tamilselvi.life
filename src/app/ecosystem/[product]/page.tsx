import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { products } from "@/content/products";

interface Props {
  params: Promise<{ product: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { product: slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];
  const prevProduct =
    products[(currentIndex - 1 + products.length) % products.length];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28"
        style={{
          background: `linear-gradient(135deg, var(--warmth-light) 0%, color-mix(in srgb, var(${product.color}) 15%, var(--warmth-light)) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6"
              style={{ backgroundColor: `var(${product.color})` }}
            >
              {product.icon}
            </div>
            <p className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: `var(${product.color})` }}
            >
              {product.domain}
            </p>
            <h1 className="text-text-primary mb-4">{product.name}</h1>
            <p className="text-xl text-text-secondary leading-relaxed mx-auto max-w-2xl italic font-display">
              {product.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-6">The Problem</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {product.problem}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-6">The Insight</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {product.insight}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stat Highlight */}
      {product.stat && (
        <section
          className="py-16"
          style={{ backgroundColor: `var(${product.color})` }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-2 font-display">
                {product.stat.value}
              </p>
              <p className="text-white/85 text-lg max-w-lg mx-auto">
                {product.stat.label}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-12 text-center">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {product.features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="bg-warmth-light rounded-2xl p-6 h-full">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4"
                    style={{ backgroundColor: `var(${product.color})` }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Human Story */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-6">
              A Day in Someone&apos;s Life
            </h2>
            <blockquote
              className="text-text-secondary text-lg leading-relaxed italic border-l-4 pl-6"
              style={{ borderColor: `var(${product.color})` }}
            >
              {product.humanStory}
            </blockquote>
            <p className="text-text-muted text-sm mt-4">
              * Composite scenario based on real needs observed during fieldwork
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-text-secondary mb-8 mx-auto">
              This product is part of our ecosystem vision. We are looking for
              collaborators, researchers, and supporters to bring it to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/connect/collaborate" variant="primary" size="lg">
                Get Involved
              </Button>
              <Button href="/ecosystem" variant="outline" size="lg">
                Back to Ecosystem
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-warmth-light border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a
              href={`/ecosystem/${prevProduct.slug}`}
              className="text-sm text-text-secondary hover:text-depth transition-colors"
            >
              &larr; {prevProduct.name}
            </a>
            <a
              href={`/ecosystem/${nextProduct.slug}`}
              className="text-sm text-text-secondary hover:text-depth transition-colors"
            >
              {nextProduct.name} &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
