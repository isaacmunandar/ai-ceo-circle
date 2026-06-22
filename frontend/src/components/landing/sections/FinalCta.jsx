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
    first: "",
    last: "",
    email: "",
    company: "",
    role: "",
    horizon: "q",
    message: "",
    consent: false,
  });

  const onChange = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative z-10 overflow-hidden py-28 md:py-40">
      <Container>
        {/* Massive serif headline */}
        <Reveal>
          <SectionLabel>{FINAL_CTA.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-serif text-balance text-[12vw] leading-[0.94] tracking-[-0.035em] text-cream sm:text-[10vw] md:text-[7vw] lg:text-[6vw]">
            <span className="text-gradient-cream">Secure your sovereignty.</span>
            <br />
            <span className="font-serif-italic text-gradient-lava">Let’s architect your intelligence.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-cream-soft">
            {FINAL_CTA.body}
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.18}>
          <div className="relative mt-14">
            {!submitted ? (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-12 gap-y-10 border-t border-hair border-cream-10 pt-10 md:grid-cols-2 md:pt-14">
                <Field label="First name" required>
                  <input
                    required
                    value={form.first}
                    onChange={onChange("first")}
                    placeholder="Jane"
                    className="input"
                  />
                </Field>
                <Field label="Last name" required>
                  <input
                    required
                    value={form.last}
                    onChange={onChange("last")}
                    placeholder="Doe"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="jane@company.com"
                    className="input"
                  />
                </Field>
                <Field label="Company" required>
                  <input
                    required
                    value={form.company}
                    onChange={onChange("company")}
                    placeholder="Company name"
                    className="input"
                  />
                </Field>
                <Field label="How can we help?" className="md:col-span-2">
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={onChange("message")}
                    placeholder="A few lines about your priority — what does success look like in 6 months?"
                    className="input resize-none"
                  />
                </Field>

                {/* Horizon radio group */}
                <Field label="Horizon" className="md:col-span-2">
                  <div className="mt-2 flex flex-col gap-3">
                    {HORIZONS.map((h) => {
                      const active = form.horizon === h.id;
                      return (
                        <label
                          key={h.id}
                          className="group flex cursor-pointer items-center gap-3 text-[14.5px] text-cream-soft transition-colors hover:text-cream"
                        >
                          <input
                            type="radio"
                            name="horizon"
                            checked={active}
                            onChange={() => setForm((f) => ({ ...f, horizon: h.id }))}
                            className="sr-only"
                          />
                          <span
                            className={`grid h-4 w-4 place-items-center rounded-full border-hair transition-colors ${
                              active ? "border-lava bg-[#ff5d2a]" : "border-cream-20 bg-transparent"
                            }`}
                          >
                            {active && <span className="h-1.5 w-1.5 rounded-full bg-[#070e1c]" />}
                          </span>
                          <span className="font-serif text-[18px] leading-none">{h.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </Field>

                {/* Consent + submit */}
                <div className="md:col-span-2 flex flex-col gap-6 border-t border-hair border-cream-10 pt-8">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={onChange("consent")}
                      required
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 grid h-4 w-4 place-items-center rounded-sm border-hair transition-colors ${
                        form.consent ? "border-lava bg-[#ff5d2a]" : "border-cream-20"
                      }`}
                    >
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
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 border-t border-hair border-cream-10 pt-16 text-center"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-hair border-lava/40 bg-[#ff5d2a]/10 text-lava">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-[40px] leading-tight text-cream md:text-[52px]">
                  Thanks <span className="font-serif-italic text-lava-soft">— application received.</span>
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-cream-soft">
                  The MAXY AI team will review and reach out within 5 business days to schedule a discovery call.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim hover:text-cream"
                >
                  Submit another
                </button>
              </motion.div>
            )}
          </div>
        </Reveal>
      </Container>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid rgba(239, 231, 214, 0.15);
          color: #efe7d6;
          padding: 10px 0 12px 0;
          font-size: 16px;
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          letter-spacing: -0.01em;
          transition: border-color .3s ease;
          outline: none;
          border-radius: 0;
        }
        .input::placeholder { color: rgba(239, 231, 214, 0.30); font-family: 'Instrument Serif', serif; font-style: italic; }
        .input:focus { border-bottom-color: #ff5d2a; }
        textarea.input { min-height: 80px; }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, children, className = "" }) => (
  <label className={`flex flex-col gap-1 ${className}`}>
    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream-dim">
      {label}
      {required && <span className="text-lava"> *</span>}
    </span>
    {children}
  </label>
);

export default FinalCta;
