"use client";
import React from "react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import SectionLabel from "@/components/landing/ui/SectionLabel";

const VideoSection = () => {
  return (
    <section id="video" className="relative z-10 py-10 md:py-14">
      <Container>
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel>In action</SectionLabel>
            </Reveal>
            <Reveal delay={0.07}>
              <h2
                className="mt-6 font-serif text-balance text-[11vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.5vw] lg:text-[5.5vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Watch the program.{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>
                  Then apply.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pb-2">
            <p className="text-[16px] leading-relaxed text-cream-soft">
              A candid 5-minute walkthrough of the program — executive sessions, live AI builds, and what encoding your intelligence actually looks like inside a company.
            </p>
          </Reveal>
        </div>

        {/* Video placeholder — replace src / add onClick handler with actual embed when ready */}
        <Reveal delay={0.18} className="mt-10">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[rgba(8,14,28,0.55)]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src="https://picsum.photos/seed/executive-ai-program-maxy/1400/788"
              alt="AI CEO Circle — program session overview"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              style={{ filter: "saturate(0.6) brightness(0.45)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(7,14,28,0.78) 0%, rgba(31,49,96,0.38) 55%, rgba(201,146,10,0.12) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play AI CEO Circle program overview"
                className="group relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-cream/20 bg-cream/[0.06] backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-[#C9920A]/50 hover:bg-[#C9920A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9920A]/50"
              >
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-1 text-cream transition-colors group-hover:text-[#C9920A]"
                >
                  <path d="M0.5 1.5L17.5 11L0.5 20.5V1.5Z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A]">
                Program Overview
              </span>
              <p
                className="mt-1 font-serif text-[18px] leading-[1.1] text-cream sm:text-[22px]"
                style={{ letterSpacing: "-0.03em" }}
              >
                See AI CEO Circle in action
              </p>
            </div>
            <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
              <span className="rounded-full border border-cream/15 bg-[#070e1c]/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-cream-dim backdrop-blur-sm">
                5 min
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default VideoSection;
