"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Data ────────────────────────────────────────── */

const categories = [
  "All",
  "Therapy",
  "Schools",
  "Lab",
  "Workshops",
  "Awards",
  "Partnerships",
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  featured?: boolean;
}

const gallery: GalleryItem[] = [
  // ── Therapy & VR Sessions ──
  { src: "/images/hero/child-wheelchair-vr.jpg", alt: "Child in wheelchair experiencing VR therapy", category: "Therapy", featured: true },
  { src: "/images/hero/wheelchair-meta-quest.jpg", alt: "VR therapy session with Meta Quest headset", category: "Therapy" },
  { src: "/images/therapy/wheelchair-vr-assist.jpg", alt: "Dr. Tamilselvi assisting wheelchair user with VR at IIT Madras", category: "Therapy", featured: true },
  { src: "/images/therapy/parent-child-vr.jpg", alt: "Parent and child experiencing VR therapy together at TCE", category: "Therapy" },
  { src: "/images/therapy/children-assessment.jpg", alt: "Children assessment session at TCE VR Lab", category: "Therapy" },
  { src: "/images/therapy/spark-therapist.jpg", alt: "Therapist interaction at Spark School Madurai", category: "Therapy" },
  { src: "/images/therapy/deepam-therapist.jpg", alt: "Therapist working with children at Deepam Special School, Pondicherry", category: "Therapy" },
  { src: "/images/therapy/therapist-workshop.jpg", alt: "Therapist workshop on VR-based autism assessment", category: "Therapy" },
  { src: "/images/therapy/music-therapy.jpg", alt: "Music therapy session for children with autism", category: "Therapy" },
  { src: "/images/therapy/music-therapy-stall.jpg", alt: "Music therapy demonstration stall at IIT Empower", category: "Therapy" },
  { src: "/images/therapy/parent-visit.jpg", alt: "Parents visiting TCE for therapy assessment", category: "Therapy" },

  // ── Schools ──
  { src: "/images/hero/spark-school.jpg", alt: "Spark School Madurai — VR therapy demonstration", category: "Schools", featured: true },
  { src: "/images/hero/govt-school-girls.jpg", alt: "Government school girls experiencing VR with excitement", category: "Schools", featured: true },
  { src: "/images/schools/sathya-school.jpg", alt: "Sathya Special School, Pondicherry", category: "Schools" },
  { src: "/images/schools/deepam-school.jpg", alt: "Deepam Special School, Pondicherry", category: "Schools" },
  { src: "/images/schools/jipmer.jpg", alt: "JIPMER Hospital, Pondicherry — clinical assessment", category: "Schools" },
  { src: "/images/schools/shaksham-school.jpg", alt: "Shaksham Special School visit", category: "Schools" },
  { src: "/images/schools/virudhunagar-school.jpg", alt: "Virudhunagar Special School visit", category: "Schools" },
  { src: "/images/schools/thiagarajar-mills-school.jpg", alt: "Thiagarajar Mills School, Madurai", category: "Schools" },

  // ── Lab ──
  { src: "/images/hero/vr-lab-setup.jpg", alt: "VR Lab at TCE — full therapy assessment setup", category: "Lab", featured: true },
  { src: "/images/lab/reporter-demo.jpg", alt: "HTC Vive Pro demonstration for media reporter", category: "Lab" },
  { src: "/images/lab/reporter.jpg", alt: "Media coverage of VR therapy lab", category: "Lab" },
  { src: "/images/lab/alumni-visit.jpg", alt: "Alumni visiting the Cognitive Science Research Lab", category: "Lab" },

  // ── Workshops ──
  { src: "/images/workshops/tce-workshop-2019.jpg", alt: "VR/AR Workshop 2019 at Thiagarajar College of Engineering", category: "Workshops", featured: true },
  { src: "/images/workshops/tce-workshop-2019-2.jpg", alt: "Workshop session on assistive technology, 2019", category: "Workshops" },
  { src: "/images/workshops/govt-school-demo.jpg", alt: "Government school VR awareness demonstration", category: "Workshops" },
  { src: "/images/workshops/govt-school-demo-2.jpg", alt: "Students at government school trying VR for the first time", category: "Workshops" },
  { src: "/images/workshops/govt-school-awareness.jpg", alt: "Government school assistive technology awareness event", category: "Workshops" },

  // ── Awards ──
  { src: "/images/awards/conference-chair.jpg", alt: "Dr. Tamilselvi chairing ICTSID 2023 International Conference", category: "Awards", featured: true },
  { src: "/images/awards/atf-finalist-2024.jpg", alt: "Assistive Technology Foundation Awards 2024 — Finalist", category: "Awards" },
  { src: "/images/awards/kria-innovation-2024.jpg", alt: "KRIA Innovation Award 2024 — IIT Madras Top 10", category: "Awards" },
  { src: "/images/awards/service-to-humanity-medal.jpg", alt: "Service to Humanity Award 2023", category: "Awards" },
  { src: "/images/awards/kerckhoffs-certificate-2023.jpg", alt: "Kerckhoffs Institute UK Collaboration Certificate", category: "Awards" },
  { src: "/images/awards/ceremony-2023.jpg", alt: "Award ceremony 2023 — recognition for assistive technology work", category: "Awards" },
  { src: "/images/awards/ceremony-2023-2.jpg", alt: "Award presentation at 2023 ceremony", category: "Awards" },
  { src: "/images/awards/alagappa-conference.jpg", alt: "Alagappa University Special Education Conference", category: "Awards" },

  // ── Partnerships ──
  { src: "/images/collaborations/kewaunee-visit.jpg", alt: "Kewaunee team visiting TCE VR Lab", category: "Partnerships" },
  { src: "/images/collaborations/kewaunee-team.jpg", alt: "Kewaunee Bangalore collaboration meeting", category: "Partnerships", featured: true },
  { src: "/images/partnerships/kewaunee-team-full.jpg", alt: "Full team with Kewaunee at collaboration event", category: "Partnerships" },
  { src: "/images/partnerships/xcentric-group.jpg", alt: "X-Centric US sponsorship — group photo with Mr. Premkumar", category: "Partnerships" },
  { src: "/images/partnerships/xcentric-gamedev.jpg", alt: "Game development workshop sponsored by X-Centric US", category: "Partnerships" },
  { src: "/images/partnerships/marlion-school-visit.jpg", alt: "Marlion Technologies partnership — school visit", category: "Partnerships" },
];

