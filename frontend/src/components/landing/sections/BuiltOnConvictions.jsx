import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { ECOSYSTEM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

/**
 * BuiltOnConvictions — mirrors magma's 'Built on Convictions' section.
 * Big serif headline on left, supporting copy + CTA on right, then 4 conviction columns below.
 */
const BuiltOnConvictions = () => {
  const convictions = [
    {
      title: "Own your intelligence",
      body:
        "Software depreciates. Your operating know-how, judgment, and decision logic must be encoded into systems your company actually owns.",
    },
    {
      title: "Liberate the leader",
      body:
        "Manual debt stalls CEOs. Eliminating operational friction at the top frees the leader to focus on capital, vision, and judgment.",
    },
    {
      title: "Encode know-how",
      body:
        "Models and tools will keep changing. Your unique way of operating must be encoded into executable workflows that can run, adapt, and scale.",
    },
    {
      title: "Uncap growth",
      body:
        "Operational friction caps revenue far more than demand. Removing CEO-level bottlenecks compounds growth without proportional cost.",
    },
  ];

  return (
    <section id="convictions" className="relative z-10 py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <SectionLabel>Built on convictions</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[14vw] leading-[0.92] tracking-[-0.035em] text-cream sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw]">
                Built on{" "}
                <span className="font-serif-italic text-gradient-lava">Convictions</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <Reveal delay={0.1}>
              <p className="text-[15.5px] leading-relaxed text-cream-soft">
                Increase your speed-to-decision and eliminate manual debt by transforming a CEO’s business judgment into proprietary AI systems — owned, encoded, and scaled inside your company.
              </p>
              <a
                href="#program"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:text-lava"
              >
                Explore the program
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* 4 convictions */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border-t border-hair border-cream-10 sm:grid-cols-2 lg:grid-cols-4 lg:border-l">
          {convictions.map((c, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative h-full border-b border-r border-hair border-cream-10 bg-[rgba(12,20,40,0.18)] p-7 md:p-9">
                <h3 className="font-serif text-[28px] leading-[1.05] tracking-tight text-cream md:text-[32px]">
                  {c.title.split(" ").map((w, j, arr) => (
                    <React.Fragment key={j}>
                      {j === arr.length - 1 ? (
                        <span className="font-serif-italic text-lava-soft"> {w}</span>
                      ) : (
                        <>{j > 0 ? " " : ""}{w}</>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="mt-5 text-[14px] leading-relaxed text-cream-dim">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BuiltOnConvictions;
