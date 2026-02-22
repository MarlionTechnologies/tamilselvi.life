import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const cards = [
  {
    title: "VR Therapy for Autism",
    description:
      "Using virtual reality to create safe, engaging therapy environments for children with autism. Proven outcomes across 8+ special schools.",
    href: "/work/vr-therapy",
    image: "/images/hero/vr-lab-setup.jpg",
    gradient: "from-depth/80 to-depth/40",
  },
  {
    title: "The Ecosystem Vision",
    description:
      "Nine interconnected assistive products. One shared intelligence layer. Building practical independence at community scale.",
    href: "/ecosystem",
    image: "/images/ecosystem/covers/front-cover.png",
    gradient: "from-heart/80 to-heart/40",
  },
  {
    title: "Real-World Impact",
    description:
      "From Madurai to Pondicherry, technology meeting children in their own world. Endorsed by schools, doctors, and institutions.",
    href: "/impact",
    image: "/images/hero/spark-school.jpg",
    gradient: "from-sky-dark/80 to-sky-dark/40",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-text-primary mb-4">What We Do</h2>
            <p className="text-text-secondary mx-auto">
              A journey from research lab to special school classroom — and now,
              toward a complete assistive technology ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <Link href={card.href} className="group block">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300">
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 img-warm"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundColor: "var(--warmth-dark)",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`} />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="text-white text-xl sm:text-2xl font-display font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-white/90 text-sm font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
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
