import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "33 peer-reviewed publications in VR rehabilitation, assistive technology, and cognitive science. Springer, IEEE, and international conferences.",
};

const publications = [
  {
    title: "VR-Based Cognitive Rehabilitation for Children with Autism Spectrum Disorder",
    venue: "Springer IHSI 2020, Italy",
    year: "2020",
    type: "Conference Paper",
    highlight: true,
  },
  {
    title: "Virtual Reality Environments for Therapeutic Assessment of Children with Special Needs",
    venue: "IEEE International Conference",
    year: "2021",
    type: "Conference Paper",
  },
  {
    title: "Compare and Contrast Methodology for VR-Based Autism Rehabilitation",
    venue: "International Journal of Assistive Technology",
    year: "2022",
    type: "Journal Article",
  },
  {
    title: "Brain-Computer Interface Integration with Immersive VR for Cognitive Training",
    venue: "Springer LNNS",
    year: "2023",
    type: "Book Chapter",
  },
  {
    title: "Multi-Stakeholder Framework for VR Therapy in Special Education Settings",
    venue: "International Conference on Special Education Technology",
    year: "2023",
    type: "Conference Paper",
  },
  {
    title: "Gamification Strategies in VR Environments for Children with Autism",
    venue: "ACM SIGCHI Workshop",
    year: "2024",
    type: "Workshop Paper",
  },
];

export default function PublicationsPage() {
  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
              Research Output
            </p>
            <h1 className="text-text-primary mb-6">Publications</h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto">
              33 peer-reviewed papers across Springer, IEEE, and international
              conferences. Every claim is backed by data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 60}>
                <div
                  className={`p-6 rounded-xl border ${
                    pub.highlight
                      ? "border-depth/30 bg-depth/5"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-mono text-depth bg-depth/10 px-2 py-0.5 rounded flex-shrink-0">
                      {pub.year}
                    </span>
                    <span className="text-xs text-text-muted">{pub.type}</span>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{pub.venue}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <p className="text-sm text-text-muted mb-6">
                For a complete list of publications and DOIs, please contact us.
              </p>
              <Button href="/connect/collaborate" variant="primary" size="lg">
                Request Full List
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
