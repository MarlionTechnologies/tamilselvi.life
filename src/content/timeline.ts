export interface Milestone {
  year: string;
  title: string;
  description: string;
  type: "career" | "research" | "award" | "impact" | "vision";
  image?: string;
}

export const milestones: Milestone[] = [
  {
    year: "2001",
    title: "Joined TCE Madurai",
    description:
      "Began her academic career at Thiagarajar College of Engineering as a Lecturer in Information Technology.",
    type: "career",
    image: "/images/profile/dr-tamilselvi.jpg",
  },
  {
    year: "2008",
    title: "Started Robotics Research",
    description:
      "Began PhD research in Robotics at Anna University, exploring the intersection of technology and human assistance.",
    type: "research",
  },
  {
    year: "2013",
    title: "PhD in Robotics",
    description:
      "Awarded PhD from Anna University for research in robotics and intelligent systems.",
    type: "career",
  },
  {
    year: "2014",
    title: "Founded CSRG",
    description:
      "Established the Cognitive Science Research Group at TCE, shifting focus to assistive technology for children with special needs.",
    type: "research",
  },
  {
    year: "2016",
    title: "First Special School Visit",
    description:
      "Walked into her first special school classroom. The experience changed everything — technology had to meet children where they are.",
    type: "impact",
    image: "/images/schools/spark-school.jpg",
  },
  {
    year: "2018",
    title: "VR Lab Established",
    description:
      "Built a dedicated Virtual Reality laboratory at TCE with HTC Vive Pro equipment for autism rehabilitation research.",
    type: "research",
    image: "/images/hero/vr-lab-setup.jpg",
  },
  {
    year: "2018",
    title: "DST-CSRI Grant Awarded",
    description:
      "Received Rs. 33.8 Lakh grant from the Department of Science & Technology for VR-based autism rehabilitation.",
    type: "award",
    image: "/images/lab/reporter-demo.jpg",
  },
  {
    year: "2020",
    title: "Springer Publication",
    description:
      "Flagship paper published in Springer IHSI 2020 conference proceedings in Italy, establishing international research credibility.",
    type: "research",
  },
  {
    year: "2022",
    title: "Assistive Technology Club",
    description:
      "Founded the Assistive Technology Club at TCE, engaging 80+ students in hands-on assistive tech projects.",
    type: "impact",
  },
  {
    year: "2023",
    title: "Service to Humanity Award",
    description:
      "Recognized for sustained community impact through assistive technology outreach.",
    type: "award",
    image: "/images/awards/service-to-humanity-medal.jpg",
  },
  {
    year: "2023",
    title: "IIT Madras EMPOWER",
    description:
      "Showcased 3 VR rehabilitation projects at IIT Madras EMPOWER conference, demonstrating real-world therapeutic applications.",
    type: "award",
    image: "/images/therapy/music-therapy-stall.jpg",
  },
  {
    year: "2024",
    title: "IIT-M KRIA Top 10",
    description:
      "Selected among top 10 national finalists at IIT Madras KRIA Innovation Awards for assistive technology work.",
    type: "award",
    image: "/images/awards/kria-innovation-2024.jpg",
  },
  {
    year: "2024",
    title: "TXR Solutions Incubated",
    description:
      "Startup TXR Solutions accepted into IIT Madras GDC I-NCUBATE 18th Cohort, scaling VR assistive solutions.",
    type: "career",
  },
  {
    year: "2024",
    title: "ATF Best Assistive Tech Academic Initiative",
    description:
      "Won Runner-Up at ATF Awards backed by Microsoft, Accenture & Shell for best assistive technology academic initiative.",
    type: "award",
    image: "/images/awards/atf-finalist-2024.jpg",
  },
  {
    year: "2026",
    title: "The Ecosystem Vision",
    description:
      "Nine interconnected assistive products. One shared intelligence layer. Building practical independence at community scale.",
    type: "vision",
    image: "/images/ecosystem/covers/front-cover.png",
  },
];
