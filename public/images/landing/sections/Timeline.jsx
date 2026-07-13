"use client";
import React from "react";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { TIMELINE } from "@/components/landing/data";

const Timeline = () => {
  return (
    <section id="format" className="relative z-10">
      <BigSerifMarquee
        words={["Strategy", "Implementation", "Adoption"]}
        size="xl"
        className="py-6 opacity-90"
      />

      <Container className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.4vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                A 4-month{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>mentoring circle</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[16px] leading-relaxed text-cream-soft">{TIMELINE.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {TIMELINE.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <m.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative cursor-default overflow-hidden border-t-[0.5px] border-cream-10 py-12 last:border-b-[0.5px] md:py-14"
              >
                {/* Lava sweep on hover */}
                <m.span
                  aria-hidden
                  variants={{ rest: { x: "-110%" }, hover: { x: "110%" } }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute inset-y-0 -inset-x-1/4 z-0 w-1/3 bg-gradient-to-r from-transparent via-[#C9920A]/10 to-transparent blur-2xl"
                />
                {/* Bottom lava line */}
                <m.span
                  aria-hidden
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px bg-gradient-to-r from-[#C9920A] via-[#ff7a3d] to-transparent"
                />

                <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <m.div
                    variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="relative h-2 w-2 rounded-full bg-[#C9920A] animate-pulse" />
                      <m.span
                        variants={{ rest: { color: "rgba(239,231,214,0.55)" }, hover: { color: "#C9920A" } }}
                        transition={{ duration: 0.4 }}
                        className="font-mono text-[10px] uppercase tracking-[0.38em]"
                      >
                        {s.window}
                      </m.span>
                    </div>
                  </m.div>

                  <m.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-5"
                  >
                    <h3
                      className="font-serif text-[28px] leading-[1.05] text-cream md:text-[38px]"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {s.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                  </m.div>

                  <m.div
                    variants={{ rest: { opacity: 0.7, x: 0 }, hover: { opacity: 1, x: 4 } }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-4"
                  >
                    <p className="text-[14.5px] leading-relaxed text-cream-soft">{s.body}</p>
                  </m.div>
                </div>
              </m.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
