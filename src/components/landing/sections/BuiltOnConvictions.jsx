"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const convictions = [
  {
    tag: "01",
    title: "Own your intelligence",
    body: "Software depreciates. Your operating know-how, judgment, and decision logic must be encoded into systems your company actually owns.",
    photo: "/images/program/program-1.png",
  },
  {
    tag: "02",
    title: "Liberate the leader",
    body: "Manual debt stalls CEOs. Eliminating operational friction at the top frees the leader to focus on capital, vision, and judgment.",
    photo: "/images/program/program-2.png",
  },
  {
    tag: "03",
    title: "Encode know-how",
    body: "Models and tools will keep changing. Your unique way of operating must be encoded into executable workflows that can run, adapt, and scale.",
    photo: "/images/program/program-3.png",
  },
  {
    tag: "04",
    title: "Uncap growth",
    body: "Operational friction caps revenue far more than demand. Removing CEO-level bottlenecks compounds growth without proportional cost.",
    photo: "/images/program/program-4.png",
  },
];

const FlipCard = ({ conviction, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const prefersReduced = useReducedMotion();
  const duration = prefersReduced ? 0 : 0.55;

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const titleWords = conviction.title.split(" ");
  const titleHead = titleWords.slice(0, -1).join(" ");
  const titleTail = titleWords.slice(-1)[0];

  return (
    <Reveal delay={index * 0.08}>
      <div
        style={{ perspective: "1200px" }}
        className="h-[380px] cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((f) => !f)}
      >
        <m.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}
        >
          {/* Front: photo */}
          <div
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", position: "absolute", inset: 0 }}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src={conviction.photo}
              alt={conviction.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(7,14,28,0.82) 0%, rgba(7,14,28,0.22) 50%, rgba(7,14,28,0.08) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A]">
                Conviction {conviction.tag}
              </span>
              <h3
                className="mt-2 font-serif text-[24px] leading-[1.04] text-cream"
                style={{ letterSpacing: "-0.035em" }}
              >
                {conviction.title}
              </h3>
            </div>
          </div>

          {/* Back: conviction text */}
          <div
            aria-hidden="true"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
            }}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(8,14,28,0.96)] backdrop-blur-md"
          >
            <div className="flex h-full flex-col justify-between p-7 md:p-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A]">
                  Conviction {conviction.tag}
                </span>
                <h3
                  className="mt-5 font-serif text-[26px] leading-[1.04] text-cream md:text-[30px]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {titleHead}{" "}
                  <span className="font-serif-italic text-lava-soft">{titleTail}</span>
                </h3>
                <p className="mt-5 text-[14px] leading-relaxed text-cream-soft">
                  {conviction.body}
                </p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-cream-dim">
                {isTouch ? "Tap to flip back" : "Hover to flip back"}
              </span>
            </div>
          </div>
        </m.div>
      </div>
    </Reveal>
  );
};

const BuiltOnConvictions = () => {
  return (
    <section id="convictions" className="relative z-10 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[14vw] leading-[0.9] text-cream sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Built on{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>
                  Convictions
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-relaxed text-cream-soft">
                Increase your speed-to-decision and eliminate manual debt by transforming a CEO&apos;s business judgment into proprietary AI systems who got owned, encoded, and scaled inside your company.
              </p>
              <a
                href="#program"
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream transition-colors hover:text-[#C9920A]"
              >
                Explore the program
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {convictions.map((c, i) => (
            <FlipCard key={i} conviction={c} index={i} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default BuiltOnConvictions;
