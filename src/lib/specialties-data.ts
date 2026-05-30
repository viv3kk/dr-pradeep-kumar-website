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
  comingSoon?: boolean;
}

/* ═══════════════════════════════════════════════════════════
   SPECIALTY 1 — Headache & Vertigo  (FULLY POPULATED)
═══════════════════════════════════════════════════════════ */
const HEADACHE_AND_VERTIGO: Specialty = {
  slug: "headache-disorders",
  name: {
    en: "Headache Disorders",
    hi: "सिरदर्द विकार",
  },
  shortName: {
    en: "Headache Disorders",
    hi: "सिरदर्द विकार",
  },
  color: "coral",
  icon: "🧠",
  hero: {
    eyebrow: {
      en: "Headache Disorders Clinic",
      hi: "सिरदर्द विकार क्लिनिक",
    },
    tagline: {
      en: "When the pain — or the spinning — won't let you live.",
      hi: "जब दर्द या चक्कर आपको जीने नहीं देता।",
    },
    supportLine: {
      en: "If you've found this page, you (or someone you love) is probably tired of being told it's 'just a headache' or 'just stress'. It usually isn't. Let's understand what's really happening — together.",
      hi: "अगर आप इस पन्ने तक पहुँचे हैं, तो शायद आप (या आपका कोई अपना) यह सुनते-सुनते थक गए हैं कि यह 'सिर्फ़ सिरदर्द' है या 'सिर्फ़ तनाव'। ज़्यादातर ऐसा नहीं होता। आइए मिलकर समझते हैं कि असल में क्या हो रहा है।",
    },
    image: {
      desktop: "/images/headache-and-vertigo-hero.png",
      mobile: "/images/headache-and-vertigo-hero-mobile.png",
      alt: {
        en: "A woman gently holding her temple, eyes closed — the quiet weight of a migraine.",
        hi: "एक महिला माथे को हल्के से थामे, आँखें बंद — माइग्रेन का शांत बोझ।",
      },
    },
    trustPoints: [
      {
        iconKey: "india",
        label: {
          en: "Trusted Care\nAcross India",
          hi: "भारत भर में\nभरोसेमंद देखभाल",
        },
      },
      {
        iconKey: "lotus",
        label: {
          en: "Personalised\nTreatment",
          hi: "वैयक्तिक\nइलाज",
        },
      },
      {
        iconKey: "brain-care",
        label: {
          en: "Expert Neurology\n& Vestibular Care",
          hi: "विशेषज्ञ न्यूरोलॉजी\nऔर वेस्टिबुलर देखभाल",
        },
      },
      {
        iconKey: "compassion",
        label: {
          en: "Compassionate,\nPatient-First",
          hi: "सहानुभूतिपूर्ण,\nमरीज़-पहले",
        },
      },
    ],
  },
  overview: {
    en: "Headache and vertigo are two of the most common reasons patients walk into Dr. Kumar's clinic — and two of the most under-treated. Painkillers from the pharmacy can mask the symptoms, but they rarely fix the cause. The good news: with the right diagnosis, most headaches and most vertigo conditions are highly treatable. This page walks you through the conditions we see most often.",
    hi: "सिरदर्द और चक्कर — डॉ. कुमार के क्लिनिक में आने के दो सबसे आम कारण हैं, और सबसे कम इलाज पाने वालों में भी। दुकान से लाई दवा लक्षणों को छुपा सकती है, पर कारण ठीक नहीं करती। अच्छी ख़बर यह है: सही पहचान के साथ, ज़्यादातर सिरदर्द और ज़्यादातर चक्कर बहुत अच्छे से इलाज हो सकते हैं। यह पन्ना उन स्थितियों को समझाता है जो हम सबसे ज़्यादा देखते हैं।",
  },
  topics: [
    /* ── Topic A: Headache ──────────────────────────────── */
    {
      slug: "headache",
      name: {
        en: "Headache & Migraine",
        hi: "सिरदर्द और माइग्रेन",
      },
      intro: {
        en: "Not all headaches are the same — and figuring out which type you have is the first real step toward relief.",
        hi: "हर सिरदर्द एक जैसा नहीं होता — और राहत की ओर पहला असली कदम यही है कि कौन-सा सिरदर्द है यह पहचाना जाए।",
      },
      couldThisBeYou: {
        en: [
          "A throbbing pain on one side of your head, lasting hours — sometimes a whole day",
          "Nausea, or sensitivity to light and sound, that comes with the pain",
          "Headaches that return more than 4 times a month, year after year",
          "Painkillers from the chemist used to help, but don't anymore",
          "A tight band-like pressure across the forehead, especially after long work hours",
          "Sharp, short attacks of pain behind one eye, sometimes waking you from sleep",
        ],
        hi: [
          "सिर के एक तरफ़ धड़कता हुआ दर्द, घंटों तक — कभी-कभी पूरा दिन",
          "दर्द के साथ जी मचलाना, या रोशनी और आवाज़ बर्दाश्त न होना",
          "महीने में 4 बार से ज़्यादा सिरदर्द, साल दर साल",
          "पहले दुकान की दर्द-निवारक से आराम मिलता था, अब नहीं मिलता",
          "माथे पर कसी हुई पट्टी जैसा दबाव, ख़ासकर लंबे काम के बाद",
          "एक आँख के पीछे तेज़, छोटा दर्द — कभी-कभी नींद से जगा देने वाला",
        ],
      },
      whatItFeelsLike: {
        en: "A migraine often arrives as a storm you can feel coming — a flicker in the vision, a strange smell, a heavy fog. By the time the pain hits, light feels like a knife and sound feels like a hammer. Tension headaches are quieter but persistent — a dull weight pressing across the forehead and into the neck that simply will not let go. Cluster headaches are different again: short, ferocious, almost always on one side and behind the eye, often arriving at the same hour every night.",
        hi: "माइग्रेन अक्सर तूफ़ान की तरह आता है जिसे आप पहले से महसूस कर सकते हैं — आँखों के सामने झिलमिलाहट, एक अजीब-सी गंध, भारी कोहरा। दर्द जब आता है, तो रोशनी चाकू जैसी लगती है और आवाज़ हथौड़े जैसी। तनाव वाला सिरदर्द शांत होता है पर हटता नहीं — माथे और गर्दन पर भारी बोझ जैसा। क्लस्टर सिरदर्द अलग होता है: छोटा, तेज़, लगभग हमेशा एक तरफ़ और आँख के पीछे — अक्सर हर रात एक ही समय पर।",
      },
      whatsHappening: {
        en: "Despite how it feels, the headache is rarely happening 'inside the brain' itself — the brain has no pain receptors. The pain comes from the blood vessels, nerves and membranes around the brain becoming irritated or inflamed. In migraine, a chemical called CGRP plays a starring role. In tension headaches, it's often the muscles of the neck and scalp staying tight for too long. Knowing the type matters because each one responds to genuinely different treatments.",
        hi: "जैसा महसूस होता है उससे उलट, दर्द दिमाग़ के अंदर शायद ही होता है — दिमाग़ में दर्द महसूस करने वाली नसें नहीं होतीं। दर्द दिमाग़ के चारों ओर की रक्त-नलियों, नसों और परदों से आता है जो सूज जाती हैं या चिढ़ जाती हैं। माइग्रेन में CGRP नामक रसायन मुख्य भूमिका निभाता है। तनाव वाले सिरदर्द में अक्सर गर्दन और सिर की मांसपेशियाँ बहुत देर तक तनी रहती हैं। प्रकार पहचानना ज़रूरी है क्योंकि हर का इलाज अलग होता है।",
      },
      redFlags: {
        en: [
          "A sudden, severe headache that feels like the worst of your life",
          "Headache with fever, stiff neck, or rash",
          "Headache after a head injury or fall",
          "Headache with confusion, slurred speech, weakness on one side, or vision changes",
          "A new headache pattern after age 50",
          "Headache that steadily gets worse over days or weeks",
        ],
        hi: [
          "अचानक, बहुत तेज़ सिरदर्द — ज़िंदगी का सबसे बुरा महसूस होने वाला",
          "बुख़ार, गर्दन अकड़ने या त्वचा पर चकत्तों के साथ सिरदर्द",
          "सिर पर चोट या गिरने के बाद सिरदर्द",
          "बेहोशी, बोलने में लड़खड़ाहट, एक तरफ़ कमज़ोरी या दिखाई न देने के साथ सिरदर्द",
          "50 साल की उम्र के बाद नया सिरदर्द शुरू होना",
          "दिनों या हफ़्तों में लगातार बढ़ता हुआ सिरदर्द",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first goal is to identify exactly which type of headache you have — because the treatments are genuinely different. He looks at the pattern, the triggers, and rules out anything serious with a clinical exam (and an MRI only if needed — most patients don't need one). For migraines, treatment usually means a daily preventive medicine plus a fast-acting rescue medicine for attacks. For chronic, hard-to-treat migraines, Dr. Kumar offers CGRP-inhibitor therapy and Botox injections. He'll also walk you through trigger identification — sleep, food, stress, posture — because medication alone is rarely the whole answer.",
        hi: "डॉ. कुमार का पहला लक्ष्य यह पहचानना है कि आपका सिरदर्द किस प्रकार का है — क्योंकि इलाज सच में अलग-अलग होता है। वे लक्षणों का पैटर्न, ट्रिगर देखते हैं और जाँच से किसी गंभीर वजह को नकारते हैं (MRI केवल ज़रूरत पड़ने पर — ज़्यादातर मरीज़ों को नहीं चाहिए)। माइग्रेन के लिए आमतौर पर रोज़ाना खाने वाली रोकथाम की दवा और दौरा पड़ने पर तुरंत राहत देने वाली दवा दी जाती है। पुराने और कठिन माइग्रेन के लिए डॉ. कुमार CGRP-इनहिबिटर थेरेपी और बोटॉक्स देते हैं। वे ट्रिगर पहचानने में भी मदद करते हैं — नींद, खाना, तनाव, बैठने का तरीक़ा — क्योंकि अकेली दवा कभी पूरा हल नहीं होती।",
      },
    },
    /* ── Topic B: Vertigo & Dizziness ────────────────────── */
    {
      slug: "vertigo-and-dizziness",
      name: {
        en: "Vertigo & Dizziness",
        hi: "चक्कर आना",
      },
      intro: {
        en: "Vertigo isn't the same as feeling 'a bit dizzy'. The difference matters — because the treatments are completely different.",
        hi: "चक्कर आना और 'थोड़ा सिर घूमना' एक बात नहीं हैं। फ़र्क़ अहम है — क्योंकि इलाज पूरी तरह अलग होता है।",
      },
      couldThisBeYou: {
        en: [
          "A sudden spinning sensation when you turn over in bed or look up",
          "The room seems to rotate even when you're standing still",
          "Brief episodes of unsteadiness, lasting seconds to minutes",
          "Nausea or vomiting that comes with the dizziness",
          "A feeling of being pulled to one side when you walk",
          "Hearing loss, ringing in one ear, or a 'full' sensation with the spinning",
        ],
        hi: [
          "बिस्तर पर करवट लेते ही या ऊपर देखते ही अचानक घूमने जैसा महसूस होना",
          "खड़े होने पर भी कमरा घूमता हुआ दिखना",
          "कुछ सेकंड से लेकर कुछ मिनट तक संतुलन बिगड़ना",
          "चक्कर के साथ जी मचलाना या उल्टी आना",
          "चलते समय एक तरफ़ खिंचा-खिंचा महसूस होना",
          "एक कान में सुनाई कम देना, घंटी जैसी आवाज़ या भारीपन के साथ चक्कर",
        ],
      },
      whatItFeelsLike: {
        en: "True vertigo is a real spinning — as if you, or the world around you, is rotating. People describe gripping the bedrail when they turn in their sleep, holding the wall in the bathroom, feeling like the ceiling is sliding. It can come in seconds-long bursts (BPPV) or last for hours (vestibular neuritis, Meniere's disease). 'Lightheadedness' usually has a different cause — blood pressure, anxiety, heart rhythm — and the first job is to figure out which one is yours.",
        hi: "असली चक्कर में सच में घूमने जैसा महसूस होता है — जैसे आप घूम रहे हों, या दुनिया घूम रही हो। लोग बताते हैं कि वे नींद में करवट लेते समय बिस्तर का किनारा पकड़ लेते हैं, बाथरूम में दीवार थाम लेते हैं, छत खिसकती सी लगती है। यह कुछ सेकंड (BPPV) से लेकर कुछ घंटों तक (वेस्टिबुलर न्यूराइटिस, मेनियर्स) रह सकता है। 'सिर हल्का होना' अक्सर अलग वजह से होता है — रक्तचाप, चिंता, दिल की धड़कन — और पहला काम यही है कि आपकी वजह क्या है, यह पहचाना जाए।",
      },
      whatsHappening: {
        en: "Most vertigo comes from the inner ear, where tiny crystals called otoconia help us stay oriented in space. When these crystals slip out of place, you get BPPV — the most common cause of vertigo, especially in middle-aged and older adults. Other causes involve inflammation of the balance nerve (vestibular neuritis), fluid buildup in the inner ear (Meniere's disease), or — much more rarely — problems in the brainstem. The good news: most causes are highly treatable, and many of them without medication at all.",
        hi: "ज़्यादातर चक्कर भीतरी कान से आते हैं, जहाँ otoconia नाम के छोटे क्रिस्टल हमें संतुलन में रखते हैं। जब ये अपनी जगह से हट जाते हैं, तो BPPV होता है — चक्कर का सबसे आम कारण, ख़ासकर अधेड़ और बुज़ुर्ग लोगों में। बाक़ी कारणों में संतुलन की नस की सूजन (वेस्टिबुलर न्यूराइटिस), भीतरी कान में पानी इकट्ठा होना (मेनियर्स), या बहुत कम मामलों में दिमाग़ के तने की समस्या होती है। अच्छी ख़बर: ज़्यादातर कारणों का इलाज बहुत अच्छा है — कई बार बिना दवा के भी।",
      },
      redFlags: {
        en: [
          "Vertigo with sudden severe headache, weakness, slurred speech, or vision loss",
          "Vertigo that doesn't improve over several days",
          "Repeated episodes with hearing loss or ringing in the ear (tinnitus)",
          "New unsteadiness or falls after age 60",
          "Vertigo with chest pain, palpitations or shortness of breath",
        ],
        hi: [
          "चक्कर के साथ अचानक तेज़ सिरदर्द, कमज़ोरी, बोलने में लड़खड़ाहट या दिखना बंद होना",
          "कई दिनों तक चक्कर बेहतर न होना",
          "बार-बार चक्कर के साथ कान में कम सुनाई देना या घंटी बजना",
          "60 साल की उम्र के बाद नया असंतुलन या गिरना",
          "चक्कर के साथ सीने में दर्द, धड़कन बढ़ना या साँस फूलना",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar starts with a focused examination — including the Dix-Hallpike test for BPPV, which can diagnose the most common cause of vertigo in about 90 seconds. For BPPV, treatment is often immediate: a gentle repositioning manoeuvre (the Epley) that moves the crystals back where they belong. Many patients walk out of the clinic with their vertigo resolved that same visit. For other causes, treatment is matched to the underlying problem — vestibular rehabilitation exercises, anti-vertigo medication for acute attacks, dietary changes and longer-term plans for Meniere's, and (rarely) imaging if a central cause is suspected.",
        hi: "डॉ. कुमार ध्यान से जाँच से शुरुआत करते हैं — जिसमें BPPV के लिए Dix-Hallpike टेस्ट शामिल है, जो लगभग 90 सेकंड में सबसे आम वजह पहचान सकता है। BPPV का इलाज अक्सर तुरंत होता है: एक हल्की Epley मूवमेंट जो क्रिस्टल्स को अपनी जगह वापस ले जाती है। कई मरीज़ उसी विज़िट में चक्कर ख़त्म होने पर बाहर जाते हैं। बाक़ी कारणों के लिए इलाज वजह के अनुसार होता है — संतुलन की एक्सरसाइज़, तीव्र दौरे के लिए दवा, मेनियर्स के लिए खानपान में बदलाव और लंबा प्लान, और कभी-कभार ज़रूरत पड़ने पर इमेजिंग।",
      },
    },
  ],
  caregiverSection: {
    en: "Living with someone who has chronic headaches — or sudden, unexplained vertigo — is its own kind of difficult. You learn to keep the room dark, to lower your voice, to cancel plans without resentment. You may wonder if the pain is 'really that bad', or feel helpless when an attack arrives. Both reactions are normal. The most useful things you can do: believe them, help them keep a simple symptom diary (date, time, what was happening before — Dr. Kumar uses these), make sure they don't quietly start overusing painkillers (which can paradoxically cause more headaches), and notice if anything changes about the usual pattern. That's when a fresh visit is worth it.",
    hi: "किसी ऐसे व्यक्ति के साथ रहना जिसे पुराना सिरदर्द हो — या अचानक, समझ न आने वाला चक्कर — अपने आप में मुश्किल है। आप कमरा अंधेरा रखना सीख जाते हैं, अपनी आवाज़ धीमी करना सीख जाते हैं, बिना ग़ुस्से के योजनाएँ रद्द करना सीख जाते हैं। कभी सोच आती है कि क्या दर्द सच में 'इतना बुरा' है, या दौरा पड़ने पर बेबसी महसूस होती है। दोनों ही प्रतिक्रियाएँ सामान्य हैं। सबसे ज़्यादा काम की बातें: उन पर विश्वास करें, उनकी एक छोटी डायरी रखने में मदद करें (तारीख़, समय, उससे पहले क्या हो रहा था — डॉ. कुमार इसी से काम करते हैं), यह देखें कि वे चुपचाप ज़्यादा दर्द-निवारक तो नहीं ले रहे (जिससे उल्टे सिरदर्द बढ़ता है), और अगर पुराना पैटर्न बदला हुआ लगे तो नई जाँच कराएँ।",
  },
  drKumarsApproach: {
    en: "Dr. Kumar has treated over 1,200 patients with primary headache disorders and several hundred with vertigo conditions in the past decade. His philosophy is simple: 'Most headaches and most vertigo are treatable. The real question is which kind you have. Get the diagnosis right and the rest follows.' In clinic, he routinely performs the in-office diagnostic manoeuvres for BPPV, builds personalised headache diaries with patients, prescribes the modern CGRP-class preventives and Botox where they're truly indicated, and partners with vestibular physiotherapists in Lucknow and Kanpur for rehabilitation. Most patients see meaningful improvement within 4–8 weeks of starting the right plan.",
    hi: "पिछले दस सालों में डॉ. कुमार ने 1,200 से ज़्यादा सिरदर्द के मरीज़ों और कई सौ चक्कर के मरीज़ों का इलाज किया है। उनकी सोच आसान है: 'ज़्यादातर सिरदर्द और ज़्यादातर चक्कर ठीक हो सकते हैं। असली सवाल यह है कि आपका किस प्रकार का है। सही पहचान हो जाए, तो बाक़ी अपने आप होता जाता है।' क्लिनिक में वे BPPV की जाँच के लिए मूवमेंट टेस्ट करते हैं, मरीज़ों के साथ निजी सिरदर्द डायरी बनाते हैं, ज़रूरत पड़ने पर आधुनिक CGRP-दवाएँ और बोटॉक्स देते हैं, और लखनऊ और कानपुर के संतुलन-फिज़ियोथेरेपिस्ट के साथ मिलकर इलाज करते हैं। ज़्यादातर मरीज़ सही प्लान शुरू करने के 4–8 हफ़्ते में बेहतर महसूस करते हैं।",
  },
  patientStory: {
    name: "Rekha",
    initials: "R",
    condition: { en: "Migraine", hi: "माइग्रेन" },
    text: {
      en: "I went to Dr. Kumar for my migraines. He gave me the right treatment, and now I have a lot of relief. I had been suffering for years — taking painkillers and just hoping. He listened patiently, explained everything clearly, and now my headache days have come down dramatically.",
      hi: "मैं अपने माइग्रेन के लिए डॉ. कुमार के पास गई थी। उन्होंने सही इलाज दिया, और अब मुझे बहुत राहत है। मैं सालों से तकलीफ़ झेल रही थी — बस दर्द की दवा खाती थी और उम्मीद करती थी। उन्होंने धीरज से सुना, सब कुछ साफ़ बताया, और अब मेरे सिरदर्द वाले दिन बहुत कम हो गए हैं।",
    },
    source: "hexahealth",
    sourceLabel: {
      en: "Adapted from a verified review on HexaHealth",
      hi: "HexaHealth पर सत्यापित समीक्षा से रूपांतरित",
    },
  },
  livingWell: {
    en: [
      "Keep a simple headache diary — date, time, pain level, what you ate, slept and did before. It tells the story your memory can't.",
      "Don't use over-the-counter painkillers more than 2 days a week — overuse can cause more headaches, not fewer.",
      "Sleep on a regular schedule, even on weekends. The brain reads sleep changes as a trigger.",
      "Stay hydrated; if you're prone to evening headaches, skip caffeine after 2 PM.",
      "For BPPV: avoid quick neck movements and sleep with two pillows for a few days after a flare.",
      "Tell your family what helps during an attack — a quiet, dark room, a cool cloth, no questions. Permission to rest is medicine too.",
    ],
    hi: [
      "एक छोटी सिरदर्द डायरी रखें — तारीख़, समय, दर्द कितना था, उससे पहले क्या खाया, सोए और किया। याद्दाश्त जो भूल जाती है, यह बता देगी।",
      "हफ़्ते में 2 दिन से ज़्यादा दर्द-निवारक न लें — ज़्यादा लेने से सिरदर्द कम नहीं, बल्कि बढ़ता है।",
      "नींद का समय रोज़ एक जैसा रखें, छुट्टी के दिन भी। नींद बदलने को दिमाग़ ट्रिगर मानता है।",
      "पानी पूरा पीएँ; अगर शाम को सिरदर्द होता है, तो दोपहर 2 बजे के बाद चाय-कॉफ़ी छोड़ें।",
      "BPPV के बाद: कुछ दिन तक गर्दन को तेज़ी से न हिलाएँ, दो तकियों पर सोएँ।",
      "घरवालों को बताएँ कि दौरा पड़ने पर क्या काम आता है — शांत, अंधेरा कमरा, ठंडा कपड़ा, बिना सवाल। आराम की इजाज़त भी एक दवा है।",
    ],
  },
  faqs: [
    {
      q: {
        en: "Can a headache be a sign of something serious?",
        hi: "क्या सिरदर्द किसी गंभीर बीमारी का संकेत हो सकता है?",
      },
      a: {
        en: "Usually not — over 95% of headaches are 'primary' (migraine, tension, cluster) and not from another disease. The 'red flag' signs above are the ones we worry about. If any of those match you, please call us, don't wait.",
        hi: "अक्सर नहीं — 95% से ज़्यादा सिरदर्द 'प्राथमिक' होते हैं (माइग्रेन, तनाव, क्लस्टर) और किसी और बीमारी से नहीं होते। ऊपर लिखे 'रेड फ़्लैग' संकेत ही चिंता वाले होते हैं। अगर वे आप पर लागू हों, कृपया तुरंत कॉल करें, इंतज़ार न करें।",
      },
    },
    {
      q: {
        en: "Why have my painkillers stopped working?",
        hi: "मेरी दर्द-निवारक दवाएँ काम क्यों नहीं कर रहीं?",
      },
      a: {
        en: "This is called 'medication-overuse headache'. When painkillers are taken too often, the brain adapts and the headaches return faster, harder, and stop responding to the medicine. The fix is gradual — and Dr. Kumar will guide you through it without making you feel judged.",
        hi: "इसे 'दवा-के-ज़्यादा-इस्तेमाल-से-सिरदर्द' कहते हैं। जब दर्द-निवारक बहुत बार ली जाएँ, दिमाग़ अनुकूल हो जाता है और सिरदर्द जल्दी, ज़्यादा और दवा पर बिना असर के लौटता है। हल धीरे-धीरे होता है — डॉ. कुमार आपको बिना किसी झिझक के समझाकर आगे ले जाएँगे।",
      },
    },
    {
      q: {
        en: "Do I need an MRI for headaches?",
        hi: "क्या सिरदर्द के लिए MRI ज़रूरी है?",
      },
      a: {
        en: "Usually no. A careful history and examination is enough for most patients. MRI is needed only when there are red-flag features, the pattern has clearly changed, or the headache started after age 50. Most people walk out without an imaging order.",
        hi: "ज़्यादातर नहीं। पूरी हिस्ट्री और जाँच काफ़ी होती है। MRI तभी ज़रूरी है जब 'रेड फ़्लैग' संकेत हों, पैटर्न साफ़ बदल गया हो, या 50 साल की उम्र के बाद नया सिरदर्द शुरू हुआ हो। ज़्यादातर मरीज़ बिना MRI के बाहर जाते हैं।",
      },
    },
    {
      q: {
        en: "Can vertigo be cured without medicine?",
        hi: "क्या चक्कर बिना दवा के ठीक हो सकते हैं?",
      },
      a: {
        en: "Yes — and surprisingly often. BPPV, the most common cause, is treated with a gentle in-clinic head manoeuvre that takes a few minutes. No daily medicine. Other causes may need short-term medication plus balance exercises (vestibular rehab). Surgery is needed extremely rarely.",
        hi: "हाँ — और काफ़ी बार। चक्कर का सबसे आम कारण BPPV कुछ मिनट की हल्की मूवमेंट से ठीक हो जाता है। कोई रोज़ की दवा नहीं। बाक़ी कारणों में थोड़ी देर की दवा और संतुलन की एक्सरसाइज़ चाहिए। सर्जरी की ज़रूरत बहुत कम पड़ती है।",
      },
    },
    {
      q: {
        en: "How long until I'll feel better?",
        hi: "मुझे कितने समय में बेहतर महसूस होगा?",
      },
      a: {
        en: "For BPPV — often the same day. For migraine — most patients see clear improvement within 4–8 weeks of starting a personalised plan. We schedule follow-ups so we can adjust early if something isn't working.",
        hi: "BPPV के लिए — अक्सर उसी दिन। माइग्रेन के लिए — अधिकतर मरीज़ निजी प्लान शुरू करने के 4–8 हफ़्ते में साफ़ बेहतर महसूस करते हैं। हम फ़ॉलो-अप तय करते हैं, ताकि अगर कुछ काम न कर रहा हो तो जल्दी बदल सकें।",
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   STUBS — populated in next iteration after H&V is approved.
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

/* ── Master export ─────────────────────────────────────────── */
export const SPECIALTIES: Specialty[] = [
  HEADACHE_AND_VERTIGO,
  stub("vertigo", "Vertigo", "चक्कर (वर्टिगो)", "teal", "🌀"),
  stub("stroke", "Stroke & Brain Attack", "स्ट्रोक और ब्रेन अटैक", "navy", "❤️‍🩹"),
  stub(
    "epilepsy-and-seizures",
    "Epilepsy & Seizures",
    "मिर्गी और दौरे",
    "teal",
    "⚡"
  ),
  stub(
    "parkinsonism-and-movement-disorders",
    "Parkinsonism & Movement Disorders",
    "पार्किंसनिज़्म और मूवमेंट डिसऑर्डर",
    "gold",
    "🌿"
  ),
  stub(
    "dementia-and-alzheimers",
    "Dementia & Alzheimer's",
    "डिमेंशिया और अल्ज़ाइमर",
    "sky",
    "🌙"
  ),
  stub("neuropathy", "Neuropathy", "न्यूरोपैथी (नस की बीमारी)", "purple", "💜"),
  stub("neuro-infections", "Neuro Infections", "न्यूरो संक्रमण", "navy", "🦠"),
  stub("neuro-rehabilitation", "Neuro Rehabilitation", "न्यूरो पुनर्वास", "gold", "🏃"),
  stub("back-pain", "Back Pain", "पीठ दर्द", "sky", "🦴"),
  stub("cervical-and-neck-pain", "Cervical & Neck Pain", "सर्वाइकल और गर्दन दर्द", "coral", "🫀"),
];

/* ── Lookup helper ─────────────────────────────────────────── */
export function getSpecialty(slug: string): Specialty | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}
