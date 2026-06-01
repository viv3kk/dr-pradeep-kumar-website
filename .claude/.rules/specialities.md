# Building Specialty Pages — Operating Instructions for Claude

**Purpose:** This document is the operating manual for building any specialty page for the Dr. Pradeep Kumar Neurology website. Follow these rules to produce consistent, high-quality pages without common mistakes.

**Use together with:**
1. `specialty-pages-master-layout.md` — the structural blueprint (tiers, sections, special rules)
2. `headache-disorders-final-clean.md` — Tier 2 reference implementation
3. `stroke-final-content.md` — Tier 1 reference implementation

**Golden rule:** When uncertain about anything, match the pattern of the two reference pages above. They are the gold standard.

---

## Pre-Build Workflow

Before writing a single sentence of content, complete this checklist in order:

**Step 1: Tier classification**
Identify the tier (1, 2, or 3) from the master layout. This determines:
- Word count target
- Caregiver section placement
- Emotional register
- Required sections

**Step 2: Architecture**
Identify whether this is a single page or hub + spokes (4 conditions need spokes: Stroke, Dementia, Parkinsonism, Epilepsy).

**Step 3: Special elements**
Check whether this condition requires:
- ⚠️ Emergency Banner (Stroke, Neuro Infections only — elevated above "Why this matters")
- 🧠 Stigma Callout (Epilepsy, Dementia, Parkinson's only)
- ⚕️ Neuro vs. Ortho Callout (Back Pain, Cervical Pain only)

**Step 4: Inventory**
List before writing:
- Sub-conditions for TOC entity tags (use master layout table)
- Hindi-first sections for this condition
- Dr. Kumar's specific differentiators (procedures, protocols, partnerships)
- Approximate patient volume Dr. Kumar has treated

**Step 5: Use the headline bank**
Pull the headline from the master layout headline bank. Do NOT invent new headlines unless a sub-condition page needs one.

---

## Hard Rules — Never Violate

### Tone Rules
1. NEVER lead with a clinical definition. Always lead with patient experience.
2. NEVER use medical jargon without immediate plain-language translation in parentheses.
3. NEVER write a headline that sounds like a textbook chapter title.
4. NEVER promise cure when the reality is management.
5. NEVER use the word "holistic" — it's vague. Say what you actually mean.

### Structural Rules
6. NEVER skip the "Could this be you?" section.
7. NEVER skip the "What's happening inside" section.
8. NEVER skip the red flags section.
9. NEVER skip the caregiver section (placement varies by tier, but it must exist).
10. NEVER skip the Myths & Facts section.
11. NEVER skip the schema markup block.
12. NEVER skip the consultation fee in "Your First Consultation."

### Patient Story Rules
13. NEVER fabricate a patient story.
14. If no verified review exists for this condition, OMIT the patient story section entirely.
15. ALWAYS attribute with first name + condition + "Adapted from verified review on [HexaHealth/Practo/Google/Paras Health]"

### Differentiator Rules
16. ALWAYS include at least 2 specific procedures/treatments Dr. Kumar offers that distinguish him from a general physician.
17. ALWAYS mention specific partnerships (physiotherapy, neurosurgery, rehabilitation centres) where relevant.
18. NEVER describe Dr. Kumar's approach with only generic language. Specificity is what builds trust.

### Length Rules
19. Tier 1: 2,800–3,500 words
20. Tier 2: 2,200–2,800 words
21. Tier 3: 1,600–2,200 words
22. If you're significantly under target: you've missed sections.
23. If you're significantly over target: you're padding or duplicating.

### Copyright Rules
24. NEVER quote more than one short phrase (under 15 words) per source.
25. NEVER reproduce paragraphs from any source.
26. Patient stories must be adapted (paraphrased), not copied verbatim from reviews.

---

## Section-by-Section Rules

### Hero
- Headline: 5–12 words, patient-experience focused, from the approved headline bank
- Subtitle: 2–3 sentences. Pattern: validates frustration → ends with invitation
- Hero image: real human moment, NOT a clinical scan or stock photo
- Trust badges: same 4 across all pages (do not customise)

### Emergency Banner (Stroke, Neuro Infections only)
- Position: IMMEDIATELY after Hero, before "Why this matters"
- Visual: full-width red/coral block, warning icon, highest visual prominence
- Must include: action instruction, time window, ambulance number, nearest emergency hospital
- For Stroke: include FAST acronym explicitly

### Why This Matters
- 4–6 sentences
- Pattern: prevalence → diagnostic gap patients face → good news → what this page covers
- Include referring-doctor acknowledgment when relevant ("If your family doctor has suggested...")
- Forbidden: statistics dumps, journal citations, SEO keyword stuffing

### On This Page (TOC + Entity Tags)
- For multi-condition pages: full TOC with anchor links + entity pill labels beneath
- For single-condition pages (Tier 3): no TOC, but entity pills appear beneath overview
- Entity tags come from master layout table — do NOT invent new ones
- Visual: pill-shaped labels, same component as homepage specialty cards

### Caregiver Section — Placement Critical
- **Tier 1: ELEVATED position** — appears right after overview, before condition blocks
- **Tier 2: STANDARD position** — appears after condition blocks
- **Tier 3: BRIEF NOTE** within Living Well tips — no standalone section
- Content rules:
  - Name specific emotions (guilt, exhaustion, helplessness, frustration)
  - Give concrete, specific actions — not vague advice
  - Include caregiver self-care reminder
  - For Tier 1 conditions: this is often the most-read section. Write it accordingly.

### Condition Blocks (sub-sections in this exact order)

#### a. Could this be you?
- 5–7 bullets in second person ("You feel...", "You notice...")
- Mix: physical sensations + functional impact + social/emotional toll
- At least one bullet about failed self-treatment
- Forbidden: clinical diagnostic criteria, technical terms

#### b. What it feels like (skip for Tier 3)
- 1 paragraph, 4–6 sentences
- Narrative, sensory language
- Contrast sub-types if relevant
- End with implicit reassurance: "This is real, it has a name, it can be addressed."

#### c. What's happening inside
- 1–2 paragraphs
- Start with a reassuring reframe where possible ("Despite how it feels...")
- Use ONE analogy from the analogies bank (electrical short-circuit, plumbing blockage, dopamine factory, etc.)
- End by connecting mechanism to treatment: "This is why Dr. Kumar's approach targets X..."

#### d. Red flags ("When to come in — and when it's urgent")
- Intro line (use verbatim): "Some symptoms can wait for a routine visit. Others can't. Please don't second-guess these:"
- 4–7 bullets, each a symptom the patient or family can observe
- For ER conditions: explicit emergency banner (already at top of page for Stroke/Neuro Infections)

#### e. How Dr. Kumar treats it (includes "road ahead")
- 2–3 paragraphs
- Structure: diagnosis approach → specific treatments by sub-type → beyond medication → realistic timeline (road ahead in final paragraph)
- MUST include specific procedures/medications Dr. Kumar offers (CGRP, Botox, Epley, thrombolysis, EEG, NCS, etc.)
- Never generic — always condition-specific differentiators

### Micro-CTA (after condition blocks)
- Single line: "Talk to Dr. Kumar — [context-specific message]. Same-week appointments, in person or by video."
- Two buttons: Book a visit · Call now

### Myths & Facts
- Tier 1: 5–7 pairs
- Tier 2: 5 pairs
- Tier 3: 3–4 pairs
- Format: "Myth: [belief]" + "Fact: [correction with empathy]"
- Each myth must be a REAL belief patients hold — not a strawman
- Include Hindi terms where culturally relevant (Lakwa, Mirgi, Kampvaat, etc.)

### Your First Consultation
- Use shared structure: conversation → examination → investigations → plan → what to bring → fee
- Customise ONLY the examination paragraph per condition (see master layout table)
- ALWAYS include consultation fee (₹1,000 first / ₹500 follow-up)
- ALWAYS emphasise "no unnecessary tests"

### Stigma Callout (Epilepsy, Dementia, Parkinson's only)
- Visually distinct block — not buried in prose
- Position: after "Your first consultation"
- Use exact copy from master layout
- Hindi-first content

### Dr. Kumar's Approach
- 1 paragraph (philosophy) + 2–3 bolded differentiators
- Include a direct quote (his philosophy in 1 sentence, italicised)
- Mention approximate patient volume for this condition
- Name specific procedures, protocols, partnerships
- End with realistic improvement timeline
- Followed by doctor credential card (photo + degrees + stats)

### Patient Story
- ONE story per page (no more, no fewer if available)
- Must be from a verified review (HexaHealth, Practo, Google, Paras Health)
- If no matching review exists for this condition: OMIT this section
- Format: blockquote + first name + condition tag + source attribution
- Adapt (paraphrase), never copy verbatim

### Living Well
- 5–7 numbered tips
- Each tip: specific and actionable (no "exercise regularly" — say "walk 20 minutes daily")
- Include:
  - At least one tip for caregivers (especially for Tier 3 where caregiver gets no separate section)
  - At least one tip about medication safety or adherence
  - At least one tip about emotional wellbeing
- Forbidden: tips requiring medical knowledge to execute (those go in treatment section)

### FAQ
- Tier 1: 6–8 questions
- Tier 2: 5–7 questions
- Tier 3: 4–5 questions
- Questions in PATIENT voice (how would a Lucknow/Kanpur patient actually ask?)
- Answers in Dr. Kumar's voice (warm, direct, 3–5 sentences)
- ALWAYS include:
  - A prognosis question ("Will I get better?")
  - A medication duration question ("Will I take this forever?")
  - A cost/access question (consultation fee, tests, affordability)
  - Final question about when to seek urgent help

### Schema Markup (JSON-LD)
- Always include 4 types: MedicalWebPage, Physician, MedicalCondition (one per sub-condition), FAQPage
- Use @id references for Physician to avoid duplication
- Include alternateName with Hindi terms from master layout table
- Update lastReviewed to today's date

---

## Common Mistakes to Avoid

These are the mistakes most likely to happen. Watch for them specifically.

**1. Defaulting to textbook structure.** When in doubt, lead with "Could this be you?", not with definition.

**2. Inventing new headlines.** Use the headline bank. Don't get creative.

**3. Forgetting tier-specific caregiver placement.** Tier 1 = elevated (after overview). Tier 2 = standard (after condition blocks). Tier 3 = brief note in Living Well.

**4. Skipping the emergency banner for Stroke and Neuro Infections.** These require the banner above "Why this matters." Non-negotiable.

**5. Writing a generic "How Dr. Kumar treats it."** Must name specific procedures, drugs, or approaches. Generic = no differentiation = no booking.

**6. Fabricating patient stories.** If no verified review exists for this condition, OMIT the section. Never invent.

**7. FAQ questions in doctor voice.** Read each question aloud. Does it sound like how a real patient would ask? If not, rewrite.

**8. Forgetting Hindi alternateName in schema.** Master layout has the mapping table. Always use it.

**9. Missing the cost question in FAQ.** Always include consultation fee and "no unnecessary tests" reassurance. This is a major conversion blocker.

**10. "What's happening inside" too dense.** One analogy. Plain language. Connect to treatment.

**11. Living Well tips too vague.** "Manage stress" is useless. "Set a phone alarm for medication times" is useful.

**12. Caregiver section as an afterthought.** For Tier 1 especially, this is often the most-read section. Write it with the same care as the hero.

**13. Skipping the road ahead.** The final paragraph of "How Dr. Kumar treats it" must include realistic timeline ("Most patients see improvement within X weeks").

**14. Overusing bolded sub-headers in prose.** Use them in caregiver section structure. Don't use them everywhere — they create visual noise.

**15. Forgetting the micro-CTA after condition blocks.** Always present, always context-specific.

---

## Pre-Publish Checklist

Before finalising any page, verify every item:

**Structure**
- [ ] All required sections present for this tier
- [ ] Sections in correct order per master layout
- [ ] Word count within tier target
- [ ] Mobile scrolls: max 3–4 for any single section block

**Content**
- [ ] Hero headline from approved bank
- [ ] Entity tags in TOC (or beneath overview for Tier 3)
- [ ] Caregiver section in correct tier-specific position
- [ ] Emergency banner present if Stroke/Neuro Infections
- [ ] Stigma callout present if Epilepsy/Dementia/Parkinson's
- [ ] Neuro vs. ortho callout present if Back/Cervical Pain
- [ ] At least 2 specific Dr. Kumar differentiators named
- [ ] Patient story verified (or section omitted)
- [ ] Living well includes at least one caregiver tip
- [ ] FAQ includes cost/access question
- [ ] FAQ includes prognosis question
- [ ] FAQ includes medication duration question

**Quality**
- [ ] No medical jargon without translation
- [ ] No false promises of cure
- [ ] No fabricated content
- [ ] No more than 1 short quote per source (copyright)
- [ ] Headlines read like patient experience, not diagnosis
- [ ] FAQ questions read in patient voice
- [ ] Caregiver section names specific emotions AND specific actions

**SEO**
- [ ] Schema markup includes all 4 types
- [ ] MedicalCondition entries match every entity tag
- [ ] Hindi alternateName included where applicable
- [ ] lastReviewed date updated

**Hindi-First**
- [ ] Hindi-first sections flagged for translation review (not raw English-to-Hindi pass)
- [ ] Hindi terms used in myths where culturally relevant

---

## When to Ask the User (Don't Guess)

There are some things Claude should ASK before writing, rather than assume:

1. **Patient volume for the condition** — Dr. Kumar may have specific numbers worth citing
2. **Specific procedures Dr. Kumar performs** — beyond what's in our existing docs
3. **Partnerships and referrals** — for the rehabilitation/therapy network
4. **Available verified patient reviews** — to source the patient story
5. **Pricing/consultation fee changes** — confirm the standard ₹1,000/₹500 still applies
6. **Hospital-specific protocols** — e.g., specific stroke protocols at Paras Health

If any of these are unclear, ask the user before drafting that section. Better one clarifying question than a section full of placeholder content that needs rewriting.

---

## Output Format

When delivering a specialty page, structure the output as:

1. **Page metadata** (URL, tier, target word count, architecture)
2. **Deviations from standard layout** (if any — e.g., elevated emergency banner)
3. **Full page content** section by section, with status markers (🆕 NEW / ✏️ REVISED / ✅ KEPT)
4. **Section order summary table**
5. **Hindi-first content flags**
6. **Schema markup block**

This format matches the existing reference pages (headache and stroke). Maintain consistency.