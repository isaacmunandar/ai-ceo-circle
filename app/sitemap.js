import { SITE_URL } from "@/components/landing/seo";

export default function sitemap() {
  const lastModified = new Date("2026-07-15");
  const pages = [
    { path: "", priority: 1 },
    { path: "/privacy", priority: 0.3 },
    { path: "/legal", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
