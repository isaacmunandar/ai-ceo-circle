import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { AFTERMATH } from "@/components/landing/data";

const Aftermath = () => {
  return (
    <section id="after" className="relative z-10">
      <BigSerifMarquee
        words={["Train", "Transform", "Place Talent"]}
        size="xl"
        reverse
        className="py-6 opacity-80"
      />
      <Container className="pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{AFTERMATH.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.8vw] lg:text-[5vw]">
                The beginning,{" "}
                <span className="font-serif-italic text-gradient-lava">not the end</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">{AFTERMATH.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col">
          {AFTERMATH.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group relative border-t border-hair border-cream-10 py-9 last:border-b md:py-11">
                <div className="grid grid-cols-1 items-baseline gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-lava">
                      {s.tag}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-[28px] leading-[1.06] text-cream md:text-[34px]">
                      {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {s.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[14.5px] leading-relaxed text-cream-soft">{s.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Aftermath;
