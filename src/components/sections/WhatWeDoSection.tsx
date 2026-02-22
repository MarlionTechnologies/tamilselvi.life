import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const cards = [
  {
    title: "VR Therapy for Autism",
    description:
      "Safe, engaging virtual environments for children with autism — proven outcomes across 8+ special schools in South India.",
    href: "/work#vr-therapy",
    image: "/images/hero/vr-lab-setup.jpg",
    accent: "var(--depth)",
  },
  {
    title: "The Ecosystem Vision",
    description:
      "Nine interconnected assistive products. One shared intelligence layer. Building practical independence at community scale.",
    href: "/ecosystem",
    image: "/images/ecosystem/covers/front-cover.jpg",
    accent: "var(--heart)",
  },
  {
    title: "Real-World Impact",
    description:
      "From Madurai to Pondicherry — technology meeting children in their own world. Endorsed by schools, doctors, and institutions.",
    href: "/impact",
    image: "/images/hero/spark-school.jpg",
    accent: "var(--sky-dark)",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-20 sm:py-28 bg-warmth-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-text-primary mb-4">What We Do</h2>
            <p className="text-text-secondary mx-auto max-w-xl text-base leading-relaxed">
              A journey from research lab to special school classroom — and now,
              toward a complete assistive technology ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 120}>
              <Link href={card.href} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Color accent bar at bottom of image */}
                    <div
                      className="absolute bottom-0 inset-x-0 h-1"
                      style={{ background: card.accent }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-depth transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-depth text-sm font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
