import Link from "next/link";
import { SITE_URL } from "@/components/landing/seo";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AI CEO Circle by MAXY AI application and contact forms.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#070e1c] px-6 py-16 text-cream md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C9920A] hover:text-[#ff7a3d]">
          Back to AI CEO Circle
        </Link>
        <h1 className="mt-10 font-serif text-[48px] leading-none md:text-[72px]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-cream-soft">
          AI CEO Circle by MAXY AI collects the information you submit through the application form so the program team can review your fit, contact you about the cohort, and manage follow-up communication.
        </p>

        <section className="mt-10 space-y-7 text-[14.5px] leading-relaxed text-cream-soft">
          <div>
            <h2 className="font-serif text-[28px] text-cream">Information We Collect</h2>
            <p className="mt-3">
              We may collect your name, email address, company name, application answers, consent status, submission timestamp, and technical request information such as IP address for spam prevention and rate limiting.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">How We Use Information</h2>
            <p className="mt-3">
              We use submitted information to evaluate applications, contact applicants, protect the form from abuse, and improve the program admission process. We do not sell application data.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Service Providers</h2>
            <p className="mt-3">
              Application emails may be processed through Resend or related infrastructure providers used to operate the website and communicate with applicants.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Contact</h2>
            <p className="mt-3">
              For privacy questions or data requests, contact{" "}
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
