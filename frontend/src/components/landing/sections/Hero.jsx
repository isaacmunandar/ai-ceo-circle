import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import LavaRockBackdrop from "@/components/landing/ui/LavaRockBackdrop";
import { HERO } from "@/components/landing/data";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-6">
      <LavaRockBackdrop />

      {/* Top status pill */}
      <Container className="relative z-10 pt-4 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5"
        >
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5d2a]/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#ff5d2a]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream-dim">
            {HERO.eyebrow}
          </span>
        </motion.div>
      </Container>

      {/* Massive bleeding headline */}
      <Container className="relative z-10 mt-10 md:mt-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-xxl text-balance text-cream"
        >
          <span className="block text-[14vw] leading-[0.9] sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5vw]">
            <span className="text-gradient-cream">Lead the AI era.</span>
          </span>
          <span className="font-serif-italic block text-[16vw] leading-[0.92] tracking-[-0.04em] sm:text-[13vw] md:text-[11.5vw] lg:text-[10.5vw] text-glow-lava">
            <span className="text-gradient-lava">Don’t just survive it.</span>
          </span>
        </motion.h1>
      </Container>

      {/* Asymmetric bottom: scroll hint left, description right */}
      <Container className="relative z-10 mt-14 md:mt-24">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          {/* Scroll hint */}
          <motion.a
            href="#convictions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="group inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim transition-colors hover:text-cream md:col-span-5"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border-hair border-cream-15 transition-colors group-hover:border-[#ff5d2a]/60">
              <ArrowRight className="h-3.5 w-3.5 rotate-90" />
            </span>
            Scroll to dig
            <span className="font-serif-italic text-base text-cream/60">— 1</span>
          </motion.a>

          {/* Description + CTA on right */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 md:pl-12"
          >
            <p className="max-w-xl text-[15px] leading-[1.55] text-cream-soft md:text-[16.5px]">
              {(() => {
                const parts = HERO.description.split("—");
                if (parts.length < 2) {
                  return <span className="text-cream">{HERO.description}</span>;
                }
                return (
                  <>
                    <strong className="font-medium text-cream">{parts[0].trim()}</strong>
                    <span className="text-cream-dim">
                      {" — " + parts.slice(1).join("—").trim()}
                    </span>
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
                <span className="underline decoration-cream/30 underline-offset-[6px] group-hover:decoration-[#ff5d2a]">
                  {HERO.ctaSecondary}
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom hairline + cohort meta */}
      <Container className="relative z-10 mt-24 md:mt-28">
        <div className="hairline" />
        <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim">
            Indonesia — Singapore — Global Standard
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim">
            Cohort 01 / September 2026 / 15 Seats
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
