export interface School {
  name: string;
  location: string;
  state: string;
  lat: number;
  lng: number;
  description: string;
  image?: string;
  highlight?: boolean;
}

export const schools: School[] = [
  {
    name: "Spark Vidhyala",
    location: "Madurai",
    state: "Tamil Nadu",
    lat: 9.925,
    lng: 78.12,
    description:
      "VR experience demonstration for 20+ students with special needs. Vibrant engagement with immersive therapy environments.",
    image: "/images/schools/spark-school.jpg",
    highlight: true,
  },
  {
    name: "Sathya Special School",
    location: "Pondicherry",
    state: "Puducherry",
    lat: 12.972,
    lng: 79.843,
    description:
      "Formal Letter of Appreciation confirming visible improvements in children's attention span and social interaction.",
    image: "/images/schools/sathya-school.jpg",
    highlight: true,
  },
  {
    name: "Deepam Special School",
    location: "Auroville, Pondicherry",
    state: "Puducherry",
    lat: 12.925,
    lng: 79.858,
    description:
      "VR therapy demonstration and assessment sessions at this Auroville-based special school.",
    image: "/images/schools/deepam-school.jpg",
  },
  {
    name: "Rakshana Child Care Center",
    location: "Madurai",
    state: "Tamil Nadu",
    lat: 9.925,
    lng: 78.12,
    description:
      "VR-based therapy for children with autism and other developmental disabilities.",
    image: "/images/schools/sathya-school-2.jpg",
  },
  {
    name: "Shaksham Deeemahi",
    location: "Madurai",
    state: "Tamil Nadu",
    lat: 9.93,
    lng: 78.13,
    description:
      "Assistive technology demonstrations and engagement with the local special needs community.",
    image: "/images/schools/shaksham-school.jpg",
  },
  {
    name: "Shristi Village",
    location: "Mayelam",
    state: "Tamil Nadu",
    lat: 9.8,
    lng: 78.2,
    description:
      "Specialized residential facility for children with severe autism. Immersive VR therapy trials.",
    image: "/images/schools/jipmer-2.jpg",
  },
  {
    name: "Thai Special School",
    location: "Salem",
    state: "Tamil Nadu",
    lat: 11.764,
    lng: 78.135,
    description:
      "Regional outreach bringing VR therapy demonstrations to Salem's special education students.",
    image: "/images/workshops/govt-school-demo.jpg",
  },
  {
    name: "JIPMER",
    location: "Pondicherry",
    state: "Puducherry",
    lat: 12.008,
    lng: 79.857,
    description:
      "Medical research collaboration at India's premier institute. Therapy room demonstrations with clinical endorsement.",
    image: "/images/schools/jipmer.jpg",
    highlight: true,
  },
  {
    name: "NIEPMD",
    location: "Chennai",
    state: "Tamil Nadu",
    lat: 13.083,
    lng: 80.271,
    description:
      "VR rehabilitation research presented at the National Institute for Empowerment of Persons with Multiple Disabilities.",
    image: "/images/awards/alagappa-conference.jpg",
    highlight: true,
  },
  {
    name: "Government Schools",
    location: "Virudhunagar District",
    state: "Tamil Nadu",
    lat: 9.575,
    lng: 77.953,
    description:
      "Community outreach VR demonstrations reaching hundreds of government school students across multiple locations.",
    image: "/images/schools/govt-schools.jpg",
  },
];

export interface Recognition {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image?: string;
}

export const recognitions: Recognition[] = [
  {
    title: "Best Assistive Tech Academic Initiative",
    issuer: "ATF Awards",
    year: "2024",
    description: "Backed by Microsoft, Accenture & Shell",
    image: "/images/awards/atf-finalist-2024.jpg",
  },
  {
    title: "Top 10 Innovation Finalists",
    issuer: "IIT Madras KRIA",
    year: "2024",
    description: "India-level innovation recognition",
    image: "/images/awards/kria-innovation-2024.jpg",
  },
  {
    title: "TXR Solutions Incubated",
    issuer: "IIT Madras GDC",
    year: "2024",
    description: "18th I-NCUBATE Cohort",
    image: "/images/awards/ceremony-2023.jpg",
  },
  {
    title: "Product Innovation Showcase",
    issuer: "IIT Madras EMPOWER",
    year: "2023",
    description: "3 VR projects demonstrated",
    image: "/images/awards/conference-chair.jpg",
  },
  {
    title: "Service to Humanity",
    issuer: "Service Recognition",
    year: "2023",
    description: "Recognized for social impact through technology",
    image: "/images/awards/service-to-humanity-medal.jpg",
  },
  {
    title: "International VR Collaboration",
    issuer: "Innovate UK / Kerckhoffs",
    year: "2023",
    description: "UK technology partnership",
    image: "/images/awards/kerckhoffs-certificate-2023.jpg",
  },
];
