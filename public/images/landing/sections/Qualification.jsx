"use client";
import React from "react";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { Check, X } from "lucide-react";
import { QUALIFICATION } from "@/components/landing/data";

const QualItem = ({ num, text, accent }) => (
  <m.li
    whileHover={{ x: 5 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-start gap-5 border-t border-t-[0.5px] border-cream-10 pt-5 first:border-t-0 first:pt-0 cursor-default"
  >
    <m.span
      whileHover={{ color: accent ? "#ff7a3d" : "#efe7d6" }}
      transition={{ duration: 0.3 }}
      className="font-serif text-[26px] leading-none"
      style={{ letterSpacing: "-0.04em", color: accent ? "#C9920A" : "rgba(239,231,214,0.4)" }}
    >
      {num}
    </m.span>
    <span
      className="flex-1 font-serif text-[18px] leading-[1.3] md:text-[21px]"
      style={{ letterSpacing: "-0.025em", color: accent ? "#efe7d6" : "rgba(239,231,214,0.7)" }}
    >
      {text}
    </span>
  </m.li>
);

const Qualification = () => {
  return (
    <section id="qualification" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{QUALIFICATION.label}</SectionLabel>
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.4vw] lg:text-[5.6vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Is this program <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>for you?</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[16px] leading-relaxed text-cream-soft">
              Cohort 01 is intentionally small. We curate every seat — not to gate-keep, but because peer quality is the multiplier.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <Tilt className="h-full rounded-2xl" max={4} scale={1.015}>
              <Spotlight
                className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.45)] backdrop-blur-md"
                lift={0}
                radius={500}
              >
                <div className="relative h-full overflow-hidden rounded-2xl p-9 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#C9920A]/15 text-[#C9920A]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-soft">
                      This is for you if
                    </span>
                  </div>
                  <ul className="mt-8 space-y-5">
                    {QUALIFICATION.forYou.map((t, i) => (
                      <QualItem key={i} num={String(i + 1).padStart(2, "0")} text={t} accent />
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Tilt>
          </Reveal>

          <Reveal delay={0.1}>
            <Tilt className="h-full rounded-2xl" max={4} scale={1.015}>
              <Spotlight
                className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.25)] backdrop-blur-md"
                lift={0}
                radius={500}
              >
                <div className="relative h-full overflow-hidden rounded-2xl p-9 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border-hair border-cream-15 bg-cream/[0.03] text-cream-dim">
                      <X className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                      This is not for you if
                    </span>
                  </div>
                  <ul className="mt-8 space-y-5">
                    {QUALIFICATION.notForYou.map((t, i) => (
                      <QualItem key={i} num={String(i + 1).padStart(2, "0")} text={t} accent={false} />
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Tilt>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Qualification;
