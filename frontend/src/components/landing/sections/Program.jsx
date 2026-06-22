import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { PROGRAM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

const Program = () => {
  return (
    <section id="program" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROGRAM.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.5vw] lg:text-[4.8vw]">
                What AI CEO Circle{" "}
                <span className="font-serif-italic text-gradient-lava">actually delivers</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-8">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">{PROGRAM.intro}</p>
            <a
              href="#apply"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:text-lava"
            >
              Apply for cohort 01
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Numbered editorial list (01/02/03) */}
        <div className="mt-16 flex flex-col">
          {PROGRAM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative border-t border-hair border-cream-10 py-10 last:border-b md:py-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-2">
                    <span className="font-serif text-[72px] leading-none text-lava md:text-[96px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-[32px] leading-[1.04] text-cream md:text-[42px]">
                      {it.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {it.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                    <span className="mt-3 inline-block font-mono text-[10.5px] uppercase tracking-[0.28em] text-cream-dim">
                      {it.tag}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[15px] leading-relaxed text-cream-soft">{it.body}</p>
                  </div>
                </div>
                {/* hover glow line */}
                <span className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px scale-x-0 origin-left bg-gradient-to-r from-[#ff5d2a] via-[#ff7a3d] to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Program;
