import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { ECOSYSTEM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

/**
 * Ecosystem — magma editorial: big serif headline + supporting copy + numbered list (01/02/03)
 */
const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative z-10">
      {/* Big serif marquee separating sections */}
      <BigSerifMarquee
        words={["Know-How", "Expertise", "Business Logic"]}
        size="xl"
        className="py-8"
      />
      <BigSerifMarquee
        words={["Engineering", "Automation", "AI Agents"]}
        size="xl"
        reverse
        className="py-4 opacity-80"
      />

      <Container className="pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>About MAXY AI</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[12vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[9vw] md:text-[6.8vw] lg:text-[5.8vw]">
                Tailored <span className="font-serif-italic text-gradient-lava">AI Systems</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
              <p className="max-w-xl text-[15.5px] leading-relaxed text-cream-soft">
                {ECOSYSTEM.intro}
              </p>
              <a
                href="#apply"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:text-lava"
              >
                Encode your know-how
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>

          {/* Numbered editorial list */}
          <div className="md:col-span-5">
            <div className="flex flex-col">
              {ECOSYSTEM.cards.map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative border-t border-hair border-cream-10 py-8 last:border-b">
                    <div className="flex items-baseline gap-5">
                      <span className="font-serif text-4xl tracking-tight text-lava md:text-5xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif text-[26px] leading-tight text-cream md:text-[30px]">
                          {c.title.split(" ").slice(0, -1).join(" ")}
                          {" "}
                          <span className="font-serif-italic text-lava-soft">
                            {c.title.split(" ").slice(-1)[0]}
                          </span>
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-cream-dim">{c.body}</p>
                        <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.28em] text-cream-dim">
                          {c.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars row */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-hair border-cream-10 lg:grid-cols-4">
            {ECOSYSTEM.pillars.map((p, i) => (
              <div
                key={i}
                className="border-r border-b border-hair border-cream-10 bg-[rgba(12,20,40,0.25)] p-6"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-lava">
                  {p.tag}
                </div>
                <div className="mt-3 font-serif text-[18px] leading-snug text-cream">{p.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-3xl text-[15px] leading-relaxed text-cream-soft">
            {ECOSYSTEM.outro}
          </p>
        </Reveal>
      </Container>
    </section>
  );
};

export default Ecosystem;
