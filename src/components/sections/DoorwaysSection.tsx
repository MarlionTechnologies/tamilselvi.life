import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { doorways } from "@/content/navigation";

const icons: Record<string, ReactNode> = {
  technocrat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.591.659H9.061a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9.5" />
    </svg>
  ),
  philanthropist: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  parent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  educator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.58.845 7.248 1.298 10.993 1.298 3.744 0 7.413-.453 10.993-1.298a23.84 23.84 0 0 0-1.012-5.434m-19.962 0A59.94 59.94 0 0 1 12 2.162a59.94 59.94 0 0 1 7.74 7.985m-15.48 0c4.802-.6 9.678-.6 14.48 0" />
    </svg>
  ),
  researcher: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  student: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  ),
};

const accentColors: Record<string, string> = {
  technocrat: "var(--depth)",
  philanthropist: "var(--heart)",
  parent: "var(--sky-dark)",
  educator: "var(--depth-light)",
  researcher: "var(--depth)",
  student: "var(--heart)",
};

export function DoorwaysSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-text-primary mb-4">How can we help you?</h2>
            <p className="text-text-secondary mx-auto max-w-lg">
              Wherever you are in this journey, there is a place for you here.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {doorways.map((door, i) => (
            <ScrollReveal key={door.audience} delay={i * 80}>
              <Link href={door.href} className="group block h-full">
                <div className="bg-warmth-light rounded-xl p-6 sm:p-7 h-full flex flex-col border border-transparent hover:border-border transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                  {/* Icon with accent color */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{
                      background: `color-mix(in srgb, ${accentColors[door.audience]} 10%, transparent)`,
                      color: accentColors[door.audience],
                    }}
                  >
                    {icons[door.audience]}
                  </div>

                  <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-depth transition-colors">
                    {door.heading}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {door.description}
                  </p>

                  <span className="inline-flex items-center gap-2 mt-4 text-depth text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
                    Find out more
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
