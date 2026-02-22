import type { MetadataRoute } from "next";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tamilselvi.life";

  const staticPages = [
    "",
    "/impact",
    "/work/vr-therapy",
    "/work/projects",
    "/work/lab",
    "/work/publications",
    "/ecosystem",
    "/about",
    "/connect",
    "/connect/partner",
    "/connect/collaborate",
    "/connect/join",
    "/connect/support",
    "/gallery",
  ];

  const productPages = products.map((p) => `/ecosystem/${p.slug}`);

  const allPages = [...staticPages, ...productPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/ecosystem/") ? 0.6 : 0.8,
  }));
}
