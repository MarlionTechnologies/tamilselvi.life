import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
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

/* ─── Per-product figure config ───
   Each product gets 2 inline figures displayed in the Problem and Approach
   sections. These are the PPTX infographic slides shown as readable content
   figures — NOT as backgrounds or hero images. */
const figureConfig: Record<
  string,
  { problem: { src: string; caption: string }; approach: { src: string; caption: string } }
> = {
  caresync: {
    problem: {
      src: "/images/ecosystem/products/caresync/hero.jpg",
      caption: "Care happens everywhere. Data stays nowhere — trapped in five different heads.",
    },
    approach: {
      src: "/images/ecosystem/products/caresync/architecture.jpg",
      caption: "The parent experience: log in 30 seconds, understand in a conversation, never feel alone.",
    },
  },
  "smart-care-vision": {
    problem: {
      src: "/images/ecosystem/products/smart-care-vision/hero.jpg",
      caption: "99.5% have no access to intelligent care monitoring of any kind.",
    },
    approach: {
      src: "/images/ecosystem/products/smart-care-vision/emergency.jpg",
      caption: "Privacy by design: from living room to bathroom, the family controls everything.",
    },
  },
  neurosense: {
    problem: {
      src: "/images/ecosystem/products/neurosense/hero.jpg",
      caption: "Every mainstream interface assumes motor abilities these children haven't reached yet.",
    },
    approach: {
      src: "/images/ecosystem/products/neurosense/pseudo-vr.jpg",
      caption: "Pseudo-VR: 60–70% depth immersion with zero wearables, at a fraction of the cost.",
    },
  },
  "echo-hear": {
    problem: {
      src: "/images/ecosystem/products/echo-hear/hero.jpg",
      caption: "63 million Indians with hearing impairment — 99.5% have never used any hearing device.",
    },
    approach: {
      src: "/images/ecosystem/products/echo-hear/keyword-acceleration.jpg",
      caption: "Four features no hearing aid has — because hearing aids process sound, ECHO Hear processes the world.",
    },
  },
  "echo-voice": {
    problem: {
      src: "/images/ecosystem/products/echo-voice/hero.jpg",
      caption: "6M+ ISL users in India — zero products translate Indian Sign Language to Tamil speech.",
    },
    approach: {
      src: "/images/ecosystem/products/echo-voice/bat-sonar.jpg",
      caption: "Frequency division: two ultrasonic bands coexist above human hearing, enabling wrist-mounted sonar.",
    },
  },
  emboss: {
    problem: {
      src: "/images/ecosystem/products/emboss/tactile-surface.jpg",
      caption: "The MRE tactile surface: electromagnets beneath silicone create raised shapes on demand.",
    },
    approach: {
      src: "/images/ecosystem/products/emboss/cheaper.jpg",
      caption: "50× cheaper than imported alternatives — making school-level deployment possible across India.",
    },
  },
  sightline: {
    problem: {
      src: "/images/ecosystem/products/sightline/product.jpg",
      caption: "Five capabilities no single device has ever combined: navigates, sees, understands, communicates, and learns.",
    },
    approach: {
      src: "/images/ecosystem/products/sightline/perception.jpg",
      caption: "The perception stack: 8 sensors fuse into a 3D world model updated at 30+ Hz.",
    },
  },
  "smart-wheelchair": {
    problem: {
      src: "/images/ecosystem/products/smart-wheelchair/tiers.jpg",
      caption: "One platform, three levels: Drive (₹30–40K), Assist (₹80K–1L), Navigate (₹1.3–1.8L).",
    },
    approach: {
      src: "/images/ecosystem/products/smart-wheelchair/adas.jpg",
      caption: "Your home, learned: doorway auto-centering, room navigation, follow-me mode, and drop-off protection.",
    },
  },
  exoforce: {
    problem: {
      src: "/images/ecosystem/products/exoforce/gamified.jpg",
      caption: "International exoskeletons cost ₹29–165 lakhs — far beyond reach for most Indian families.",
    },
    approach: {
      src: "/images/ecosystem/products/exoforce/hybrid.jpg",
      caption: "Physical AI with hybrid actuation: Assist, Resist, and Engage modes in one lightweight device.",
    },
  },
};

