/* ═══════════════════════════════════════════════════════════
   Dr. Pradeep Kumar — Sub-specialty pages
   Bilingual (EN / HI) source of truth for medical content.
   UI strings live in /messages/*.json; long-form content lives here.
═══════════════════════════════════════════════════════════ */

import type { Locale } from "@/i18n/routing";

/* ── Bilingual primitives ──────────────────────────────────── */
export interface Bilingual {
  en: string;
  hi: string;
}

export interface BilingualList {
  en: string[];
  hi: string[];
}

export function t(b: Bilingual, locale: Locale): string {
  return b[locale] ?? b.en;
}

export function tList(b: BilingualList, locale: Locale): string[] {
  return b[locale] ?? b.en;
}

/* ── Domain types ──────────────────────────────────────────── */
export interface Topic {
  slug: string; // URL anchor (#headache, #vertigo, ...)
  name: Bilingual;
  intro: Bilingual;
  couldThisBeYou: BilingualList;
  whatItFeelsLike: Bilingual;
  whatsHappening: Bilingual;
  redFlags: BilingualList;
  howDrKumarTreats: Bilingual;
}

export interface FAQ {
  q: Bilingual;
  a: Bilingual;
}

export interface MythFact {
  myth: Bilingual;
  fact: Bilingual;
}

export interface TOCEntry {
  label: Bilingual;
  anchor: string;
  entityTags: Bilingual[];
}

export interface PatientStory {
  name: string; // first name or pseudonym preserving anonymity
  initials: string;
  condition: Bilingual;
  text: Bilingual;
  source?: "apollo247" | "hexahealth" | "google" | "composite";
  sourceLabel?: Bilingual;
}

export type SpecialtyColor =
  | "coral"
  | "teal"
  | "navy"
  | "gold"
  | "purple"
  | "sky";

export type TrustIconKey = "india" | "lotus" | "brain-care" | "compassion";

export interface TrustPoint {
  iconKey: TrustIconKey;
  label: Bilingual;
}

export interface HeroImage {
  desktop: string; // path under /public, e.g. "/images/foo.png"
  mobile?: string; // optional mobile-optimised crop
  alt: Bilingual;
}

export interface Specialty {
  slug: string;
  name: Bilingual; // full display name
  shortName: Bilingual; // for navbar dropdown
  color: SpecialtyColor;
  icon: string;
  hero: {
    eyebrow: Bilingual;
    tagline: Bilingual;
    supportLine: Bilingual;
    image?: HeroImage; // optional hero photo
    trustPoints?: TrustPoint[]; // optional trust strip
  };
  overview: Bilingual;
  topics: Topic[];
  caregiverSection: Bilingual;
  drKumarsApproach: Bilingual;
  patientStory: PatientStory;
  livingWell: BilingualList;
  faqs: FAQ[];
  // Optional extended sections — present on fully built pages only
  tier?: 1 | 2 | 3;
  toc?: TOCEntry[];
  myths?: MythFact[];
  firstConsultation?: Bilingual;
  emergencyBanner?: Bilingual;
  stigmaCallout?: Bilingual;
  comingSoon?: boolean;
}

/* ═══════════════════════════════════════════════════════════
   STUBS — fully built specialties live in ./specialties/<slug>.ts
═══════════════════════════════════════════════════════════ */

