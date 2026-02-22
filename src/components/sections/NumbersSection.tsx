"use client";

import { StatCounter } from "@/components/ui/StatCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { impactNumbers } from "@/content/statistics";

export function NumbersSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle top border */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, var(--border) 50%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-text-primary">The Numbers That Matter</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          {impactNumbers.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
