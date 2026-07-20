import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { AFTERMATH } from "@/components/landing/data";

const Aftermath = () => {
  return (
    <section id="after" className="relative z-10">
      <BigSerifMarquee words={["Train", "Transform", "Place Talent"]} size="xl" reverse className="py-6 opacity-80" />
      <Container className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{AFTERMATH.label}</SectionLabel>
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.4vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                The beginning,{" "}
                <span className="font-serif-italic text-gradient-lava">not the end</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[16px] leading-relaxed text-cream-soft">{AFTERMATH.intro}</p>
          </Reveal>
        </div>

        {AFTERMATH.eventPhoto && (
          <div className="relative mt-14 h-[220px] overflow-hidden rounded-2xl border border-hair border-cream-10 md:h-[380px]">
            {/* TODO: replace with actual event/program photo */}
            <Image
              src={AFTERMATH.eventPhoto}
              alt="AI CEO Circle program session"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ filter: "saturate(0.65) brightness(0.7)" }}
            />
          </div>
        )}

        <div className="mt-14 flex flex-col">
          {AFTERMATH.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <m.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative cursor-pointer overflow-hidden border-t-[0.5px] border-cream-10 py-11 last:border-b-[0.5px] md:py-14"
              >
                <m.span aria-hidden
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px bg-gradient-to-r from-[#C9920A] via-[#ff7a3d] to-transparent"
                />
                <div className="grid grid-cols-1 items-baseline gap-6 md:grid-cols-12 md:gap-10">
                  <m.div
                    variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-2"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#C9920A]">{s.tag}</span>
                  </m.div>
                  <m.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-5"
                  >
                    <h3
                      className="font-serif text-[30px] leading-[1.05] text-cream md:text-[38px]"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {s.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                  </m.div>
                  <div className="md:col-span-5">
                    <p className="text-[14.5px] leading-relaxed text-cream-soft">{s.body}</p>
                  </div>
                </div>
              </m.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Aftermath;
