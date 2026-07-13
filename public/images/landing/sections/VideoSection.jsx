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

        <Reveal delay={0.18} className="mt-10">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[rgba(8,14,28,0.55)] shadow-[0_24px_80px_rgba(2,7,18,0.45)]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/MGlGoB82VEg?si=Zac3MbxJdVNihtCD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default VideoSection;
