import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { NAV_LINKS, META } from "@/components/landing/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-hair border-cream-10 bg-[#070e1c]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        {/* Logo — magma-style serif wordmark */}
        <a href="#top" className="group flex items-baseline gap-1">
          <span className="font-serif text-[26px] leading-none tracking-tight text-cream md:text-[30px]">
            AI CEO Circle
          </span>
          <span className="font-serif-italic text-lava text-[18px] md:text-[20px]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-tight text-cream-soft transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            className="text-[13px] tracking-tight text-cream transition-colors hover:text-lava"
          >
            Contact us
          </a>
        </div>

        <div className="hidden md:block">
          <MagneticButton href="#apply" icon={ArrowUpRight}>
            Apply
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border-hair border-cream-15 text-cream md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hair border-cream-10 bg-[#070e1c]/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-cream-soft transition-colors hover:bg-cream/[0.04] hover:text-cream"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <MagneticButton href="#apply" icon={ArrowUpRight}>
                  Apply for cohort 01
                </MagneticButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
