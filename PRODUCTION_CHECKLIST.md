# Production Launch Checklist — Dr. Pradeep Kumar Neurology

A working list of everything that needs to be true before this site goes live, and the first 30 days after.

Order matters within each section. Items marked **[blocker]** must be done before launch; **[important]** should be done at or near launch; **[nice]** can ship after.

---

## 1. Content readiness

- [ ] **[blocker]** Populate the 5 stub specialty pages with real content (Stroke, Parkinson's & Movement, Dementia & Memory, Epilepsy & Attacks, Neuropathic Pain). Same empathy framework as Headache & Vertigo — `couldThisBeYou` → `whatItFeelsLike` → `whatsHappening` → `redFlags` → `howDrKumarTreats`, plus caregiver section, approach, story, living-well, FAQs.
- [ ] **[blocker]** Replace `comingSoon: true` flags in `src/lib/specialties-data.ts` once content is in place.
- [ ] **[blocker]** Doctor reviews every word of medical content — this is his name on it. Schedule a 60-minute review with Dr. Kumar before launch.
- [ ] **[blocker]** Native Hindi-speaker review of all `hi:` strings. The medical phrasing matters; a non-native translator could miss the empathetic tone. Ideally a Lucknow/Kanpur-native medical writer.
- [ ] **[blocker]** Integrate the photos the doctor delivered on the pen drive. Slot them into the SpecialtyHero (right-side image), the DrKumarsApproach card (real portrait), and the homepage Hero (replacing the SVG cartoon).
- [ ] **[important]** Verify or remove the **Multiple Sclerosis** card on the homepage Services section — doctor didn't include MS in his topic list, so confirm if he wants it kept, folded into a different specialty, or removed.
- [ ] **[important]** Verify all real patient quotes have explicit consent (the HexaHealth-sourced Rekha quote is currently adapted; either get permission or replace with a fully composite "illustrative" attribution).
- [ ] **[important]** Spell-check both languages. Run `pnpm dlx cspell "src/**/*.{ts,tsx,json}"` or similar.
- [ ] **[important]** Verify every phone number, email, clinic address in `doctor-data.ts` against the doctor's current records.
- [ ] **[important]** Confirm the doctor's **registration number** (currently `UPSMC-XXXXX` placeholder in `doctor-data.ts`) — required by Indian Medical Council guidelines for any doctor's website.
- [ ] **[nice]** Add a downloadable PDF of Dr. Kumar's CV / publications, linked from the About section.

---

## 2. Domain & hosting

- [ ] **[blocker]** Buy the domain (e.g. `drpradeepkumar.com`, `drpradeepkumar.in`, or similar — check availability and pick the one that matches the practice's primary branding).
- [ ] **[blocker]** Set up hosting. Recommended: **Vercel** (zero-config Next.js, free tier covers a doctor's site, automatic SSL, edge caching, preview deploys per PR).
- [ ] **[blocker]** Configure DNS — A/AAAA records (or CNAME if using Vercel's setup wizard). Add `www` → root redirect.
- [ ] **[blocker]** Verify SSL certificate is issued and forces HTTPS.
- [ ] **[blocker]** Set environment variables in Vercel production:
  - `NEXT_PUBLIC_SITE_URL=https://<your-actual-domain>` (no trailing slash)
- [ ] **[important]** Add the same variable for Preview deploys (use the Vercel preview URL pattern).
- [ ] **[important]** Set up a custom 404 page (right now Next's default applies).
- [ ] **[nice]** Add a status / monitoring page subdomain if the practice grows.

---

## 3. Forms & booking

The current `<Connect />` form is UI only — it does not submit anywhere yet.

- [ ] **[blocker]** Decide on a backend for the booking form. Options, easiest to hardest:
  1. **Formspree / Web3Forms** — paste an endpoint, get emails. 10 minutes.
  2. **Resend / Postmark** + a Next.js Route Handler — better deliverability, more control. ~1 hour.
  3. **Apollo 247 / HexaHealth deep link** — skip the form and link directly to their booking page.
  4. **Calendly / Cal.com embed** — patient picks a slot, syncs to doctor's calendar. ~30 minutes.
- [ ] **[blocker]** Wire up the form `onSubmit` to whichever backend chosen.
- [ ] **[blocker]** Add server-side validation + rate limiting (the doctor will get spam otherwise — `@upstash/ratelimit` is simple).
- [ ] **[blocker]** Add reCAPTCHA v3 or Cloudflare Turnstile for bot protection.
- [ ] **[blocker]** Test the end-to-end booking flow on a real phone before launch.
- [ ] **[important]** Set up auto-acknowledgement email back to the patient ("We received your request, Dr. Kumar's team will reach out within 24 hours…").
- [ ] **[important]** Add a click-to-WhatsApp button on mobile pointing to the clinic's WhatsApp Business number (`https://wa.me/91XXXXXXXXXX`).
- [ ] **[important]** Test the `tel:` links open the dialer correctly on iOS and Android.

---

## 4. Imagery & branding

- [ ] **[blocker]** **Open Graph image** — create a 1200×630 PNG at `public/og-image.png` so WhatsApp / LinkedIn / Twitter previews look professional. Should include doctor name, specialty, and Apollomedics affiliation.
- [ ] **[blocker]** Per-specialty OG variants (optional but worth it): `public/og/headache-and-vertigo.png` etc. — wire into each page's `generateMetadata`.
- [ ] **[blocker]** **Favicon** — replace Next.js default with a custom one (`public/favicon.ico`, `public/icon.png`, `public/apple-icon.png`). Use the coral dot logo from the navbar.
- [ ] **[important]** Add `public/manifest.webmanifest` for PWA-friendly installs ("Add to Home Screen" on mobile).
- [ ] **[important]** Replace homepage Hero SVG illustrations with real photographs of Dr. Kumar (the doctor's pen-drive set arriving Thursday).
- [ ] **[important]** Compress all images — run through Squoosh, ImageOptim, or `sharp`. Aim for ≤200KB per hero photo, ≤50KB per thumbnail.
- [ ] **[important]** Replace the `👨‍⚕️` emoji in `DrKumarsApproach.tsx` with either a real photo or a "PK" monogram.
- [ ] **[nice]** Add image-zoom / lightbox for clinic photos.

---

## 5. SEO verification

The site already emits canonical, hreflang, sitemap, robots.txt, JSON-LD. Verify each works:

- [ ] **[blocker]** Visit `/sitemap.xml` in production and confirm all 16 URL variants appear.
- [ ] **[blocker]** Visit `/robots.txt` and confirm it points at the correct sitemap URL.
- [ ] **[blocker]** Use [Google Rich Results Test](https://search.google.com/test/rich-results) on `/en/`, `/en/specialties/headache-and-vertigo`, `/hi/specialties/headache-and-vertigo` — confirm Physician + MedicalSpecialty + BreadcrumbList schemas are detected.
- [ ] **[blocker]** Use [hreflang checker](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/) to confirm `en-IN`, `hi-IN`, and `x-default` are all linked correctly.
- [ ] **[blocker]** Set up **Google Search Console** for the production domain. Submit the sitemap.
- [ ] **[important]** Set up **Bing Webmaster Tools**. Submit sitemap (Bing has decent share in India).
- [ ] **[important]** Claim / optimise the **Google Business Profile** for both clinics (Apollomedics Lucknow + Paras Kanpur). Link the website. Add real photos. Encourage reviews.
- [ ] **[important]** Add the website link to Dr. Kumar's profiles on Apollo247, HexaHealth, Practo, 1mg, Vaidam — strong cross-links from those authority sites accelerate ranking.
- [ ] **[nice]** Add `JSON-LD` for `BreadcrumbList` and `FAQPage` on the homepage too (specialty pages already have it).
- [ ] **[nice]** Plan a short blog/articles section under `/insights/` for SEO depth (one article per month for 6 months = 6 strong landing pages for long-tail queries).

---

## 6. Performance

- [ ] **[blocker]** Run **Lighthouse** on mobile + desktop for `/en/`, `/en/specialties`, `/en/specialties/headache-and-vertigo`. Target scores: Performance ≥ 90, Accessibility ≥ 95, SEO = 100.
- [ ] **[blocker]** Run **PageSpeed Insights** for the same URLs. Confirm Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1) on a 4G connection.
- [ ] **[blocker]** Convert all images to AVIF/WebP (Next.js `<Image>` does this automatically — verify it's being used everywhere, not raw `<img>`).
- [ ] **[important]** Verify `next/font` is loading both Fraunces + DM Sans + Noto Sans Devanagari without layout shift.
- [ ] **[important]** Audit the SVG illustrations in `Hero.tsx` — they're hand-coded but check if any can be simplified or replaced with `<Image>` of an exported PNG for faster initial paint.
- [ ] **[nice]** Add `loading="lazy"` to any below-fold imagery.

---

## 7. Accessibility

The site already uses semantic HTML, `aria-label`, `role="…"`, focus rings, and `prefers-reduced-motion` would be a good add.

- [ ] **[blocker]** Run **axe DevTools** browser extension on every page. Resolve all critical issues.
- [ ] **[blocker]** Tab through every page with keyboard only — confirm dropdowns, accordion, locale toggle, and mobile drawer are all reachable and operable.
- [ ] **[blocker]** Screen-reader test (VoiceOver on macOS, NVDA on Windows) at least on the homepage and one specialty page. Confirm headings flow, link text makes sense out of context, and form labels are read.
- [ ] **[important]** Add `prefers-reduced-motion` support to `globals.css` to disable `float-anim`, `breathe`, `driftOrb` for users who need it.
- [ ] **[important]** Verify colour contrast — every text/background pair should be ≥ 4.5:1 (or 3:1 for large text). The coral on white is borderline; double-check.
- [ ] **[important]** Add skip-to-content link at the top of every page.

---

## 8. Legal & medical compliance (India)

This is a *medical practice* website — different rules than a normal business site.

- [ ] **[blocker]** **Privacy Policy** — must cover patient data, cookies, third-party tools (analytics, booking provider, Apollo 247). Use a template from a healthcare-aware legal source, then have a lawyer review.
- [ ] **[blocker]** **Terms of Use** — limit liability around medical advice. Required.
- [ ] **[blocker]** **Medical disclaimer** — explicit notice that the site provides information, not personal medical advice; readers should consult a doctor for their condition. Place at the bottom of every specialty page and in the footer.
- [ ] **[blocker]** **Doctor's registration number** visible on the site (UP Medical Council). Required by NMC guidelines.
- [ ] **[blocker]** **Patient testimonials**: Indian medical advertising regs (NMC Telemedicine Practice Guidelines, ASCI) restrict patient endorsements of treatments. Either (a) get explicit signed consent and frame as "experience" not "endorsement", or (b) replace with general "patient stories" labelled illustrative.
- [ ] **[blocker]** Remove or replace the "🔒 HIPAA Compliant" footer chip. HIPAA is a US law and not applicable to an Indian practice — using it is misleading. Replace with "India DPDP Act compliant" once compliance is actually achieved, or remove.
- [ ] **[important]** Cookie consent banner if any analytics / marketing scripts are loaded (especially for EU/UK visitors). Use `react-cookie-consent` or similar.
- [ ] **[important]** **DPDP Act 2023** compliance — appoint a Data Fiduciary, document data flows for the booking form, maintain a retention policy.
- [ ] **[nice]** Display Apollomedics and Paras Hospital trademarks only with proper attribution / permission.

---

## 9. Analytics & monitoring

- [ ] **[blocker]** Install **Google Analytics 4** (or privacy-friendlier alternatives: Plausible, Fathom, Vercel Analytics). Track at least: page views, locale split, form submissions, click-to-call clicks.
- [ ] **[blocker]** Set up **error monitoring** — Sentry free tier or Vercel's built-in error tracking. Alert on any client or server error on production.
- [ ] **[blocker]** Set up **uptime monitoring** — UptimeRobot free tier or BetterStack. Ping the homepage + a specialty page every 5 minutes. Email/SMS the doctor's office if it goes down.
- [ ] **[important]** Set up a goal/event for "Book a visit" button clicks vs. actual form submissions — gives a conversion funnel.
- [ ] **[important]** Track locale toggle usage. If <5% of visitors switch to Hindi, the landing-page assumption is right. If >30%, consider promoting Hindi differently.
- [ ] **[nice]** Set up Hotjar / Microsoft Clarity (free) for first 30 days to watch real users navigate. Reveals friction points.

---

## 10. Pre-launch QA

Test matrix — confirm every flow on every combination:

| Surface | Chrome desktop | Safari desktop | iOS Safari | Android Chrome |
|---|---|---|---|---|
| Homepage scroll & anchor nav | [ ] | [ ] | [ ] | [ ] |
| Navbar dropdown (desktop only) | [ ] | [ ] | n/a | n/a |
| Mobile drawer | n/a | n/a | [ ] | [ ] |
| Locale toggle EN ↔ HI | [ ] | [ ] | [ ] | [ ] |
| Specialty page renders (HV in full) | [ ] | [ ] | [ ] | [ ] |
| Specialty stub shows Coming Soon | [ ] | [ ] | [ ] | [ ] |
| FAQ accordion opens / closes | [ ] | [ ] | [ ] | [ ] |
| Floating book button appears on scroll | [ ] | [ ] | [ ] | [ ] |
| Connect form submits end-to-end | [ ] | [ ] | [ ] | [ ] |
| Phone tel: link opens dialer | n/a | n/a | [ ] | [ ] |
| WhatsApp link opens app | n/a | n/a | [ ] | [ ] |
| Footer specialty links → correct page | [ ] | [ ] | [ ] | [ ] |
| Hindi page reads correctly in Devanagari | [ ] | [ ] | [ ] | [ ] |
| 404 page works | [ ] | [ ] | [ ] | [ ] |

- [ ] Test on a low-bandwidth simulated 3G connection (Chrome DevTools throttling).
- [ ] Test with **JavaScript disabled** — server-rendered content should still be readable, links should still work, basic SEO + content remain visible.
- [ ] Test that hitting `/specialties/foo` (no locale) 404s gracefully or redirects.
- [ ] Test that hitting `/de/specialties/headache-and-vertigo` (unsupported locale) returns a clean 404.

---

## 11. Launch day

- [ ] **[blocker]** Final `npm run build` succeeds with zero warnings.
- [ ] **[blocker]** Smoke-test the production deploy on the real domain before announcing.
- [ ] **[blocker]** Submit sitemap to Google Search Console.
- [ ] **[blocker]** Submit sitemap to Bing Webmaster Tools.
- [ ] **[important]** Update Dr. Kumar's listings on Apollo247, HexaHealth, Practo, 1mg, Vaidam with the new website URL.
- [ ] **[important]** Post-launch announcement on Dr. Kumar's social channels (LinkedIn, Facebook, Instagram if active).
- [ ] **[important]** Tell the clinic front-desk staff how to direct patients to the website / booking form.
- [ ] **[nice]** WhatsApp Business "About" section updated with website link.

---

## 12. First 30 days post-launch

- [ ] **[important]** Check Search Console daily for indexing issues, mobile usability errors, manual actions.
- [ ] **[important]** Watch error monitoring — fix anything caught in real traffic within 24 hours.
- [ ] **[important]** Run weekly Lighthouse audit; performance often regresses silently.
- [ ] **[important]** Track which specialty pages get the most traffic. Use that to prioritise the next round of content depth.
- [ ] **[important]** Collect new patient stories with explicit consent — replace any composite quotes with real ones.
- [ ] **[important]** Publish first long-form blog post under `/insights/` (e.g., "When a headache isn't just a headache — six warning signs"). Targets a high-volume search query.
- [ ] **[important]** Set up a quarterly content review cycle so specialty pages don't go stale.
- [ ] **[nice]** Reach out to local Lucknow / Kanpur health bloggers for backlinks.
- [ ] **[nice]** Add structured data for individual `Article` schema on each blog post.

---

## 13. Things to watch / known limitations

- The site currently has only the **Headache & Vertigo** specialty fully populated. The other 5 specialties show a "Coming Soon" banner — visible publicly. Either finish them before launch or hide them from the navbar dropdown and footer.
- The `<Connect />` form is **purely visual** right now — no submission backend. Section 3 above is critical.
- Hindi translations are **AI-assisted, not professionally translated**. Section 1 has the review item.
- The site uses **emoji-free custom SVG icons** for the 6 specialties. The doctor's emoji `icon` field still exists in `specialties-data.ts` as a fallback but isn't rendered anywhere user-facing. Safe to remove if you want a tidier data file.
- **`NEXT_PUBLIC_SITE_URL`** must be set in Vercel before launch — without it, canonical URLs and hreflang use a placeholder domain.
- The patient story on Headache & Vertigo (Rekha) is **adapted from a real HexaHealth review**. Confirm legal stance on attribution before keeping.

---

_Last updated: structure built into the site as of May 2026._
