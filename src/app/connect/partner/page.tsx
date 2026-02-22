import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Support assistive technology that reaches real children. CSR partnerships, grants, and philanthropic collaboration.",
};

const fields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "you@organization.com", required: true },
  { name: "org", label: "Organization", type: "text" as const, placeholder: "Company or foundation name", required: false },
  {
    name: "type",
    label: "Type of Support",
    type: "select" as const,
    placeholder: "Select one...",
    options: ["CSR Partnership", "Grant / Funding", "Equipment / Infrastructure", "Mentorship / Advisory", "Other"],
    required: true,
  },
  { name: "message", label: "Tell us more", type: "textarea" as const, placeholder: "What draws you to this work? How would you like to contribute?", required: false },
];

export default function PartnerPage() {
  return (
    <main>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm uppercase tracking-widest text-heart font-medium mb-4">
                  For Funders & Supporters
                </p>
                <h1 className="text-text-primary mb-6">Partner with us</h1>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Every partnership helps us reach more children. Whether
                    through CSR initiatives, grants, equipment support, or
                    advisory — your involvement creates tangible impact.
                  </p>
                  <p>
                    We can share detailed impact reports, school visit
                    documentation, and research publications to help you
                    understand where your support goes.
                  </p>
                </div>
                <div className="mt-8 p-5 bg-warmth/40 rounded-xl">
                  <p className="text-sm font-medium text-text-primary mb-2">
                    What your support enables:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1.5">
                    <li>VR equipment for special schools that cannot afford it</li>
                    <li>Research and development of new therapy environments</li>
                    <li>Training programmes for therapists and educators</li>
                    <li>Expansion to underserved communities in rural India</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
                <ContactForm fields={fields} audience="partner" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
