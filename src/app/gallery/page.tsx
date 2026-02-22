import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and moments from 10 years of VR therapy research, school visits, conferences, and student engagement.",
};

const categories = [
  "All",
  "Therapy",
  "Schools",
  "Lab",
  "Workshops",
  "Awards",
  "Partnerships",
] as const;

const gallery = [
  // Therapy & VR Sessions
  { src: "/images/hero/child-wheelchair-vr.jpg", alt: "Child in wheelchair experiencing VR therapy", category: "Therapy" },
  { src: "/images/hero/wheelchair-meta-quest.jpg", alt: "VR therapy session with Meta Quest headset", category: "Therapy" },
  { src: "/images/therapy/wheelchair-vr-assist.jpg", alt: "Dr. Tamilselvi assisting wheelchair user with VR at IIT Madras", category: "Therapy" },
  { src: "/images/therapy/parent-child-vr.jpg", alt: "Parent and child experiencing VR therapy together at TCE", category: "Therapy" },
  { src: "/images/therapy/children-assessment.jpg", alt: "Children assessment session at TCE VR Lab", category: "Therapy" },
  { src: "/images/therapy/spark-therapist.jpg", alt: "Therapist interaction at Spark School Madurai", category: "Therapy" },
  { src: "/images/therapy/deepam-therapist.jpg", alt: "Therapist working with children at Deepam Special School, Pondicherry", category: "Therapy" },
  { src: "/images/therapy/therapist-workshop.jpg", alt: "Therapist workshop on VR-based autism assessment", category: "Therapy" },
  { src: "/images/therapy/music-therapy.jpg", alt: "Music therapy session for children with autism", category: "Therapy" },
  { src: "/images/therapy/music-therapy-stall.jpg", alt: "Music therapy demonstration stall at IIT Empower", category: "Therapy" },
  { src: "/images/therapy/parent-visit.jpg", alt: "Parents visiting TCE for therapy assessment", category: "Therapy" },

  // Schools
  { src: "/images/hero/spark-school.jpg", alt: "Spark School Madurai — VR therapy demonstration", category: "Schools" },
  { src: "/images/hero/govt-school-girls.jpg", alt: "Government school girls experiencing VR with excitement", category: "Schools" },
  { src: "/images/schools/sathya-school.jpg", alt: "Sathya Special School, Madurai", category: "Schools" },
  { src: "/images/schools/deepam-school.jpg", alt: "Deepam Special School, Pondicherry", category: "Schools" },
  { src: "/images/schools/jipmer.jpg", alt: "JIPMER Hospital, Pondicherry — clinical assessment", category: "Schools" },
  { src: "/images/schools/shaksham-school.jpg", alt: "Shaksham Special School visit", category: "Schools" },
  { src: "/images/schools/virudhunagar-school.jpg", alt: "Virudhunagar Special School visit", category: "Schools" },
  { src: "/images/schools/thiagarajar-mills-school.jpg", alt: "Thiagarajar Mills School, Madurai", category: "Schools" },

  // Lab
  { src: "/images/hero/vr-lab-setup.jpg", alt: "VR Lab at TCE — full therapy assessment setup", category: "Lab" },
  { src: "/images/lab/reporter-demo.jpg", alt: "HTC Vive Pro demonstration for media reporter", category: "Lab" },
  { src: "/images/lab/reporter.jpg", alt: "Media coverage of VR therapy lab", category: "Lab" },
  { src: "/images/lab/alumni-visit.jpg", alt: "Alumni visiting the Cognitive Science Research Lab", category: "Lab" },

  // Workshops & Outreach
  { src: "/images/workshops/tce-workshop-2019.jpg", alt: "VR/AR Workshop 2019 at Thiagarajar College of Engineering", category: "Workshops" },
  { src: "/images/workshops/tce-workshop-2019-2.jpg", alt: "Workshop session on assistive technology, 2019", category: "Workshops" },
  { src: "/images/workshops/govt-school-demo.jpg", alt: "Government school VR awareness demonstration", category: "Workshops" },
  { src: "/images/workshops/govt-school-demo-2.jpg", alt: "Students at government school trying VR for the first time", category: "Workshops" },
  { src: "/images/workshops/govt-school-awareness.jpg", alt: "Government school assistive technology awareness event", category: "Workshops" },

  // Awards & Recognition
  { src: "/images/awards/conference-chair.jpg", alt: "Dr. Tamilselvi chairing ICTSID 2023 International Conference", category: "Awards" },
  { src: "/images/awards/atf-finalist-2024.jpg", alt: "Assistive Technology Foundation Awards 2024 — Finalist", category: "Awards" },
  { src: "/images/awards/kria-innovation-2024.jpg", alt: "KRIA Innovation Award 2024 — IIT Madras Top 10", category: "Awards" },
  { src: "/images/awards/service-to-humanity-medal.jpg", alt: "Service to Humanity Award 2023", category: "Awards" },
  { src: "/images/awards/kerckhoffs-certificate-2023.jpg", alt: "Kerckhoffs Institute UK Collaboration Certificate", category: "Awards" },
  { src: "/images/awards/ceremony-2023.jpg", alt: "Award ceremony 2023 — recognition for assistive technology work", category: "Awards" },
  { src: "/images/awards/ceremony-2023-2.jpg", alt: "Award presentation at 2023 ceremony", category: "Awards" },
  { src: "/images/awards/alagappa-conference.jpg", alt: "Alagappa University Special Education Conference", category: "Awards" },

  // Partnerships & Collaborations
  { src: "/images/collaborations/kewaunee-visit.jpg", alt: "Kewaunee team visiting TCE VR Lab", category: "Partnerships" },
  { src: "/images/collaborations/kewaunee-team.jpg", alt: "Kewaunee Bangalore collaboration meeting", category: "Partnerships" },
  { src: "/images/partnerships/kewaunee-team-full.jpg", alt: "Full team with Kewaunee at collaboration event", category: "Partnerships" },
  { src: "/images/partnerships/xcentric-group.jpg", alt: "X-Centric US sponsorship — group photo with Mr. Premkumar", category: "Partnerships" },
  { src: "/images/partnerships/xcentric-gamedev.jpg", alt: "Game development workshop sponsored by X-Centric US", category: "Partnerships" },
  { src: "/images/partnerships/marlion-school-visit.jpg", alt: "Marlion Technologies partnership — school visit", category: "Partnerships" },

  // Vision
  { src: "/images/ecosystem/covers/front-cover.png", alt: "Smart Assistive Technology Ecosystem — book cover", category: "Partnerships" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-warmth-light to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-text-primary mb-6">Gallery</h1>
            <p className="text-lg text-text-secondary leading-relaxed mx-auto">
              Moments from a decade of work — therapy sessions, school visits,
              workshops, awards, and the people who make it all possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filters (visual labels) */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-warmth text-text-primary"
              >
                {cat} {cat !== "All" && `(${gallery.filter((g) => g.category === cat).length})`}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery.map((img, i) => (
              <ScrollReveal key={img.src} delay={Math.min(i * 40, 400)}>
                <div className="break-inside-avoid rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div
                    className="w-full h-56 sm:h-64 bg-cover bg-center img-warm"
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundColor: "var(--warmth)",
                    }}
                  />
                  <div className="p-3 bg-white">
                    <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-1">
                      {img.category}
                    </p>
                    <p className="text-sm text-text-secondary leading-snug">
                      {img.alt}
                    </p>
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
