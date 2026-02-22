import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AiOrbLoader } from "@/components/assistant/AiOrbLoader";
import { PageTracker } from "@/components/analytics/PageTracker";
import { JsonLd, personSchema, websiteSchema } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. D. Tamilselvi — Assistive Technology for Every Child",
    template: "%s | Dr. D. Tamilselvi",
  },
  description:
    "Professor of IT at TCE Madurai, pioneering VR/AR assistive technology for children with autism. 23+ years of building bridges between technology and therapy.",
  keywords: [
    "assistive technology",
    "autism therapy",
    "VR rehabilitation",
    "Dr Tamilselvi",
    "TCE Madurai",
    "cognitive rehabilitation",
    "special education technology",
  ],
  authors: [{ name: "Dr. D. Tamilselvi" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamilselvi.life",
    siteName: "Dr. D. Tamilselvi",
    title: "Dr. D. Tamilselvi — Assistive Technology for Every Child",
    description:
      "Pioneering VR/AR assistive technology for children with autism. 23+ years of dedication.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-background text-foreground`}
      >
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-depth focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <AiOrbLoader />
        <PageTracker />
      </body>
    </html>
  );
}
