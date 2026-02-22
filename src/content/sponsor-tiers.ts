export interface SponsorTier {
  id: string;
  name: string;
  tagline: string;
  range: string;
  rangeMin: number;
  color: string;
  icon: string;
  benefits: string[];
  highlighted?: boolean;
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "spark",
    name: "A Spark",
    tagline: "Light the first match. Every spark matters.",
    range: "Rs. 5,000 – 15,000",
    rangeMin: 5000,
    color: "--heart-light",
    icon: "spark",
    benefits: [
      "Your name on the Hall of Fame",
      "Personalized thank-you letter from Dr. Tamilselvi",
      "Early-bird pricing on future products",
      "Quarterly impact newsletter",
    ],
  },
  {
    id: "lamp",
    name: "A Lamp",
    tagline: "Steady light that guides the way forward.",
    range: "Rs. 15,000 – 50,000",
    rangeMin: 15000,
    color: "--heart",
    icon: "lamp",
    benefits: [
      "Everything in A Spark",
      "Your name or logo on the sponsored product page",
      "Priority early-bird access to new products at discounted rates",
      "Invitation to annual virtual demo day",
      "Certificate of contribution",
    ],
  },
  {
    id: "bridge",
    name: "A Bridge",
    tagline: "Connect what exists to what is possible.",
    range: "Rs. 50,000 – 2,00,000",
    rangeMin: 50000,
    color: "--depth-light",
    icon: "bridge",
    benefits: [
      "Everything in A Lamp",
      "One free product from the ecosystem (your choice)",
      "Named acknowledgment in the next research publication",
      "One lab visit for you or your team",
      "Private progress report on your sponsored product",
    ],
    highlighted: true,
  },
  {
    id: "beacon",
    name: "A Beacon",
    tagline: "A light visible from far away, drawing others in.",
    range: "Rs. 2,00,000 – 10,00,000",
    rangeMin: 200000,
    color: "--depth",
    icon: "beacon",
    benefits: [
      "Everything in A Bridge",
      "Up to 3 free products from the ecosystem",
      "Named product sponsorship (e.g., 'NeuroSense, supported by [You]')",
      "Co-invitation to school deployment sessions",
      "Featured story with photo in the Hall of Fame",
    ],
  },
  {
    id: "constellation",
    name: "A Constellation",
    tagline: "A pattern of light that changes the sky.",
    range: "Rs. 10,00,000+",
    rangeMin: 1000000,
    color: "--depth-dark",
    icon: "constellation",
    benefits: [
      "Everything in A Beacon",
      "Full product suite — all 9 ecosystem products",
      "Lifelong profit-share royalty on your sponsored product (terms finalized in person)",
      "Seat on the product advisory council",
      "Co-branded pilot programme at a school of your choice",
      "Annual in-person impact review with Dr. Tamilselvi",
      "Permanent recognition plaque at the VR Lab",
    ],
  },
];
