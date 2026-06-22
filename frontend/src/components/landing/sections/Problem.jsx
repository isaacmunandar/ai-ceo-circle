"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { PROBLEM } from "@/components/landing/data";

const Problem = () => {
  return (
    <section id="problem" className="relative z-10 py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROBLEM.label}</SectionLabel>
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.2vw] lg:text-[5.2vw]"
                style={{ letterSpacing: "-0.04em" }}
              >
                The real AI problem isn't technology.{" "}
                <span className="font-serif-italic text-gradient-lava">It's leadership.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[16px] leading-relaxed text-cream-soft">{PROBLEM.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROBLEM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Tilt className="h-full rounded-2xl" max={5} scale={1.02}>
                <Spotlight
                  className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.55)] backdrop-blur-md"
                  lift={0}
                  radius={480}
                >
                  <div className="relative h-full overflow-hidden rounded-2xl p-8 md:p-12">
                    <div className="flex items-start gap-8">
                      <motion.span
                        whileHover={{ scale: 1.1, x: 4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="font-serif text-[56px] leading-none text-[#C9920A] md:text-[72px]"
                        style={{ letterSpacing: "-0.04em", transformOrigin: "left center", display: "inline-block" }}
                      >
                        {it.n}
                      </motion.span>
                      <div className="flex-1">
                        <h3
                          className="font-serif text-[26px] leading-[1.05] text-cream md:text-[32px]"
                          style={{ letterSpacing: "-0.035em" }}
                        >
                          {it.title.split(".").map((s, j, arr) => (
                            <React.Fragment key={j}>
                              {j === arr.length - 1 || arr[j].trim() === "" ? (
                                s
                              ) : (
                                <span className={j === 0 ? "" : "font-serif-italic text-lava-soft"}>
                                  {s}
                                  {j < arr.length - 1 ? "." : ""}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </h3>
                        <p className="mt-5 text-[14.5px] leading-relaxed text-cream-dim">{it.body}</p>
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

export default Problem;
