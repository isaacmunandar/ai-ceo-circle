import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { FINAL_CTA } from "@/components/landing/data";

const HORIZONS = [
  { id: "now", label: "Immediate shift (< 1 month)" },
  { id: "q", label: "Next quarter (1–3 months)" },
  { id: "road", label: "Strategic roadmap (6+ months)" },
];

const FinalCta = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first: "", last: "", email: "", company: "", role: "",
    horizon: "q", message: "", consent: false,
  });

  const onChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="apply" className="relative z-10 overflow-hidden py-32 md:py-44">
      {/* Atmospheric lava backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 right-[5%] h-[640px] w-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(201,146,10,0.22), rgba(138,102,8,0.10) 45%, transparent 72%)",
            filter: "blur(140px)",
          }}
        />
        <motion.div
          animate={{ rotate: [0, -120, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-8%] h-[560px] w-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 55% 55%, rgba(31,49,96,0.55), rgba(13,23,41,0.28) 48%, transparent 75%)",
            filter: "blur(140px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,58,10,0.28), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Container>
        <Reveal>
          <SectionLabel>{FINAL_CTA.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="mt-7 font-serif text-balance text-[12vw] leading-[0.92] text-cream sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw]"
            style={{ letterSpacing: "-0.045em" }}
          >
            <span className="block text-gradient-cream">Secure your sovereignty.</span>
            <span className="font-serif-italic block text-gradient-lava" style={{ letterSpacing: "-0.05em", marginTop: "-0.03em" }}>
              Let’s architect your intelligence.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-9 max-w-2xl text-[16px] leading-relaxed text-cream-soft">{FINAL_CTA.body}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-16">
            {!submitted ? (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-12 gap-y-10 border-t border-hair border-cream-10 pt-12 md:grid-cols-2 md:pt-16">
                <Field label="First name" required>
                  <input required value={form.first} onChange={onChange("first")} placeholder="Budi" className="input" />
                </Field>
                <Field label="Last name" required>
                  <input required value={form.last} onChange={onChange("last")} placeholder="Santoso" className="input" />
                </Field>
                <Field label="Email" required>
                  <input required type="email" value={form.email} onChange={onChange("email")} placeholder="budi@perusahaan.com" className="input" />
                </Field>
                <Field label="Company" required>
                  <input required value={form.company} onChange={onChange("company")} placeholder="Company name" className="input" />
                </Field>
                <Field label="How can we help?" className="md:col-span-2">
                  <textarea rows={3} value={form.message} onChange={onChange("message")}
                    placeholder="A few lines about your priority — what does success look like in 6 months?"
                    className="input resize-none" />
                </Field>

                <Field label="Horizon" className="md:col-span-2">
                  <div className="mt-2 flex flex-col gap-3">
                    {HORIZONS.map((h) => {
                      const active = form.horizon === h.id;
                      return (
                        <label key={h.id} className="group flex cursor-pointer items-center gap-3 text-[14.5px] text-cream-soft transition-colors hover:text-cream">
                          <input type="radio" name="horizon" checked={active}
                            onChange={() => setForm((f) => ({ ...f, horizon: h.id }))} className="sr-only" />
                          <span className={`grid h-4 w-4 place-items-center rounded-full border-hair transition-colors ${active ? "border-[#C9920A] bg-[#C9920A]" : "border-cream-20 bg-transparent"}`}>
                            {active && <span className="h-1.5 w-1.5 rounded-full bg-[#070e1c]" />}
                          </span>
                          <span className="font-serif text-[19px] leading-none" style={{ letterSpacing: "-0.02em" }}>{h.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </Field>

                <div className="md:col-span-2 flex flex-col gap-6 border-t border-hair border-cream-10 pt-8">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={form.consent} onChange={onChange("consent")} required className="sr-only" />
                    <span className={`mt-0.5 grid h-4 w-4 place-items-center rounded-sm border-hair transition-colors ${form.consent ? "border-[#C9920A] bg-[#C9920A]" : "border-cream-20"}`}>
                      {form.consent && <Check className="h-3 w-3 text-[#070e1c]" />}
                    </span>
                    <span className="text-[12.5px] leading-relaxed text-cream-dim">
                      I authorize the processing of my personal data by the MAXY AI team for the purpose of evaluating my AI CEO Circle application.
                    </span>
                  </label>
                  <div>
                    <MagneticButton icon={ArrowUpRight}>Submit your application</MagneticButton>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 border-t border-hair border-cream-10 pt-16 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-hair border-[#C9920A]/40 bg-[#C9920A]/10 text-[#C9920A]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-[44px] leading-tight text-cream md:text-[56px]" style={{ letterSpacing: "-0.04em" }}>
                  Thanks <span className="font-serif-italic text-lava-soft">— application received.</span>
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-cream-soft">
                  The MAXY AI team will review and reach out within 5 business days to schedule a discovery call.
                </p>
                <button type="button" onClick={() => setSubmitted(false)}
                  className="mt-8 font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim hover:text-cream">
                  Submit another
                </button>
              </motion.div>
            )}
          </div>
        </Reveal>
      </Container>

      <style>{`
        .input {
          width: 100%; background: transparent; border: none;
          border-bottom: 0.5px solid rgba(239, 231, 214, 0.15);
          color: #efe7d6; padding: 12px 0 14px 0; font-size: 17px;
          font-family: 'Instrument Serif', serif; font-weight: 400;
          letter-spacing: -0.015em; transition: border-color .35s cubic-bezier(0.16,1,0.3,1);
          outline: none; border-radius: 0;
        }
        .input::placeholder { color: rgba(239, 231, 214, 0.30); font-family: 'Instrument Serif', serif; font-style: italic; }
        .input:focus { border-bottom-color: #C9920A; }
        textarea.input { min-height: 80px; }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, children, className = "" }) => (
  <label className={`flex flex-col gap-1.5 ${className}`}>
    <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
      {label}{required && <span className="text-[#C9920A]"> *</span>}
    </span>
    {children}
  </label>
);

export default FinalCta;
