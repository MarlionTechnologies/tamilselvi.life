"use client";

import dynamic from "next/dynamic";

const AiOrb = dynamic(
  () => import("./AiOrb").then((m) => m.AiOrb),
  { ssr: false }
);

export function AiOrbLoader() {
  return <AiOrb />;
}
