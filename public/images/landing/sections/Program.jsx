import React from "react";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import { PROGRAM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

const Program = () => {
  return (
    <section id="program" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.4vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                What AI CEO Circle{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>actually delivers</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-8">
            <p className="text-[16px] leading-relaxed text-cream-soft">{PROGRAM.intro}</p>
            <a
              href="#apply"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream transition-colors hover:text-[#C9920A]"
            >
              Apply for cohort 01
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {PROGRAM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <m.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative border-t-[0.5px] border-cream-10 py-12 last:border-b-[0.5px] md:py-16 cursor-pointer overflow-hidden"
              >
                <m.span
                  aria-hidden
                  variants={{ rest: { x: "-100%" }, hover: { x: "100%" } }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute inset-y-0 -inset-x-1/3 z-0 w-1/3 bg-gradient-to-r from-transparent via-[#C9920A]/15 to-transparent blur-2xl"
                />
                <m.span
                  aria-hidden
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px bg-gradient-to-r from-[#C9920A] via-[#ff7a3d] to-transparent"
                />

                <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <m.div
                    variants={{ rest: { scale: 1, x: 0 }, hover: { scale: 1.12, x: 10 } }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-2"
                    style={{ transformOrigin: "left center" }}
                  >
                    <span
                      className="font-serif text-[56px] leading-none text-[#C9920A] md:text-[88px] lg:text-[128px]"
                      style={{ letterSpacing: "-0.05em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </m.div>
                  <m.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-5"
                  >
                    <h3
                      className="font-serif text-[34px] leading-[1.02] text-cream md:text-[46px]"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {it.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {it.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                    <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                      {it.tag}
                    </span>
                  </m.div>
                  <m.div
                    variants={{ rest: { opacity: 0.85, x: 0 }, hover: { opacity: 1, x: 4 } }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-5"
                  >
                    <p className="text-[15px] leading-relaxed text-cream-soft">{it.body}</p>
                  </m.div>
                </div>

                <m.span
                  aria-hidden
                  variants={{ rest: { opacity: 0, x: -8 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#C9920A]"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </m.span>
              </m.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Program;
