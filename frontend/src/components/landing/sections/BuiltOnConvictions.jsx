"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { ArrowUpRight } from "lucide-react";

const BuiltOnConvictions = () => {
  const convictions = [
    {
      title: "Own your intelligence",
      body:
        "Software depreciates. Your operating know-how, judgment, and decision logic must be encoded into systems your company actually owns.",
    },
    {
      title: "Liberate the leader",
      body:
        "Manual debt stalls CEOs. Eliminating operational friction at the top frees the leader to focus on capital, vision, and judgment.",
    },
    {
      title: "Encode know-how",
      body:
        "Models and tools will keep changing. Your unique way of operating must be encoded into executable workflows that can run, adapt, and scale.",
    },
    {
      title: "Uncap growth",
      body:
        "Operational friction caps revenue far more than demand. Removing CEO-level bottlenecks compounds growth without proportional cost.",
    },
  ];

  return (
    <section id="convictions" className="relative z-10 py-32 md:py-44">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <SectionLabel>Built on convictions</SectionLabel>
            <Reveal className="mt-7">
              <h2 className="font-serif text-balance text-[14vw] leading-[0.9] text-cream sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw]" style={{ letterSpacing: "-0.045em" }}>
                Built on{" "}
                <span className="font-serif-italic text-gradient-lava">Convictions</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-relaxed text-cream-soft">
                Increase your speed-to-decision and eliminate manual debt by transforming a CEO's business judgment into proprietary AI systems — owned, encoded, and scaled inside your company.
              </p>
              <a
                href="#program"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream transition-colors hover:text-[#C9920A]"
              >
                Explore the program
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {convictions.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Tilt className="h-full rounded-2xl" max={6} scale={1.025}>
                <Spotlight
                  className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.55)] backdrop-blur-md"
                  lift={0}
                  radius={400}
                >
                  <div className="relative h-full overflow-hidden rounded-2xl p-7 md:p-9">
                    <div className="flex items-baseline justify-between">
                      <motion.span
                        whileHover={{ scale: 1.1, color: "#ff7a3d" }}
                        transition={{ duration: 0.4 }}
                        className="font-serif text-[36px] leading-none text-[#C9920A] md:text-[42px]"
                        style={{ letterSpacing: "-0.04em", display: "inline-block" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
                        Conviction
                      </span>
                    </div>

                    <h3
                      className="mt-10 font-serif text-[26px] leading-[1.02] text-cream md:text-[32px]"
                      style={{ letterSpacing: "-0.035em" }}
                    >
                      {c.title.split(" ").map((w, j, arr) => (
                        <React.Fragment key={j}>
                          {j === arr.length - 1 ? (
                            <span className="font-serif-italic text-lava-soft"> {w}</span>
                          ) : (
                            <>{j > 0 ? " " : ""}{w}</>
                          )}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="mt-5 text-[14px] leading-relaxed text-cream-dim">{c.body}</p>
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

export default BuiltOnConvictions;
