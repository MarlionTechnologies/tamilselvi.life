"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-0 overflow-hidden bg-warmth-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[calc(100vh-5rem)]">
          {/* ── Text Side ── */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-24 order-2 lg:order-1">
            {/* Headline */}
            <h1
              className="text-text-primary mb-6 animate-fade-up"
              style={{ lineHeight: 1.1 }}
            >
              Every child
              <br />
              deserves{" "}
              <span className="relative inline-block">
                a way in
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, var(--heart), var(--heart-light))",
                  }}
                />
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-md mb-10"
              style={{
                color: "var(--text-light)",
                opacity: 0,
                animation: "fadeUp 600ms cubic-bezier(0.22,1,0.36,1) 250ms both",
              }}
            >
              Dr. D. Tamilselvi has spent a decade building VR technology
              that meets children where they are — turning virtual worlds
              into bridges for real growth.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4 mb-12 lg:mb-16"
              style={{
                opacity: 0,
                animation: "fadeUp 600ms cubic-bezier(0.22,1,0.36,1) 400ms both",
              }}
            >
              <Button href="/impact" variant="primary" size="lg">
                See the Impact
              </Button>
              <Button href="/work#vr-therapy" variant="outline" size="lg">
                Explore the Technology
              </Button>
            </div>

            {/* Mini Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm"
              style={{
                opacity: 0,
                animation: "fadeUp 600ms cubic-bezier(0.22,1,0.36,1) 550ms both",
              }}
            >
              {[
                { value: "8+", label: "Schools" },
                { value: "1000+", label: "Children" },
                { value: "23+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-depth">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image Side ── */}
          <div className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-auto">
            {/* Main image */}
            <Image
              src="/images/hero/child-wheelchair-vr.jpg"
              alt="Dr. Tamilselvi helping a child in a wheelchair experience virtual reality therapy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Warm color overlay for unity */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(232,221,211,0.1) 0%, transparent 50%)",
              }}
            />

            {/* Bottom gradient on mobile to blend into text section */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 lg:hidden"
              style={{
                background: "linear-gradient(to top, var(--warmth-light), transparent)",
              }}
            />

            {/* Side gradient on desktop to blend into text section */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-24"
              style={{
                background: "linear-gradient(to right, var(--warmth-light), transparent)",
              }}
            />

            {/* Thumbnail strip — bottom of image on desktop */}
            <div className="hidden lg:flex absolute bottom-6 right-6 gap-2">
              {[
                { src: "/images/hero/govt-school-girls.jpg", alt: "Girls in VR" },
                { src: "/images/hero/wheelchair-meta-quest.jpg", alt: "Meta Quest therapy" },
              ].map((thumb) => (
                <div
                  key={thumb.src}
                  className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-white/50"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center"
        style={{
          opacity: 0,
          animation: "fadeUp 600ms cubic-bezier(0.22,1,0.36,1) 900ms both",
        }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-depth/20 flex items-start justify-center p-1">
          <div className="w-1 h-2.5 rounded-full bg-depth/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
