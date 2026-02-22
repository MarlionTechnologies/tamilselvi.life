import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Find Support",
  description:
    "Learn how VR therapy works for children with autism and special needs. Connect your school or child with our programme.",
};

const fields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  {
    name: "role",
    label: "You are a",
    type: "select" as const,
    placeholder: "Select one...",
    options: ["Parent", "Therapist", "Special Educator", "School Administrator", "Doctor / Clinician", "Other"],
    required: true,
  },
  { name: "location", label: "City / Location", type: "text" as const, placeholder: "Where are you based?", required: false },
  { name: "message", label: "How can we help?", type: "textarea" as const, placeholder: "Tell us about your situation and what kind of support you are looking for.", required: false },
];

export default function SupportPage() {
  return (
    <main>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-sky-dark font-medium mb-4">
                  For Parents, Therapists & Schools
                </p>
                <h1 className="text-text-primary mb-6">Find support</h1>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    If you are a parent, therapist, or school looking to
                    understand how VR therapy can help children with autism and
                    special needs — we are here to guide you.
                  </p>
                  <p>
                    Our sessions are designed with therapists and doctors. Every
                    VR environment is safe, controlled, and purpose-built for
                    therapy goals. We work with schools across Tamil Nadu and
                    Puducherry, and we are expanding.
                  </p>
                </div>
                <div className="mt-8 p-5 bg-sky/10 rounded-xl">
                  <p className="text-sm font-medium text-text-primary mb-2">
                    What to expect:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>Initial conversation to understand your needs</li>
                    <li>Guided introduction to VR therapy environments</li>
                    <li>Assessment and feedback from trained professionals</li>
                    <li>Ongoing support and progress tracking</li>
                    <li>Complete confidentiality and care</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <ContactForm fields={fields} audience="support" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
