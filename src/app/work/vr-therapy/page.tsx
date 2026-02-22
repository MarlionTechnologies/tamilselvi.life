import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "VR Therapy for Autism",
  description:
    "Using virtual reality to create safe, engaging therapy environments for children with autism. Research-backed, school-tested, clinically endorsed.",
};

const pillars = [
  {
    title: "Safe VR Environments",
    description:
      "Purpose-built virtual worlds — enchanted forests, ocean scenes, daily-life simulations — designed with therapists to match each child's comfort level and therapy goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Compare & Contrast Method",
    description:
      "A structured methodology that enables therapists to assess cognitive and behavioral progress through repeated VR interactions, comparing responses across sessions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Multi-Stakeholder Loop",
    description:
      "Therapists, parents, teachers, and doctors all participate in the feedback cycle — ensuring the technology adapts to each child, not the other way around.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
  },
];

const environments = [
  {
    title: "Enchanting Forest",
    description:
      "A calming forest environment for sensory regulation and attention training. Children navigate paths, identify animals, and respond to audio cues.",
    image: "/images/projects/enchanting-forest.png",
  },
  {
    title: "Ride to Destiny",
    description:
      "An interactive journey that builds decision-making skills through gamified challenges. Encourages social cognition and cause-effect understanding.",
    image: "/images/projects/ride-to-destiny.png",
  },
  {
    title: "Virtual Fishing",
    description:
      "A motor coordination and patience-building activity. Children learn to wait, aim, and celebrate success in a low-pressure aquatic setting.",
    image: "/images/projects/virtual-fishing.png",
  },
];

export default function VRTherapyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-depth to-depth-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/hero/vr-lab-setup.jpg)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sky-light text-sm uppercase tracking-widest font-medium mb-4">
              Core Research
            </p>
            <h1 className="text-white mb-6">VR Therapy for Autism</h1>
            <p className="text-lg sm:text-xl text-sky-light/80 leading-relaxed mx-auto max-w-2xl">
              Using virtual reality to create safe, engaging therapy environments
              that meet children where they are — turning virtual worlds into
              bridges for real growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-heart font-medium mb-4">
              The Challenge
            </p>
            <h2 className="text-text-primary mb-6">
              18 million children in India live with autism.
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Traditional therapy is expensive, inaccessible in rural areas, and
                often intimidating for children. Many families travel hours for a
                single session. Therapists are stretched thin. Children who need the
                most consistent support are the ones who receive the least.
              </p>
              <p>
                Virtual reality changes the equation. It creates a controlled,
                repeatable, engaging environment where a child can practice social
                interactions, motor skills, and cognitive tasks at their own pace —
                without fear of failure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Approach - 3 Pillars */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                Our Approach
              </p>
              <h2 className="text-text-primary">Three pillars of care</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full">
                  <div className="w-14 h-14 rounded-xl bg-depth/10 flex items-center justify-center text-depth mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VR Environments */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                The Virtual Worlds
              </p>
              <h2 className="text-text-primary">
                Purpose-built therapy environments
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {environments.map((env, i) => (
              <ScrollReveal key={env.title} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white">
                  <div
                    className="h-56 bg-cover bg-center img-warm"
                    style={{
                      backgroundImage: `url(${env.image})`,
                      backgroundColor: "var(--warmth)",
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {env.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {env.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Lab */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                  Infrastructure
                </p>
                <h2 className="text-text-primary mb-6">The VR Lab at TCE</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Established in 2018 with support from a DST-CSRI grant of
                    Rs. 33.8 Lakh, the VR Lab at Thiagarajar College of
                    Engineering houses HTC Vive Pro and Meta Quest headsets,
                    motion sensors, and purpose-built therapy software.
                  </p>
                  <p>
                    The lab serves as a bridge between academic research and
                    real-world therapy — a place where engineering students,
                    therapists, parents, and children all work together.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/work/lab" variant="outline" size="md">
                    Explore the Lab
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="h-48 rounded-xl bg-cover bg-center img-warm"
                  style={{
                    backgroundImage: "url(/images/hero/vr-lab-setup.jpg)",
                    backgroundColor: "var(--warmth)",
                  }}
                />
                <div
                  className="h-48 rounded-xl bg-cover bg-center img-warm"
                  style={{
                    backgroundImage: "url(/images/hero/child-wheelchair-vr.jpg)",
                    backgroundColor: "var(--warmth)",
                  }}
                />
                <div
                  className="col-span-2 h-48 rounded-xl bg-cover bg-center img-warm"
                  style={{
                    backgroundImage: "url(/images/hero/wheelchair-meta-quest.jpg)",
                    backgroundColor: "var(--warmth)",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Evidence / Publications */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
              The Evidence
            </p>
            <h2 className="text-text-primary mb-6 mx-auto">
              33 publications. Peer-reviewed and conference-presented.
            </h2>
            <p className="text-text-secondary leading-relaxed mx-auto mb-8">
              Our work is published in Springer, IEEE, and presented at
              international conferences in Italy, Malaysia, and across India.
              Every claim is backed by data. Every environment is validated by
              therapists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/work/publications" variant="primary" size="lg">
                View Publications
              </Button>
              <Button href="/connect/collaborate" variant="outline" size="lg">
                Collaborate With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
