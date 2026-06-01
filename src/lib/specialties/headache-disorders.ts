import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "headache-disorders",
  name: {
    en: "Headache Disorders",
    hi: "सिरदर्द विकार",
  },
  shortName: {
    en: "Headache Disorders",
    hi: "सिरदर्द विकार",
  },
  tier: 2,
  color: "coral",
  icon: "🧠",

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: {
      en: "Headache Disorders Clinic",
      hi: "सिरदर्द विकार क्लिनिक",
    },
    tagline: {
      en: "When the pain won't let you live.",
      hi: "जब दर्द आपको जीने नहीं देता।",
    },
    supportLine: {
      en: "If you've found this page, you (or someone you love) is probably tired of being told it's 'just a headache' or 'just stress.' It usually isn't — and you deserve more than another strip of painkillers. Let's understand what's really happening, together.",
      hi: "अगर आप इस पन्ने तक पहुँचे हैं, तो शायद आप (या आपका कोई अपना) यह सुनते-सुनते थक गए हैं कि यह 'सिर्फ़ सिरदर्द' है या 'सिर्फ़ तनाव'। ज़्यादातर ऐसा नहीं होता — और आप और दर्द-निवारक की पट्टी से ज़्यादा के हक़दार हैं। आइए मिलकर समझते हैं कि असल में क्या हो रहा है।",
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

  /* ── Why This Matters (overview) ─────────────────────────── */
  overview: {
    en: "Headache is the single most common reason people visit a neurologist — and also one of the most under-treated conditions in India. Most patients have lived with their headaches for years, cycling through painkillers, home remedies, and advice from well-meaning relatives, before they ever see a specialist. That delay isn't their fault — it's a gap in how headaches are treated in our healthcare system. The good news: with the right diagnosis, the vast majority of headache conditions are highly treatable. If your family doctor or physician has suggested you see a neurologist, that's a good step — this page will help you understand what comes next.",
    hi: "सिरदर्द एक न्यूरोलॉजिस्ट के पास जाने का सबसे आम कारण है — और भारत में सबसे कम इलाज पाने वाली स्थितियों में से एक भी। ज़्यादातर मरीज़ सालों तक दर्द-निवारकों, घरेलू नुस्खों और रिश्तेदारों की सलाह के बीच झूलते रहते हैं, किसी विशेषज्ञ के पास पहुँचने से पहले। यह देरी उनकी गलती नहीं है — यह हमारी स्वास्थ्य व्यवस्था में एक कमी है। अच्छी ख़बर: सही पहचान के साथ, सिरदर्द की बड़ी बहुमत बहुत अच्छे से ठीक हो सकती है। अगर आपके परिवार के डॉक्टर ने न्यूरोलॉजिस्ट के पास जाने की सलाह दी है, तो यह एक अच्छा कदम है — यह पन्ना आपको समझाएगा कि आगे क्या होगा।",
  },

  /* ── Table of Contents with entity tags ──────────────────── */
  toc: [
    {
      label: { en: "Headache & Migraine", hi: "सिरदर्द और माइग्रेन" },
      anchor: "headache",
      entityTags: [
        { en: "Migraine", hi: "माइग्रेन" },
        { en: "Tension headache", hi: "तनाव सिरदर्द" },
        { en: "Cluster headache", hi: "क्लस्टर सिरदर्द" },
        { en: "Medication-overuse headache", hi: "दवा-ज़्यादा-इस्तेमाल सिरदर्द" },
      ],
    },
    {
      label: { en: "Vertigo & Dizziness", hi: "चक्कर आना" },
      anchor: "vertigo-and-dizziness",
      entityTags: [
        { en: "BPPV", hi: "BPPV" },
        { en: "Vestibular neuritis", hi: "वेस्टिबुलर न्यूराइटिस" },
        { en: "Ménière's disease", hi: "मेनियर्स रोग" },
        { en: "Central vertigo", hi: "केंद्रीय चक्कर" },
      ],
    },
  ],

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic A: Headache & Migraine ────────────────────── */
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
          "Nausea, or sensitivity to light and sound, that arrives with the pain",
          "Headaches that return more than 4 times a month, year after year",
          "Painkillers from the chemist used to help, but don't anymore — or you've started needing them almost daily",
          "A tight, band-like pressure across the forehead, especially after long work hours or screen time",
          "Sharp, stabbing attacks behind one eye, sometimes waking you from sleep at the same time every night",
          "You've started avoiding plans, travel, or social events because you can't predict when the next attack will come",
        ],
        hi: [
          "सिर के एक तरफ़ धड़कता हुआ दर्द, घंटों तक — कभी-कभी पूरा दिन",
          "दर्द के साथ जी मचलाना, या रोशनी और आवाज़ बर्दाश्त न होना",
          "महीने में 4 बार से ज़्यादा सिरदर्द, साल दर साल",
          "पहले दुकान की दर्द-निवारक से आराम मिलता था, अब नहीं मिलता — या अब लगभग हर दिन चाहिए",
          "माथे पर कसी हुई पट्टी जैसा दबाव, ख़ासकर लंबे काम के बाद या स्क्रीन के सामने बैठने से",
          "एक आँख के पीछे तेज़, चुभने वाला दर्द — कभी-कभी रोज़ एक ही समय पर नींद से जगा देने वाला",
          "आपने योजनाएँ, यात्रा या सामाजिक कार्यक्रमों से दूरी बनाना शुरू कर दिया है क्योंकि अगले दौरे का अंदाज़ा नहीं",
        ],
      },
      whatItFeelsLike: {
        en: "A migraine often arrives as a storm you can feel coming — a flicker in the vision, a strange smell, a heavy fog. By the time the pain hits, light feels like a knife and sound feels like a hammer. Tension headaches are quieter but persistent — a dull weight pressing across the forehead and into the neck that simply will not let go. Cluster headaches are different again: short, ferocious, almost always on one side and behind the eye, often arriving at the same hour every night.",
        hi: "माइग्रेन अक्सर तूफ़ान की तरह आता है जिसे आप पहले से महसूस कर सकते हैं — आँखों के सामने झिलमिलाहट, एक अजीब-सी गंध, भारी कोहरा। दर्द जब आता है, तो रोशनी चाकू जैसी लगती है और आवाज़ हथौड़े जैसी। तनाव वाला सिरदर्द शांत होता है पर हटता नहीं — माथे और गर्दन पर भारी बोझ जैसा। क्लस्टर सिरदर्द अलग होता है: छोटा, तेज़, लगभग हमेशा एक तरफ़ और आँख के पीछे — अक्सर हर रात एक ही समय पर।",
      },
      whatsHappening: {
        en: "Despite how it feels, the headache is rarely happening 'inside the brain' itself — the brain has no pain receptors. The pain comes from the blood vessels, nerves, and membranes surrounding the brain becoming irritated or inflamed. In migraine, a chemical called CGRP (calcitonin gene-related peptide) plays a central role — it's released during an attack and causes blood vessels to swell and nerves to fire pain signals. This is why the newer migraine treatments specifically target CGRP — they go after the cause, not just the pain. In tension headaches, it's often the muscles of the scalp and neck staying tight for too long, sometimes amplified by stress or poor posture. In cluster headaches, the hypothalamus — the brain's internal clock — seems to be involved, which explains why attacks often arrive at the same time each day. Knowing the type matters, because each one responds to genuinely different treatments.",
        hi: "जैसा महसूस होता है उससे उलट, दर्द दिमाग़ के अंदर शायद ही होता है — दिमाग़ में दर्द महसूस करने वाली नसें नहीं होतीं। दर्द दिमाग़ के चारों ओर की रक्त-नलियों, नसों और परदों से आता है जो सूज जाती हैं या चिढ़ जाती हैं। माइग्रेन में CGRP (calcitonin gene-related peptide) नामक रसायन मुख्य भूमिका निभाता है — यह दौरे के दौरान निकलता है और रक्त-नलियों को फुला देता है और नसों को दर्द का संकेत देने पर मजबूर करता है। इसीलिए नई माइग्रेन दवाएँ ख़ास तौर पर CGRP को निशाना बनाती हैं — वे दर्द नहीं, कारण पर वार करती हैं। तनाव वाले सिरदर्द में अक्सर सिर और गर्दन की मांसपेशियाँ बहुत देर तक तनी रहती हैं। क्लस्टर सिरदर्द में हाइपोथैलेमस — दिमाग़ की भीतरी घड़ी — शामिल लगती है, जो बताती है कि दौरे हर दिन एक ही समय पर क्यों आते हैं। प्रकार पहचानना ज़रूरी है क्योंकि हर का इलाज अलग होता है।",
      },
      redFlags: {
        en: [
          "A sudden, severe headache that feels like the worst of your life — especially if it peaks within seconds",
          "Headache with fever, stiff neck, or rash",
          "Headache after a head injury or fall",
          "Headache with confusion, slurred speech, weakness on one side, or vision changes",
          "A new headache pattern after age 50",
          "Headache that steadily gets worse over days or weeks",
        ],
        hi: [
          "अचानक, बहुत तेज़ सिरदर्द — ज़िंदगी का सबसे बुरा, ख़ासकर अगर कुछ सेकंड में चरम पर पहुँच जाए",
          "बुख़ार, गर्दन अकड़ने या त्वचा पर चकत्तों के साथ सिरदर्द",
          "सिर पर चोट या गिरने के बाद सिरदर्द",
          "बेहोशी, बोलने में लड़खड़ाहट, एक तरफ़ कमज़ोरी या दिखाई न देने के साथ सिरदर्द",
          "50 साल की उम्र के बाद नया सिरदर्द शुरू होना",
          "दिनों या हफ़्तों में लगातार बढ़ता हुआ सिरदर्द",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first goal is to identify exactly which type of headache you have — because the treatments are genuinely different. He starts with a detailed conversation about your headache pattern, your triggers, your sleep, your work, and what you've already tried. He then performs a focused neurological examination and rules out anything serious — an MRI is ordered only if there's a clinical reason, not as a routine. Most headache patients do not need an MRI, and Dr. Kumar will explain why.\n\nFor migraines, treatment typically involves two components: a daily preventive medicine to reduce the frequency of attacks, and a fast-acting rescue medicine for when an attack breaks through. For patients with chronic migraine (15 or more headache days per month), Dr. Kumar offers CGRP-inhibitor therapy — a newer class of medicine that targets the specific chemical driving migraines — and Botox injections for eligible patients. For tension-type headaches, treatment often focuses on muscle relaxants, posture correction, and stress management alongside medication. For cluster headaches, the approach is different again: oxygen therapy during attacks and specific preventive medicines timed to the cluster period.\n\nBeyond medication, Dr. Kumar walks every patient through trigger identification — sleep regularity, dietary triggers, screen habits, hydration, stress patterns, and posture — because medication alone is rarely the complete answer. Most patients begin to notice meaningful improvement within 4–8 weeks of starting the right preventive treatment. Some patients need 2–3 medication adjustments before finding the best fit — this is normal, not a failure.",
        hi: "डॉ. कुमार का पहला लक्ष्य यह पहचानना है कि आपका सिरदर्द किस प्रकार का है। वे आपके सिरदर्द के पैटर्न, ट्रिगर, नींद, काम और पहले आज़माई दवाओं के बारे में विस्तार से बात करते हैं। फिर एक केंद्रित न्यूरोलॉजिकल जाँच करते हैं और कुछ गंभीर होने की संभावना को नकारते हैं — MRI केवल तभी मँगाई जाती है जब कोई नैदानिक कारण हो, रूटीन में नहीं।\n\nमाइग्रेन के लिए इलाज में दो हिस्से होते हैं: रोज़ की रोकथाम की दवा जो दौरों की संख्या कम करे, और दौरे के समय तुरंत राहत देने वाली दवा। पुराने माइग्रेन के लिए डॉ. कुमार CGRP-इनहिबिटर थेरेपी और बोटॉक्स देते हैं। तनाव के सिरदर्द में मांसपेशियों को आराम देने वाली दवाएँ, बैठने के तरीक़े में सुधार और तनाव प्रबंधन मुख्य होता है। क्लस्टर सिरदर्द में दौरे के दौरान ऑक्सीजन और क्लस्टर काल के अनुसार रोकथाम की दवाएँ दी जाती हैं।\n\nदवा के अलावा, डॉ. कुमार हर मरीज़ को ट्रिगर पहचानने में मदद करते हैं — नींद की नियमितता, खानपान, स्क्रीन, पानी, तनाव और बैठने का तरीक़ा। ज़्यादातर मरीज़ 4–8 हफ़्ते में बेहतर महसूस करते हैं। कुछ को 2–3 दवाएँ बदलनी पड़ती हैं — यह सामान्य है, असफलता नहीं।",
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
        en: "Vertigo isn't the same as feeling 'a bit dizzy.' The difference matters — because the treatments are completely different.",
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
        hi: "असली चक्कर में सच में घूमने जैसा महसूस होता है — जैसे आप घूम रहे हों, या दुनिया घूम रही हो। लोग बताते हैं कि वे नींद में करवट लेते समय बिस्तर का किनारा पकड़ लेते हैं, बाथरूम में दीवार थाम लेते हैं, छत खिसकती सी लगती है। यह कुछ सेकंड (BPPV) से लेकर कुछ घंटों तक (वेस्टिबुलर न्यूराइटिस, मेनियर्स) रह सकता है। 'सिर हल्का होना' अक्सर अलग वजह से होता है — रक्तचाप, चिंता, दिल की धड़कन।",
      },
      whatsHappening: {
        en: "Most vertigo comes from the inner ear, where tiny crystals called otoconia help us stay oriented in space. When these crystals slip out of place, you get BPPV — the most common cause of vertigo, especially in middle-aged and older adults. Other causes involve inflammation of the balance nerve (vestibular neuritis), fluid buildup in the inner ear (Meniere's disease), or — much more rarely — problems in the brainstem. The good news: most causes are highly treatable, and many of them without medication at all.",
        hi: "ज़्यादातर चक्कर भीतरी कान से आते हैं, जहाँ otoconia नाम के छोटे क्रिस्टल हमें संतुलन में रखते हैं। जब ये अपनी जगह से हट जाते हैं, तो BPPV होता है — चक्कर का सबसे आम कारण। बाक़ी कारणों में संतुलन की नस की सूजन (वेस्टिबुलर न्यूराइटिस), भीतरी कान में पानी (मेनियर्स), या बहुत कम मामलों में दिमाग़ के तने की समस्या। अच्छी ख़बर: ज़्यादातर कारण बहुत अच्छे से ठीक होते हैं — कई बार बिना दवा के भी।",
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
        en: "Dr. Kumar starts with a focused examination — including the Dix-Hallpike test for BPPV, which can diagnose the most common cause of vertigo in about 90 seconds. For BPPV, treatment is often immediate: a gentle repositioning manoeuvre (the Epley) that moves the crystals back where they belong. Many patients walk out of the clinic with their vertigo resolved that same visit. For other causes, treatment is matched to the underlying problem — vestibular rehabilitation exercises, anti-vertigo medication for acute attacks, dietary changes and longer-term plans for Meniere's, and (rarely) imaging if a central cause is suspected.\n\nFor a deeper guide to vertigo — including vestibular rehabilitation and Ménière's management — see our full Vertigo & Dizziness page →",
        hi: "डॉ. कुमार ध्यान से जाँच से शुरुआत करते हैं — जिसमें BPPV के लिए Dix-Hallpike टेस्ट शामिल है, जो लगभग 90 सेकंड में सबसे आम वजह पहचान सकता है। BPPV का इलाज अक्सर तुरंत होता है: एक हल्की Epley मूवमेंट। कई मरीज़ उसी विज़िट में चक्कर ख़त्म होने पर बाहर जाते हैं। बाक़ी कारणों के लिए इलाज वजह के अनुसार होता है — संतुलन की एक्सरसाइज़, तीव्र दौरे के लिए दवा, मेनियर्स के लिए खानपान में बदलाव, और ज़रूरत पड़ने पर इमेजिंग।\n\nचक्कर के बारे में और जानकारी के लिए — हमारा पूरा वर्टिगो और चक्कर पन्ना देखें →",
      },
    },
  ],

  /* ── Myths & Facts ──────────────────────────────────────── */
  myths: [
    {
      myth: {
        en: "Migraine is just a bad headache — everyone gets headaches.",
        hi: "माइग्रेन बस एक बुरा सिरदर्द है — हर किसी को होता है।",
      },
      fact: {
        en: "Migraine is a neurological condition, not just a strong headache. It involves specific changes in brain chemistry and comes with symptoms like nausea, light sensitivity, and visual disturbances that a regular headache does not. It requires proper medical treatment, not just painkillers.",
        hi: "माइग्रेन एक तंत्रिका-संबंधी बीमारी है, न कि सिर्फ़ तेज़ सिरदर्द। इसमें दिमाग़ी रसायनों में विशिष्ट बदलाव होते हैं और जी मिचलाना, रोशनी से तकलीफ़ व दृश्य गड़बड़ी जैसे लक्षण होते हैं जो साधारण सिरदर्द में नहीं होते। इसके लिए सही दवा चाहिए, न कि सिर्फ़ दर्द-निवारक।",
      },
    },
    {
      myth: {
        en: "If the MRI is normal, there's nothing wrong with you.",
        hi: "अगर MRI ठीक है, तो कोई बीमारी नहीं है।",
      },
      fact: {
        en: "Most primary headache disorders — including migraine, tension headache, and cluster headache — do not show anything on an MRI. A normal scan is actually reassuring: it means the headache isn't caused by a tumour, bleed, or structural problem. The diagnosis is clinical, based on your symptoms and pattern, not on imaging.",
        hi: "ज़्यादातर प्राथमिक सिरदर्द — जैसे माइग्रेन, तनाव और क्लस्टर — MRI में कुछ नहीं दिखाते। सामान्य स्कैन वास्तव में राहत की बात है: इसका मतलब है सिरदर्द ट्यूमर, रक्तस्राव या संरचनात्मक समस्या से नहीं है। पहचान लक्षणों और पैटर्न पर आधारित है, इमेजिंग पर नहीं।",
      },
    },
    {
      myth: {
        en: "Taking painkillers whenever you have a headache is fine — that's what they're for.",
        hi: "जब भी सिरदर्द हो, दर्द-निवारक लेना ठीक है — यही तो उनके लिए बनी हैं।",
      },
      fact: {
        en: "Using over-the-counter painkillers more than 2 days a week can cause medication-overuse headache — a cycle where the very painkillers you take start causing more headaches. This is one of the most common reasons patients end up needing a neurologist. The solution is a proper preventive plan, not more painkillers.",
        hi: "हफ़्ते में 2 से ज़्यादा दिन दर्द-निवारक लेने से 'दवा-ज़्यादा-इस्तेमाल सिरदर्द' हो सकता है — एक ऐसा चक्र जहाँ वही दवाएँ और सिरदर्द पैदा करने लगती हैं। यह मरीज़ों के न्यूरोलॉजिस्ट तक पहुँचने का सबसे आम कारण है। हल सही रोकथाम योजना है, और दर्द-निवारक नहीं।",
      },
    },
    {
      myth: {
        en: "If you've had headaches for years and nothing has worked, nothing ever will.",
        hi: "अगर सालों से सिरदर्द है और कुछ काम नहीं आया, तो कभी नहीं आएगा।",
      },
      fact: {
        en: "In most cases, 'nothing has worked' actually means 'the right treatment hasn't been tried yet.' Many patients have never been on a proper preventive medication — they've only ever used rescue painkillers. Newer treatments like CGRP inhibitors and Botox therapy have transformed outcomes even for patients with decades of chronic migraine.",
        hi: "ज़्यादातर मामलों में 'कुछ काम नहीं आया' का असल मतलब है 'सही इलाज अभी तक आज़माया नहीं गया।' कई मरीज़ों ने कभी सही रोकथाम की दवा नहीं ली — सिर्फ़ दर्द के समय दवा ली। CGRP इनहिबिटर और बोटॉक्स जैसे नए इलाज ने दशकों के पुराने माइग्रेन वाले मरीज़ों के परिणाम भी बदल दिए हैं।",
      },
    },
    {
      myth: {
        en: "Headaches are just stress — you don't need a doctor for stress.",
        hi: "सिरदर्द बस तनाव है — तनाव के लिए डॉक्टर की ज़रूरत नहीं।",
      },
      fact: {
        en: "Stress can be a trigger for headaches, but the headache itself is a medical condition with specific mechanisms in the brain. Telling someone their headache is 'just stress' is like telling someone with asthma that their breathing problem is 'just anxiety.' The trigger may be emotional, but the condition is physical, diagnosable, and treatable.",
        hi: "तनाव एक ट्रिगर हो सकता है, लेकिन सिरदर्द ख़ुद एक चिकित्सीय स्थिति है जिसके दिमाग़ में विशिष्ट कारण होते हैं। किसी को कहना कि 'बस तनाव है' ऐसा ही है जैसे अस्थमा के मरीज़ को कहें कि 'बस घबराहट है।' ट्रिगर भावनात्मक हो सकता है, लेकिन बीमारी शारीरिक, पहचानने योग्य और ठीक होने वाली है।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you've never seen a neurologist before, here's what a typical first visit with Dr. Kumar looks like.\n\n**The conversation comes first.** Dr. Kumar will ask you about your headaches in detail — when they started, how often they come, what they feel like, what makes them better or worse, what medicines you've tried, and how the headaches affect your daily life and work. This conversation usually takes 15–20 minutes. There are no rushed appointments.\n\n**Then, a focused examination.** Dr. Kumar performs a neurological examination — checking your reflexes, coordination, vision, and nerve function. For vertigo patients, he may perform the Dix-Hallpike test right there in the clinic — a gentle head-positioning test that can diagnose the most common cause of vertigo in about 90 seconds. None of these tests are painful.\n\n**Investigations — only if needed.** Most headache patients do not need an MRI or CT scan. Dr. Kumar orders imaging only when the clinical examination raises a specific concern. You will never be sent for tests 'just to be safe' without a clear clinical reason.\n\n**You leave with a plan.** By the end of the first visit, you'll have a clear understanding of what type of headache or vertigo you have, a treatment plan, and a follow-up timeline. Dr. Kumar also shares a simple headache diary format to track your progress between visits.\n\n**What to bring:** Any previous MRI/CT reports (even normal ones), a list of current medicines including painkillers, and a rough idea of how many headaches you've had recently and what you took for them.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आप पहले कभी न्यूरोलॉजिस्ट के पास नहीं गए, तो जानिए डॉ. कुमार की पहली विज़िट कैसी होती है।\n\n**पहले बातचीत।** डॉ. कुमार आपके सिरदर्द के बारे में विस्तार से पूछेंगे — कब शुरू हुआ, कितनी बार आता है, कैसा लगता है, क्या बेहतर या बुरा करता है, क्या दवाएँ आज़माईं, और सिरदर्द आपकी रोज़मर्रा और काम को कैसे प्रभावित करता है। यह बातचीत आमतौर पर 15–20 मिनट लेती है। कोई जल्दबाज़ी नहीं होती।\n\n**फिर एक केंद्रित जाँच।** डॉ. कुमार न्यूरोलॉजिकल जाँच करते हैं — रिफ्लेक्स, संतुलन, दृष्टि और नस की कार्यप्रणाली। चक्कर के मरीज़ों के लिए वे वहीं क्लिनिक में Dix-Hallpike टेस्ट कर सकते हैं — एक हल्का सिर-स्थिति परीक्षण जो लगभग 90 सेकंड में सबसे आम कारण पहचान सकता है। कोई भी जाँच दर्दनाक नहीं है।\n\n**जाँचें — केवल ज़रूरत पड़ने पर।** ज़्यादातर सिरदर्द मरीज़ों को MRI या CT स्कैन की ज़रूरत नहीं होती। डॉ. कुमार इमेजिंग तभी मँगाते हैं जब जाँच में कोई विशिष्ट चिंता उठे।\n\n**आप एक योजना लेकर जाते हैं।** पहली विज़िट के अंत तक आपके पास यह स्पष्ट होगा कि आपका सिरदर्द या चक्कर किस प्रकार का है, एक उपचार योजना, और फ़ॉलो-अप का समय।\n\n**क्या लाएँ:** पिछली MRI/CT रिपोर्ट (सामान्य हों तो भी), दर्द-निवारकों सहित वर्तमान दवाओं की सूची, और हाल के सिरदर्दों की संख्या और दवा का अंदाज़ा।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── For the People Caring for Them ─────────────────────── */
  caregiverSection: {
    en: "Living with someone who has chronic headaches — or sudden, unexplained vertigo — is its own kind of difficult. You learn to keep the room dark, to lower your voice, to cancel plans without resentment. You may wonder if the pain is 'really that bad,' or feel helpless when an attack arrives. Both of those feelings are normal. Neither makes you a bad person.\n\nThe most useful things you can do: believe them — migraine pain is invisible but it is real and neurological. Help them keep a simple symptom diary (date, time, severity, what happened before — Dr. Kumar uses these to spot patterns). Watch for painkiller overuse — if they're taking tablets more than twice a week, gently flag it, because the painkillers themselves may be causing more headaches. And notice if anything changes about the usual pattern — a headache that used to come weekly but is now daily, or a vertigo episode that's lasting longer. That's when a fresh visit is worth it. Take care of yourself too. Caregiver fatigue is real, even for conditions that aren't life-threatening.",
    hi: "किसी ऐसे व्यक्ति के साथ रहना जिसे पुराना सिरदर्द हो — या अचानक, समझ न आने वाला चक्कर — अपने आप में मुश्किल है। आप कमरा अंधेरा रखना सीख जाते हैं, आवाज़ धीमी करना सीख जाते हैं, बिना ग़ुस्से के योजनाएँ रद्द करना सीख जाते हैं। कभी सोच आती है कि क्या दर्द सच में 'इतना बुरा' है, या दौरा पड़ने पर बेबसी महसूस होती है। दोनों ही प्रतिक्रियाएँ सामान्य हैं।\n\nसबसे ज़्यादा काम की बातें: उन पर विश्वास करें — माइग्रेन का दर्द दिखता नहीं, लेकिन वास्तविक और तंत्रिका-संबंधी है। एक छोटी डायरी रखने में मदद करें। दर्द-निवारक की ज़्यादती देखें — हफ़्ते में 2 से ज़्यादा बार गोली लें तो धीरे से बताएँ। और अगर पुराना पैटर्न बदले तो नई जाँच कराएँ। अपना भी ख़याल रखें — देखभालकर्ता की थकान असली होती है।",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has treated over 1,200 patients with primary headache disorders and several hundred with vestibular conditions over the past decade. His approach rests on a simple clinical conviction: 'Most headaches and most vertigo are treatable. The real question is which kind you have. Get the diagnosis right and the rest follows.'\n\nIn practice, this means he doesn't start with a scan — he starts with a conversation. Most headache diagnoses are clinical, not radiological. For chronic migraine, he prescribes the modern CGRP-class preventive medicines and administers Botox injections for eligible patients — treatments that are standard in headache centres globally but rarely available from general physicians in tier-2 cities. For BPPV, he performs the diagnostic and treatment manoeuvres in-clinic — many patients leave the same visit with their vertigo resolved. He builds personalised headache diaries with patients and partners with physiotherapists in Lucknow and Kanpur for vestibular rehabilitation, because medication alone is rarely the full solution.",
    hi: "पिछले दस सालों में डॉ. कुमार ने 1,200 से ज़्यादा सिरदर्द के मरीज़ों और कई सौ वेस्टिबुलर मरीज़ों का इलाज किया है। उनकी सोच एक सरल नैदानिक विश्वास पर टिकी है: 'ज़्यादातर सिरदर्द और ज़्यादातर चक्कर ठीक हो सकते हैं। असली सवाल यह है कि आपका किस प्रकार का है। सही पहचान हो जाए, तो बाक़ी अपने आप होता जाता है।'\n\nव्यवहार में इसका मतलब है — वे स्कैन से नहीं, बातचीत से शुरू करते हैं। ज़्यादातर सिरदर्द की पहचान नैदानिक होती है, रेडियोलॉजिकल नहीं। पुराने माइग्रेन के लिए वे आधुनिक CGRP-श्रेणी की दवाएँ और बोटॉक्स देते हैं। BPPV के लिए क्लिनिक में ही जाँच और उपचार करते हैं। वे मरीज़ों के साथ व्यक्तिगत सिरदर्द डायरी बनाते हैं और लखनऊ-कानपुर के फिज़ियोथेरेपिस्ट के साथ मिलकर काम करते हैं।",
  },

  /* ── Patient Story ───────────────────────────────────────── */
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

  /* ── Living Well (7 tips) ────────────────────────────────── */
  livingWell: {
    en: [
      "Keep a simple headache diary — date, time, pain level (1–10), what you ate, how you slept, and what you were doing before the attack. Show it to Dr. Kumar at your next visit.",
      "Don't use over-the-counter painkillers more than 2 days a week. Overuse can cause medication-overuse headache — more painkillers causing more headaches. If you're reaching for a tablet more often than that, it's time to talk about prevention.",
      "Sleep on a regular schedule, even on weekends. The brain reads sleep changes — both too little and too much — as a migraine trigger.",
      "Stay hydrated throughout the day. If you're prone to evening headaches, reduce caffeine after 2 PM — but don't quit caffeine suddenly, that's a trigger too.",
      "For BPPV: avoid sudden head movements and sleep slightly elevated (two pillows) for a few days after a flare.",
      "Tell your family what actually helps during an attack — a quiet, dark room, a cold cloth on the forehead, no questions. Permission to rest is medicine too.",
      "Don't skip follow-ups. Headache treatment often needs fine-tuning over the first 2–3 months. Staying in touch with Dr. Kumar during this period makes the difference between 'this medicine didn't work' and 'this medicine needed adjustment.'",
    ],
    hi: [
      "एक छोटी सिरदर्द डायरी रखें — तारीख़, समय, दर्द 1–10 में, उससे पहले क्या खाया, कैसे सोए और क्या कर रहे थे। डॉ. कुमार को अगली विज़िट पर दिखाएँ।",
      "हफ़्ते में 2 दिन से ज़्यादा दर्द-निवारक न लें। ज़्यादा लेने से 'दवा-ज़्यादा-इस्तेमाल सिरदर्द' हो सकता है। अगर इससे ज़्यादा ले रहे हैं, तो रोकथाम की बात करें।",
      "नींद का समय रोज़ एक जैसा रखें, छुट्टी के दिन भी। कम या ज़्यादा नींद दोनों को दिमाग़ ट्रिगर मानता है।",
      "पूरे दिन पानी पीते रहें। अगर शाम को सिरदर्द होता है, तो दोपहर 2 बजे के बाद चाय-कॉफ़ी कम करें — लेकिन एकदम से न छोड़ें, यह भी ट्रिगर है।",
      "BPPV के बाद: कुछ दिन तक गर्दन को अचानक न हिलाएँ और दो तकियों पर थोड़े ऊँचे होकर सोएँ।",
      "घरवालों को बताएँ कि दौरे में क्या काम आता है — शांत, अंधेरा कमरा, माथे पर ठंडा कपड़ा, बिना सवाल। आराम की इजाज़त भी एक दवा है।",
      "फ़ॉलो-अप न चूकें। सिरदर्द का इलाज पहले 2–3 महीनों में अक्सर थोड़ा-थोड़ा ठीक करना होता है। डॉ. कुमार के संपर्क में रहना 'दवा काम नहीं की' और 'दवा को थोड़ा बदलना था' के बीच का फ़र्क़ बनाता है।",
    ],
  },

  /* ── FAQs (7 questions) ──────────────────────────────────── */
  faqs: [
    {
      q: {
        en: "Can a headache be a sign of something serious?",
        hi: "क्या सिरदर्द किसी गंभीर बीमारी का संकेत हो सकता है?",
      },
      a: {
        en: "Usually not — over 95% of headaches are 'primary' (migraine, tension, cluster) and not caused by another disease. The red-flag signs listed above are the ones we watch for. If any of those match you, please call us — don't wait for a routine appointment.",
        hi: "अक्सर नहीं — 95% से ज़्यादा सिरदर्द 'प्राथमिक' होते हैं और किसी और बीमारी से नहीं होते। ऊपर लिखे 'रेड फ़्लैग' संकेत ही चिंता वाले होते हैं। अगर वे आप पर लागू हों, कृपया तुरंत कॉल करें।",
      },
    },
    {
      q: {
        en: "Why have my painkillers stopped working?",
        hi: "मेरी दर्द-निवारक दवाएँ काम क्यों नहीं कर रहीं?",
      },
      a: {
        en: "If you've been using over-the-counter painkillers frequently — more than about 2 days a week — your brain may have developed medication-overuse headache. This is a real, well-understood condition where the painkillers themselves start triggering more headaches, creating a cycle that's hard to break on your own. The solution isn't a stronger painkiller — it's a proper preventive treatment plan. Dr. Kumar sees this pattern very often and can help you break the cycle safely.",
        hi: "अगर आप हफ़्ते में 2 से ज़्यादा दिन दर्द-निवारक ले रहे हैं, तो दिमाग़ 'दवा-ज़्यादा-इस्तेमाल सिरदर्द' में पड़ सकता है — जहाँ वही दवाएँ और सिरदर्द पैदा करने लगती हैं। हल और तेज़ दर्द-निवारक नहीं, बल्कि सही रोकथाम योजना है। डॉ. कुमार इस पैटर्न को बहुत देखते हैं और सुरक्षित रूप से इस चक्र से निकलने में मदद कर सकते हैं।",
      },
    },
    {
      q: {
        en: "Do I need an MRI for headaches?",
        hi: "क्या सिरदर्द के लिए MRI ज़रूरी है?",
      },
      a: {
        en: "Most patients with primary headaches do not need an MRI. The diagnosis is clinical — based on your history and examination, not on a scan. Dr. Kumar orders imaging only when the clinical examination raises a specific concern. If your previous MRI was normal, that's actually useful information — bring the report to your visit.",
        hi: "ज़्यादातर प्राथमिक सिरदर्द के मरीज़ों को MRI की ज़रूरत नहीं। पहचान नैदानिक है — आपकी हिस्ट्री और जाँच पर आधारित। डॉ. कुमार इमेजिंग तभी मँगाते हैं जब जाँच में कोई चिंता हो। अगर पिछली MRI सामान्य थी, तो वह रिपोर्ट भी लाएँ।",
      },
    },
    {
      q: {
        en: "Can vertigo be cured without medicine?",
        hi: "क्या चक्कर बिना दवा के ठीक हो सकते हैं?",
      },
      a: {
        en: "Yes — the most common type of vertigo (BPPV) is treated with a gentle repositioning manoeuvre in the clinic, not with medication. Many patients walk out of the first visit with their vertigo completely resolved. For other types, treatment may include rehabilitation exercises, dietary changes, or short-term medication. The key is identifying which type you have.",
        hi: "हाँ — सबसे आम चक्कर (BPPV) क्लिनिक में एक हल्की मूवमेंट से ठीक होता है, दवा से नहीं। कई मरीज़ पहली विज़िट में ही ठीक होकर जाते हैं। बाक़ी प्रकारों में एक्सरसाइज़, खानपान बदलाव या थोड़े समय की दवा हो सकती है।",
      },
    },
    {
      q: {
        en: "How long until I'll feel better?",
        hi: "मुझे कितने समय में बेहतर महसूस होगा?",
      },
      a: {
        en: "Most patients with migraine or tension headaches notice meaningful improvement within 4–8 weeks of starting the right preventive treatment. Some patients need 2–3 medication adjustments before finding the best fit — this is normal. For BPPV, improvement is often immediate after the in-clinic manoeuvre.",
        hi: "ज़्यादातर माइग्रेन और तनाव सिरदर्द के मरीज़ 4–8 हफ़्ते में बेहतर महसूस करते हैं। कुछ को 2–3 दवाएँ बदलनी पड़ती हैं — यह सामान्य है। BPPV में क्लिनिक मूवमेंट के बाद अक्सर तुरंत सुधार होता है।",
      },
    },
    {
      q: {
        en: "Will I need to take medicines forever?",
        hi: "क्या दवाएँ हमेशा के लिए लेनी होंगी?",
      },
      a: {
        en: "Not necessarily. Preventive medicines are usually prescribed for 6–12 months, then gradually reduced to see if the headaches have settled. Many patients are able to stop after a period of good control. Dr. Kumar discusses this timeline with every patient so you're never left wondering.",
        hi: "ज़रूरी नहीं। रोकथाम की दवाएँ आमतौर पर 6–12 महीने दी जाती हैं, फिर धीरे-धीरे कम की जाती हैं। कई मरीज़ अच्छे नियंत्रण के बाद दवाएँ बंद कर सकते हैं। डॉ. कुमार इस समय-सीमा की बात हर मरीज़ से करते हैं।",
      },
    },
    {
      q: {
        en: "What will the consultation cost, and will I need expensive tests?",
        hi: "परामर्श में कितना खर्च होगा और क्या महँगी जाँचें लगेंगी?",
      },
      a: {
        en: "The first consultation is ₹1,000 and follow-ups are ₹500. Most headache patients do not need an MRI, CT scan, or expensive blood tests — the diagnosis is usually clinical. If a specific investigation is needed, Dr. Kumar will explain exactly why before ordering it. Treatment is usually affordable oral medication, adjusted over time.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। ज़्यादातर सिरदर्द मरीज़ों को MRI, CT या महँगे ख़ून की जाँच की ज़रूरत नहीं — पहचान आमतौर पर नैदानिक होती है। अगर कोई जाँच ज़रूरी हो, तो डॉ. कुमार पहले बताएँगे क्यों। इलाज आमतौर पर किफ़ायती मुँह से ली जाने वाली दवा होती है।",
      },
    },
  ],
};

export default data;
