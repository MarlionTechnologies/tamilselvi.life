"use client";

import { Button } from "@/components/ui/Button";

const heroImages = [
  {
    src: "/images/hero/child-wheelchair-vr.jpg",
    alt: "Dr. Tamilselvi helping a child in a wheelchair experience virtual reality therapy",
  },
  {
    src: "/images/hero/wheelchair-meta-quest.jpg",
    alt: "A person in a wheelchair experiencing immersive VR therapy with Meta Quest headset",
  },
  {
    src: "/images/hero/govt-school-girls.jpg",
    alt: "Government school girls experiencing VR technology with excitement and wonder",
  },
];

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 hero-crossfade-${i + 1}`}
          >
            {/* Placeholder gradient while images load */}
            <div
              className="w-full h-full bg-cover bg-center img-warm"
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundColor: "var(--warmth-dark)",
              }}
            />
          </div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-warmth-light/90 via-warmth-light/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-warmth-light/80 via-transparent to-warmth-light/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-text-primary mb-6 animate-fade-up">
            Every child deserves a way in.
          </h1>
          <p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
            style={{
              opacity: 0,
              animation: "fadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both",
            }}
          >
            Dr. D. Tamilselvi has spent 10 years building technology
            that meets children where they are — turning virtual worlds
            into bridges for real growth.
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: 0,
              animation: "fadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) 400ms both",
            }}
          >
            <Button href="/impact" variant="primary" size="lg">
              See the Impact
            </Button>
            <Button href="/work/vr-therapy" variant="outline" size="lg">
              Explore the Technology
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-depth/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-depth/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
