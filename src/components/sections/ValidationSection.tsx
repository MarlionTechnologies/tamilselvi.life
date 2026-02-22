import { ScrollReveal } from "@/components/ui/ScrollReveal";

const endorsements = [
  { name: "Sathya Special School", type: "Letter of Appreciation" },
  { name: "JIPMER Pondicherry", type: "Clinical Endorsement" },
  { name: "ATF Awards 2025", type: "Runner-Up" },
  { name: "IIT-M KRIA 2024", type: "Top 10" },
  { name: "DST-CSRI", type: "Government Grant" },
];

export function ValidationSection() {
  return (
    <section className="py-24 sm:py-32 bg-depth text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <svg
              className="w-10 h-10 mx-auto mb-8 text-sky opacity-60"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M12 4C6 4 2 8 2 14c0 8 10 18 10 18s10-10 10-18C22 8 18 4 12 4zM28 4c-6 0-10 4-10 10 0 8 10 18 10 18s10-10 10-18C38 8 34 4 28 4z" opacity="0.3" />
              <text x="6" y="28" fontSize="28" fontFamily="Georgia, serif">&ldquo;</text>
            </svg>
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal italic mb-8">
              The VR therapy sessions have brought visible improvement in the
              attention span and social interaction of our children. We are
              grateful for Dr. Tamilselvi&apos;s dedication and the team&apos;s
              consistent engagement with our school.
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sky-light font-medium text-base">
                Sathya Special School, Madurai
              </p>
              <p className="text-white/50 text-sm">
                From the Letter of Appreciation
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-8">
              Recognized by
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {endorsements.map((e) => (
                <div key={e.name} className="text-center">
                  <p className="text-white/80 text-sm font-medium">{e.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{e.type}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
