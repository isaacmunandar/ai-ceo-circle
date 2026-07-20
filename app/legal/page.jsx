import Link from "next/link";
import { SITE_URL } from "@/components/landing/seo";

export const metadata = {
  title: "Legal Notice",
  description: "Legal notice for AI CEO Circle by MAXY AI.",
  alternates: {
    canonical: `${SITE_URL}/legal`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#070e1c] px-6 py-16 text-cream md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C9920A] hover:text-[#ff7a3d]">
          Back to AI CEO Circle
        </Link>
        <h1 className="mt-10 font-serif text-[48px] leading-none md:text-[72px]">
          Legal Notice
        </h1>
        <section className="mt-10 space-y-7 text-[14.5px] leading-relaxed text-cream-soft">
          <div>
            <h2 className="font-serif text-[28px] text-cream">Program Information</h2>
            <p className="mt-3">
              AI CEO Circle is a private executive mentoring program by MAXY AI. Website information is provided for general program discovery and application purposes.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">No Guaranteed Outcome</h2>
            <p className="mt-3">
              Program descriptions, examples, testimonials, and market references do not guarantee specific business, financial, operational, or technical outcomes for any participant or company.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Applications</h2>
            <p className="mt-3">
              Submission of an application does not guarantee acceptance. Cohort admission depends on review, availability, fit, and program requirements.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Contact</h2>
            <p className="mt-3">
              For legal or program questions, contact{" "}
              <a className="text-[#C9920A] hover:text-[#ff7a3d]" href="mailto:hello@aiceocircle.com">
                hello@aiceocircle.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
