"use client";
import React from "react";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { PROBLEM } from "@/components/landing/data";

const Problem = () => {
  return (
    <section id="problem" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.2vw] lg:text-[5.2vw]"
                style={{ letterSpacing: "-0.04em" }}
              >
                The real AI problem isn&apos;t technology.{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>It&apos;s leadership.</span>
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
                      <m.span
                        whileHover={{ scale: 1.1, x: 4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="font-serif text-[56px] leading-none text-[#C9920A] md:text-[72px]"
                        style={{ letterSpacing: "-0.04em", transformOrigin: "left center", display: "inline-block" }}
                      >
                        {it.n}
                      </m.span>
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

        {/* Photo strip — executive leadership contexts; replace with real program photos */}
        <Reveal delay={0.18} className="mt-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { src: "/images/problem/problem-1.png", label: "Executive strategy session" },
              { src: "/images/problem/problem-2.png", label: "AI leadership summit" },
              { src: "/images/problem/problem-3.png", label: "CEO transformation program" },
            ].map((img, i) => (
              <div
                key={i}
                className={[
                  "group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[rgba(8,14,28,0.45)] shadow-[0_18px_60px_rgba(4,9,20,0.28)]",
                  "transition-[transform,border-color,box-shadow] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:-translate-y-2 hover:border-[#C9920A]/35 hover:shadow-[0_26px_80px_rgba(201,146,10,0.16)]",
                  i === 0 ? "motion-safe:hover:-rotate-[0.7deg]" : "",
                  i === 2 ? "motion-safe:hover:rotate-[0.7deg]" : "",
                ].join(" ")}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className={[
                    "h-[190px] w-full object-cover [filter:saturate(0.6)_brightness(0.68)] transition-[transform,filter] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:h-[210px]",
                    "motion-safe:group-hover:scale-110 group-hover:[filter:saturate(0.82)_brightness(0.78)]",
                    i === 0 ? "motion-safe:group-hover:translate-x-2" : "",
                    i === 2 ? "motion-safe:group-hover:-translate-x-2" : "",
                  ].join(" ")}
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-75"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,14,28,0.62) 0%, rgba(7,14,28,0.12) 50%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 110%, rgba(201,146,10,0.34) 0%, rgba(201,146,10,0.12) 30%, transparent 62%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-[transform,opacity] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex rounded-full border border-[#C9920A]/25 bg-[#070e1c]/65 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-cream backdrop-blur-md">
                    {img.label}
                  </span>
                </div>
                <div
                  aria-hidden
                  className="absolute left-4 top-4 h-8 w-px origin-top scale-y-0 bg-[#C9920A]/70 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-y-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Problem;
