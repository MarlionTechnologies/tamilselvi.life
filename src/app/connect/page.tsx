import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Find your way into this journey. Whether you want to fund, collaborate, learn, or support — there is a place for you here.",
};

const pathways = [
  {
    title: "I want to support this work",
    audience: "For funders, philanthropists & CSR teams",
    description:
      "Learn how your support can reach more children. We can share impact reports, partnership proposals, and connect you with our team.",
    href: "/connect/partner",
    color: "var(--heart)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "I want to sponsor a product",
    audience: "For companies, foundations & individuals",
    description:
      "Choose a product from our assistive technology ecosystem, pick a sponsorship tier, and see your impact. Every sponsor gets something back.",
    href: "/connect/sponsor",
    color: "var(--heart)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "I want to collaborate on research",
    audience: "For researchers, academics & educators",
    description:
      "Explore open collaboration opportunities, co-authorship, methodology exchange, and joint proposals.",
    href: "/connect/collaborate",
    color: "var(--depth)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "I want to join the team",
    audience: "For students, interns & volunteers",
    description:
      "The Assistive Technology Club, research internships, and project opportunities — your skills can make a real difference.",
    href: "/connect/join",
    color: "var(--depth-light)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
    ),
  },
  {
    title: "I need help for a child or school",
    audience: "For parents, therapists & schools",
    description:
      "Find out how VR therapy works, what to expect, and how to connect your school or child with our programme.",
    href: "/connect/support",
    color: "var(--sky-dark)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

export default function ConnectPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-text-primary mb-6">
              Now it is your turn.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto">
              Wherever you are in this journey — funder, researcher, parent,
              student, or simply curious — there is a place for you here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {pathways.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <Link href={p.href} className="group block">
                  <div className="flex items-start gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-1 group-hover:text-depth transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-xs text-depth font-medium uppercase tracking-wider mb-3">
                        {p.audience}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-text-muted group-hover:text-depth transition-colors flex-shrink-0 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Direct Contact */}
          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <p className="text-text-secondary mb-4">
                Or reach out directly:
              </p>
              <a
                href="mailto:dtamilselvi@tce.edu"
                className="text-depth hover:text-depth-dark font-medium transition-colors"
              >
                dtamilselvi@tce.edu
              </a>
              <p className="text-sm text-text-muted mt-4">
                Department of IT, Thiagarajar College of Engineering
                <br />
                Madurai 625 015, Tamil Nadu, India
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
