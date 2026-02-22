export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "Schools & Institutions", href: "/impact" },
      { label: "Photo Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Our Work",
    href: "/work",
  },
  {
    label: "The Vision",
    href: "/ecosystem",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const doorways = [
  {
    heading: "I want to understand the technology",
    description: "Explore the VR therapy systems, architecture, and research behind our work.",
    href: "/work#vr-therapy",
    audience: "technocrat",
  },
  {
    heading: "I want to support this work",
    description: "See the real-world impact and learn how your support can reach more children.",
    href: "/connect/partner",
    audience: "philanthropist",
  },
  {
    heading: "I need help for a child or school",
    description: "Find out how VR therapy works and how to connect with our team.",
    href: "/connect/support",
    audience: "parent",
  },
  {
    heading: "I want to bring this to my institution",
    description: "Workshops, curriculum, and lab setup guidance for educational institutions.",
    href: "/connect/collaborate",
    audience: "educator",
  },
  {
    heading: "I want to collaborate on research",
    description: "Publications, methodologies, and open collaboration opportunities.",
    href: "/work#publications",
    audience: "researcher",
  },
  {
    heading: "I want to join the team",
    description: "Internships, projects, and the Assistive Technology Club await you.",
    href: "/connect/join",
    audience: "student",
  },
];
