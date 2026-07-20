import { SITE_URL } from "@/components/landing/seo";

const siteHost = new URL(SITE_URL).host;

const crawlRules = {
  allow: "/",
  disallow: ["/api/"],
};

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        ...crawlRules,
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
        ],
        ...crawlRules,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: siteHost,
  };
}
