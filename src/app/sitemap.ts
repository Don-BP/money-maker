import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = "https://dokidokitools.vercel.app";
  const lastMod = new Date();

  return [
    { url: SITE_URL,                                                            lastModified: lastMod, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/guides`,                                                lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/guides/username-guide`,                                 lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/guides/japanese-writing-guide`,                         lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/guides/recipe-scaling-guide`,                           lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/guides/ip-address-guide`,                               lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/guides/word-search-guide`,                              lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/guides/synonym-guide`,                                  lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/username-generator/index.html`,                   lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/word-finder/index.html`,                          lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/recipe-scaler/index.html`,                        lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/romaji-to-kana/index.html`,                       lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/ip-checker/index.html`,                           lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/word-search/index.html`,                          lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/legal/privacy`,                                         lastModified: lastMod, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/legal/terms`,                                           lastModified: lastMod, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/legal/cookies`,                                         lastModified: lastMod, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
