import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, X, Loader2 } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { FINAL_CTA } from "@/components/landing/data";

const FinalCta = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    consent: false,
  });

  const [qForm, setQForm] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: ""
  });

  const [errors, setErrors] = useState({});

  const onChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onQChange = (key) => (e) =>
    setQForm((q) => ({ ...q, [key]: e.target.value }));

  const validateField = (key, value) => {
    if (key === "email") {
      if (!String(value).trim()) return "Required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
    }
    if (["fullName", "company"].includes(key) && !String(value).trim()) return "Required";
    return null;
  };

  const onBlurField = (key) => () => {
    const error = validateField(key, form[key]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[key] = error;
      else delete next[key];
      return next;
    });
  };

  const onProceed = (e) => {
    e.preventDefault();
    const newErrors = {};
    ["fullName", "email", "company"].forEach((k) => {
      const err = validateField(k, form[k]);
      if (err) newErrors[k] = err;
    });
    if (!form.consent) {
      newErrors.consent = "Required";
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setShowModal(true);
  };

  const submitApplication = async (isSkipping) => {
    setSubmitting(true);
    setApiError(null);
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          company: form.company,
          skippedQuestions: isSkipping,
          questions: isSkipping ? null : qForm
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setApiError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      
      setSubmitted(true);
      setShowModal(false);
    } catch (err) {
      console.error(err);
      setApiError('A network error occurred. Please check your connection and try again.');
    }
    setSubmitting(false);
  };

  return (
    <section
      id="apply"
      className={`relative overflow-hidden py-20 md:py-28 ${showModal ? "z-[999]" : "z-10"}`}
      style={{
        background: [
          "radial-gradient(ellipse 65% 55% at 95% 5%, rgba(201,146,10,0.16), transparent 60%)",
          "radial-gradient(ellipse 60% 50% at 5% 95%, rgba(31,49,96,0.28), transparent 60%)",
          "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(214,58,10,0.12), transparent 60%)",
        ].join(", "),
      }}
    >
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
            <span className="font-serif-italic block text-gradient-lava" style={{ letterSpacing: "-0.05em", marginTop: "-0.03em", paddingBottom: "0.18em" }}>
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
              <form onSubmit={onProceed} noValidate className="grid grid-cols-1 gap-x-12 gap-y-10 border-t-[0.5px] border-cream-10 pt-12 md:grid-cols-2 md:pt-16">
                <Field label="Full name" required error={errors.fullName}>
                  <input required value={form.fullName} onChange={onChange("fullName")} onBlur={onBlurField("fullName")} placeholder="Edwin Tanuwijaya" className="input" />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input required type="email" value={form.email} onChange={onChange("email")} onBlur={onBlurField("email")} placeholder="edwin.tan@pradiyata.com" className="input" />
                </Field>
                <Field label="Company" required error={errors.company} className="md:col-span-2">
                  <input required value={form.company} onChange={onChange("company")} onBlur={onBlurField("company")} placeholder="Pradiyata Excellence" className="input" />
                </Field>

                <div className="md:col-span-2 flex flex-col gap-6 border-t-[0.5px] border-cream-10 pt-8">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={form.consent} onChange={onChange("consent")} required className="sr-only" />
                    <span className={`mt-0.5 grid h-4 w-4 place-items-center rounded-sm border-hair transition-colors ${form.consent ? "border-[#C9920A] bg-[#C9920A]" : "border-cream-20"}`}>
                      {form.consent && <Check className="h-3 w-3 text-[#070e1c]" />}
                    </span>
                    <span className="text-[12.5px] leading-relaxed text-cream-dim">
                      I authorize the processing of my personal data by the MAXY AI team for the purpose of evaluating my AI CEO Circle application.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="font-mono text-[10px] tracking-wide text-red-400 -mt-3">Consent is required</span>
                  )}
                  <div>
                    <MagneticButton type="submit" icon={ArrowUpRight}>Proceed</MagneticButton>
                  </div>
                </div>
              </form>
            ) : (
              <m.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 border-t-[0.5px] border-cream-10 pt-16 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-hair border-[#C9920A]/40 bg-[#C9920A]/10 text-[#C9920A]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-[44px] leading-tight text-cream md:text-[56px]" style={{ letterSpacing: "-0.04em" }}>
                  Thanks <span className="font-serif-italic text-lava-soft">— application received.</span>
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-cream-soft">
                  The MAXY AI team will review and reach out within 5 business days to schedule a discovery call.
                </p>
                <button type="button" onClick={() => {
                  setSubmitted(false);
                  setForm({ fullName: "", email: "", company: "", consent: false });
                  setQForm({ q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "" });
                }}
                  className="mt-8 inline-flex min-h-[44px] items-center font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim hover:text-cream">
                  Submit another
                </button>
              </m.div>
            )}
          </div>
        </Reveal>
      </Container>

      {/* Questionnaire Modal */}
      <AnimatePresence>
        {showModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <m.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[80vh] flex flex-col rounded-2xl border-hair border-cream-15 bg-[#070e1c] shadow-2xl text-left"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-cream-10 p-5 md:p-6 md:px-10">
                <div>
                  <h3 className="font-serif text-[24px] md:text-[28px] text-cream" style={{ letterSpacing: "-0.02em" }}>
                    Application Questions
                  </h3>
                  <p className="text-[11px] md:text-[12px] text-cream-dim font-mono uppercase tracking-[0.1em] mt-1">
                    Step 2 of 2 · Exclusivity Check
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-cream-dim hover:text-cream transition-colors p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content / Questions */}
              <div className="flex-1 overflow-y-auto p-5 md:p-10 space-y-6 md:space-y-8">
                {apiError && (
                  <div className="p-4 rounded border border-red-500/30 bg-red-950/20 text-red-400 font-mono text-[11px] md:text-[12px] leading-relaxed">
                    ⚠️ {apiError}
                  </div>
                )}

                <div className="flex flex-col gap-3 p-4 md:p-5 rounded-lg border-hair border-[#C9920A]/20 bg-[#C9920A]/5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9920A]">Busy schedule?</span>
                  <p className="text-[12.5px] md:text-[13.5px] leading-relaxed text-cream-soft">
                    We understand your time is highly valuable. You can skip the detailed questions and submit now. Isaac&apos;s team will collect these details later.
                  </p>
                  <div>
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => submitApplication(true)}
                      className="inline-flex min-h-[36px] md:min-h-[38px] items-center gap-2 rounded-full border border-hair border-[#C9920A]/40 bg-[#C9920A]/10 px-4 md:px-5 text-[11px] md:text-[12px] font-mono text-cream uppercase tracking-wider hover:bg-[#C9920A] hover:text-[#070e1c] transition-colors disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-3 w-3 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Skip & Submit Application <ArrowUpRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  <QField label="1. What's your current role and company?">
                    <textarea
                      rows={2}
                      value={qForm.q1}
                      onChange={onQChange("q1")}
                      placeholder="e.g. Founder & CEO at TechCorp, Logistics Industry"
                      className="input"
                    />
                  </QField>

                  <QField label="2. How long have you been in your current leadership role, and what's your company's approximate annual revenue?">
                    <textarea
                      rows={2}
                      value={qForm.q2}
                      onChange={onQChange("q2")}
                      placeholder="e.g. 5 years, ~$10M USD"
                      className="input"
                    />
                  </QField>

                  <QField label="3. What's the biggest operational bottleneck in your business right now that you wish AI could solve?">
                    <textarea
                      rows={2}
                      value={qForm.q3}
                      onChange={onQChange("q3")}
                      placeholder="e.g. Sales reporting delay and operational resource allocation"
                      className="input"
                    />
                  </QField>

                  <QField label="4. Have you or your team attempted any AI initiatives before (tools, workshops, pilots)? What happened?">
                    <textarea
                      rows={2}
                      value={qForm.q4}
                      onChange={onQChange("q4")}
                      placeholder="e.g. We tried a generic ChatGPT training, but it did not lead to custom agentic builds"
                      className="input"
                    />
                  </QField>

                  <QField label="5. Are you able to commit to a 2-day intensive session in person, as part of this program?">
                    <textarea
                      rows={1}
                      value={qForm.q5}
                      onChange={onQChange("q5")}
                      placeholder="e.g. Yes, available in Jakarta/Singapore"
                      className="input"
                    />
                  </QField>

                  <QField label="6. Do you have the authority to implement AI systems and decisions inside your company without needing sign-off from someone else?">
                    <textarea
                      rows={1}
                      value={qForm.q6}
                      onChange={onQChange("q6")}
                      placeholder="e.g. Yes, complete authority as CEO"
                      className="input"
                    />
                  </QField>

                  <QField label="7. Why now? What's driving you to prioritize this in the next 6 months rather than later?">
                    <textarea
                      rows={2}
                      value={qForm.q7}
                      onChange={onQChange("q7")}
                      placeholder="e.g. We need to build structural advantages before our competitors adopt agentic systems."
                      className="input"
                    />
                  </QField>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-cream-10 p-5 md:p-6 md:px-10 bg-[#060b18]">
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => submitApplication(true)}
                  className="w-full sm:w-auto text-center py-2 font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim hover:text-cream disabled:opacity-50"
                >
                  Or skip detailed questionnaire
                </button>
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => submitApplication(false)}
                  className="w-full sm:w-auto justify-center inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C9920A] px-8 text-[13px] font-mono text-[#070e1c] uppercase tracking-wider hover:bg-[#ff7a3d] hover:text-[#efe7d6] transition-colors disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

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
        textarea.input { min-height: 50px; }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, children, className = "", error }) => (
  <label className={`flex flex-col gap-1.5 ${className}`}>
    <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim">
      {label}{required && <span className="text-[#C9920A]"> *</span>}
    </span>
    {children}
    {error && (
      <span className="font-mono text-[10px] tracking-wide text-red-400">{error}</span>
    )}
  </label>
);

const QField = ({ label, children }) => (
  <label className="flex flex-col gap-2 text-left">
    <span className="font-serif text-[16px] md:text-[18px] text-cream leading-tight" style={{ letterSpacing: "-0.01em" }}>
      {label}
    </span>
    {children}
  </label>
);

export default FinalCta;
