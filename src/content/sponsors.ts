export interface Sponsor {
  id: string;
  name: string;
  organization?: string;
  tier: "spark" | "lamp" | "bridge" | "beacon" | "constellation";
  products: string[];
  quote?: string;
  logo?: string;
  photo?: string;
  date: string;
  featured?: boolean;
}

// Will be populated as sponsors join
export const sponsors: Sponsor[] = [];