/* ─── Lightbox ────────────────────────────────────── */

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20, 18, 16, 0.94)" }}
      />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
        aria-label="Close lightbox"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-[1] w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Caption */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center px-6 max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium mb-2"
          style={{
            background: "rgba(196, 113, 78, 0.2)",
            color: "var(--heart-light)",
          }}
        >
          {item.category}
        </span>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          {item.alt}
        </p>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}

/* ─── Gallery Grid ────────────────────────────────── */

export function GalleryClient() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-b from-warmth-light to-warmth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] font-medium mb-4"
            style={{ color: "var(--heart)" }}
          >
            A Decade in Pictures
          </p>
          <h1 className="text-text-primary mb-6 font-display">Gallery</h1>
          <p className="text-lg text-text-secondary leading-relaxed mx-auto max-w-2xl">
            Therapy sessions, school visits, lab breakthroughs, awards, and the
            collaborations that power this work — every image tells a story
            of a child&apos;s world opening up.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section
        className="sticky top-16 lg:top-20 z-30 py-4"
        style={{
          background: "linear-gradient(180deg, #1E1B18 0%, #1A1815 100%)",
          borderBottom: "1px solid rgba(196, 113, 78, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const isActive = active === cat;
              const count = cat === "All" ? gallery.length : gallery.filter((g) => g.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                  style={{
                    background: isActive
                      ? "rgba(196, 113, 78, 0.18)"
                      : "rgba(255,255,255,0.04)",
                    color: isActive ? "var(--heart-light)" : "rgba(255,255,255,0.45)",
                    border: isActive
                      ? "1px solid rgba(196, 113, 78, 0.3)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {cat}
                  <span className="ml-1.5 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Exhibition Grid ── */}
      <section
        className="py-8 sm:py-12"
        style={{ background: "#1A1815" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]"
          >
            {filtered.map((item, i) => {
              const isFeatured = item.featured;
              return (
                <div
                  key={item.src}
                  role="button"
                  tabIndex={0}
                  className={`gallery-cell group relative rounded-lg overflow-hidden cursor-pointer ${
                    isFeatured
                      ? "col-span-2 row-span-2"
                      : ""
                  }`}
                  onClick={() => openLightbox(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } }}
                  style={{
                    animationDelay: `${Math.min(i * 40, 600)}ms`,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={isFeatured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(20,18,16,0.85) 0%, rgba(20,18,16,0.3) 50%, transparent 100%)",
                    }}
                  >
                    <span
                      className="inline-block self-start px-2 py-0.5 rounded text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-semibold mb-1.5"
                      style={{
                        background: "rgba(196, 113, 78, 0.25)",
                        color: "var(--heart-light)",
                      }}
                    >
                      {item.category}
                    </span>
                    <p
                      className="text-xs sm:text-sm leading-snug line-clamp-2"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item.alt}
                    </p>
                  </div>

                  {/* Subtle border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(196, 113, 78, 0.25)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Image count */}
          <p
            className="text-center mt-8 text-xs tracking-wider"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {filtered.length} {active === "All" ? "photographs" : `in ${active}`}
          </p>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
