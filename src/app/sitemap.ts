import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = "https://zenithtools.vercel.app";
  const lastMod = new Date("2026-04-22");

  return [
    {
      url: SITE_URL,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/legal/privacy`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/terms`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal/cookies`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
