import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Internships, projects, and the Assistive Technology Club — your skills can make a real difference for children with special needs.",
};

const fields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "you@college.edu", required: true },
  { name: "college", label: "College / University", type: "text" as const, placeholder: "Your institution", required: true },
  {
    name: "interest",
    label: "What interests you?",
    type: "select" as const,
    placeholder: "Select one...",
    options: ["Research Internship", "Project Collaboration", "Assistive Technology Club", "Volunteering", "Other"],
    required: true,
  },
  { name: "message", label: "Tell us about yourself", type: "textarea" as const, placeholder: "Your skills, interests, and what you hope to contribute.", required: false },
];

export default function JoinPage() {
  return (
    <main>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-depth-light font-medium mb-4">
                  For Students & Volunteers
                </p>
                <h1 className="text-text-primary mb-6">Join the team</h1>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    80+ students have already been part of this journey. From
                    game development and VR design to machine learning and
                    embedded systems — there is always meaningful work to do.
                  </p>
                  <p>
                    The Assistive Technology Club at TCE meets regularly, and
                    we welcome students from any institution who want to build
                    technology that matters.
                  </p>
                </div>
                <div className="mt-8 p-5 bg-depth/5 rounded-xl">
                  <p className="text-sm font-medium text-text-primary mb-2">
                    What you will work on:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>VR environment development (Unity, Unreal)</li>
                    <li>Brain-computer interface research</li>
                    <li>IoT and sensor integration for assistive devices</li>
                    <li>Mobile app development for therapy tracking</li>
                    <li>Field visits to special schools (with guidance)</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <ContactForm fields={fields} audience="join" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
