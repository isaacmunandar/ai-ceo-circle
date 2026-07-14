"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import { MARKET_SIGNALS } from "@/components/landing/data";

const MarketSignals = () => {
  return (
    <section id="ai-execution-gap" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <SectionLabel>{MARKET_SIGNALS.label}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="mt-7 font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                AI adoption is common.{" "}
                <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>
                  AI execution is rare.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="md:col-span-5 md:col-start-8 md:pt-14">
            <p className="text-[16px] leading-relaxed text-cream-soft">{MARKET_SIGNALS.intro}</p>
            <a
              href="#apply"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream transition-colors hover:text-[#C9920A]"
            >
              Apply if you need implementation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-14 border-y-[0.5px] border-cream-10">
            {MARKET_SIGNALS.items.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-6 border-b-[0.5px] border-cream-10 py-8 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-3">
                  <span className="font-serif text-[56px] leading-none text-[#C9920A] md:text-[84px]" style={{ letterSpacing: "-0.05em" }}>
                    {item.value}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-[28px] leading-[1.05] text-cream md:text-[34px]" style={{ letterSpacing: "-0.035em" }}>
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[14.5px] leading-relaxed text-cream-soft">{item.body}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-cream-dim transition-colors hover:text-[#C9920A]"
                    aria-label={`Source ${index + 1}: ${item.source}`}
                  >
                    Source: {item.source}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default MarketSignals;
