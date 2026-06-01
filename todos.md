# TODOs

## Patient Stories / reviews follow-ups
- [ ] **Remove dead `DOCTOR.testimonials`** — the 6 fabricated testimonials in [src/lib/doctor-data.ts](src/lib/doctor-data.ts) (around line 322) are no longer referenced anywhere now that the homepage section uses real Google reviews from [src/lib/reviews-data.ts](src/lib/reviews-data.ts). Delete the array.
- [ ] **Replace specialty `PatientStoryCard` stories with real reviews** — the per-specialty `patientStory` entries (in [src/lib/specialties-data.ts](src/lib/specialties-data.ts) and `src/lib/specialties/<slug>.ts`) are still scripted, not real. Swap each to a real, condition-matched quote from `reviews-data.ts` (e.g. the epilepsy review on the epilepsy page, vertigo on vertigo, stroke on stroke, etc.).
