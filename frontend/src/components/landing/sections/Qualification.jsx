import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { Check, X } from "lucide-react";
import { QUALIFICATION } from "@/components/landing/data";

const Qualification = () => {
  return (
    <section id="qualification" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{QUALIFICATION.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw]">
                Is this program <span className="font-serif-italic text-gradient-lava">for you?</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">
              Cohort 01 is intentionally small. We curate every seat — not to gate-keep, but because peer quality is the multiplier.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hair border-cream-10 md:grid-cols-2">
          {/* For you */}
          <Reveal>
            <div className="h-full border-r border-b border-hair border-cream-10 bg-[rgba(12,20,40,0.25)] p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff5d2a]/15 text-lava">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-soft">
                  This is for you if
                </span>
              </div>
              <ul className="mt-8 space-y-5">
                {QUALIFICATION.forYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-4 border-t border-hair border-cream-10 pt-5 first:border-t-0 first:pt-0">
                    <span className="font-serif text-2xl leading-none text-lava">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-serif text-[18px] leading-[1.35] text-cream md:text-[20px]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not for you */}
          <Reveal delay={0.08}>
            <div className="h-full border-r border-b border-hair border-cream-10 bg-[rgba(12,20,40,0.18)] p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border-hair border-cream-15 bg-cream/[0.03] text-cream-dim">
                  <X className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim">
                  This is not for you if
                </span>
              </div>
              <ul className="mt-8 space-y-5">
                {QUALIFICATION.notForYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-4 border-t border-hair border-cream-10 pt-5 first:border-t-0 first:pt-0">
                    <span className="font-serif text-2xl leading-none text-cream-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-serif text-[18px] leading-[1.35] text-cream-soft md:text-[20px]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Qualification;
