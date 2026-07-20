import Link from "next/link";
import { SITE_URL } from "@/components/landing/seo";

export const metadata = {
  title: "Cookie Notice",
  description: "Cookie notice for AI CEO Circle by MAXY AI.",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#070e1c] px-6 py-16 text-cream md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#C9920A] hover:text-[#ff7a3d]">
          Back to AI CEO Circle
        </Link>
        <h1 className="mt-10 font-serif text-[48px] leading-none md:text-[72px]">
          Cookie Notice
        </h1>
        <section className="mt-10 space-y-7 text-[14.5px] leading-relaxed text-cream-soft">
          <div>
            <h2 className="font-serif text-[28px] text-cream">Current Cookie Use</h2>
            <p className="mt-3">
              This website is designed as a landing page and application form. It may use essential browser, hosting, or security technologies required to load pages and submit forms.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Analytics And Marketing</h2>
            <p className="mt-3">
              If analytics, advertising pixels, or session recording tools are added later, this notice should be updated before deployment and any required consent flow should be implemented.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Managing Cookies</h2>
            <p className="mt-3">
              You can control cookies through your browser settings. Blocking some cookies or storage mechanisms may affect form submission or site functionality.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[28px] text-cream">Contact</h2>
            <p className="mt-3">
              For cookie questions, contact{" "}
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
