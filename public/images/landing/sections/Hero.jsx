"use client";
import React from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import AnimatedHeading from "@/components/landing/ui/AnimatedHeading";
import { HERO, STATS_HERO } from "@/components/landing/data";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[100dvh] overflow-hidden pt-20 pb-24 md:pt-24 md:pb-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#070e1c] z-0">
        <m.div
          className="absolute -inset-[3%]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1.03, 1.09, 1.03],
                  x: ["-1%", "1%", "-1%"],
                  y: ["0%", "-1%", "0%"],
                }
          }
          transition={{
            duration: 24,
            ease: [0.45, 0, 0.55, 1],
            repeat: Infinity,
          }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-[65%_center] object-cover opacity-[0.85] blur-[0.75px] brightness-[0.82] md:object-center"
          />
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c]/75 via-[#070e1c]/38 to-[#070e1c]/5" />
      </div>

      {/* Status pill */}
      <Container className="relative z-10 pt-4 md:pt-10">
        <m.div
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
        </m.div>
      </Container>

      {/* Editorial layout: the skyline remains the right-side focal point. */}
      <Container className="relative z-10 mt-10 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-10 xl:col-span-9">
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
              .hero-display h1 > span { display: block; line-height: 0.86; letter-spacing: 0; }
              .hero-display h1 span.font-serif-italic { padding-bottom: 0 !important; }
              .hero-display h1 > span:first-child { font-size: clamp(48px, 8vw, 132px); }
              .hero-display h1 > span:last-child {
                font-size: clamp(52px, 9.2vw, 152px);
                letter-spacing: 0;
                text-shadow: 0 0 20px rgba(255,95,38,0.18);
                margin-top: 0.12em;
              }
            `}</style>
          </div>

          <div className="mt-12 md:col-span-5 md:mt-20">
            <m.div
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
                  className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] tracking-tight text-cream/80 transition-colors hover:text-cream"
                >
                  <span className="underline decoration-cream/30 underline-offset-[6px] group-hover:decoration-[#C9920A]">
                    {HERO.ctaSecondary}
                  </span>
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </Container>

      {/* Animated stats */}
      <Container className="relative z-10 mt-20 md:mt-24">
        <div className="hairline" />
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS_HERO.map((s, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <m.span
                whileHover={{ color: "#ff7a3d" }}
                transition={{ duration: 0.3 }}
                className="font-serif text-[38px] leading-none text-cream sm:text-[44px]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {s.value}
              </m.span>
              <span className="mt-2 font-mono text-[12px] uppercase leading-tight tracking-[0.18em] text-cream-soft">
                {s.label}
              </span>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
