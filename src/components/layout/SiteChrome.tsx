"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AiOrbLoader } from "@/components/assistant/AiOrbLoader";
import { PageTracker } from "@/components/analytics/PageTracker";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
      <AiOrbLoader />
      <PageTracker />
    </>
  );
}
