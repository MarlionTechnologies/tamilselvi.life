import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The VR Lab",
  description:
    "Cognitive Science Research Group (CSRG) VR Lab at TCE Madurai — HTC Vive Pro, Meta Quest, motion sensors, and purpose-built therapy software.",
};

const equipment = [
  { name: "HTC Vive Pro", category: "VR Headset" },
  { name: "Meta Quest 2 & 3", category: "Standalone VR" },
  { name: "Motion Tracking Sensors", category: "Input" },
  { name: "Kewaunee Lab Furniture", category: "Infrastructure" },
  { name: "High-Performance Workstations", category: "Compute" },
  { name: "Unity & Unreal Engine", category: "Software" },
];

export default function LabPage() {
  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-depth to-depth-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sky-light text-sm uppercase tracking-widest font-medium mb-4">
              Infrastructure
            </p>
            <h1 className="text-white mb-6">The VR Lab</h1>
            <p className="text-lg text-sky-light/80 leading-relaxed mx-auto">
              Established in 2018 at Thiagarajar College of Engineering with a
              DST-CSRI grant of Rs. 33.8 Lakh. Where engineering meets therapy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { src: "/images/hero/vr-lab-setup.jpg", span: "col-span-2" },
                { src: "/images/hero/child-wheelchair-vr.jpg", span: "" },
                { src: "/images/hero/wheelchair-meta-quest.jpg", span: "" },
                { src: "/images/hero/govt-school-girls.jpg", span: "" },
                { src: "/images/hero/spark-school.jpg", span: "" },
              ].map((img, i) => (
                <div
                  key={i}
                  className={`h-48 sm:h-64 rounded-xl bg-cover bg-center img-warm ${img.span}`}
                  style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundColor: "var(--warmth)",
                  }}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 sm:py-24 bg-warmth-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-text-primary text-center mb-12">Equipment & Software</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {equipment.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 60}>
                <div className="bg-white rounded-xl p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <p className="text-xs text-depth font-semibold uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm font-medium text-text-primary">
                    {item.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Button href="/connect/collaborate" variant="outline" size="md">
                Visit the Lab
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
