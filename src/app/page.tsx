import { HeroSection } from "@/components/sections/HeroSection";
import { NumbersSection } from "@/components/sections/NumbersSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { DoorwaysSection } from "@/components/sections/DoorwaysSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NumbersSection />
      <WhatWeDoSection />
      <ValidationSection />
      <DoorwaysSection />
    </main>
  );
}
