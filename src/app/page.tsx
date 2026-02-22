import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { NumbersSection } from "@/components/sections/NumbersSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { DoorwaysSection } from "@/components/sections/DoorwaysSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NumbersSection />
      <WhatWeDoSection />
      <ValidationSection />
      <GalleryPreview />
      <DoorwaysSection />
    </main>
  );
}
