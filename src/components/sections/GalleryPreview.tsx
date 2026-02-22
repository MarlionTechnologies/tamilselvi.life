import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const featured = [
  { src: "/images/hero/child-wheelchair-vr.jpg", alt: "Child in wheelchair experiencing VR therapy", span: "col-span-2 row-span-2" },
  { src: "/images/therapy/wheelchair-vr-assist.jpg", alt: "Dr. Tamilselvi assisting with VR at IIT Madras", span: "" },
  { src: "/images/hero/spark-school.jpg", alt: "Spark School VR demonstration", span: "" },
  { src: "/images/awards/conference-chair.jpg", alt: "Chairing ICTSID 2023 International Conference", span: "col-span-2" },
  { src: "/images/collaborations/kewaunee-team.jpg", alt: "Kewaunee Bangalore collaboration", span: "" },
  { src: "/images/workshops/tce-workshop-2019.jpg", alt: "VR/AR Workshop 2019 at TCE", span: "" },
  { src: "/images/hero/govt-school-girls.jpg", alt: "Government school girls experiencing VR", span: "" },
  { src: "/images/therapy/music-therapy.jpg", alt: "Music therapy session", span: "" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-text-primary">Gallery</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-depth text-sm font-medium hover:gap-3 transition-all"
            >
              View all 42 photos
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[160px]">
          {featured.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 60}>
              <Link
                href="/gallery"
                className={`group relative block rounded-xl overflow-hidden h-full ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover img-warm transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    img.span.includes("col-span-2")
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 50vw, 25vw"
                  }
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,18,16,0.7) 0%, transparent 60%)",
                  }}
                />
                <p
                  className="absolute bottom-2 left-3 right-3 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {img.alt}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
