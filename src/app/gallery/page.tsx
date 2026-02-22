import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and moments from 10 years of VR therapy research, school visits, conferences, and student engagement.",
};

const gallery = [
  { src: "/images/hero/child-wheelchair-vr.jpg", alt: "Child in wheelchair experiencing VR therapy", category: "Therapy" },
  { src: "/images/hero/wheelchair-meta-quest.jpg", alt: "VR therapy session with Meta Quest headset", category: "Therapy" },
  { src: "/images/hero/govt-school-girls.jpg", alt: "Government school girls experiencing VR with excitement", category: "Outreach" },
  { src: "/images/hero/vr-lab-setup.jpg", alt: "VR Lab setup at TCE with therapy assessment in progress", category: "Lab" },
  { src: "/images/hero/spark-school.jpg", alt: "Spark School visit for VR therapy demonstration", category: "Schools" },
  { src: "/images/ecosystem/covers/front-cover.png", alt: "Smart Assistive Technology Ecosystem book cover", category: "Vision" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-text-primary mb-6">Gallery</h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto">
              Moments from a decade of work — special school visits, lab
              sessions, conferences, and the people who make it all possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 80}>
                <div className="break-inside-avoid rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                  <div
                    className="w-full h-64 sm:h-72 bg-cover bg-center img-warm"
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundColor: "var(--warmth)",
                    }}
                  />
                  <div className="p-4 bg-white">
                    <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-1">
                      {img.category}
                    </p>
                    <p className="text-sm text-text-secondary">{img.alt}</p>
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
