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

      {/* Description */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-text-secondary text-lg leading-relaxed">
              {product.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warmth-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-text-primary mb-4">
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
      <section className="py-12 bg-white border-t border-border">
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
