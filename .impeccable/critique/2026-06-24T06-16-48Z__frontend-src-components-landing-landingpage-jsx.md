---
target: frontend/src/components/landing/LandingPage.jsx
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-06-24T06-16-48Z
slug: frontend-src-components-landing-landingpage-jsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No loading state on submit; nav shows no active section on scroll |
| 2 | Match System / Real World | 3 | Bilingual claim fixed; "@handle" link navigates to #apply, not social |
| 3 | User Control and Freedom | 3 | Scroll freely; "Submit another" reset; nav accessible |
| 4 | Consistency and Standards | 2 | Timeline says "maximum 15" — contradicts "10 seats" used in 3 other places |
| 5 | Error Prevention | 3 | HTML5 required, type="email", consent required, radio has default |
| 6 | Recognition Rather Than Recall | 3 | Nav labeled; flip hint context-aware; no scroll-based active section feedback |
| 7 | Flexibility and Efficiency | 2 | "Download program overview" links to #program, not a download |
| 8 | Aesthetic and Minimalist Design | 3 | Eyebrow distill complete; Ecosystem empty-pillars gap; hero stats border anti-pattern |
| 9 | Error Recovery | 2 | Browser-native validation only; no custom inline guidance |
| 10 | Help and Documentation | 2 | FAQ is strong; promised PDF download absent |
| **Total** | | **28/40** | **Good — address weak areas** |

## Anti-Patterns Verdict

**LLM assessment**: The page does not read AI-made at first glance. The dark navy + lava gold is a committed, deliberate palette. The split hero layout, serif+mono typography pair, and hover-sweep timeline rows carry real personality. After the distill pass, the eyebrow cadence is under control — 4 deliberate labels vs 12 reflexive ones. The flip cards with physics-spring mentor orb and touch-aware hints are brand differentiators. The one remaining AI-grammar pattern is the hero stat row (10 / 1 / 1 / 3) — adjacent to the "hero-metric template" ban, but values are specific program facts (not vanity SaaS metrics) so it holds.

**Deterministic scan**: 2 findings — both `layout-transition` antipatterns in CursorLava.jsx lines 63 and 83. The cursor lava glow expands via `transition: width, height` instead of `transform: scale()`. Real performance concern on every mouse-move event. Zero false positives.

**Browser visualization**: Not available this run.

## Overall Impression

The page lands in "Good" territory (28/40) — a genuine step forward from 27. Typography is the page's main creative asset and it's working hard. The biggest missed opportunity remains conversion trust: a page selling a private executive program needs to be watertight on factual consistency. An executive who reads carefully will catch the 10 vs 15 seats discrepancy before hitting the apply form.

## What's Working

1. **Typography system**: Instrument Serif + lava italic last-word pattern is distinctive enough to feel like a brand choice, not a default. Reads luxury editorial at display sizes.
2. **Qualification section (Is this for you?)**: Mirrored yes/no card format with numbered serif items is genuinely useful. Most programs list benefits; this one filters applicants.
3. **Touch-aware flip card hint**: "Tap to flip back" vs "Hover to flip back" shows craft. Context-aware UI communication is notable.

## Priority Issues

### [P1] Cohort size contradiction: 15 vs 10
**What**: data.js Timeline body reads "Small cohort, maximum 15" but PoweredBy marquee ("Max 10 CEOs"), hero stats ("10" / "Seats per cohort"), and FinalCta eyebrow ("10 seats · Cohort 01") all say 10.
**Why it matters**: An executive evaluating a significant investment reads carefully. Two different cohort sizes lose credibility instantly.
**Fix**: Change TIMELINE.steps[3].body from "maximum 15" to "maximum 10".

### [P1] "Download program overview" CTA doesn't download
**What**: Hero secondary CTA says "Download program overview" but href="#program". No PDF, no modal, no download attribute.
**Why it matters**: Broken promise in the hero — highest-traffic element. Signals under-baked product to a skeptical executive buyer.
**Fix**: Change label to "Explore the program" and keep href="#program". Future state: link to actual PDF or lead-capture modal.

### [P2] CursorLava animates layout properties
**What**: CursorLava.jsx lines 63 and 83 — glow and ember expand via `transition: width, height`. Causes layout recalculation 60-120x/sec on mouse move.
**Fix**: Replace width/height with `transform: scale()` — same visual, GPU-composited.

### [P2] Ecosystem empty pillars whitespace
**What**: ECOSYSTEM.pillars: [] renders an empty grid wrapper creating ~40px ghost whitespace.
**Fix**: Wrap pillars grid in `{ECOSYSTEM.pillars.length > 0 && ...}`.

### [P2] Mentor @handle navigates to #apply
**What**: Mentor.jsx — `<a href="#apply">@isaacmunandar.ai</a>`. Social handle affordance signals external link; goes to apply form instead.
**Fix**: Change href to actual social profile URL, or render as plain text `<span>`.

## Persona Red Flags

### Skeptical Southeast Asian CEO: "David"
Profile: CEO, 200+ employees, Indonesia. Has attended 3 AI workshops. Spending 8 minutes reading carefully before deciding to apply.
- Reads "10 seats" in hero → reads to Timeline → "maximum 15" → trust drops, credibility questioned
- Clicks "Download program overview" → scroll-jumps to program section → no PDF → confused
- Investment FAQ: "full clarity before commitment" now lands well
- Reach apply form: no role/title field — odd omission for a CEO-targeted program

### Riley (Stress Tester)
- Finds 10 vs 15 contradiction → P1 content error
- Finds download CTA goes to #program → broken affordance
- Finds @isaacmunandar.ai → #apply instead of social → flags misleading link
- Blank form submit: browser validation fires correctly

### Casey (Mobile User)
- Hero CTA accessible by scroll, not thumb-zone native but MagneticButton prominent enough
- Flip cards: 44px tap targets, context hint correct
- Form: 44px radio labels, serif inputs unusual on mobile but on-brand
- "Download program overview" tapped → scroll to Program, no PDF → confused

## Minor Observations
- Dead form state: `role: ""` in FinalCta form state has no corresponding input field
- No active nav indicator on scroll — adds orientation friction on a long page
- Placeholder photos still live (i.pravatar.cc for testimonials, initials for mentor team) — must replace before public traffic
- ECOSYSTEM.label, TIMELINE.label, FAQ.label remain in data.js as orphaned keys after distill pass — dead data, no rendering impact

## Questions to Consider
- What if "Download program overview" triggered a 2-field lead-capture modal delivering an actual PDF? Turns a broken promise into a lead-generation mechanism.
- The cohort is "10 seats" because Isaac leads every session personally. Could that 1:1 rationale be surfaced more explicitly? Adds credibility to the scarcity.
- Is there a waitlist mechanism for applicants after the cohort fills? A "Join the waitlist" path would capture demand that currently disappears.
