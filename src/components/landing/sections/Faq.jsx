import React, { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/landing/ui/Container";

import Reveal from "@/components/landing/ui/Reveal";
import { FAQ } from "@/components/landing/data";

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  return (
    <div className="group border-b border-b-[0.5px] border-cream-10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-8 px-5 md:px-8 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim md:pt-1.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-serif text-[24px] leading-[1.15] md:text-[30px] text-cream`}
            style={{ letterSpacing: "-0.035em" }}
          >
            {item.q.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif-italic text-lava-soft">
              {item.q.split(" ").slice(-1)[0]}
            </span>
          </span>
        </div>
        <m.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border-hair ${
            isOpen ? "border-[#C9920A]/60 bg-[#C9920A]/10 text-[#C9920A]" : "border-cream-15 text-cream-soft"
          }`}
        >
          <Plus className="h-4 w-4" />
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[60px] pr-5 text-[15px] leading-relaxed text-cream-soft md:pl-[92px] md:pr-[88px]">
              {item.a}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(-1);
  return (
    <section id="faq" className="relative z-10 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.4vw] lg:text-[5.6vw]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Common <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>questions</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="md:col-span-5 md:pt-10">
            <p className="text-[14.5px] leading-relaxed text-cream-dim">
              Can’t find your answer? Reach us at{" "}
              <a
                href="mailto:hello@aiceocircle.com"
                className="inline-flex min-h-[44px] items-center text-cream underline decoration-cream/30 underline-offset-[4px] hover:text-[#C9920A] hover:decoration-[#C9920A]"
              >
                hello@aiceocircle.com
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14 border-t border-t-[0.5px] border-cream-10">
            {FAQ.items.map((it, i) => (
              <FaqItem
                key={i}
                item={it}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Faq;
