import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DT Admin Dashboard",
    short_name: "DT Admin",
    description: "Admin dashboard for tamilselvi.life",
    start_url: "/admin",
    scope: "/admin",
    display: "standalone",
    background_color: "#0F1A1F",
    theme_color: "#0F1A1F",
    icons: [
      {
        src: "/admin-icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/admin-icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
