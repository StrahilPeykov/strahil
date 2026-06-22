import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getWork, getWriting } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/writing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const work: MetadataRoute.Sitemap = getWork().map((w) => ({
    url: `${base}/work/${w.slug}`,
    priority: 0.7,
  }));

  const writing: MetadataRoute.Sitemap = getWriting().map((p) => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: p.date,
    priority: 0.6,
  }));

  return [...staticRoutes, ...work, ...writing];
}
