"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import LavaFlowBackdrop from "@/components/landing/ui/LavaFlowBackdrop";
import AnimatedHeading from "@/components/landing/ui/AnimatedHeading";
import { HERO, STATS_HERO } from "@/components/landing/data";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-6 pb-24 md:pb-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#070e1c]" />
      <LavaFlowBackdrop />

      {/* Status pill */}
      <Container className="relative z-10 pt-4 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5"
        >
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9920A]/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#C9920A]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
            {HERO.eyebrow}
          </span>
        </motion.div>
      </Container>

      {/* Split layout: heading + content left, photo right */}
      <Container className="relative z-10 mt-10 md:mt-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">

          {/* Left column: heading + description + CTAs */}
          <div className="md:col-span-7">
            <AnimatedHeading
              as="h1"
              className="hero-display text-cream"
              parts={[
                { text: HERO.titleA, block: true, gradient: "cream" },
                { text: HERO.titleB, block: true, italic: true, gradient: "lava" },
              ]}
            />
            <style>{`
              .hero-display { font-family: var(--font-instrument-serif), 'Instrument Serif', serif; }
              .hero-display h1 { display: block; }
              .hero-display h1 > span { display: block; line-height: 0.92; letter-spacing: -0.045em; }
              .hero-display h1 > span:first-child { font-size: clamp(40px, 7.2vw, 120px); }
              .hero-display h1 > span:last-child {
                font-size: clamp(44px, 8.5vw, 140px);
                letter-spacing: -0.05em;
                text-shadow: 0 0 30px rgba(255,95,38,0.35), 0 0 60px rgba(255,70,20,0.18);
                margin-top: -0.05em;
              }
            `}</style>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <p className="max-w-xl text-[15px] leading-[1.55] text-cream-soft md:text-[16.5px]">
                {(() => {
                  const parts = HERO.description.split("—");
                  if (parts.length < 2) return <span className="text-cream">{HERO.description}</span>;
                  return (
                    <>
                      <strong className="font-medium text-cream">{parts[0].trim()}</strong>
                      <span className="text-cream-dim">{" — " + parts.slice(1).join("—").trim()}</span>
                    </>
                  );
                })()}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton href="#apply" icon={ArrowUpRight}>
                  {HERO.ctaPrimary}
                </MagneticButton>
                <a
                  href="#program"
                  className="group inline-flex items-center gap-2 text-[13px] tracking-tight text-cream/80 transition-colors hover:text-cream"
                >
                  <span className="underline decoration-cream/30 underline-offset-[6px] group-hover:decoration-[#C9920A]">
                    {HERO.ctaSecondary}
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column: hero photo — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block md:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "540px" }}>
              <img
                src="https://picsum.photos/seed/ai-ceo-executive/600/750"
                alt="Executive AI leadership"
                className="h-full w-full object-cover"
              />
              {/* Bottom-to-top dark overlay so hero bg bleeds naturally */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7,14,28,0.88) 0%, rgba(7,14,28,0.28) 45%, rgba(7,14,28,0.06) 100%)",
                }}
              />
              {/* Lava warmth accent */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 65% 25%, rgba(201,146,10,0.14), transparent 58%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Animated stats */}
      <Container className="relative z-10 mt-20 md:mt-24">
        <div className="hairline" />
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS_HERO.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <motion.span
                whileHover={{ color: "#ff7a3d" }}
                transition={{ duration: 0.3 }}
                className="font-serif text-[38px] leading-none text-cream sm:text-[44px]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {s.value}
              </motion.span>
              <span className="mt-1.5 font-mono text-[9px] uppercase leading-tight tracking-[0.32em] text-cream-dim">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
