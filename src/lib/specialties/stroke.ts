import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "stroke",
  name: { en: "Stroke & Brain Attack", hi: "स्ट्रोक और ब्रेन अटैक" },
  shortName: { en: "Stroke & Brain Attack", hi: "स्ट्रोक और ब्रेन अटैक" },
  color: "navy",
  icon: "❤️‍🩹",
  tier: 1,

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: { en: "Stroke & Brain Attack Clinic", hi: "स्ट्रोक और ब्रेन अटैक क्लिनिक" },
    tagline: {
      en: "When minutes decide everything.",
      hi: "जब हर मिनट मायने रखता है।",
    },
    supportLine: {
      en: "A stroke is the brain's emergency. Every minute that passes without treatment, brain cells die — but with the right care, in the right window, much of that damage can be prevented or reversed. If you're here because something has happened to someone you love, this page will help you understand what's happening, what to do right now, and what comes next.",
      hi: "स्ट्रोक दिमाग़ की आपात स्थिति है। बिना इलाज के हर मिनट में दिमाग़ की कोशिकाएँ मरती हैं — लेकिन सही देखभाल, सही समय पर मिले तो बहुत नुकसान रोका या पलटा जा सकता है। अगर आप यहाँ इसलिए हैं क्योंकि आपके किसी अपने के साथ कुछ हुआ है, यह पन्ना आपको समझाएगा कि क्या हो रहा है, अभी क्या करें, और आगे क्या होगा।",
    },
    image: {
      desktop: "/images/stroke-hero.png",
      mobile: "/images/stroke-hero.png",
      alt: {
        en: "Dr. Kumar explaining a brain scan to a family during a stroke consultation.",
        hi: "स्ट्रोक परामर्श के दौरान डॉ. कुमार एक परिवार को ब्रेन स्कैन समझाते हुए।",
      },
    },
    trustPoints: [
      {
        iconKey: "india",
        label: { en: "Trusted Care\nAcross India", hi: "भारत भर में\nभरोसेमंद देखभाल" },
      },
      {
        iconKey: "lotus",
        label: { en: "Personalised\nTreatment", hi: "वैयक्तिक\nइलाज" },
      },
      {
        iconKey: "brain-care",
        label: { en: "Expert Neurology\nCare", hi: "विशेषज्ञ\nन्यूरोलॉजी देखभाल" },
      },
      {
        iconKey: "compassion",
        label: { en: "Compassionate,\nPatient-First", hi: "सहानुभूतिपूर्ण,\nमरीज़-पहले" },
      },
    ],
  },

  /* ── Emergency Banner — ELEVATED above overview ───────────── */
  emergencyBanner: {
    en: "⚠️ **Stroke is a medical emergency. Every minute matters.**\n\nIf you or someone near you has any of these symptoms — **call an ambulance or go to the nearest emergency room immediately**:\n\n- **F**ace drooping on one side\n- **A**rm weakness or numbness\n- **S**peech that is slurred or difficult to understand\n- **T**ime — note the time symptoms started, and act now\n\nDo not wait. Do not book a clinic appointment. **Treatment works best within the first 4.5 hours from when symptoms began.**\n\nIf you are in or near Kanpur, go to **Paras Health Kanpur** — Dr. Kumar coordinates emergency stroke care there.\n\n**Ambulance: 108**",
    hi: "⚠️ **स्ट्रोक एक चिकित्सीय आपात स्थिति है। हर मिनट मायने रखता है।**\n\nअगर आपको या किसी नज़दीकी को ये लक्षण हों — **तुरंत एम्बुलेंस बुलाएँ या नज़दीकी आपातकालीन कक्ष में जाएँ**:\n\n- **F** — चेहरे का एक तरफ़ लटकना\n- **A** — बाँह में कमज़ोरी या सुन्नपन\n- **S** — बोलने में लड़खड़ाहट या बात समझ न आना\n- **T** — समय — लक्षण शुरू होने का समय नोट करें, और अभी कदम उठाएँ\n\nइंतज़ार न करें। क्लिनिक अपॉइंटमेंट न लें। **इलाज सबसे असरदार है अगर लक्षण शुरू होने के पहले 4.5 घंटों में मिले।**\n\nअगर आप कानपुर में या आस-पास हैं, **पारस हेल्थ कानपुर** जाएँ — डॉ. कुमार वहाँ आपातकालीन स्ट्रोक देखभाल संभालते हैं।\n\n**एम्बुलेंस: 108**",
  },

  /* ── Why This Matters (overview) ─────────────────────────── */
  overview: {
    en: "Stroke is the second-leading cause of death in India and the leading cause of long-term disability. But here is what most families don't know: stroke is treatable. If a patient reaches the right hospital within the first few hours — what we call the 'golden window' — the clot can often be dissolved, the bleeding can often be controlled, and significant recovery is possible. The reason most stroke patients in India don't get this care is not because the treatment doesn't exist; it's because they reach the hospital too late, or reach a hospital that isn't equipped for emergency stroke care. This page will help you understand what a stroke actually is, what you can do in the first critical hours, and what the road to recovery looks like.",
    hi: "भारत में मृत्यु का दूसरा सबसे बड़ा कारण स्ट्रोक है और दीर्घकालिक विकलांगता का पहला। लेकिन ज़्यादातर परिवार यह नहीं जानते: स्ट्रोक का इलाज हो सकता है। अगर मरीज़ पहले कुछ घंटों में सही अस्पताल पहुँच जाए — जिसे हम 'सुनहरी खिड़की' कहते हैं — तो थक्का अक्सर घुलाया जा सकता है, रक्तस्राव रोका जा सकता है, और बड़ी रिकवरी संभव है। भारत में ज़्यादातर स्ट्रोक मरीज़ों को यह देखभाल नहीं मिलती — इसलिए नहीं कि इलाज नहीं है, बल्कि इसलिए कि वे देर से या गलत अस्पताल पहुँचते हैं। यह पन्ना आपको बताएगा कि स्ट्रोक असल में क्या है, पहले कुछ घंटों में आप क्या कर सकते हैं, और रिकवरी का रास्ता कैसा दिखता है।",
  },

  /* ── TOC with entity tags ─────────────────────────────────── */
  toc: [
    {
      label: { en: "Ischaemic Stroke", hi: "इस्केमिक स्ट्रोक" },
      anchor: "ischaemic",
      entityTags: [
        { en: "Clot-blocked stroke", hi: "थक्के से बंद स्ट्रोक" },
        { en: "Embolic stroke", hi: "एम्बोलिक स्ट्रोक" },
        { en: "Thrombotic stroke", hi: "थ्रोम्बोटिक स्ट्रोक" },
      ],
    },
    {
      label: { en: "Haemorrhagic Stroke", hi: "हेमोरेजिक स्ट्रोक" },
      anchor: "haemorrhagic",
      entityTags: [
        { en: "Intracerebral haemorrhage", hi: "इंट्रासेरेब्रल हेमरेज" },
        { en: "Subarachnoid haemorrhage", hi: "सबअरैक्नॉइड हेमरेज" },
        { en: "Aneurysm", hi: "एन्यूरिज़्म" },
      ],
    },
    {
      label: { en: "TIA (Mini-Stroke)", hi: "TIA (मिनी-स्ट्रोक)" },
      anchor: "tia",
      entityTags: [
        { en: "Transient ischaemic attack", hi: "ट्रांज़िएंट इस्केमिक अटैक" },
        { en: "Warning stroke", hi: "चेतावनी स्ट्रोक" },
      ],
    },
    {
      label: { en: "Recovery & Rehabilitation", hi: "रिकवरी और पुनर्वास" },
      anchor: "recovery",
      entityTags: [
        { en: "Post-stroke rehab", hi: "स्ट्रोक के बाद पुनर्वास" },
        { en: "Physiotherapy", hi: "फिज़ियोथेरेपी" },
        { en: "Speech therapy", hi: "स्पीच थेरेपी" },
        { en: "Spasticity management", hi: "स्पेस्टिसिटी प्रबंधन" },
      ],
    },
  ],

  /* ── For Families & Caregivers — ELEVATED (Tier 1) ──────── */
  caregiverSection: {
    en: "If someone you love has had a stroke — or is having one right now — your world has just changed in a way that's hard to describe. You may be sitting in a hospital corridor. You may be holding a phone after a doctor called. You may be watching a parent struggle to lift a glass of water with the wrong hand. Whatever stage you're at, please know two things: this is not your fault, and you are not alone in this.\n\n**In the first hours and days,** the most important thing you can do is be there and ask questions. Hospitals during a stroke admission can feel chaotic and intimidating, but you have every right to understand what is happening. Ask the treating team: What type of stroke was this? Did the patient receive thrombolysis or thrombectomy? What is the expected recovery trajectory? Has a neurologist been consulted? You are not being difficult by asking — you are being a good advocate.\n\n**In the days and weeks that follow,** three things become important.\n\nDon't underestimate post-stroke depression. Roughly 30% of stroke survivors experience clinical depression in the first year. It often goes unrecognised because everyone assumes the patient is 'just adjusting.' If your loved one becomes withdrawn, stops engaging with rehab, or loses interest in things they used to enjoy, please tell Dr. Kumar. It is treatable, and treating it dramatically improves physical recovery too.\n\nRehabilitation is not optional. The brain has an astonishing ability to rewire itself, but this rewiring only happens with consistent stimulation. Skipping physiotherapy sessions because the patient is tired, or because the family is exhausted, is the single most common reason stroke survivors plateau. Show up. Even on bad days — especially on bad days.\n\nTake care of yourself. Caregiver burnout is real. It affects your sleep, your immune system, your mood, and your own long-term health. Accept help when it's offered. Find someone you can talk to. You cannot pour from an empty cup — and your loved one's recovery depends on you being able to keep going.",
    hi: "अगर आपके किसी अपने को स्ट्रोक हुआ है — या अभी हो रहा है — तो आपकी दुनिया उस तरह बदल गई है जिसे शब्दों में बयान करना मुश्किल है। आप किसी अस्पताल के गलियारे में बैठे हो सकते हैं। डॉक्टर के फ़ोन के बाद हाथ में मोबाइल थामे हो सकते हैं। या देख रहे हो सकते हैं कि कोई अपना ग़लत हाथ से पानी का गिलास उठाने की कोशिश कर रहा है। आप जिस भी स्थिति में हों, दो बातें जानें: यह आपकी ग़लती नहीं है, और आप इसमें अकेले नहीं हैं।\n\n**पहले घंटों और दिनों में,** सबसे ज़रूरी काम यह है कि आप वहाँ रहें और सवाल पूछें। स्ट्रोक के दाखिले के दौरान अस्पताल अव्यवस्थित और डरावना लग सकता है, लेकिन आपको यह जानने का पूरा हक़ है कि क्या हो रहा है। टीम से पूछें: किस प्रकार का स्ट्रोक हुआ? क्या थ्रोम्बोलिसिस या थ्रोम्बेक्टॉमी दी गई? रिकवरी का अनुमानित रास्ता क्या है? क्या न्यूरोलॉजिस्ट से सलाह ली गई? सवाल पूछना तकलीफ़ देना नहीं है — यह एक अच्छे देखभालकर्ता का काम है।\n\n**आगे के दिनों और हफ़्तों में** तीन बातें अहम हो जाती हैं।\n\nस्ट्रोक के बाद का अवसाद कम मत आँकें। लगभग 30% स्ट्रोक बचे हुए लोग पहले साल में नैदानिक अवसाद अनुभव करते हैं। यह अक्सर पहचाना नहीं जाता क्योंकि सब मान लेते हैं कि मरीज़ 'बस तालमेल बिठा रहा है।' अगर आपका प्रियजन खुद में सिमट जाए, रिहैब में रुचि छोड़ दे या पुरानी पसंद की चीज़ों में दिलचस्पी खो दे — डॉ. कुमार को बताएँ। इसका इलाज हो सकता है, और इलाज से शारीरिक रिकवरी भी तेज़ होती है।\n\nपुनर्वास ज़रूरी है, वैकल्पिक नहीं। दिमाग़ खुद को फिर से जोड़ सकता है, लेकिन यह तभी होता है जब लगातार उत्तेजना मिले। फिज़ियोथेरेपी छोड़ना — चाहे मरीज़ थका हो या परिवार — वह सबसे आम कारण है जिससे रिकवरी रुक जाती है। जाइए। बुरे दिनों पर भी — ख़ासकर बुरे दिनों पर।\n\nख़ुद का भी ख़याल रखें। देखभालकर्ता की थकान असली है। यह आपकी नींद, इम्यून सिस्टम, मनोस्थिति और आपकी सेहत को प्रभावित करती है। जब मदद मिले, स्वीकार करें। किसी से बात करें। आप ख़ाली बर्तन से नहीं डाल सकते — और आपके प्रियजन की रिकवरी आप पर निर्भर है।",
  },

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic 1: Ischaemic Stroke ────────────────────────── */
    {
      slug: "ischaemic",
      name: { en: "Ischaemic Stroke", hi: "इस्केमिक स्ट्रोक" },
      intro: {
        en: "About 80% of all strokes are ischaemic — caused by a blood clot blocking an artery in the brain.",
        hi: "लगभग 80% स्ट्रोक इस्केमिक होते हैं — दिमाग़ की धमनी में खून का थक्का जम जाने से।",
      },
      couldThisBeYou: {
        en: [
          "Sudden weakness or numbness on one side of the face, arm, or leg",
          "Sudden difficulty speaking — slurred words, wrong words, or no words coming out",
          "Sudden vision loss in one eye, or double vision",
          "Sudden severe confusion or trouble understanding others",
          "Sudden loss of balance or coordination — stumbling, falling, unable to walk straight",
          "Symptoms came on within seconds to minutes, not gradually over hours or days",
        ],
        hi: [
          "चेहरे, बाँह या पैर के एक तरफ़ अचानक कमज़ोरी या सुन्नपन",
          "अचानक बोलने में तकलीफ़ — लड़खड़ाहट, ग़लत शब्द, या बोली ही न निकले",
          "एक आँख में अचानक दिखना बंद होना, या दोहरा दिखना",
          "अचानक गंभीर भ्रम या दूसरों की बात न समझ पाना",
          "अचानक संतुलन या तालमेल खोना — लड़खड़ाना, गिरना, सीधे न चल पाना",
          "लक्षण सेकंड से मिनटों में आए — घंटों या दिनों में धीरे-धीरे नहीं",
        ],
      },
      whatItFeelsLike: {
        en: "A stroke usually arrives without warning. The person may be in the middle of an ordinary moment — eating breakfast, talking on the phone, sitting on the sofa — when suddenly one side of their body stops responding. They may try to speak and find the words won't form. They may not realise something is wrong; often it's a family member who notices first that one side of the face has drooped, or that the speech sounds slurred. The person themselves may seem confused about why everyone is reacting. This is what makes stroke so dangerous: the person experiencing it often cannot identify it. Someone else has to.",
        hi: "स्ट्रोक आमतौर पर बिना चेतावनी के आता है। व्यक्ति किसी साधारण पल में हो सकता है — नाश्ता कर रहा हो, फ़ोन पर बात कर रहा हो, सोफ़े पर बैठा हो — और अचानक एक तरफ़ का शरीर काम करना बंद कर देता है। वह बोलने की कोशिश करता है और शब्द नहीं निकलते। उसे ख़ुद एहसास नहीं होता कि कुछ गड़बड़ है; अक्सर परिवार का कोई सदस्य पहले नोटिस करता है कि चेहरे का एक तरफ़ लटक गया है, या बोली अटपटी है। मरीज़ ख़ुद हैरान लग सकता है कि सब इतने क्यों घबरा रहे हैं। यही स्ट्रोक को इतना ख़तरनाक बनाता है: जिसे हो रहा है, वह अक्सर पहचान नहीं सकता। किसी और को पहचानना होता है।",
      },
      whatsHappening: {
        en: "A blood clot has blocked an artery in the brain, the way a blockage in a water pipe stops flow to part of the house. The brain tissue downstream of the blockage is being starved of oxygen, and brain cells start dying within minutes. The longer the blockage stays in place, the more cells die — and dead brain cells do not come back. This is why time is the single most important factor in stroke treatment. If the clot can be dissolved or removed within the first 4.5 hours (sometimes up to 24 hours for certain clots, with newer techniques), much of the affected brain tissue can be saved. After that window, the focus shifts from saving tissue to preventing further damage and beginning rehabilitation.",
        hi: "दिमाग़ की एक धमनी में खून का थक्का जम गया है — जैसे पानी के पाइप में रुकावट आ जाने से घर के एक हिस्से में पानी बंद हो जाए। रुकावट के आगे दिमाग़ का हिस्सा ऑक्सीजन के बिना तड़प रहा है, और दिमाग़ की कोशिकाएँ मिनटों में मरने लगती हैं। रुकावट जितनी देर रहे, उतनी ज़्यादा कोशिकाएँ मरती हैं — और मरी हुई दिमाग़ी कोशिकाएँ वापस नहीं आतीं। इसीलिए समय स्ट्रोक के इलाज में सबसे अहम कारक है। अगर थक्का पहले 4.5 घंटों में (कुछ थक्कों के लिए नई तकनीकों से 24 घंटे तक) घुलाया या निकाला जा सके, तो प्रभावित दिमाग़ी ऊतक का बड़ा हिस्सा बचाया जा सकता है।",
      },
      redFlags: {
        en: [
          "Face drooping on one side — ask the person to smile; if one side doesn't move, act now",
          "Arm weakness — ask them to raise both arms; if one drifts down, act now",
          "Speech slurred or impossible to understand, or the person cannot speak at all",
          "Sudden severe headache with no known cause",
          "Sudden loss of vision, balance, or coordination",
        ],
        hi: [
          "चेहरे का एक तरफ़ लटकना — मुस्कुराने को कहें; एक तरफ़ न हिले तो तुरंत कार्रवाई करें",
          "बाँह की कमज़ोरी — दोनों बाँहें उठाने को कहें; एक नीचे झुके तो तुरंत कार्रवाई करें",
          "बोली लड़खड़ाना या समझ न आना, या बोल ही न पाना",
          "बिना किसी कारण के अचानक बहुत तेज़ सिरदर्द",
          "अचानक दिखना, संतुलन, या तालमेल खोना",
        ],
      },
      howDrKumarTreats: {
        en: "For patients reaching the hospital within the treatment window, the first priority is to identify the type of stroke with an urgent CT scan or MRI, then deliver the appropriate emergency treatment — intravenous thrombolysis (a clot-dissolving medicine called tPA) or, for larger clots, mechanical thrombectomy (a procedure that physically removes the clot through a catheter). Dr. Kumar coordinates emergency stroke care at Paras Health Kanpur, where a stroke-ready protocol means that from the moment a suspected stroke patient arrives, the team moves quickly: scan, decision, treatment — all within an hour where possible.\n\nAfter the emergency phase, treatment shifts to two priorities: preventing another stroke, and supporting recovery. Preventing recurrence involves identifying what caused the first stroke — high blood pressure, atrial fibrillation, diabetes, high cholesterol, or carotid artery narrowing — and treating it aggressively. Blood thinners are usually started if the stroke was caused by a clot. Most stroke survivors continue to recover for 12 months or more after the stroke — improvement is not over when the patient leaves the hospital.",
        hi: "इलाज की खिड़की में अस्पताल पहुँचने वाले मरीज़ों के लिए पहला काम है तत्काल CT या MRI से स्ट्रोक का प्रकार पहचानना, फिर सही इलाज — नस में thrombolysis (थक्का घुलाने वाली dवा tPA) या बड़े थक्कों के लिए mechanical thrombectomy (कैथेटर से थक्का निकालना)। डॉ. कुमार पारस हेल्थ कानपुर में आपातकालीन स्ट्रोक देखभाल संभालते हैं, जहाँ stroke-ready protocol के तहत संदिग्ध मरीज़ के आते ही टीम तेज़ी से चलती है: स्कैन, फ़ैसला, इलाज — जहाँ तक हो एक घंटे के अंदर।\n\nआपातकालीन चरण के बाद इलाज दो प्राथमिकताओं पर केंद्रित होता है: अगले स्ट्रोक की रोकथाम और रिकवरी। रोकथाम में पहले स्ट्रोक का कारण — उच्च रक्तचाप, अनियमित दिल की धड़कन, मधुमेह, कोलेस्ट्रॉल, कैरोटिड धमनी संकुचन — पहचानकर आक्रामक इलाज शामिल है। ज़्यादातर स्ट्रोक बचे लोग अस्पताल छोड़ने के बाद 12 महीने या उससे ज़्यादा तक ठीक होते रहते हैं।",
      },
    },

    /* ── Topic 2: Haemorrhagic Stroke ─────────────────────── */
    {
      slug: "haemorrhagic",
      name: { en: "Haemorrhagic Stroke", hi: "हेमोरेजिक स्ट्रोक" },
      intro: {
        en: "About 20% of strokes are caused by bleeding rather than blockage — when a blood vessel in the brain bursts and bleeds into the surrounding tissue.",
        hi: "लगभग 20% स्ट्रोक रुकावट से नहीं, रक्तस्राव से होते हैं — जब दिमाग़ की एक रक्त-नलिका फट कर आस-पास के ऊतक में खून बहाती है।",
      },
      couldThisBeYou: {
        en: [
          "Sudden, severe headache often described as 'the worst headache of my life'",
          "Sudden weakness on one side of the body",
          "Sudden vomiting, especially along with the headache",
          "Sudden loss of consciousness or extreme drowsiness",
          "A seizure with no prior history of seizures",
          "Neck stiffness with severe headache (suggesting bleeding around the brain)",
        ],
        hi: [
          "अचानक, बहुत तेज़ सिरदर्द — अक्सर 'ज़िंदगी का सबसे बुरा सिरदर्द' बताया जाता है",
          "शरीर के एक तरफ़ अचानक कमज़ोरी",
          "अचानक उल्टी, ख़ासकर सिरदर्द के साथ",
          "अचानक बेहोशी या बहुत तेज़ नींद आना",
          "पहले कभी मिर्गी न हुई हो, फिर भी दौरा पड़ना",
          "गंभीर सिरदर्द के साथ गर्दन की अकड़न (दिमाग़ के आस-पास रक्तस्राव का संकेत)",
        ],
      },
      whatItFeelsLike: {
        en: "Haemorrhagic strokes often announce themselves more dramatically than ischaemic ones. A patient may describe a sudden, explosive headache unlike anything they've experienced — many use the phrase 'like being hit on the head.' Vomiting frequently follows. The person may lose consciousness within minutes, or remain awake but confused and frightened. For family members, the suddenness is terrifying — one moment the person is fine, the next they are collapsing.",
        hi: "हेमोरेजिक स्ट्रोक अक्सर इस्केमिक से ज़्यादा नाटकीय तरह से सामने आते हैं। मरीज़ अचानक विस्फोटक सिरदर्द बताता है जैसा पहले कभी नहीं हुआ — कई कहते हैं 'जैसे सिर पर चोट लगी हो।' उल्टी अक्सर साथ आती है। व्यक्ति मिनटों में बेहोश हो सकता है, या जागते हुए भ्रमित और डरा हुआ रह सकता है। परिवार के लिए यह अचानकपन भयावह होता है।",
      },
      whatsHappening: {
        en: "A blood vessel in the brain has burst. This can happen because long-standing high blood pressure has weakened the vessel walls, because of an aneurysm (a balloon-like weakness in an artery), or because of an abnormal tangle of blood vessels called an AVM. The leaking blood does two things: it deprives downstream brain tissue of oxygen, and it puts pressure on surrounding brain tissue, causing further damage. Unlike an ischaemic stroke, treatment cannot use clot-dissolving medicines — those would make the bleeding worse. The priorities are different: control the bleeding, control the pressure inside the skull, and in some cases, surgically remove the blood or repair the source.",
        hi: "दिमाग़ की एक रक्त-नलिका फट गई है। यह लंबे समय के उच्च रक्तचाप से कमज़ोर हुई नलिका, एन्यूरिज़्म (धमनी में गुब्बारे जैसी कमज़ोरी), या AVM (असामान्य रक्त-नलिकाओं की उलझन) से हो सकता है। बहता खून दो काम करता है: आगे के दिमाग़ी ऊतक को ऑक्सीजन से वंचित करता है, और आस-पास के ऊतक पर दबाव डालता है। इस्केमिक स्ट्रोक के विपरीत, यहाँ थक्का घुलाने की दवाएँ नहीं दे सकते — वे रक्तस्राव बढ़ा देंगी। प्राथमिकताएँ अलग हैं: रक्तस्राव रोकना, खोपड़ी के अंदर दबाव नियंत्रित करना, और ज़रूरत पड़ने पर सर्जरी।",
      },
      redFlags: {
        en: [
          "Sudden 'worst headache of life' — this is a medical emergency",
          "Vomiting with severe headache",
          "Loss of consciousness, even briefly",
          "New seizure with no prior history",
          "Neck stiffness with headache",
        ],
        hi: [
          "अचानक 'ज़िंदगी का सबसे बुरा सिरदर्द' — यह चिकित्सीय आपात स्थिति है",
          "गंभीर सिरदर्द के साथ उल्टी",
          "बेहोशी, चाहे कुछ देर के लिए ही",
          "पहले मिर्गी न हुई हो, फिर भी नया दौरा",
          "सिरदर्द के साथ गर्दन की अकड़न",
        ],
      },
      howDrKumarTreats: {
        en: "The first priority for a haemorrhagic stroke is urgent imaging — usually a CT scan — to confirm the diagnosis and identify the source of bleeding. Treatment involves aggressive blood pressure control to slow the bleeding, neurosurgical consultation if surgery is needed (for example, to clip an aneurysm or remove a large clot), and intensive monitoring in a high-dependency unit. Dr. Kumar coordinates care with the neurosurgery team at Paras Health Kanpur for patients requiring surgical intervention.\n\nAfter the acute phase, the recovery approach mirrors ischaemic stroke — preventing further events through lifelong blood pressure control, and supporting rehabilitation. The recovery trajectory for haemorrhagic stroke can actually be more favourable in some cases, because the affected brain tissue may be pushed aside by the bleed rather than destroyed.",
        hi: "हेमोरेजिक स्ट्रोक में पहला काम तत्काल इमेजिंग — आमतौर पर CT स्कैन — से निदान की पुष्टि और रक्तस्राव का स्रोत पहचानना है। इलाज में रक्तस्राव धीमा करने के लिए आक्रामक रक्तचाप नियंत्रण, ज़रूरत पर न्यूरोसर्जिकल परामर्श (एन्यूरिज़्म को क्लिप करना या बड़ा थक्का निकालना), और उच्च-निर्भरता इकाई में गहन निगरानी शामिल है। डॉ. कुमार पारस हेल्थ कानपुर में न्यूरोसर्जरी टीम के साथ तालमेल करते हैं।\n\nतीव्र चरण के बाद रिकवरी का दृष्टिकोण इस्केमिक स्ट्रोक जैसा ही है — जीवन भर रक्तचाप नियंत्रण और पुनर्वास। हेमोरेजिक स्ट्रोक में कुछ मामलों में रिकवरी बेहतर भी हो सकती है, क्योंकि रक्तस्राव दिमाग़ी ऊतक को नष्ट करने की बजाय एक तरफ़ धकेल सकता है।",
      },
    },

    /* ── Topic 3: TIA (Mini-Stroke) ───────────────────────── */
    {
      slug: "tia",
      name: { en: "TIA (Mini-Stroke)", hi: "TIA (मिनी-स्ट्रोक)" },
      intro: {
        en: "A TIA is a temporary stroke — symptoms come and go within minutes to hours, usually resolving within 24 hours. But this is not a 'lucky escape.' A TIA is a warning, and roughly 1 in 10 people who have a TIA will have a full stroke within 90 days. Most of those full strokes happen within the first week.",
        hi: "TIA एक अस्थायी स्ट्रोक है — लक्षण मिनटों से घंटों में आते-जाते हैं, आमतौर पर 24 घंटों में ठीक हो जाते हैं। लेकिन यह 'भाग्यशाली बचाव' नहीं है। TIA एक चेतावनी है, और TIA वाले लगभग 10 में से 1 व्यक्ति को 90 दिनों में पूरा स्ट्रोक हो जाता है — ज़्यादातर पहले हफ़्ते में।",
      },
      couldThisBeYou: {
        en: [
          "Brief weakness or numbness on one side that came and went within minutes or hours",
          "Brief difficulty speaking that has now resolved",
          "Brief loss of vision in one eye, like a curtain coming down and lifting again",
          "Brief loss of balance or coordination",
          "The episode lasted less than 24 hours and the person is 'back to normal' now",
        ],
        hi: [
          "एक तरफ़ संक्षिप्त कमज़ोरी या सुन्नपन जो मिनटों या घंटों में आया और गया",
          "थोड़ी देर बोलने में तकलीफ़ जो अब ठीक हो गई",
          "एक आँख में थोड़ी देर दिखना बंद होना — जैसे पर्दा गिरा और उठ गया",
          "थोड़ी देर संतुलन या तालमेल खोना",
          "यह दौरा 24 घंटे से कम चला और व्यक्ति अब 'सामान्य' है",
        ],
      },
      whatItFeelsLike: {
        en: "A TIA can be deeply confusing because by the time the person reaches a doctor, the symptoms have often resolved. They may feel embarrassed about coming in. Family members may say 'it's fine, you're okay now.' This is exactly the wrong response. A TIA is not a false alarm — it's a real alarm. The brain has just shown that the plumbing is failing, and the next event may not resolve on its own.",
        hi: "TIA बहुत भ्रमित करने वाला हो सकता है क्योंकि जब तक मरीज़ डॉक्टर तक पहुँचता है, लक्षण अक्सर ठीक हो चुके होते हैं। उसे आने में शर्म लग सकती है। परिवार कह सकता है 'ठीक है, अब तो ठीक हो गए।' यह बिल्कुल ग़लत प्रतिक्रिया है। TIA झूठा अलार्म नहीं — असली अलार्म है। दिमाग़ ने अभी दिखाया है कि पाइपलाइन काम नहीं कर रही, और अगला दौरा अपने आप ठीक न हो।",
      },
      whatsHappening: {
        en: "A small clot has temporarily blocked an artery in the brain, then dissolved on its own — but the underlying problem (the source of the clot) is still there. That source might be a partially blocked carotid artery in the neck, an irregular heart rhythm called atrial fibrillation, or other vascular disease. Without treatment, another clot will likely form, and the next one may not dissolve on its own.",
        hi: "एक छोटे थक्के ने दिमाग़ की एक धमनी को अस्थायी रूप से बंद किया, फिर ख़ुद घुल गया — लेकिन असली समस्या (थक्के का स्रोत) अभी भी है। वह स्रोत गर्दन की कैरोटिड धमनी में आंशिक रुकावट, अनियमित दिल की धड़कन (एट्रियल फ़िब्रिलेशन), या अन्य संवहनी रोग हो सकता है। बिना इलाज के, एक और थक्का बनने की संभावना है — और वह अपने आप न घुले।",
      },
      redFlags: {
        en: [
          "Any episode of sudden weakness, speech difficulty, or vision loss — even if it resolved — see a neurologist this week",
          "TIA symptoms lasting more than 1 hour need emergency evaluation",
          "Two or more TIA-like episodes in a short period — urgent",
        ],
        hi: [
          "अचानक कमज़ोरी, बोलने में तकलीफ़, या दिखना बंद होने का कोई भी दौरा — चाहे ठीक हो गया हो — इसी हफ़्ते न्यूरोलॉजिस्ट से मिलें",
          "1 घंटे से ज़्यादा TIA के लक्षण — आपातकालीन मूल्यांकन ज़रूरी",
          "थोड़े समय में दो या ज़्यादा TIA जैसे दौरे — तत्काल",
        ],
      },
      howDrKumarTreats: {
        en: "A TIA is an urgent neurology referral — not an emergency that requires the ambulance, but a 'see a neurologist this week' situation. Dr. Kumar performs an evaluation to identify the source of the TIA: imaging of the brain, ultrasound of the carotid arteries in the neck, an ECG and possibly extended heart monitoring to look for atrial fibrillation, and blood tests for stroke risk factors. Based on what is found, treatment usually involves blood thinners, blood pressure and cholesterol control, and lifestyle changes. For patients with significant carotid artery blockage, a procedure to open the artery may be recommended. The goal is simple: prevent the full stroke that the TIA was warning about.",
        hi: "TIA एक तत्काल न्यूरोलॉजी रेफरल है — एम्बुलेंस की ज़रूरत नहीं, लेकिन 'इसी हफ़्ते न्यूरोलॉजिस्ट से मिलें' की स्थिति है। डॉ. कुमार TIA का स्रोत पहचानने के लिए जाँच करते हैं: दिमाग़ की इमेजिंग, गर्दन की कैरोटिड धमनियों का अल्ट्रासाउंड, ECG और संभवतः एट्रियल फ़िब्रिलेशन के लिए विस्तारित दिल की निगरानी, और स्ट्रोक जोखिम कारकों के लिए रक्त परीक्षण। इलाज में आमतौर पर खून पतला करने की दवाएँ, रक्तचाप और कोलेस्ट्रॉल नियंत्रण, और जीवनशैली में बदलाव शामिल हैं। लक्ष्य सरल है: TIA जिस पूरे स्ट्रोक की चेतावनी दे रहा था, उसे रोकना।",
      },
    },

    /* ── Topic 4: Recovery & Rehabilitation ───────────────── */
    {
      slug: "recovery",
      name: { en: "Recovery & Rehabilitation", hi: "रिकवरी और पुनर्वास" },
      intro: {
        en: "Stroke recovery is a journey that begins in the hospital and continues for months — sometimes years. The brain has remarkable capacity to rewire itself, but this rewiring requires consistent, dedicated work. What happens in the first 3 months matters enormously, but recovery does not stop there.",
        hi: "स्ट्रोक रिकवरी एक यात्रा है जो अस्पताल में शुरू होती है और महीनों — कभी-कभी सालों — तक चलती है। दिमाग़ में खुद को फिर से जोड़ने की अद्भुत क्षमता है, लेकिन यह पुनर्जुड़ाव लगातार, समर्पित काम से ही होता है। पहले 3 महीने बहुत मायने रखते हैं, लेकिन रिकवरी वहाँ नहीं रुकती।",
      },
      couldThisBeYou: {
        en: [
          "You or your family member was discharged after a stroke and you're unsure what to do next",
          "Progress seems to have stalled after the first weeks",
          "One side of the body is stiff or spastic, making movement painful or limited",
          "Speech has partially recovered but is still slow or effortful",
          "Low mood or loss of motivation is affecting willingness to participate in therapy",
          "You're managing everything alone and caregiver exhaustion is setting in",
        ],
        hi: [
          "स्ट्रोक के बाद आप या परिवार का कोई सदस्य छुट्टी हुआ और अगले क़दम स्पष्ट नहीं",
          "पहले हफ़्तों के बाद प्रगति रुकी लग रही है",
          "शरीर का एक तरफ़ अकड़ा या spastic है, हलचल दर्दनाक या सीमित है",
          "बोली आंशिक रूप से वापस आई लेकिन अभी भी धीमी या कठिन है",
          "उदासी या प्रेरणा की कमी थेरेपी में भाग लेने की इच्छा को प्रभावित कर रही है",
          "आप सब अकेले संभाल रहे हैं और देखभालकर्ता की थकान आ रही है",
        ],
      },
      whatItFeelsLike: {
        en: "Recovery from stroke is not linear. There are good days and bad days, plateaus and breakthroughs. The first 3 months typically see the most rapid improvement, but meaningful recovery continues for 12 months or more. Some patients recover almost completely. Others recover function in some areas and adapt to lasting changes in others. The most important thing: do not write off recovery early. Many of the most dramatic improvements happen between months 3 and 12 — exactly when families often start giving up.",
        hi: "स्ट्रोक से रिकवरी सीधी रेखा में नहीं होती। अच्छे दिन होते हैं, बुरे दिन होते हैं, ठहराव होता है और सफलताएँ भी। पहले 3 महीने सबसे तेज़ सुधार के होते हैं, लेकिन सार्थक रिकवरी 12 महीने या उससे ज़्यादा चलती है। कुछ मरीज़ लगभग पूरी तरह ठीक हो जाते हैं। सबसे ज़रूरी बात: रिकवरी जल्दी नहीं छोड़ें। सबसे नाटकीय सुधार अक्सर महीने 3 से 12 के बीच आते हैं — ठीक वह समय जब परिवार अक्सर हार मानने लगते हैं।",
      },
      whatsHappening: {
        en: "The brain's remarkable ability to rewire itself — called neuroplasticity — is what makes stroke recovery possible. When brain cells die, neighbouring cells can sometimes take over their functions, but this process requires repeated stimulation through therapy and practice. Rehabilitation works by giving the brain the consistent input it needs to build new pathways. This is why skipping therapy sessions is so costly — each missed session is a day the brain didn't get the signals it needed to rewire.\n\nGood rehabilitation addresses every affected domain:\n- **Physiotherapy** — to rebuild strength, balance, and walking ability\n- **Occupational therapy** — to relearn daily activities like dressing, eating, and using the toilet independently\n- **Speech and language therapy** — for aphasia (difficulty speaking or understanding speech) or swallowing problems\n- **Cognitive rehabilitation** — for memory, attention, or thinking difficulties\n- **Mental health support** — because post-stroke depression and anxiety are common, treatable, and significantly affect physical recovery",
        hi: "दिमाग़ की खुद को फिर से जोड़ने की अद्भुत क्षमता — जिसे neuroplasticity कहते हैं — स्ट्रोक रिकवरी को संभव बनाती है। जब दिमाग़ी कोशिकाएँ मरती हैं, पड़ोसी कोशिकाएँ कभी-कभी उनके काम संभाल सकती हैं, लेकिन इसके लिए थेरेपी और अभ्यास के ज़रिए लगातार उत्तेजना चाहिए।\n\nअच्छा पुनर्वास हर प्रभावित क्षेत्र को संबोधित करता है:\n- **फिज़ियोथेरेपी** — शक्ति, संतुलन और चलने की क्षमता वापस लाने के लिए\n- **ऑक्युपेशनल थेरेपी** — कपड़े पहनना, खाना, शौचालय उपयोग जैसी दैनिक गतिविधियाँ सीखने के लिए\n- **स्पीच और भाषा थेरेपी** — बोलने/समझने की तकलीफ़ या निगलने की समस्याओं के लिए\n- **संज्ञानात्मक पुनर्वास** — याददाश्त, ध्यान या सोचने की कठिनाइयों के लिए\n- **मानसिक स्वास्थ्य सहायता** — क्योंकि स्ट्रोक के बाद अवसाद और चिंता आम, इलाज योग्य, और शारीरिक रिकवरी को गहराई से प्रभावित करते हैं",
      },
      redFlags: {
        en: [
          "Any new neurological symptoms after a stroke — weakness, speech change, vision change — treat as a new stroke emergency",
          "Sudden worsening of already-recovered functions",
          "Signs of post-stroke depression: persistent withdrawal, loss of interest in therapy, hopelessness",
        ],
        hi: [
          "स्ट्रोक के बाद कोई भी नया न्यूरोलॉजिकल लक्षण — कमज़ोरी, बोली में बदलाव, दिखने में बदलाव — नए स्ट्रोक की आपात स्थिति मानें",
          "पहले से ठीक हुए कार्यों का अचानक बिगड़ना",
          "स्ट्रोक के बाद अवसाद के संकेत: लगातार अलगाव, थेरेपी में रुचि खोना, निराशा",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar works closely with a network of physiotherapists, occupational therapists, and speech therapists in Lucknow and Kanpur to build a personalised rehabilitation plan for each patient. Recovery is monitored at regular intervals — typically at 1 month, 3 months, 6 months, and 12 months post-stroke — with the plan adjusted based on actual progress. He also screens for and treats post-stroke depression at every visit, manages spasticity (the muscle tightness that often develops in affected limbs), and ensures that stroke prevention measures continue lifelong.\n\nMost stroke survivors make meaningful gains for 12 months and often longer. The patients who do best are those whose families stay engaged, who attend therapy consistently, and who have a neurologist who monitors the full picture — not just the motor recovery.",
        hi: "डॉ. कुमार लखनऊ और कानपुर के फिज़ियोथेरेपिस्ट, ऑक्युपेशनल थेरेपिस्ट और स्पीच थेरेपिस्ट के नेटवर्क के साथ मिलकर हर मरीज़ की व्यक्तिगत पुनर्वास योजना बनाते हैं। रिकवरी को नियमित अंतराल पर — आमतौर पर स्ट्रोक के 1, 3, 6 और 12 महीने बाद — आँका जाता है। वे हर विज़िट पर स्ट्रोक के बाद के अवसाद की जाँच और इलाज करते हैं, spasticity को संभालते हैं, और सुनिश्चित करते हैं कि स्ट्रोक रोकथाम के उपाय जीवन भर जारी रहें।\n\nज़्यादातर स्ट्रोक बचे लोग 12 महीने और अक्सर उससे ज़्यादा सार्थक सुधार करते हैं। सबसे अच्छे नतीजे उन मरीज़ों के होते हैं जिनके परिवार जुड़े रहते हैं, जो नियमित थेरेपी लेते हैं, और जिनके पास एक न्यूरोलॉजिस्ट है जो पूरी तस्वीर देखता है।",
      },
    },
  ],

  /* ── Myths & Facts (7 pairs) ─────────────────────────────── */
  myths: [
    {
      myth: { en: "Stroke only happens to old people.", hi: "स्ट्रोक सिर्फ़ बुज़ुर्गों को होता है।" },
      fact: {
        en: "While stroke is more common over 60, roughly 1 in 5 strokes happen in people under 50. Young strokes are increasing in India, driven by high blood pressure, diabetes, smoking, and lifestyle factors. Age is a risk factor, not a requirement.",
        hi: "स्ट्रोक 60 से ऊपर ज़्यादा आम है, लेकिन लगभग 5 में से 1 स्ट्रोक 50 से कम उम्र में होता है। भारत में युवाओं में स्ट्रोक बढ़ रहे हैं — उच्च रक्तचाप, मधुमेह, धूम्रपान और जीवनशैली के कारण। उम्र एक जोखिम कारक है, आवश्यकता नहीं।",
      },
    },
    {
      myth: { en: "If the symptoms went away, it wasn't really a stroke.", hi: "अगर लक्षण चले गए, तो वह स्ट्रोक था ही नहीं।" },
      fact: {
        en: "Temporary symptoms that resolve are most likely a TIA — a mini-stroke. This is a serious warning sign. 1 in 10 people who have a TIA will have a full stroke within 90 days, often within the first week. A TIA needs urgent medical evaluation, not relief that 'it passed.'",
        hi: "ठीक हो जाने वाले अस्थायी लक्षण सबसे अधिक संभावना TIA — मिनी-स्ट्रोक — हैं। यह एक गंभीर चेतावनी है। TIA वाले 10 में से 1 को 90 दिनों में पूरा स्ट्रोक हो जाता है, अक्सर पहले हफ़्ते में। TIA को तत्काल चिकित्सीय मूल्यांकन चाहिए, राहत नहीं।",
      },
    },
    {
      myth: { en: "Nothing can be done once a stroke has happened — we just have to wait and see.", hi: "स्ट्रोक हो जाने के बाद कुछ नहीं किया जा सकता — बस देखना होगा।" },
      fact: {
        en: "Modern stroke care has transformed outcomes. If a patient reaches a stroke-ready hospital within 4.5 hours, clot-dissolving medicine can dramatically reduce damage. For larger clots, mechanical thrombectomy can work up to 24 hours after symptoms began. And rehabilitation in the months that follow can recover function no one expected. The 'wait and see' attitude costs lives and independence.",
        hi: "आधुनिक स्ट्रोक देखभाल ने नतीजे बदल दिए हैं। अगर मरीज़ 4.5 घंटों में stroke-ready अस्पताल पहुँचे, तो थक्का घुलाने वाली दवा नुकसान नाटकीय रूप से कम कर सकती है। बड़े थक्कों के लिए mechanical thrombectomy 24 घंटे तक काम कर सकता है। और बाद के महीनों का पुनर्वास ऐसी कार्यक्षमता वापस ला सकता है जिसकी कोई उम्मीद नहीं थी। 'देखते हैं' वाला रवैया ज़िंदगियाँ और स्वतंत्रता छीन लेता है।",
      },
    },
    {
      myth: { en: "Stroke recovery happens only in the first 6 weeks. After that, what you have is what you keep.", hi: "स्ट्रोक की रिकवरी सिर्फ़ पहले 6 हफ़्तों में होती है। उसके बाद जो है वही रहेगा।" },
      fact: {
        en: "Recovery continues for 12 months and often longer. The brain's ability to rewire (neuroplasticity) is now well understood, and patients who continue consistent rehabilitation make gains years after the stroke. Many improvements happen between months 3 and 12 — exactly when families often start giving up.",
        hi: "रिकवरी 12 महीने और अक्सर उससे ज़्यादा चलती है। दिमाग़ की खुद को फिर जोड़ने की क्षमता (neuroplasticity) अब अच्छी तरह समझी जाती है, और जो मरीज़ लगातार पुनर्वास करते हैं वे स्ट्रोक के सालों बाद भी सुधार करते हैं। कई सुधार महीने 3 से 12 के बीच आते हैं — ठीक वह समय जब परिवार हार मानने लगते हैं।",
      },
    },
    {
      myth: { en: "If a patient has had one stroke, they're safe for a while now.", hi: "एक बार स्ट्रोक हो जाए, तो कुछ समय के लिए सुरक्षित हैं।" },
      fact: {
        en: "The opposite is true. The 90 days after a stroke or TIA are the highest-risk window for another stroke. Preventive treatment — blood thinners, blood pressure control, cholesterol management, treating atrial fibrillation — needs to start immediately and continue lifelong.",
        hi: "उल्टा सच है। स्ट्रोक या TIA के बाद 90 दिन दूसरे स्ट्रोक के लिए सबसे ज़्यादा जोखिम की खिड़की है। रोकथाम का इलाज — खून पतला करने की दवाएँ, रक्तचाप नियंत्रण, कोलेस्ट्रॉल प्रबंधन, एट्रियल फ़िब्रिलेशन का इलाज — तुरंत शुरू होकर जीवन भर जारी रहना चाहिए।",
      },
    },
    {
      myth: { en: "Lakwa means the patient will be paralysed forever.", hi: "लकवा का मतलब है मरीज़ हमेशा के लिए लकवाग्रस्त रहेगा।" },
      fact: {
        en: "'Lakwa' in everyday language often refers to any one-sided weakness, but the medical reality is that most stroke survivors regain significant function with proper rehabilitation. Even patients who initially cannot move an affected limb often regain meaningful use over months of consistent therapy. The word should not become a prediction.",
        hi: "रोज़मर्रा की भाषा में 'लकवा' अक्सर किसी भी एकतरफ़ा कमज़ोरी को कहते हैं, लेकिन चिकित्सीय वास्तविकता यह है कि सही पुनर्वास से ज़्यादातर स्ट्रोक बचे लोग महत्वपूर्ण कार्यक्षमता वापस पाते हैं। यहाँ तक कि जो मरीज़ शुरू में प्रभावित अंग हिला नहीं सकते, वे महीनों की नियमित थेरेपी से सार्थक उपयोग वापस पाते हैं। यह शब्द भविष्यवाणी नहीं बनना चाहिए।",
      },
    },
    {
      myth: { en: "Brain attack and heart attack are the same thing.", hi: "ब्रेन अटैक और हार्ट अटैक एक ही चीज़ है।" },
      fact: {
        en: "They're related — both involve a blocked blood vessel — but they affect different organs and need different treatments. A heart attack blocks blood to the heart muscle; a brain attack (stroke) blocks blood to the brain. The symptoms, emergency treatments, and recovery paths are completely different. Both are emergencies; neither should be confused with the other.",
        hi: "दोनों संबंधित हैं — दोनों में रक्त-नलिका बंद होती है — लेकिन वे अलग अंगों को प्रभावित करते हैं और अलग इलाज चाहते हैं। हार्ट अटैक दिल की मांसपेशी को रक्त बंद करता है; ब्रेन अटैक (स्ट्रोक) दिमाग़ को। लक्षण, आपातकालीन इलाज और रिकवरी के रास्ते पूरी तरह अलग हैं। दोनों आपात स्थितियाँ हैं; दोनों को एक मत समझें।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you're coming to see Dr. Kumar after a stroke — either freshly discharged from hospital, or weeks or months later — here's what to expect.\n\n**Bring the hospital records.** The discharge summary, CT or MRI scans (on CD or as reports), and a list of all current medicines are essential. Dr. Kumar needs to understand exactly what type of stroke happened, what treatment was given, and what the current status is.\n\n**The conversation comes first.** Dr. Kumar will ask the patient (and family) about how the stroke started, what symptoms remain, what daily activities are difficult, and how the patient is doing emotionally. This conversation usually takes 20–30 minutes. If the patient cannot communicate easily, the family's account is the most important source of information.\n\n**A focused examination.** Dr. Kumar performs a neurological examination — checking strength, sensation, coordination, reflexes, speech, swallowing, and cognition. This builds a baseline that future visits will measure against.\n\n**A clear recovery and prevention plan.** By the end of the visit, you'll leave with: a clear understanding of which type of stroke occurred and what likely caused it, a prevention plan to reduce the risk of another stroke, a rehabilitation plan with referrals to physiotherapy and other therapies as needed, screening for post-stroke depression, and a follow-up schedule.\n\n**What to bring:** Hospital discharge summary, all imaging on CD or as reports, list of all current medicines, blood pressure log if available, and ideally a family member who can help describe the patient's daily function.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आप स्ट्रोक के बाद डॉ. कुमार से मिलने आ रहे हैं — अभी-अभी अस्पताल से छुट्टी मिली हो, या हफ़्तों-महीनों बाद — तो जानें क्या होगा।\n\n**अस्पताल के रिकॉर्ड लाएँ।** डिस्चार्ज सारांश, CT या MRI स्कैन (CD या रिपोर्ट में), और सभी मौजूदा दवाओं की सूची ज़रूरी है। डॉ. कुमार को समझना है कि किस प्रकार का स्ट्रोक हुआ, क्या इलाज मिला, और अभी क्या स्थिति है।\n\n**पहले बातचीत।** डॉ. कुमार मरीज़ (और परिवार) से पूछेंगे कि स्ट्रोक कैसे शुरू हुआ, कौन से लक्षण बचे हैं, रोज़मर्रा की कौन सी गतिविधियाँ मुश्किल हैं, और मरीज़ भावनात्मक रूप से कैसा महसूस कर रहा है। यह बातचीत आमतौर पर 20–30 मिनट लेती है। अगर मरीज़ आसानी से संवाद नहीं कर सकता, तो परिवार का विवरण सबसे महत्वपूर्ण है।\n\n**केंद्रित जाँच।** डॉ. कुमार न्यूरोलॉजिकल जाँच करते हैं — शक्ति, संवेदना, समन्वय, रिफ्लेक्स, बोली, निगलने और संज्ञान की जाँच। यह एक आधार रेखा बनाता है जिसे भविष्य की विज़िट में मापा जाएगा।\n\n**स्पष्ट रिकवरी और रोकथाम योजना।** विज़िट के अंत तक आप जानेंगे: किस प्रकार का स्ट्रोक हुआ और क्या कारण लगता है, दूसरे स्ट्रोक का जोखिम कम करने की योजना, ज़रूरत के अनुसार पुनर्वास योजना, स्ट्रोक के बाद के अवसाद की जाँच, और फ़ॉलो-अप का कार्यक्रम।\n\n**क्या लाएँ:** अस्पताल का डिस्चार्ज सारांश, CD या रिपोर्ट में सभी इमेजिंग, सभी दवाओं की सूची, रक्तचाप लॉग अगर हो, और आदर्श रूप से एक परिवार का सदस्य जो मरीज़ की रोज़मर्रा की कार्यक्षमता बता सके।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has managed over 800 acute stroke cases and follows several hundred stroke survivors in long-term care. His approach reflects a clinical reality: *'In stroke, the first hour is about saving the brain. The first year is about rebuilding the person. Both phases need a neurologist who stays involved.'*\n\n**He is part of the emergency response.** At Paras Health Kanpur, Dr. Kumar coordinates the stroke-ready protocol — a sequence designed to get patients from arrival to treatment in under an hour. This includes rapid CT imaging, decision-making about thrombolysis or thrombectomy, and direct communication with the neurosurgery team when needed.\n\n**He treats stroke prevention as seriously as stroke treatment.** Many stroke patients in India are discharged from hospital with vague advice. Dr. Kumar runs a structured prevention assessment — identifying the cause of the stroke, screening for atrial fibrillation, evaluating carotid arteries, and building a long-term plan that includes medication, lifestyle changes, and ongoing monitoring.\n\n**He stays with the patient through recovery.** Stroke recovery is a 12-month journey at minimum. Dr. Kumar schedules follow-ups at meaningful intervals, partners with physiotherapists and occupational therapists in Lucknow and Kanpur, screens for post-stroke depression at every visit, and adjusts the rehabilitation plan based on actual progress — not assumptions.",
    hi: "डॉ. कुमार ने 800 से ज़्यादा तीव्र स्ट्रोक मामले संभाले हैं और कई सौ स्ट्रोक बचे लोगों की दीर्घकालिक देखभाल करते हैं। उनका दृष्टिकोण एक नैदानिक वास्तविकता को दर्शाता है: *'स्ट्रोक में पहला घंटा दिमाग़ बचाने का है। पहला साल व्यक्ति को फिर बनाने का है। दोनों चरणों में एक न्यूरोलॉजिस्ट चाहिए जो जुड़ा रहे।'*\n\n**वे आपातकालीन प्रतिक्रिया का हिस्सा हैं।** पारस हेल्थ कानपुर में डॉ. कुमार stroke-ready protocol संभालते हैं — एक क्रम जो मरीज़ के पहुँचने से इलाज तक एक घंटे के अंदर पहुँचाने के लिए बना है।\n\n**वे स्ट्रोक रोकथाम को उतनी ही गंभीरता से लेते हैं जितनी स्ट्रोक इलाज को।** भारत में कई स्ट्रोक मरीज़ अस्पताल से अस्पष्ट सलाह के साथ छुट्टी होते हैं। डॉ. कुमार एक संरचित रोकथाम मूल्यांकन चलाते हैं।\n\n**वे मरीज़ के साथ रिकवरी तक रहते हैं।** डॉ. कुमार सार्थक अंतराल पर फ़ॉलो-अप तय करते हैं, लखनऊ और कानपुर के फिज़ियोथेरेपिस्ट और ऑक्युपेशनल थेरेपिस्ट के साथ काम करते हैं, हर विज़िट पर स्ट्रोक के बाद के अवसाद की जाँच करते हैं, और वास्तविक प्रगति के आधार पर पुनर्वास योजना समायोजित करते हैं।",
  },

  /* ── Patient Story (adapted from a verified Google review) ── */
  patientStory: {
    name: "Anmol Singh",
    initials: "A",
    condition: { en: "Ischaemic Stroke", hi: "इस्केमिक स्ट्रोक" },
    text: {
      en: "My grandfather had an ischaemic stroke, and Dr. Kumar gave us the best treatment options and care possible. He explained everything clearly and guided us through each step of the recovery, even his OPD team was helpful throughout. We are grateful for how he handled such a frightening time for our family.",
      hi: "मेरे दादाजी को इस्केमिक स्ट्रोक हुआ, और डॉ. कुमार ने हमें सबसे अच्छे इलाज के विकल्प और संभव देखभाल दी। उन्होंने सब कुछ साफ़ समझाया और रिकवरी के हर क़दम पर हमारा मार्गदर्शन किया, उनकी OPD टीम भी पूरे समय मददगार रही। हमारे परिवार के इतने डरावने समय को उन्होंने जिस तरह संभाला, उसके लिए हम आभारी हैं।",
    },
    source: "google",
    sourceLabel: {
      en: "Adapted from a verified Google review",
      hi: "एक सत्यापित Google समीक्षा से रूपांतरित",
    },
  },

  /* ── Living Well (7 tips) ────────────────────────────────── */
  livingWell: {
    en: [
      "Take blood pressure medicines every single day, at the same time. Uncontrolled blood pressure is the single biggest cause of repeat stroke. Set a phone alarm. Never skip doses, even on days when you feel fine.",
      "Do the physiotherapy exercises every day, even when progress feels invisible. The brain rewires through repetition. 20 minutes daily is more valuable than 2 hours once a week.",
      "Keep a weekly blood pressure log. A home BP monitor (~₹2,000) is one of the best investments a stroke family can make. Bring the log to every follow-up — this is how Dr. Kumar fine-tunes the medicines.",
      "Watch for post-stroke depression. If the patient (or you, the caregiver) feels persistently sad, hopeless, or uninterested in things they used to enjoy, tell Dr. Kumar. It is common, it is treatable, and treating it speeds physical recovery.",
      "Never stop blood thinners without asking the doctor first. If a dentist or surgeon asks to stop them for a procedure, call Dr. Kumar before doing so. Stopping suddenly can trigger another stroke.",
      "Keep the FAST signs visible at home — pin them to the fridge or near the patient's bed. If anyone sees these signs again: call 108 immediately. Do not wait and see.",
      "For caregivers: schedule your own check-ups. Caregiver health collapses are common in the second year. You cannot care for someone else if you don't care for yourself.",
    ],
    hi: [
      "रक्तचाप की दवाएँ हर दिन, एक ही समय पर लें। बेकाबू रक्तचाप दोबारा स्ट्रोक का सबसे बड़ा कारण है। फ़ोन पर अलार्म लगाएँ। कभी खुराक न छोड़ें, चाहे ठीक महसूस हो।",
      "फिज़ियोथेरेपी एक्सरसाइज़ हर दिन करें, भले ही प्रगति न दिखे। दिमाग़ दोहराव से ही खुद को जोड़ता है। रोज़ 20 मिनट, हफ़्ते में एक बार 2 घंटे से बेहतर है।",
      "साप्ताहिक रक्तचाप लॉग रखें। घरेलू BP मॉनिटर (~₹2,000) एक स्ट्रोक परिवार के लिए सबसे अच्छे निवेशों में से एक है। हर फ़ॉलो-अप पर लॉग लाएँ — इसी से डॉ. कुमार दवाएँ ठीक करते हैं।",
      "स्ट्रोक के बाद के अवसाद पर नज़र रखें। अगर मरीज़ (या आप, देखभालकर्ता) लगातार उदास, निराश, या पसंदीदा चीज़ों में रुचि खोया महसूस करे — डॉ. कुमार को बताएँ। यह आम है, ठीक होने वाला है, और इलाज शारीरिक रिकवरी भी तेज़ करता है।",
      "डॉक्टर से पूछे बिना खून पतला करने वाली दवाएँ कभी बंद न करें। अगर कोई दंत चिकित्सक या सर्जन किसी प्रक्रिया के लिए बंद करने को कहे, पहले डॉ. कुमार से पूछें।",
      "FAST के संकेत घर पर दिखाई दें — फ्रिज या मरीज़ के बिस्तर के पास चिपकाएँ। अगर कोई ये संकेत फिर देखे: 108 पर तुरंत कॉल करें।",
      "देखभालकर्ताओं के लिए: अपनी जाँच भी कराएँ। दूसरे साल में देखभालकर्ता की सेहत टूटना आम है। आप अपनी देखभाल किए बिना किसी और की नहीं कर सकते।",
    ],
  },

  /* ── FAQs (8 questions) ──────────────────────────────────── */
  faqs: [
    {
      q: { en: "Will my family member recover fully from stroke?", hi: "क्या मेरे परिवार का सदस्य स्ट्रोक से पूरी तरह ठीक हो जाएगा?" },
      a: {
        en: "Every stroke is different, and no one — including the most experienced neurologist — can predict exact recovery in the first weeks. What we do know: most stroke survivors regain significant function with consistent rehabilitation, recovery continues for 12 months or longer, and the patients who do best are those whose families stay engaged with the rehab process. We will have a much clearer sense of trajectory at 3 months than at 3 days.",
        hi: "हर स्ट्रोक अलग होता है, और पहले हफ़्तों में कोई भी — सबसे अनुभवी न्यूरोलॉजिस्ट भी — सटीक रिकवरी की भविष्यवाणी नहीं कर सकता। जो हम जानते हैं: ज़्यादातर स्ट्रोक बचे लोग नियमित पुनर्वास से महत्वपूर्ण कार्यक्षमता वापस पाते हैं, रिकवरी 12 महीने या उससे ज़्यादा चलती है। 3 दिन में जितना स्पष्ट होगा, 3 महीने में उससे कहीं ज़्यादा।",
      },
    },
    {
      q: { en: "Can a stroke happen again?", hi: "क्या स्ट्रोक दोबारा हो सकता है?" },
      a: {
        en: "Yes, and preventing this is one of the most important things we do after the first stroke. The 90 days after a stroke or TIA are the highest-risk window for another one. With proper preventive treatment — blood thinners if indicated, blood pressure control, cholesterol management, and treating atrial fibrillation if present — the risk of recurrence drops dramatically. But the prevention has to continue lifelong, not just for a few months.",
        hi: "हाँ, और इसे रोकना पहले स्ट्रोक के बाद सबसे महत्वपूर्ण काम है। स्ट्रोक या TIA के बाद 90 दिन दूसरे के लिए सबसे ज़्यादा जोखिम की खिड़की हैं। सही रोकथाम के इलाज से — खून पतला करने की दवाएँ, रक्तचाप नियंत्रण, कोलेस्ट्रॉल प्रबंधन — दोबारा होने का जोखिम नाटकीय रूप से कम हो जाता है। लेकिन रोकथाम जीवन भर चलनी है।",
      },
    },
    {
      q: { en: "How long does rehabilitation take?", hi: "पुनर्वास में कितना समय लगता है?" },
      a: {
        en: "The most intensive phase is usually the first 3 months, but meaningful recovery continues for 12 months and often beyond. We typically schedule physiotherapy multiple times per week initially, then taper based on progress. Many patients continue some form of exercise routine indefinitely — and that's a good thing.",
        hi: "सबसे गहन चरण आमतौर पर पहले 3 महीने होते हैं, लेकिन सार्थक रिकवरी 12 महीने और अक्सर उससे आगे चलती है। शुरू में आमतौर पर हफ़्ते में कई बार फिज़ियोथेरेपी तय की जाती है, फिर प्रगति के आधार पर कम होती है। कई मरीज़ अनिश्चित काल तक किसी न किसी रूप में एक्सरसाइज़ जारी रखते हैं — और यह अच्छी बात है।",
      },
    },
    {
      q: { en: "Was the stroke caused by something we did wrong?", hi: "क्या स्ट्रोक हमारी किसी ग़लती से हुआ?" },
      a: {
        en: "No. Strokes have biological causes — usually long-standing high blood pressure, diabetes, irregular heart rhythm, or vascular disease. These were happening silently for years before the stroke. The stroke is not your fault, and not the patient's fault either. What matters now is what we do next.",
        hi: "नहीं। स्ट्रोक के जैविक कारण होते हैं — आमतौर पर लंबे समय का उच्च रक्तचाप, मधुमेह, अनियमित दिल की धड़कन, या संवहनी रोग। ये स्ट्रोक से सालों पहले चुपचाप हो रहे थे। यह आपकी ग़लती नहीं है, और मरीज़ की भी नहीं। अब जो मायने रखता है वह है — आगे क्या करते हैं।",
      },
    },
    {
      q: { en: "Will the patient need to be on blood thinners forever?", hi: "क्या मरीज़ को हमेशा खून पतला करने वाली दवाएँ लेनी होंगी?" },
      a: {
        en: "Usually yes, if the stroke was caused by a clot. The specific blood thinner and dose depends on the cause — patients with atrial fibrillation need different blood thinners than those with carotid disease. Dr. Kumar reviews this at every visit and never stops them abruptly. If another doctor suggests stopping them for a procedure, always check with Dr. Kumar first.",
        hi: "आमतौर पर हाँ, अगर स्ट्रोक थक्के से हुआ था। कौन सी दवा और कितनी मात्रा — यह कारण पर निर्भर है। डॉ. कुमार हर विज़िट पर इसकी समीक्षा करते हैं। अगर कोई और डॉक्टर किसी प्रक्रिया के लिए इन्हें बंद करने की सलाह दे, पहले डॉ. कुमार से ज़रूर पूछें।",
      },
    },
    {
      q: { en: "Can we treat the patient at home, or do we need to stay near a hospital?", hi: "क्या हम घर पर इलाज कर सकते हैं, या अस्पताल के पास रहना होगा?" },
      a: {
        en: "After the acute phase, most stroke care happens at home with regular outpatient follow-ups. You don't need to stay near a hospital. What you do need is a clear plan for what to do if warning signs return — and that plan is part of what Dr. Kumar provides at every discharge.",
        hi: "तीव्र चरण के बाद ज़्यादातर स्ट्रोक देखभाल घर पर होती है, नियमित बाह्य-रोगी फ़ॉलो-अप के साथ। अस्पताल के पास रहने की ज़रूरत नहीं। ज़रूरत है एक स्पष्ट योजना की — अगर चेतावनी के संकेत वापस आएँ तो क्या करें। यह योजना डॉ. कुमार हर छुट्टी के समय देते हैं।",
      },
    },
    {
      q: { en: "Is 'brain attack' the same as 'stroke'?", hi: "क्या 'ब्रेन अटैक' और 'स्ट्रोक' एक ही चीज़ है?" },
      a: {
        en: "Yes — 'brain attack' is simply a more direct, urgency-conveying way of describing the same condition. It's increasingly used because it parallels 'heart attack' and helps families understand that stroke is just as much an emergency. The treatment window, the consequences of delay, and the importance of acting immediately are identical.",
        hi: "हाँ — 'ब्रेन अटैक' उसी स्थिति का ज़्यादा सीधा, तात्कालिकता बताने वाला नाम है। इसका उपयोग बढ़ रहा है क्योंकि यह 'हार्ट अटैक' के समानांतर है और परिवारों को समझाता है कि स्ट्रोक उतनी ही आपात स्थिति है।",
      },
    },
    {
      q: { en: "What will the consultation cost, and what tests will be needed?", hi: "परामर्श में कितना खर्च होगा और क्या जाँचें लगेंगी?" },
      a: {
        en: "First consultation is ₹1,000 and follow-ups are ₹500. The tests needed depend on what was already done in hospital. If carotid ultrasound, prolonged heart monitoring, or repeat imaging is needed, Dr. Kumar will explain exactly why before ordering anything. You will never be sent for tests without a clear clinical reason.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। जाँचें इस पर निर्भर हैं कि अस्पताल में क्या हो चुका है। अगर कैरोटिड अल्ट्रासाउंड, लंबी दिल की निगरानी, या दोबारा इमेजिंग चाहिए, डॉ. कुमार पहले बताएँगे क्यों। बिना स्पष्ट नैदानिक कारण के कोई जाँच नहीं मँगाई जाएगी।",
      },
    },
  ],
};

export default data;
