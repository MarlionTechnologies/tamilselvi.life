import { ScrollReveal } from "@/components/ui/ScrollReveal";

const endorsements = [
  { name: "Sathya Special School", type: "Letter of Appreciation" },
  { name: "JIPMER Pondicherry", type: "Clinical Endorsement" },
  { name: "ATF Awards 2024", type: "Runner-Up" },
  { name: "IIT-M KRIA 2024", type: "Top 10" },
  { name: "DST-CSRI", type: "Government Grant" },
];

export function ValidationSection() {
  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2E2723 0%, #252120 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            {/* Quote mark */}
            <div
              className="w-10 h-10 mx-auto mb-8 flex items-center justify-center font-display text-4xl"
              style={{ color: "var(--heart)", opacity: 0.6 }}
            >
              &ldquo;
            </div>

            <blockquote
              className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal italic mb-8"
              style={{ color: "#F5F0EB" }}
            >
              The VR therapy sessions have brought visible improvement in the
              attention span and social interaction of our children. We are
              grateful for Dr. Tamilselvi&apos;s dedication and the team&apos;s
              consistent engagement with our school.
            </blockquote>

            <div className="flex flex-col items-center gap-1">
              <p className="font-medium text-base" style={{ color: "var(--sky)" }}>
                Sathya Special School, Pondicherry
              </p>
              <p className="text-sm" style={{ color: "#9A8E82" }}>
                From the Letter of Appreciation
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="mt-16 pt-10"
            style={{ borderTop: "1px solid rgba(196, 113, 78, 0.15)" }}
          >
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
              {endorsements.map((e) => (
                <div key={e.name} className="text-center">
                  <p className="text-sm font-medium" style={{ color: "#C4B8AA" }}>
                    {e.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#7A6E62" }}>
                    {e.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
