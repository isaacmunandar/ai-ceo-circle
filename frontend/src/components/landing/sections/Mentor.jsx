import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { MENTOR } from "@/components/landing/data";
import { AtSign } from "lucide-react";

const Mentor = () => {
  return (
    <section id="mentor" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{MENTOR.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.8vw] lg:text-[5vw]">
                Mentored by a practitioner{" "}
                <span className="font-serif-italic text-gradient-lava">who has done it</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hair border-cream-10 md:grid-cols-12">
          {/* Lead mentor */}
          <Reveal className="md:col-span-7">
            <div className="relative h-full border-r border-b border-hair border-cream-10 bg-[rgba(12,20,40,0.3)] p-8 md:p-12">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {/* Magma orb avatar */}
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-[#ff5d2a]/25 blur-3xl" aria-hidden />
                  <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-full border-hair border-cream-15 sm:h-32 sm:w-32">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#ffae7a,_#ff5d2a_50%,_#7a2606_85%,_#1c0a02)]" />
                    <span className="relative font-serif-italic text-4xl text-cream drop-shadow-md sm:text-5xl">
                      {MENTOR.lead.initials}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[36px] leading-none text-cream sm:text-[44px]">
                    {MENTOR.lead.name.split(" ")[0]}{" "}
                    <span className="font-serif-italic text-lava-soft">
                      {MENTOR.lead.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <p className="mt-2 text-[14px] text-cream-soft">{MENTOR.lead.role}</p>
                  <a
                    href="#apply"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.28em] text-lava hover:text-cream"
                  >
                    <AtSign className="h-3 w-3" />
                    {MENTOR.lead.handle}
                  </a>
                </div>
              </div>
              <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-cream-soft">
                {MENTOR.lead.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {MENTOR.lead.chips.map((c, i) => (
                  <span
                    key={i}
                    className="rounded-full border-hair border-cream-15 bg-cream/[0.02] px-3.5 py-1.5 text-[11.5px] tracking-tight text-cream-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Team */}
          <div className="flex flex-col border-b border-hair border-cream-10 md:col-span-5">
            <div className="px-8 pt-8 pb-2 md:px-10 md:pt-10">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim">
                Backed by the MAXY AI leadership team
              </span>
            </div>
            {MENTOR.team.map((m, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="flex items-center gap-4 border-t border-hair border-cream-10 px-8 py-6 md:px-10">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-hair border-cream-15 bg-[rgba(255,93,42,0.06)] font-mono text-[12px] tracking-wider text-lava-soft">
                    {m.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-[20px] leading-tight text-cream">{m.name}</div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-cream-dim">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mentor;
