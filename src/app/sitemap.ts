import type { MetadataRoute } from "next";
import { PRIVACY_SLUG, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pair = (es: string, en: string, priority: number) =>
    [es, en].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: { "es-MX": `${SITE_URL}${es}`, "en-US": `${SITE_URL}${en}` } },
    }));

  return [...pair("/es", "/en", 1), ...pair(`/es/${PRIVACY_SLUG.es}`, `/en/${PRIVACY_SLUG.en}`, 0.3)];
}
