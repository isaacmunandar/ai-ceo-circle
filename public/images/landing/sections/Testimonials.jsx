"use client";
import React from "react";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { TESTIMONIALS } from "@/components/landing/data";

const Testimonials = () => {
  return (
    <section id="voices" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.2vw] lg:text-[5.2vw]"
                style={{ letterSpacing: "-0.04em" }}
              >
                What CEOs <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>are saying</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[16px] leading-relaxed text-cream-soft">
              Cohort participants come back to peer sessions — not for slides, but to ship the next AI system inside their company.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Tilt className="h-full rounded-2xl" max={5} scale={1.02}>
                <Spotlight
                  className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.55)] backdrop-blur-md"
                  lift={0}
                  radius={420}
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10">
                    <m.span
                      whileHover={{ scale: 1.05, color: "rgba(201,146,10,0.65)" }}
                      transition={{ duration: 0.5 }}
                      className="font-serif-italic text-[88px] leading-none text-[#C9920A]/40"
                      style={{ display: "inline-block" }}
                    >
                      &quot;
                    </m.span>
                    <p
                      className="-mt-8 font-serif text-[20px] leading-[1.32] text-cream md:text-[23px]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {t.quote}
                    </p>
                    <div className="mt-auto flex items-center gap-3 border-t border-t-[0.5px] border-cream-10 pt-6">
                      {t.photo ? (
                        <m.img
                          src={t.photo}
                          alt={t.name}
                          whileHover={{ scale: 1.12, rotate: -8 }}
                          transition={{ type: "spring", stiffness: 280, damping: 18 }}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <m.div
                          whileHover={{ scale: 1.12, rotate: -8 }}
                          transition={{ type: "spring", stiffness: 280, damping: 18 }}
                          className="grid h-10 w-10 shrink-0 rounded-full place-items-center bg-[rgba(201,146,10,0.08)] font-mono text-[11px] tracking-wider text-[#C9920A]"
                        >
                          {t.initials}
                        </m.div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-medium text-cream">{t.name}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Spotlight>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
