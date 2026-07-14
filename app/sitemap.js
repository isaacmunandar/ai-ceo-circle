import { SITE_URL } from "@/components/landing/seo";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
