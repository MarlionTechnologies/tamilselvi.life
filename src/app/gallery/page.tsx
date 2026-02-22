import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and moments from 10 years of VR therapy research, school visits, conferences, and student engagement.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryClient />
    </main>
  );
}
