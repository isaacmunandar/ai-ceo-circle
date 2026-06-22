import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { PROBLEM } from "@/components/landing/data";

const Problem = () => {
  return (
    <section id="problem" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROBLEM.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.8vw] lg:text-[5vw]">
                The real AI problem isn’t technology.{" "}
                <span className="font-serif-italic text-gradient-lava">It’s leadership.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">{PROBLEM.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hair border-cream-10 md:grid-cols-2">
          {PROBLEM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="relative h-full border-r border-b border-hair border-cream-10 bg-[rgba(12,20,40,0.25)] p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-[44px] leading-none tracking-tight text-lava md:text-[56px]">
                    {it.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-[24px] leading-tight text-cream md:text-[28px]">
                      {it.title.split(".").map((s, j, arr) => (
                        <React.Fragment key={j}>
                          {j === arr.length - 1 || arr[j].trim() === "" ? (
                            s
                          ) : (
                            <span className={j === 0 ? "" : "font-serif-italic text-lava-soft"}>
                              {s}
                              {j < arr.length - 1 ? "." : ""}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-cream-dim">{it.body}</p>
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

export default Problem;
