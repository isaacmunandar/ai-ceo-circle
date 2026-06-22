"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import LavaFlowBackdrop from "@/components/landing/ui/LavaFlowBackdrop";
import AnimatedHeading from "@/components/landing/ui/AnimatedHeading";
import { HERO, STATS_HERO } from "@/components/landing/data";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-6 pb-24 md:pb-36">
      {/* Solid dark base */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#070e1c]" />
      <LavaFlowBackdrop />

      {/* Top status pill */}
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

      {/* Massive bleeding headline */}
      <Container className="relative z-10 mt-10 md:mt-14">
        <AnimatedHeading
          as="h1"
          className="hero-display text-balance text-cream"
          parts={[
            { text: HERO.titleA, block: true, gradient: "cream" },
            { text: HERO.titleB, block: true, italic: true, gradient: "lava" },
          ]}
        />
        <style>{`
          .hero-display { font-family: var(--font-instrument-serif), 'Instrument Serif', serif; }
          .hero-display h1 { display: block; }
          .hero-display h1 > span { display: block; line-height: 0.92; letter-spacing: -0.045em; }
          .hero-display h1 > span:first-child { font-size: clamp(56px, 10.5vw, 184px); }
          .hero-display h1 > span:last-child {
            font-size: clamp(64px, 11.8vw, 208px);
            letter-spacing: -0.05em;
            text-shadow: 0 0 30px rgba(255,95,38,0.35), 0 0 60px rgba(255,70,20,0.18);
            margin-top: -0.05em;
          }
        `}</style>
      </Container>

      {/* Asymmetric bottom */}
      <Container className="relative z-10 mt-14 md:mt-24">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <motion.a
            href="#convictions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim transition-colors hover:text-cream md:col-span-5"
          >
            <motion.span
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="grid h-10 w-10 place-items-center rounded-full border-hair border-cream-15 transition-colors group-hover:border-[#C9920A] group-hover:bg-[#C9920A]/10"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-90 group-hover:text-[#C9920A]" />
            </motion.span>
            See the framework
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 md:pl-12"
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
      </Container>

      {/* Animated stats */}
      <Container className="relative z-10 mt-20 md:mt-24">
        <div className="hairline" />
        <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-5">
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
