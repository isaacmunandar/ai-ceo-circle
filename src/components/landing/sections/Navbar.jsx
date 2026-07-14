"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { NAV_LINKS } from "@/components/landing/data";

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="group relative text-[13px] tracking-tight text-cream-soft transition-colors duration-300 hover:text-cream"
  >
    {label}
    <span
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#C9920A] transition-transform group-hover:scale-x-100"
      style={{ transitionDuration: "0.45s", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    />
  </a>
);

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
    <m.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled ? "bg-[#070e1c]/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(239,231,214,0.06)]" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        <a
          href="#top"
          aria-label="AI CEO Circle by MAXY AI"
          className="group inline-flex min-h-[44px] items-center"
        >
          <Image
            src="/images/logo-aiceocircle.png"
            alt="AI CEO Circle powered by MAXY"
            width={2167}
            height={692}
            priority
            sizes="(min-width: 768px) 180px, 150px"
            className="h-[42px] w-auto transition-opacity duration-300 group-hover:opacity-85 md:h-[48px]"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton href="#apply" icon={ArrowUpRight}>
            Apply
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <m.button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.92 }}
          className="grid h-11 w-11 place-items-center rounded-full border-hair border-cream-15 text-cream md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <m.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-4 w-4" />
              </m.span>
            ) : (
              <m.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-4 w-4" />
              </m.span>
            )}
          </AnimatePresence>
        </m.button>
      </Container>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t-[0.5px] border-cream-10 bg-[#070e1c]/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l, i) => (
                <m.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-lg px-3 py-3 text-sm text-cream-soft transition-colors hover:bg-cream/[0.04] hover:text-cream"
                >
                  {l.label}
                </m.a>
              ))}
              <div className="pt-2">
                <MagneticButton href="#apply" icon={ArrowUpRight}>
                  Apply for cohort 01
                </MagneticButton>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
};

export default Navbar;