function stub(
  slug: string,
  nameEn: string,
  nameHi: string,
  color: SpecialtyColor,
  icon: string
): Specialty {
  return {
    slug,
    name: { en: nameEn, hi: nameHi },
    shortName: { en: nameEn, hi: nameHi },
    color,
    icon,
    hero: {
      eyebrow: { en: `${nameEn} Clinic`, hi: `${nameHi} क्लिनिक` },
      tagline: {
        en: "Coming soon — full page in preparation.",
        hi: "जल्द आ रहा है — पूरा पन्ना तैयार हो रहा है।",
      },
      supportLine: {
        en: "We're writing this section carefully. Until then, please call Dr. Kumar's clinic directly — we're already seeing patients for this condition.",
        hi: "हम यह हिस्सा ध्यान से लिख रहे हैं। तब तक, कृपया डॉ. कुमार के क्लिनिक पर सीधे कॉल करें — हम इस बीमारी के मरीज़ पहले से देख रहे हैं।",
      },
    },
    overview: {
      en: "This page is being prepared. Dr. Kumar already treats this condition at Paras Health Kanpur and his Lucknow clinics (Equinox Neuro, Medicentrum). Please book a consultation in the meantime.",
      hi: "यह पन्ना तैयार हो रहा है। डॉ. कुमार पारस हेल्थ कानपुर और लखनऊ के Equinox Neuro और Medicentrum क्लिनिक में इस बीमारी का इलाज पहले से कर रहे हैं। तब तक कृपया परामर्श बुक करें।",
    },
    topics: [],
    caregiverSection: { en: "", hi: "" },
    drKumarsApproach: { en: "", hi: "" },
    patientStory: {
      name: "",
      initials: "",
      condition: { en: "", hi: "" },
      text: { en: "", hi: "" },
    },
    livingWell: { en: [], hi: [] },
    faqs: [],
    comingSoon: true,
  };
}

/* Metadata entry for a fully built specialty — shows "Now open" in grid. */
function meta(
  slug: string,
  nameEn: string,
  nameHi: string,
  color: SpecialtyColor,
  icon: string,
  topicPills: Array<{ slug: string; name: Bilingual }> = []
): Specialty {
  return {
    slug,
    name: { en: nameEn, hi: nameHi },
    shortName: { en: nameEn, hi: nameHi },
    color,
    icon,
    hero: {
      eyebrow: { en: `${nameEn} Clinic`, hi: `${nameHi} क्लिनिक` },
      tagline: { en: "", hi: "" },
      supportLine: { en: "", hi: "" },
    },
    overview: { en: "", hi: "" },
    topics: topicPills.map((tp) => ({
      ...tp,
      intro: { en: "", hi: "" },
      couldThisBeYou: { en: [], hi: [] },
      whatItFeelsLike: { en: "", hi: "" },
      whatsHappening: { en: "", hi: "" },
      redFlags: { en: [], hi: [] },
      howDrKumarTreats: { en: "", hi: "" },
    })),
    caregiverSection: { en: "", hi: "" },
    drKumarsApproach: { en: "", hi: "" },
    patientStory: { name: "", initials: "", condition: { en: "", hi: "" }, text: { en: "", hi: "" } },
    livingWell: { en: [], hi: [] },
    faqs: [],
    comingSoon: false,
  };
}

