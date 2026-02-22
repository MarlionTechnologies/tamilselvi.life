import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Research collaboration, co-authorship, and academic partnership opportunities in assistive technology and VR rehabilitation.",
};

const fields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "you@university.edu", required: true },
  { name: "affiliation", label: "Affiliation", type: "text" as const, placeholder: "University, institute, or organization", required: true },
  {
    name: "area",
    label: "Area of Interest",
    type: "select" as const,
    placeholder: "Select one...",
    options: ["VR/AR for Therapy", "Brain-Computer Interfaces", "Assistive Robotics", "Special Education", "Clinical Research", "Ecosystem Products", "Other"],
    required: true,
  },
  { name: "message", label: "Collaboration Proposal", type: "textarea" as const, placeholder: "Describe your research interests and how you see us working together.", required: false },
];

export default function CollaboratePage() {
  return (
    <main>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-depth font-medium mb-4">
                  For Researchers & Educators
                </p>
                <h1 className="text-text-primary mb-6">Collaborate</h1>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    We believe in open collaboration. Our research spans VR
                    rehabilitation, brain-computer interfaces, assistive
                    robotics, and community care — and we are always looking for
                    thoughtful partners.
                  </p>
                  <p>
                    Current collaborations include partnerships with Ashland
                    University (USA), Kerckhoffs/Innovate UK, and several
                    Indian institutions.
                  </p>
                </div>
                <div className="mt-8 p-5 bg-depth/5 rounded-xl">
                  <p className="text-sm font-medium text-text-primary mb-2">
                    Open opportunities:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>Co-authorship on upcoming publications</li>
                    <li>Joint grant proposals (DST, SERB, international)</li>
                    <li>Visiting researcher programmes</li>
                    <li>Methodology and data exchange</li>
                    <li>Workshop and conference co-organization</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <ContactForm fields={fields} audience="collaborate" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
