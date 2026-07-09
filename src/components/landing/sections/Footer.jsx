import React from "react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import { FOOTER, META } from "@/components/landing/data";

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t-[0.5px] border-cream-10 bg-[#060b18]">
      {/* Massive ghost echo title — magma signature */}
      <div className="relative">
        <Reveal y={40}>
          <div className="pointer-events-none -mb-6 select-none overflow-hidden pt-16 md:pt-24" aria-hidden="true">
            <div className="font-serif-italic text-stroke whitespace-nowrap text-center text-[18vw] leading-[0.9] tracking-[-0.04em] sm:text-[14vw] md:text-[12vw] lg:text-[11vw]">
              Lead the AI era.
            </div>
          </div>
        </Reveal>
        {/* fade into footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#060b18]" />
      </div>

      <Container className="pt-14 pb-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-[28px] leading-none tracking-tight text-cream">
                {META.brand}
              </span>
              <span className="font-serif-italic text-lava text-[20px]">.</span>
            </div>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-cream-soft">
              The executive entry point into MAXY AI — a premium mentoring circle for CEOs ready to build AI inside their business, not just learn about it.
            </p>
            <div className="mt-8 flex flex-col gap-1.5">
              {FOOTER.contact.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream-dim">
                    {c.label}
                  </span>
                  <span className="font-serif text-[16px] text-cream">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          {FOOTER.columns.map((col, i) => (
            <div key={i} className="col-span-1 md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream-dim">
                {col.title}
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href="#apply"
                      className="inline-flex min-h-[44px] items-center font-serif text-[16px] text-cream-soft transition-colors hover:text-lava"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Languages */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream-dim">
              Lang
            </div>
            <ul className="mt-5 flex flex-col gap-2.5">
              <li>
                <span className="font-serif text-[16px] text-cream">EN</span>
              </li>
              <li>
                <a href="#apply" className="font-serif text-[16px] text-cream-soft hover:text-lava">ID</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-7 flex flex-col items-start justify-between gap-3 text-[11.5px] text-cream-dim sm:flex-row sm:items-center">
          <span className="font-mono uppercase tracking-[0.32em]">
            © {new Date().getFullYear()} MAXY AI · All rights reserved
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono uppercase tracking-[0.32em]">
            <a href="#apply" className="hover:text-cream">Legal Notice</a>
            <a href="#apply" className="hover:text-cream">Privacy Policy</a>
            <a href="#apply" className="hover:text-cream">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
