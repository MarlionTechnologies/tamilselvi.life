export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  type: "conference" | "journal";
  highlight?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "VR-Based Cognitive Rehabilitation for Autism Children Using Compare and Contrast Methodology",
    authors: "D. Tamilselvi et al.",
    venue:
      "Springer — International Conference on Human Interaction and Emerging Technologies (IHSI 2020)",
    year: "2020",
    doi: "10.1007/978-3-030-39512-4",
    type: "conference",
    highlight: true,
  },
  {
    title:
      "MIVRA — Mental Immersion in Virtual Reality Avatar: Social Communication Rehabilitation Assistive Tool for Autism Children",
    authors: "D. Tamilselvi et al.",
    venue:
      "International Conference on Inventive Computation Technologies (ICI2CT 2020), National University of Singapore",
    year: "2020",
    type: "conference",
  },
];

/** Total verified count from Dr. Tamilselvi's profile. Only representative papers are listed above. */
export const TOTAL_PUBLICATIONS = 33;
