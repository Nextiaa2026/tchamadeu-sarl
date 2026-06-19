import type { MetadataRoute } from "next"
import { getAllServiceSlugs, siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
  ]
}