export default async function ProductPage({ params }: Props) {
  const { product: slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];
  const prevProduct =
    products[(currentIndex - 1 + products.length) % products.length];

  const figures = figureConfig[slug];

  return (
    <main>
      {/* ═══ Hero — Split layout with cropped product visual ═══ */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, var(${product.color}) 10%, #F5F0EB) 0%, color-mix(in srgb, var(${product.color}) 18%, #F5F0EB) 50%, #F5F0EB 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text side */}
            <ScrollReveal>
              <div>
                <p
                  className="text-sm uppercase tracking-widest font-medium mb-3"
                  style={{ color: `var(${product.color})` }}
                >
                  {product.domain}
                </p>

                <h1 className="text-text-primary mb-4">{product.name}</h1>

                <p className="text-xl text-text-secondary leading-relaxed max-w-xl italic font-display mb-6">
                  {product.tagline}
                </p>

                <p className="text-text-secondary leading-relaxed max-w-xl mb-8">
                  {product.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-border shadow-sm">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: `var(${product.color})` }}
                  />
                  <span className="text-xs font-medium text-text-muted">
                    Concept &middot; Seeking collaborators
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Cropped product visual */}
            <ScrollReveal delay={200}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  {/* Decorative accent */}
                  <div
                    className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl opacity-15"
                    style={{ background: `var(${product.color})` }}
                    aria-hidden="true"
                  />
                  {/* Image with edge fades to hide slide text */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: product.heroPosition }}
                      sizes="(max-width: 1024px) 90vw, 450px"
                      priority
                    />
                    {/* Edge fade overlays — hides slide title/footer text at edges */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `
                          linear-gradient(to right, color-mix(in srgb, var(${product.color}) 15%, #F5F0EB) 0%, transparent 18%),
                          linear-gradient(to left, color-mix(in srgb, var(${product.color}) 15%, #F5F0EB) 0%, transparent 18%),
                          linear-gradient(to bottom, color-mix(in srgb, var(${product.color}) 12%, #F5F0EB) 0%, transparent 22%),
                          linear-gradient(to top, color-mix(in srgb, var(${product.color}) 12%, #F5F0EB) 0%, transparent 22%)
                        `,
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Stat Strip ═══ */}
      {product.stat && (
        <section
          className="py-10 border-b border-border"
          style={{
            background: `color-mix(in srgb, var(${product.color}) 5%, white)`,
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p
                className="text-4xl sm:text-5xl font-display font-bold mb-2"
                style={{ color: `var(${product.color})` }}
              >
                {product.stat.value}
              </p>
              <p className="text-text-secondary text-lg">
                {product.stat.label}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ═══ The Problem — text + inline figure ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-text-primary mb-6 text-2xl sm:text-3xl">
              The problem
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              {product.problem}
            </p>
          </ScrollReveal>

          {/* Inline figure — problem infographic */}
          {figures?.problem && (
            <ScrollReveal delay={150}>
              <figure className="mt-4">
                <div className="relative w-full rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-border/50">
                  <Image
                    src={figures.problem.src}
                    alt={figures.problem.caption}
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-text-muted italic text-center px-4">
                  {figures.problem.caption}
                </figcaption>
              </figure>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ═══ Our Approach — text + inline figure ═══ */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-text-primary mb-6 text-2xl sm:text-3xl">
              Our approach
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              {product.insight}
            </p>
          </ScrollReveal>

          {/* Inline figure — approach infographic */}
          {figures?.approach && (
            <ScrollReveal delay={150}>
              <figure className="mt-4">
                <div className="relative w-full rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-border/50">
                  <Image
                    src={figures.approach.src}
                    alt={figures.approach.caption}
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-text-muted italic text-center px-4">
                  {figures.approach.caption}
                </figcaption>
              </figure>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ═══ How It Would Work ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-text-primary text-2xl sm:text-3xl">
                How it would work
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="rounded-2xl p-6 h-full bg-warmth-light border border-transparent hover:border-border hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-4"
                    style={{ backgroundColor: `var(${product.color})` }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">
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

      {/* ═══ Invitation to Collaborate ═══ */}
      <section
        className="py-20 sm:py-28"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, var(${product.color}) 8%, #F5F0EB) 0%, #F5F0EB 100%)`,
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl text-text-primary mb-4">
              Help us build {product.name}
            </h2>
            <p className="text-text-secondary leading-relaxed mx-auto mb-3">
              {product.name} is a concept born from 10 years of fieldwork with
              children and families. It exists as a research proposal — not yet
              a product.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mx-auto mb-8">
              We are looking for researchers, engineering teams, sponsors, and
              institutional partners to move this from idea to reality. If this
              problem matters to you, we would love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/connect/collaborate" variant="primary" size="lg">
                Collaborate
              </Button>
              <Button href={`/connect/sponsor?product=${product.slug}`} variant="outline" size="lg">
                Sponsor This Product
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Navigation ═══ */}
      <section className="py-6 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href={`/ecosystem/${prevProduct.slug}`}
              className="text-sm text-text-secondary hover:text-depth transition-colors"
            >
              &larr; {prevProduct.name}
            </Link>
            <Link
              href="/ecosystem"
              className="text-xs text-text-muted hover:text-depth transition-colors"
            >
              All Products
            </Link>
            <Link
              href={`/ecosystem/${nextProduct.slug}`}
              className="text-sm text-text-secondary hover:text-depth transition-colors"
            >
              {nextProduct.name} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
