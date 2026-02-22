import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "VR environments and assistive technology projects developed by the CSRG team at TCE Madurai.",
};

const projects = [
  {
    title: "Enchanting Forest",
    category: "VR Therapy Environment",
    description:
      "A calming forest setting for sensory regulation and attention training. Audio cues, visual tasks, and guided exploration.",
    image: "/images/projects/enchanting-forest.png",
  },
  {
    title: "Ride to Destiny",
    category: "VR Therapy Environment",
    description:
      "Interactive journey for decision-making and social cognition. Gamified challenges with cause-effect learning.",
    image: "/images/projects/ride-to-destiny.png",
  },
  {
    title: "Virtual Fishing",
    category: "VR Therapy Environment",
    description:
      "Motor coordination and patience-building. A low-pressure aquatic activity for children with autism.",
    image: "/images/projects/virtual-fishing.png",
  },
  {
    title: "Kitchen Safety Simulation",
    category: "Daily Living Skills",
    description:
      "Teaching kitchen safety and cooking basics in a risk-free virtual environment.",
  },
  {
    title: "Traffic Awareness Module",
    category: "Community Skills",
    description:
      "Simulated road crossing and traffic navigation for building real-world independence.",
  },
  {
    title: "Social Interaction Trainer",
    category: "Communication",
    description:
      "Guided social scenarios for practicing greetings, conversations, and emotional recognition.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
              Project Gallery
            </p>
            <h1 className="text-text-primary mb-6">What we build</h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto">
              Purpose-built VR environments and assistive technology tools — each
              designed with therapists, tested with children, refined through
              real-world use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden border border-border hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  {p.image && (
                    <div
                      className="h-48 bg-cover bg-center img-warm"
                      style={{
                        backgroundImage: `url(${p.image})`,
                        backgroundColor: "var(--warmth)",
                      }}
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-2">
                      {p.category}
                    </p>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
