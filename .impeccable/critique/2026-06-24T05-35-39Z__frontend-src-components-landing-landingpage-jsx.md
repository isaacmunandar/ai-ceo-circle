---
target: frontend/src/components/landing
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-06-24T05-35-39Z
slug: frontend-src-components-landing-landingpage-jsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | FAQ + flip cards give clear feedback; form has no loading state for future API |
| 2 | Match System / Real World | 4 | Language speaks directly to CEO concerns; "Digital CEO Twin" explained inline |
| 3 | User Control and Freedom | 3 | No trapped states; FAQ toggles cleanly; landing page context limits this fairly |
| 4 | Consistency and Standards | 3 | Excellent visual system; footer links all resolve to #apply (placeholder) |
| 5 | Error Prevention | 2 | HTML5 type + required only; no inline validation feedback during typing |
| 6 | Recognition Rather Than Recall | 3 | Nav labeled, FAQ visible; mobile nav behind one hamburger tap |
| 7 | Flexibility and Efficiency | 2 | Single conversion path; appropriate for landing page but no section shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Strong hierarchy; section eyebrow on every section creates pattern saturation |
| 9 | Error Recovery | 2 | Browser-default validation tooltip only; no custom inline error messages |
| 10 | Help and Documentation | 2 | FAQ covers common questions; no contextual hints on form fields |
| **Total** | | **27/40** | **Acceptable — good foundation, 4 targeted fixes lift this to Good** |

## Anti-Patterns Verdict

**LLM assessment**: The dark-navy + lava-gold + cream palette is distinctive and avoids the AI defaults (AI-purple gradients, cream+brass premium consumer, mid-grey SaaS). The 3D flip cards, MagneticButton, and cursor lava feel crafted, not templated. The serif/italic-last-word heading pattern is consistent and earns its repetition as a brand signature.

That said, two AI scaffold patterns are present: (1) every single section opens with a tiny all-caps mono eyebrow label above the heading — the impeccable skill bans this when it appears on every section; (2) the stats grid in the hero (big number, small label) is the "hero-metric template" SaaS cliche.

**Deterministic scan**: After suppressing confirmed intentional patterns (Instrument Serif brand serif, gradient-text as established lava treatment), 2 remaining findings — both in CursorLava.jsx: layout-property animation (transitioning width + height directly instead of scale). Causes layout thrash on every pointer move.

## Overall Impression

The design has real personality — the lava gold against near-black, the 3D flip conviction cards, the editorial serif voice. The mobile execution is tighter than most landing pages in this category. The single biggest opportunity: the "BILINGUAL EN / ID" claim in the marquee strip against a page that is 100% English. For an Indonesian CEO doing due diligence, this is an immediate credibility break.

## What's Working

1. **Dark editorial palette with restraint** — Navy + lava gold + cream is committed without being gaudy. Gradient uses are purposeful (section heading italics only).
2. **Motion craft** — Flip cards (preserve-3d, backface-visibility, reduced motion support), FAQ accordion with AnimatePresence, cursor lava blob — all intentional. useReducedMotion() is wired through BuiltOnConvictions.
3. **Touch target compliance** — After harden pass: all interactive elements at WCAG 44px minimum. Hamburger, radio labels, mono links, footer items — all fixed.

## Priority Issues

**[P1] "BILINGUAL EN / ID" marquee claim vs. English-only page**
- Why it matters: The marquee promises bilingual support but the entire page is English only. An Indonesian CEO sees this within 10 seconds. Credibility breaks at the marquee.
- Fix: Remove "BILINGUAL EN / ID" from marquee data in data.js until Indonesian version exists, OR implement the language toggle (footer already has EN/ID switcher).
- Suggested command: /impeccable clarify

**[P1] Price/investment not disclosed anywhere**
- Why it matters: CEOs make large commitments. The FAQ has "What is the program investment?" — if the answer reveals no price, that is a conversion funnel friction point that skeptical executives abandon.
- Fix: Edit the FAQ answer to include a range or clear "discussed in discovery call" anchor.
- Suggested command: /impeccable clarify

**[P2] Section eyebrow label on every single section**
- Why it matters: The tiny all-caps mono eyebrow appears above every heading across all 12 sections. This reads as AI scaffold, not brand voice.
- Fix: Keep eyebrow only on 3-4 sections where it carries actual new information. Replace others with subheading or lead paragraph entry.
- Suggested command: /impeccable distill

**[P2] Flip card touch hint is wrong on mobile**
- Why it matters: Back face says "Hover to flip back" — there is no hover on mobile. For the executive persona on iPhone, this looks like a bug.
- Fix: In BuiltOnConvictions.jsx, detect pointer capability with window.matchMedia('(hover: none)').matches and conditionally render "Tap to flip back" vs "Hover to flip back".
- Suggested command: /impeccable harden

## Persona Red Flags

**Jordan (First-Timer CEO, visiting from referral):**
- Sees "BILINGUAL EN / ID" in marquee. Looks for Indonesian version. Doesn't find it. Doubt introduced within 10 seconds.
- Scrolls through 12+ sections to reach the form with no progress indicator. Loses context around section 6.
- Clicks "What is the program investment?" in FAQ — if non-committal, Jordan exits.

**Casey (Distracted Mobile CEO, between meetings):**
- Taps a flip card. Card flips. "Hover to flip back" text is wrong — looks broken.
- Taps "Privacy Policy" in footer for compliance due diligence — goes to #apply. Trust eroded.
- Large lava CTA button is accessible in thumb zone — good.

**Budi Santoso (Indonesian CEO, 46, 400-person manufacturing company):**
- Marquee promises bilingual. Page is English only. The promise came from the page, not from Budi — the page broke its own promise.
- Testimonials use names that don't clearly signal Indonesian/Singaporean peers. Budi is looking for validation from people who look like him.
- "Max 10 CEOs" and 6-month duration are strong exclusive signals — the stats section communicates this well.

## Minor Observations

- CursorLava.jsx transitions width and height directly (detector finding). Consider transform: scale() to stay GPU-composited.
- "Download program overview" in hero goes to #apply — should trigger PDF download or lead-capture modal. Currently misleading.
- Ecosystem section with pillars: [] has an empty grid div creating ~40px of mystery whitespace from the mt-10 margin. Remove the grid wrapper when pillars is empty.
- Stats labels now 10px (improved from 9px). Still at readable floor for 35-55 age group — consider 11px.
- Footer ghost title clips at edges at 320px (intentional overflow-hidden, but worth visual QA).