/* ── Master export ─────────────────────────────────────────── */
export const SPECIALTIES: Specialty[] = [
  meta("headache-disorders", "Headache Disorders", "सिरदर्द विकार", "coral", "🧠", [
    { slug: "headache", name: { en: "Headache & Migraine", hi: "सिरदर्द और माइग्रेन" } },
    { slug: "vertigo-and-dizziness", name: { en: "Vertigo & Dizziness", hi: "चक्कर आना" } },
  ]),
  meta("vertigo", "Vertigo", "चक्कर (वर्टिगो)", "teal", "🌀", [
    { slug: "bppv", name: { en: "BPPV", hi: "बीपीपीवी" } },
    { slug: "vestibular-neuritis", name: { en: "Vestibular Neuritis", hi: "वेस्टिबुलर न्यूराइटिस" } },
    { slug: "menieres", name: { en: "Ménière's Disease", hi: "मेनियर्स रोग" } },
    { slug: "central", name: { en: "Central Vertigo", hi: "केंद्रीय चक्कर" } },
  ]),
  meta("stroke", "Stroke & Brain Attack", "स्ट्रोक और ब्रेन अटैक", "navy", "❤️‍🩹", [
    { slug: "ischaemic", name: { en: "Ischaemic Stroke", hi: "इस्केमिक स्ट्रोक" } },
    { slug: "haemorrhagic", name: { en: "Haemorrhagic Stroke", hi: "हेमोरेजिक स्ट्रोक" } },
    { slug: "tia", name: { en: "TIA (Mini-Stroke)", hi: "TIA (मिनी-स्ट्रोक)" } },
    { slug: "recovery", name: { en: "Recovery & Rehab", hi: "रिकवरी और पुनर्वास" } },
  ]),
  meta("epilepsy-and-seizures", "Epilepsy & Seizures", "मिर्गी और दौरे", "teal", "⚡", [
    { slug: "focal", name: { en: "Focal Epilepsy", hi: "फ़ोकल मिर्गी" } },
    { slug: "generalised", name: { en: "Generalised Epilepsy", hi: "जनरलाइज़्ड मिर्गी" } },
    { slug: "status-epilepticus", name: { en: "Status Epilepticus", hi: "स्टेटस एपिलेप्टिकस" } },
    { slug: "febrile", name: { en: "Febrile Seizures", hi: "बुख़ार के दौरे" } },
  ]),
  meta("parkinsonism-and-movement-disorders", "Parkinsonism & Movement Disorders", "पार्किंसनिज़्म और मूवमेंट डिसऑर्डर", "gold", "🌿", [
    { slug: "parkinsons", name: { en: "Parkinson's Disease", hi: "पार्किंसन रोग" } },
    { slug: "essential-tremor", name: { en: "Essential Tremor", hi: "एसेंशियल ट्रेमर" } },
    { slug: "dystonia", name: { en: "Dystonia", hi: "डिस्टोनिया" } },
    { slug: "ataxia", name: { en: "Ataxia", hi: "एटैक्सिया" } },
  ]),
  meta("dementia-and-alzheimers", "Dementia & Alzheimer's", "डिमेंशिया और अल्ज़ाइमर", "sky", "🌙", [
    { slug: "alzheimers", name: { en: "Alzheimer's Disease", hi: "अल्ज़ाइमर रोग" } },
    { slug: "vascular", name: { en: "Vascular Dementia", hi: "वैस्कुलर डिमेंशिया" } },
    { slug: "ftd", name: { en: "Frontotemporal Dementia", hi: "फ़्रंटोटेम्पोरल डिमेंशिया" } },
    { slug: "mci", name: { en: "Mild Cognitive Impairment", hi: "हल्की संज्ञानात्मक हानि" } },
  ]),
  stub("neuropathy", "Neuropathy", "न्यूरोपैथी (नस की बीमारी)", "purple", "💜"),
  stub("neuro-infections", "Neuro Infections", "न्यूरो संक्रमण", "navy", "🦠"),
  stub("neuro-rehabilitation", "Neuro Rehabilitation", "न्यूरो पुनर्वास", "gold", "🏃"),
  stub("back-pain", "Back Pain", "पीठ दर्द", "sky", "🦴"),
  stub("cervical-and-neck-pain", "Cervical & Neck Pain", "सर्वाइकल और गर्दन दर्द", "coral", "🫀"),
];

/* ── Lookup helper (metadata only — for grid, navbar, static params) */
export function getSpecialty(slug: string): Specialty | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}

/* ── Per-specialty data loaders ────────────────────────────── */
const LOADERS: Partial<Record<string, () => Promise<Specialty>>> = {
  "headache-disorders": () =>
    import("./specialties/headache-disorders").then((m) => m.default),
  stroke: () =>
    import("./specialties/stroke").then((m) => m.default),
  "epilepsy-and-seizures": () =>
    import("./specialties/epilepsy-and-seizures").then((m) => m.default),
  "parkinsonism-and-movement-disorders": () =>
    import("./specialties/parkinsonism-and-movement-disorders").then((m) => m.default),
  vertigo: () =>
    import("./specialties/vertigo").then((m) => m.default),
  "dementia-and-alzheimers": () =>
    import("./specialties/dementia-and-alzheimers").then((m) => m.default),
};

/* Loads full specialty data for page rendering.
   Fully built specialties: imports from ./specialties/<slug>.ts
   Stubs: returns the stub entry from SPECIALTIES. */
export async function loadSpecialtyData(slug: string): Promise<Specialty | undefined> {
  const loader = LOADERS[slug];
  if (loader) return loader();
  return SPECIALTIES.find((s) => s.slug === slug);
}
