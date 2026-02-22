import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { publications, TOTAL_PUBLICATIONS } from "@/content/publications";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "VR therapy for autism, research projects, the VR lab at TCE Madurai, and 33 peer-reviewed publications. A decade of building bridges between technology and therapy.",
};

/* ── Three Pillars ── */
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

/* ── All 6 Projects ── */
const projects = [
  {
    title: "Enchanting Forest",
    category: "VR Therapy Environment",
    description:
      "A calming forest setting for sensory regulation and attention training. Children navigate paths, identify animals, and respond to audio cues.",
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

/* ── Lab Equipment ── */
const equipment = [
  { name: "HTC Vive Pro", category: "VR Headset" },
  { name: "Meta Quest 2 & 3", category: "Standalone VR" },
  { name: "Motion Tracking Sensors", category: "Input" },
  { name: "Kewaunee Lab Furniture", category: "Infrastructure" },
  { name: "High-Performance Workstations", category: "Compute" },
  { name: "Unity & Unreal Engine", category: "Software" },
];

/* ── Lab Photo Grid ── */
const labPhotos = [
  { src: "/images/hero/vr-lab-setup.jpg", span: "col-span-2", alt: "VR Lab full setup at TCE Madurai" },
  { src: "/images/hero/child-wheelchair-vr.jpg", span: "", alt: "Child in wheelchair experiencing VR therapy" },
  { src: "/images/hero/wheelchair-meta-quest.jpg", span: "", alt: "Child using Meta Quest headset for therapy" },
  { src: "/images/hero/govt-school-girls.jpg", span: "", alt: "Government school students in VR session" },
  { src: "/images/hero/spark-school.jpg", span: "", alt: "Spark School VR therapy demonstration" },
];


export default function WorkPage() {
  return (
    <main>
      {/* ═══ Hero ═══ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/vr-lab-setup.jpg"
            alt="VR Lab at TCE Madurai"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,27,24,0.88) 0%, rgba(30,27,24,0.75) 50%, rgba(30,27,24,0.92) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="mb-6" style={{ color: "#F5F0EB" }}>
              Where technology meets therapy
            </h1>
            <p
              className="text-lg leading-relaxed mx-auto max-w-2xl"
              style={{ color: "#B5A99D" }}
            >
              A decade of research, development, and real-world impact — from the
              VR lab at TCE Madurai to special school classrooms across South India.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-14 mt-10">
              {[
                { value: "8+", label: "Schools" },
                { value: "1000+", label: "Children" },
                { value: String(TOTAL_PUBLICATIONS), label: "Publications" },
                { value: "80+", label: "Students" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl sm:text-4xl font-display font-bold"
                    style={{ color: "#F5F0EB" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider mt-1"
                    style={{ color: "#9A8E82" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 1. The Challenge ═══ */}
      <section className="py-20 sm:py-28 bg-white" id="vr-therapy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
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
                <div className="flex gap-8 mt-6">
                  <div>
                    <p className="text-2xl font-display font-bold text-depth">8+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Schools</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-depth">1000+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Children</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden col-span-2">
                  <Image
                    src="/images/hero/child-wheelchair-vr.jpg"
                    alt="Child experiencing VR therapy"
                    fill
                    className="object-cover img-warm"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden">
                  <Image
                    src="/images/therapy/parent-child-vr.jpg"
                    alt="Parent and child in VR therapy session"
                    fill
                    className="object-cover img-warm"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden">
                  <Image
                    src="/images/therapy/spark-therapist.jpg"
                    alt="Therapist at Spark School"
                    fill
                    className="object-cover img-warm"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ 2. Three Pillars of Care ═══ */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
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

      {/* ═══ 3. Projects ═══ */}
      <section className="py-20 sm:py-28 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-text-primary">
                Purpose-built therapy environments
              </h2>
              <p className="text-text-secondary mt-3 max-w-lg mx-auto">
                Each designed with therapists, tested with children, refined through
                real-world use.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden border border-border hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full flex flex-col">
                  {p.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover img-warm"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-28 bg-warmth-light flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-depth/10 flex items-center justify-center text-depth">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                          <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1">
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

      {/* ═══ 4. The VR Lab ═══ */}
      <section className="py-20 sm:py-28 bg-warmth-light" id="lab">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-depth font-medium mb-4">
                Infrastructure
              </p>
              <h2 className="text-text-primary mb-4">
                The VR Lab at TCE Madurai
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Established in 2018 with a DST-CSRI grant of Rs. 33.8 Lakh.
                Where engineering meets therapy — housing HTC Vive Pro and Meta Quest
                headsets, motion sensors, and purpose-built therapy software.
              </p>
            </div>
          </ScrollReveal>

          {/* Lab Photo Grid */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
              {labPhotos.map((img, i) => (
                <div
                  key={i}
                  className={`relative h-48 sm:h-64 rounded-xl overflow-hidden ${img.span}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover img-warm"
                    sizes={img.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Equipment Grid */}
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-text-primary text-center mb-6">
                Equipment & Software
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {equipment.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                  >
                    <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-8">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-depth">2018</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Established</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-depth">Rs.33.8L</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">DST-CSRI Grant</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 5. Publications ═══ */}
      <section
        className="py-20 sm:py-28"
        id="publications"
        style={{ background: "linear-gradient(180deg, #2E2723 0%, #252120 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <h2 style={{ color: "#F5F0EB" }}>
                  {TOTAL_PUBLICATIONS} peer-reviewed publications
                </h2>
                <p className="mt-3 max-w-lg" style={{ color: "#9A8E82" }}>
                  Springer, IEEE, ACM, and international conferences across
                  Italy, Malaysia, Singapore, and India. Representative papers below.
                </p>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-3xl font-display font-bold" style={{ color: "#F5F0EB" }}>
                    {TOTAL_PUBLICATIONS}
                  </p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "#7A6E62" }}>
                    Publications
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold" style={{ color: "#F5F0EB" }}>
                    3
                  </p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "#7A6E62" }}>
                    International
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 60}>
                <div
                  className="rounded-xl p-5 transition-colors duration-200"
                  style={{
                    background: pub.highlight
                      ? "rgba(196, 113, 78, 0.08)"
                      : "rgba(255,255,255,0.03)",
                    border: pub.highlight
                      ? "1px solid rgba(196, 113, 78, 0.2)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded flex-shrink-0"
                      style={{
                        background: "rgba(196, 113, 78, 0.15)",
                        color: "var(--heart-light)",
                      }}
                    >
                      {pub.year}
                    </span>
                    <span className="text-xs capitalize" style={{ color: "#7A6E62" }}>
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mb-1" style={{ color: "#F5F0EB" }}>
                    {pub.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#9A8E82" }}>
                    {pub.venue}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <p className="text-sm mb-6" style={{ color: "#7A6E62" }}>
                For a complete list of publications and DOIs, please contact us.
              </p>
              <Button href="/connect/collaborate" variant="primary" size="lg">
                Request Full Publication List
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTAs ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-text-primary mb-4">Want to be part of this?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Whether you are a parent, researcher, student, or funder — there is a
              place for you in this work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/connect/support" variant="secondary" size="lg">
                Find Support for a Child
              </Button>
              <Button href="/connect/collaborate" variant="outline" size="lg">
                Collaborate With Us
              </Button>
              <Button href="/connect/join" variant="outline" size="lg">
                Join the Team
              </Button>
              <Button href="/ecosystem" variant="secondary" size="lg">
                See the Ecosystem Vision
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
