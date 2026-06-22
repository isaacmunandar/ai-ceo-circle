import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { FAQ } from "@/components/landing/data";

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  return (
    <div className="group border-b border-hair border-cream-10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-6">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-cream-dim md:pt-1.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-serif text-[22px] leading-[1.2] tracking-tight md:text-[26px] ${
              isOpen ? "text-cream" : "text-cream"
            }`}
          >
            {item.q.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif-italic text-lava-soft">
              {item.q.split(" ").slice(-1)[0]}
            </span>
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-hair ${
            isOpen ? "border-lava/60 bg-[#ff5d2a]/10 text-lava" : "border-cream-15 text-cream-soft"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[58px] pr-14 text-[14.5px] leading-relaxed text-cream-soft">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{FAQ.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw]">
                Common <span className="font-serif-italic text-gradient-lava">questions</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="md:col-span-5 md:pt-10">
            <p className="text-[14.5px] leading-relaxed text-cream-dim">
              Can’t find your answer? Reach us at{" "}
              <a href="#apply" className="text-cream underline decoration-cream/30 underline-offset-[4px] hover:text-lava hover:decoration-lava">
                hello@aiceocircle.com
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-hair border-cream-10">
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
