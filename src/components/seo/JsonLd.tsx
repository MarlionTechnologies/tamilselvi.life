interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://tamilselvi.life/#person",
  name: "Dr. D. Tamilselvi",
  jobTitle: "Professor of Information Technology",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Thiagarajar College of Engineering",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625015",
      addressCountry: "IN",
    },
  },
  url: "https://tamilselvi.life",
  image: "https://tamilselvi.life/images/profile/dr-tamilselvi.jpg",
  email: "dtamilselvi@tce.edu",
  sameAs: [
    "https://www.linkedin.com/in/tamilselvi-dhamotharan-7884323b/",
  ],
  description:
    "Professor of IT at TCE Madurai, pioneering VR/AR assistive technology for children with autism. 23+ years of building bridges between technology and therapy.",
  knowsAbout: [
    "Virtual Reality Therapy",
    "Autism Rehabilitation",
    "Assistive Technology",
    "Cognitive Science",
    "Robotics",
    "Brain-Computer Interfaces",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Anna University",
  },
  award: [
    "ATF Best Assistive Tech Academic Initiative 2024",
    "IIT Madras KRIA Innovation Awards 2024 - Top 10",
    "Service to Humanity Award 2023",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tamilselvi.life/#website",
  name: "Dr. D. Tamilselvi — Assistive Technology for Every Child",
  url: "https://tamilselvi.life",
  description:
    "Portfolio website for Dr. D. Tamilselvi, Professor of IT at TCE Madurai, pioneering VR/AR assistive technology for children with autism.",
  inLanguage: "en",
  author: { "@id": "https://tamilselvi.life/#person" },
};
