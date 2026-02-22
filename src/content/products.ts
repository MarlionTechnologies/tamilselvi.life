export interface Product {
  slug: string;
  name: string;
  tagline: string;
  domain: string;
  description: string;
  color: string;
  icon: string;
  highlight?: boolean;
}

export const products: Product[] = [
  {
    slug: "caresync",
    name: "CareSync",
    tagline: "Where Every Caregiver Sees the Full Picture",
    domain: "Platform & Care Coordination",
    description:
      "RBAC-powered collaborative intelligence connecting parents, therapists, teachers, and doctors into one seamless care loop.",
    color: "var(--caresync)",
    icon: "heart",
  },
  {
    slug: "smart-care-vision",
    name: "Smart Care Vision",
    tagline: "AI That Understands What It Sees",
    domain: "Contextual Sensing for Care",
    description:
      "A camera system that comprehends, not just records. Guardian mode for elderly, Ally mode for neurodiverse individuals.",
    color: "var(--smartcare)",
    icon: "eye",
  },
  {
    slug: "neurosense",
    name: "NeuroSense",
    tagline: "Where the Body Becomes the Controller",
    domain: "Neurodiverse Interaction",
    description:
      "13 input modalities from sensory mats to EMG. The child's body IS the controller. No headsets required.",
    color: "var(--neurosense)",
    icon: "brain",
    highlight: true,
  },
  {
    slug: "echo-hear",
    name: "ECHO Hear",
    tagline: "Not Louder. Clearer.",
    domain: "Hearing & Communication",
    description:
      "Semantic comprehension accelerator that works at the meaning layer, not just the sound layer. For 63 million Indians with hearing impairment.",
    color: "var(--echo)",
    icon: "ear",
  },
  {
    slug: "echo-voice",
    name: "ECHO Voice",
    tagline: "Adaptive Communication Accelerator for the Deaf",
    domain: "Deaf Communication",
    description:
      "The world's first ISL-to-Tamil speech system. Wrist-mounted sonar + AR glasses. 7x cheaper than alternatives.",
    color: "var(--echo)",
    icon: "hand",
  },
  {
    slug: "emboss",
    name: "EMBOSS",
    tagline: "Engrave, Don't Encode",
    domain: "Tactile STEM Learning",
    description:
      "AI-powered tactile display that renders actual math shapes as raised surfaces. 50x cheaper than competitors.",
    color: "var(--emboss)",
    icon: "grid",
  },
  {
    slug: "sightline",
    name: "SIGHTLINE",
    tagline: "AI Vision Companion",
    domain: "Vision Independence",
    description:
      "A robotic companion that navigates, sees, understands, and communicates. Built for Indian roads from the ground up.",
    color: "var(--sightline)",
    icon: "robot",
  },
  {
    slug: "smart-wheelchair",
    name: "Smart Wheelchair",
    tagline: "Don't Build a New Wheelchair. Retrofit 7 Million Existing Ones.",
    domain: "Mobility & ADAS",
    description:
      "ADAS-powered retrofit platform for autonomous indoor and outdoor mobility. Three tiers from Rs.30K to Rs.1.8L.",
    color: "var(--wheelchair)",
    icon: "wheelchair",
  },
  {
    slug: "exoforce",
    name: "ExoForce",
    tagline: "Restoring Mobility. Rebuilding Strength.",
    domain: "Wearable Rehabilitation",
    description:
      "Intelligent wearable exoskeleton with hybrid actuation: assist, resist, and gamify rehabilitation at 1/10th the cost.",
    color: "var(--exoforce)",
    icon: "muscle",
  },
];
