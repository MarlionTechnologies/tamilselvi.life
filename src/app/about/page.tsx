import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { milestones } from "@/content/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dr. D. Tamilselvi — Professor of IT at TCE Madurai, 23+ years of building bridges between technology and therapy for children with special needs.",
};

const typeColors: Record<string, string> = {
  career: "bg-depth",
  research: "bg-sky-dark",
  award: "bg-heart",
  impact: "bg-heart-light",
  vision: "bg-depth-light",
};

const collaborations = [
  {
    name: "Kewaunee Scientific",
    type: "MoU Partner",
    description: "Lab infrastructure and equipment partnership for VR research facilities.",
  },
  {
    name: "Kerckhoffs / TeenyWeeny VR",
    type: "International Collaboration",
    description: "UK-based VR development partnership through Innovate UK programme.",
  },
  {
    name: "Marlion (Merlion)",
    type: "Synergic Partner",
    description: "Assistive technology startup collaboration for product development.",
  },
  {
    name: "Ashland University",
    type: "Academic Exchange",
    description: "International academic collaboration for research and knowledge exchange.",
  },
  {
    name: "IIT Madras",
    type: "Incubation & Research",
    description: "TXR Solutions incubated in GDC I-NCUBATE 18th Cohort. EMPOWER conference showcase.",
  },
  {
    name: "Zoho Corporation",
    type: "Industry Visit",
    description: "CEO Sridhar Vembu visited TCE campus to see VR assistive technology demonstrations.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                  Not a biography. A letter of introduction.
                </p>
                <h1 className="text-text-primary mb-6">
                  Dr. D. Tamilselvi
                </h1>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Professor of Information Technology at Thiagarajar College of
                    Engineering, Madurai. PhD in Robotics from Anna University.
                    23 years of teaching. 10 years of building assistive
                    technology that reaches real children.
                  </p>
                  <p>
                    She walked into her first special school in 2016. What she
                    saw changed everything. Children who struggled with
                    traditional therapy came alive in virtual worlds. From that
                    moment, the engineering lab became a bridge — connecting
                    technology, therapists, parents, and children in a shared
                    mission.
                  </p>
                  <p>
                    Today, her work spans 8+ special schools, 1000+ children,
                    80+ mentored students, and a vision for 9 interconnected
                    assistive products that could change how communities support
                    people with special needs.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="w-72 h-96 sm:w-80 sm:h-[28rem] rounded-2xl bg-cover bg-center bg-warmth img-warm shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    style={{
                      backgroundImage: "url(/images/profile/dr-tamilselvi.jpg)",
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-depth text-white px-5 py-3 rounded-xl shadow-lg">
                    <p className="text-sm font-medium">23+ years</p>
                    <p className="text-xs text-sky-light/70">of dedication</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                The Journey
              </p>
              <h2 className="text-text-primary">Milestones</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={`${m.year}-${m.title}`} delay={i * 60}>
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${typeColors[m.type]} flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">
                          {m.year.slice(-2)}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-1">
                        {m.year}
                      </p>
                      <h3 className="text-base font-semibold text-text-primary mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 sm:py-28 bg-warmth-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                Partnerships
              </p>
              <h2 className="text-text-primary">Collaborations</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collaborations.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full">
                  <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-2">
                    {c.type}
                  </p>
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {c.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Students */}
      <section className="py-20 sm:py-28 bg-depth text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-sky-light/60 mb-4">
              Mentorship
            </p>
            <h2 className="text-white mb-6">
              80+ students have been part of this journey.
            </h2>
            <p className="text-sky-light/80 leading-relaxed mx-auto mb-8">
              From undergraduate projects to research internships, students at
              TCE learn by building technology that matters. The Assistive
              Technology Club, founded in 2022, brings them together to work on
              real-world problems under Dr. Tamilselvi&apos;s guidance.
            </p>
            <Button href="/connect/join" variant="primary" size="lg">
              Join the Team
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Gratitude — TCE */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-text-muted font-medium mb-4">
                Gratitude
              </p>
              <h2 className="text-text-primary">
                None of this would be possible alone.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-warmth-light rounded-2xl p-8 sm:p-10">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Dr. Tamilselvi owes an immense debt of gratitude to{" "}
                  <strong className="text-text-primary">
                    Thiagarajar College of Engineering
                  </strong>
                  , the institution that has been her home for over two decades.
                  Without their unwavering support, this work would not exist.
                </p>
                <p>
                  She is deeply grateful to the college management and{" "}
                  <strong className="text-text-primary">
                    Chairman Mrs. Uma Kannan
                  </strong>{" "}
                  for believing in the vision of assistive technology and
                  providing the freedom and resources to pursue it. Their trust
                  has made it possible to build a VR lab, establish research
                  groups, and take this work beyond the campus.
                </p>
                <p>
                  To{" "}
                  <strong className="text-text-primary">
                    Dr. Daisy, Head of the IT Department
                  </strong>
                  , for her constant encouragement and for creating a department
                  culture where innovation in service of others is celebrated.
                </p>
                <p>
                  To every{" "}
                  <strong className="text-text-primary">
                    colleague, fellow faculty member, and staff
                  </strong>{" "}
                  at TCE who has supported these initiatives — whether through
                  collaboration, time, encouragement, or simply showing up when
                  it mattered.
                </p>
                <p>
                  And to the{" "}
                  <strong className="text-text-primary">
                    students of TCE
                  </strong>{" "}
                  — past and present — who have poured their energy, creativity,
                  and compassion into building technology that serves children
                  with special needs. You are the heart of this journey.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-warmth-dark/20 text-center">
                <p className="text-sm text-depth font-medium italic font-display">
                  &ldquo;The college gave me the ground to stand on. The students
                  gave me the reason to keep building.&rdquo;
                </p>
                <p className="text-xs text-text-muted mt-2">
                  — Dr. D. Tamilselvi
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
