import type { Metadata } from "next";
import { SponsorPageClient } from "./SponsorClient";

export const metadata: Metadata = {
  title: "Sponsor a Product",
  description:
    "Sponsor assistive technology for children with autism. Choose a tier, pick a product, and help accelerate the day a child gets access to technology that understands them.",
};

export default async function SponsorPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return <SponsorPageClient initialProduct={product} />;
}
