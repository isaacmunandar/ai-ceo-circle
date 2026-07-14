import { FAQ } from "@/components/landing/data";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aiceocircle.com";

export const SEO_TITLE = "AI CEO Circle by MAXY AI | Executive AI Leadership Program";

export const SEO_DESCRIPTION =
  "Private AI leadership program for CEOs in Indonesia and Singapore to build AI strategy, agentic AI workflows, and a Digital CEO Twin.";

export const SEO_KEYWORDS = [
  "AI CEO Circle",
  "MAXY AI",
  "AI leadership program",
  "executive AI program",
  "AI strategy for CEOs",
  "CEO AI training Indonesia",
  "CEO AI training Singapore",
  "agentic AI implementation",
  "Digital CEO Twin",
  "AI transformation for executives",
  "private CEO mentoring program",
];

export const openGraphImage = {
  url: "/images/hero-bg.png",
  width: 1672,
  height: 941,
  alt: "AI CEO Circle by MAXY AI executive leadership program",
};

export const landingMetadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "AI CEO Circle",
  title: {
    default: SEO_TITLE,
    template: "%s | AI CEO Circle",
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "MAXY AI", url: SITE_URL }],
  creator: "MAXY AI",
  publisher: "MAXY AI",
  category: "Executive Education",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AI CEO Circle",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [openGraphImage.url],
    creator: "@aiceocircle",
  },
};

export const landingPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "AI CEO Circle",
      alternateName: "AI CEO Circle by MAXY AI",
      url: SITE_URL,
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MAXY AI",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-aiceocircle.png`,
        width: 2167,
        height: 692,
      },
      brand: {
        "@type": "Brand",
        name: "AI CEO Circle",
      },
      sameAs: ["https://www.instagram.com/aiceocircle/"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#program`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${openGraphImage.url}`,
        width: openGraphImage.width,
        height: openGraphImage.height,
      },
      datePublished: "2026-07-14",
      dateModified: "2026-07-14",
      inLanguage: "en",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#ai-execution-gap", "#program", "#faq"],
      },
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": `${SITE_URL}/#program`,
      name: "AI CEO Circle",
      description:
        "A private executive mentoring program by MAXY AI for CEOs and senior business leaders to build an AI strategy, deploy one working AI agent, and create a Digital CEO Twin.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      url: SITE_URL,
      educationalProgramMode: ["In-person", "Mentoring", "Workshop"],
      occupationalCategory: ["Chief Executive Officer", "Founder", "C-Suite Executive"],
      audience: {
        "@type": "Audience",
        audienceType: "CEOs, founders, and senior executives in Indonesia and Singapore",
      },
      numberOfCredits: {
        "@type": "StructuredValue",
        value: 10,
        unitText: "seats per cohort",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/#apply`,
        category: "Application required",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq-schema`,
      mainEntity: FAQ.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};
