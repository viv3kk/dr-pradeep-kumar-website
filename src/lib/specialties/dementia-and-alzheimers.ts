import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "dementia-and-alzheimers",
  name: { en: "Dementia & Alzheimer's", hi: "डिमेंशिया और अल्ज़ाइमर" },
  shortName: { en: "Dementia & Alzheimer's", hi: "डिमेंशिया और अल्ज़ाइमर" },
  color: "sky",
  icon: "🌙",
  tier: 1,

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: { en: "Dementia & Alzheimer's Clinic", hi: "डिमेंशिया और अल्ज़ाइमर क्लिनिक" },
    tagline: {
      en: "When someone you love starts forgetting the life you built together.",
      hi: "जब आपका कोई अपना उस जीवन को भूलने लगे जो आपने साथ मिलकर बनाया।",
    },
    supportLine: {
      en: "Watching a parent or partner change — repeating questions, losing names, slipping away in small ways — is one of the most painful things a family can face. You may be exhausted, grieving someone who is still here, and unsure where to turn. You are in the right place. Dementia cannot always be cured, but it can be diagnosed, slowed, and managed — and you do not have to carry this alone.",
      hi: "किसी माता-पिता या जीवनसाथी को बदलते देखना — सवाल दोहराना, नाम भूलना, छोटे-छोटे तरीक़ों से दूर जाना — एक परिवार के लिए सबसे दर्दनाक चीज़ों में से एक है। आप थके हुए हो सकते हैं, किसी ऐसे के लिए दुखी जो अभी भी यहाँ है, और समझ नहीं पा रहे कि कहाँ जाएँ। आप सही जगह पर हैं। डिमेंशिया हमेशा ठीक नहीं हो सकता, पर इसका निदान, इसे धीमा करना और संभालना हो सकता है — और यह बोझ आपको अकेले नहीं उठाना है।",
    },
    trustPoints: [
      { iconKey: "india", label: { en: "Trusted Care\nAcross India", hi: "भारत भर में\nभरोसेमंद देखभाल" } },
      { iconKey: "lotus", label: { en: "Personalised\nTreatment", hi: "वैयक्तिक\nइलाज" } },
      { iconKey: "brain-care", label: { en: "Expert Neurology\nCare", hi: "विशेषज्ञ\nन्यूरोलॉजी देखभाल" } },
      { iconKey: "compassion", label: { en: "Compassionate,\nPatient-First", hi: "सहानुभूतिपूर्ण,\nमरीज़-पहले" } },
    ],
  },

  /* ── Why This Matters ─────────────────────────────────────── */
  overview: {
    en: "Memory loss in an older parent is too often dismissed as 'just old age' — and that single assumption is why so many families reach help years later than they should. Dementia is not a normal part of ageing; it is a medical condition, and the changes it causes have real, identifiable causes. Why does an early diagnosis matter so much when there is no outright cure? Because some causes of memory loss are completely reversible, because treatment works far better when started early, because planning is easier while the person can still take part in it, and because families who understand what is happening cope so much better than those left guessing. This page is written for you — the family — to explain what is happening to your loved one, and how Dr. Kumar can help you both.",
    hi: "किसी बुज़ुर्ग माता-पिता में याददाश्त की कमी को अक्सर 'बस बुढ़ापा' कहकर टाल दिया जाता है — और यही एक धारणा है जिसके कारण कई परिवार वर्षों देर से मदद तक पहुँचते हैं। डिमेंशिया उम्र बढ़ने का सामान्य हिस्सा नहीं है; यह एक चिकित्सीय स्थिति है, और इसके बदलावों के वास्तविक, पहचाने जाने योग्य कारण होते हैं। जब कोई पक्का इलाज नहीं है तो जल्दी निदान इतना क्यों मायने रखता है? क्योंकि याददाश्त की कमी के कुछ कारण पूरी तरह प्रतिवर्ती होते हैं, क्योंकि इलाज जल्दी शुरू होने पर कहीं बेहतर काम करता है, क्योंकि योजना तब आसान होती है जब व्यक्ति ख़ुद उसमें शामिल हो सके, और क्योंकि जो परिवार समझते हैं कि क्या हो रहा है वे अनुमान लगाने वालों से कहीं बेहतर सँभलते हैं। यह पन्ना आपके लिए — परिवार के लिए — लिखा गया है।",
  },

  /* ── TOC with entity tags ─────────────────────────────────── */
  toc: [
    {
      label: { en: "Alzheimer's Disease", hi: "अल्ज़ाइमर रोग" },
      anchor: "alzheimers",
      entityTags: [
        { en: "Memory loss", hi: "याददाश्त की कमी" },
        { en: "Progressive dementia", hi: "बढ़ता डिमेंशिया" },
      ],
    },
    {
      label: { en: "Vascular Dementia", hi: "वैस्कुलर डिमेंशिया" },
      anchor: "vascular",
      entityTags: [
        { en: "Post-stroke dementia", hi: "स्ट्रोक-बाद डिमेंशिया" },
        { en: "Stepwise decline", hi: "चरणबद्ध गिरावट" },
      ],
    },
    {
      label: { en: "Frontotemporal Dementia", hi: "फ़्रंटोटेम्पोरल डिमेंशिया" },
      anchor: "ftd",
      entityTags: [
        { en: "Personality & behaviour change", hi: "व्यक्तित्व और व्यवहार बदलाव" },
        { en: "Language difficulty", hi: "भाषा कठिनाई" },
      ],
    },
    {
      label: { en: "Mild Cognitive Impairment", hi: "हल्की संज्ञानात्मक हानि (MCI)" },
      anchor: "mci",
      entityTags: [
        { en: "Early memory changes", hi: "शुरुआती याददाश्त बदलाव" },
        { en: "Pre-dementia stage", hi: "डिमेंशिया-पूर्व चरण" },
      ],
    },
  ],

  /* ── For Families & Caregivers — ELEVATED (Tier 1, Hindi-first) */
  caregiverSection: {
    en: "If you are caring for someone with dementia, this section is for you above all — because in this condition, you are often the one reading, deciding, and holding everything together. First, the thing no one says clearly enough: what you are feeling is normal. The grief of losing someone who is still alive, the guilt over your own frustration, the exhaustion that never quite lifts — none of it makes you a bad son, daughter, or partner. It makes you human, and it means you care.\n\nA few things genuinely help. **Step into their reality instead of correcting it.** Arguing about the date, or insisting a late relative has passed, only causes pain on both sides; meeting them where they are is kinder and calmer for everyone. **Keep the day predictable** — familiar routines, a calm environment, and simple choices reduce confusion and agitation far more than any reminder ever will. **Watch for sudden change.** A rapid worsening of confusion is often not the dementia itself but something treatable on top of it — an infection, dehydration, a new medicine, or pain — and it needs a prompt check.\n\nAnd please, hear this: you cannot pour from an empty cup. Caregiver burnout is real and dangerous, and looking after yourself is not selfish — it is part of caring for them. Accept help when it is offered, share the load with family, and tell Dr. Kumar honestly how you are coping. Supporting you is part of his job, not an afterthought.",
    hi: "अगर आप किसी डिमेंशिया वाले व्यक्ति की देखभाल कर रहे हैं, यह हिस्सा सबसे बढ़कर आपके लिए है — क्योंकि इस स्थिति में अक्सर आप ही पढ़ते, फ़ैसले लेते और सब कुछ सँभालते हैं। पहले, वह बात जो कोई साफ़ नहीं कहता: आप जो महसूस कर रहे हैं वह सामान्य है। किसी ऐसे को खोने का दुख जो अभी ज़िंदा है, अपनी झुंझलाहट पर अपराधबोध, वह थकान जो कभी पूरी तरह नहीं उतरती — इनमें से कुछ भी आपको बुरा बेटा, बेटी या साथी नहीं बनाता। यह आपको इंसान बनाता है।\n\nकुछ बातें सच में मदद करती हैं। **उन्हें सुधारने की बजाय उनकी दुनिया में क़दम रखें।** तारीख़ पर बहस करना, या यह ज़ोर देना कि कोई गुज़र चुका रिश्तेदार नहीं रहा, दोनों तरफ़ बस दर्द देता है; उन्हें वहीं मिलना जहाँ वे हैं, सबके लिए दयालु और शांत है। **दिन को पूर्वानुमेय रखें** — परिचित दिनचर्या, शांत माहौल और सरल विकल्प भ्रम और बेचैनी को किसी भी याद-दिलावे से कहीं ज़्यादा कम करते हैं। **अचानक बदलाव पर नज़र रखें।** भ्रम का तेज़ी से बिगड़ना अक्सर डिमेंशिया नहीं बल्कि उसके ऊपर कुछ इलाज-योग्य होता है — संक्रमण, पानी की कमी, नई दवा, या दर्द — और इसे तुरंत जाँच चाहिए।\n\nऔर कृपया यह सुनें: आप ख़ाली बर्तन से नहीं डाल सकते। देखभालकर्ता की थकान असली और ख़तरनाक है, और अपना ख़याल रखना स्वार्थ नहीं — यह उनकी देखभाल का हिस्सा है। मदद मिले तो स्वीकार करें, परिवार के साथ बोझ बाँटें, और डॉ. कुमार को ईमानदारी से बताएँ कि आप कैसे सँभाल रहे हैं।",
  },

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic 1: Alzheimer's Disease ────────────────────── */
    {
      slug: "alzheimers",
      name: { en: "Alzheimer's Disease", hi: "अल्ज़ाइमर रोग" },
      intro: {
        en: "The most common cause of dementia — and one where the earliest signs are quiet, and easy to mistake for ordinary forgetfulness.",
        hi: "डिमेंशिया का सबसे आम कारण — और एक ऐसा जहाँ सबसे शुरुआती संकेत शांत होते हैं, और सामान्य भुलक्कड़पन समझ लिए जाते हैं।",
      },
      couldThisBeYou: {
        en: [
          "Forgetting recently learned information — asking the same question again within minutes",
          "Misplacing things and being unable to retrace steps, sometimes accusing others of hiding them",
          "Struggling to find familiar words, or losing the thread mid-conversation",
          "Trouble with familiar tasks — handling money, following a recipe, or finding a known route",
          "Getting confused about time or place, or becoming disoriented in familiar surroundings",
          "Withdrawing from work, hobbies, or social life, with mood or personality changes",
        ],
        hi: [
          "हाल की सीखी जानकारी भूलना — कुछ ही मिनटों में वही सवाल दोबारा पूछना",
          "चीज़ें इधर-उधर रखकर ढूँढ न पाना, कभी दूसरों पर छुपाने का आरोप लगाना",
          "परिचित शब्द ढूँढने में संघर्ष, या बातचीत के बीच सिलसिला खो देना",
          "परिचित कामों में परेशानी — पैसे संभालना, नुस्ख़ा अपनाना, या जाना-पहचाना रास्ता ढूँढना",
          "समय या जगह को लेकर भ्रम, या परिचित माहौल में दिशा भूल जाना",
          "काम, शौक़ या सामाजिक जीवन से दूर होना, मनोदशा या व्यक्तित्व में बदलाव",
        ],
      },
      whatItFeelsLike: {
        en: "Alzheimer's rarely arrives with a single dramatic moment. It seeps in. At first it looks like ordinary forgetfulness — a missed appointment, a name on the tip of the tongue — but slowly the pattern reveals itself: it is recent memory that fades first, while old memories from decades ago stay vivid. The person may tell the same story twice in an hour, or search for a word that simply won't come. For families, the early stage is a confusing mix of 'maybe it's nothing' and a quiet, growing dread. The person themselves may sense something is wrong and cover for it, or may not be aware at all. Both are part of the illness, and neither is their fault.",
        hi: "अल्ज़ाइमर शायद ही किसी एक नाटकीय पल के साथ आता है। यह रिसता है। पहले यह सामान्य भुलक्कड़पन जैसा दिखता है — एक छूटी मुलाक़ात, ज़ुबान पर अटका नाम — पर धीरे-धीरे पैटर्न ख़ुद को दिखाता है: हाल की याददाश्त पहले मिटती है, जबकि दशकों पुरानी यादें स्पष्ट रहती हैं। व्यक्ति एक घंटे में वही कहानी दो बार बता सकता है, या ऐसा शब्द खोज सकता है जो आता ही नहीं। परिवार के लिए शुरुआती चरण 'शायद कुछ नहीं' और एक शांत, बढ़ते डर का भ्रमित मिश्रण होता है।",
      },
      whatsHappening: {
        en: "In Alzheimer's, abnormal proteins gradually build up in and around the brain's nerve cells, like a slow silting-up of a once free-flowing system. These deposits disrupt the connections that let brain cells communicate, and over time the cells are damaged and lost — beginning, crucially, in the regions that form new memories. That is why recent memory is hit first while older memories endure, and why the difficulty spreads, in time, to language, judgement, and daily tasks. It is a disease, not a character flaw or a choice — the person is not being difficult, lazy, or stubborn. Understanding this changes everything about how a family responds.",
        hi: "अल्ज़ाइमर में असामान्य प्रोटीन धीरे-धीरे दिमाग़ की तंत्रिका कोशिकाओं में और उनके आसपास जमा होते हैं, जैसे किसी कभी मुक्त बहती व्यवस्था का धीमा गाद भरना। ये जमाव उन संबंधों को बाधित करते हैं जो दिमाग़ी कोशिकाओं को आपस में बात करने देते हैं, और समय के साथ कोशिकाएँ क्षतिग्रस्त और नष्ट होती हैं — ख़ास तौर पर उन क्षेत्रों से शुरू होकर जो नई यादें बनाते हैं। इसीलिए हाल की याददाश्त पहले प्रभावित होती है जबकि पुरानी यादें टिकी रहती हैं। यह एक बीमारी है, चरित्र दोष या चुनाव नहीं — व्यक्ति जान-बूझकर मुश्किल, आलसी या ज़िद्दी नहीं हो रहा।",
      },
      redFlags: {
        en: [
          "A sudden, rapid worsening of confusion over hours or days — often a treatable problem, not the dementia (seek care promptly)",
          "Memory loss with fever, severe headache, or a stiff neck",
          "New weakness, numbness, slurred speech, or a fall with the confusion",
          "Seeing or hearing things that aren't there, or sudden severe agitation",
          "Memory loss in someone relatively young (under about 60)",
        ],
        hi: [
          "घंटों या दिनों में भ्रम का अचानक, तेज़ बिगड़ना — अक्सर इलाज-योग्य समस्या, डिमेंशिया नहीं (तुरंत देखभाल लें)",
          "बुख़ार, तेज़ सिरदर्द, या गर्दन अकड़न के साथ याददाश्त की कमी",
          "भ्रम के साथ नई कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, या गिरना",
          "ऐसी चीज़ें देखना या सुनना जो वहाँ नहीं, या अचानक तेज़ बेचैनी",
          "अपेक्षाकृत युवा व्यक्ति (लगभग 60 से कम) में याददाश्त की कमी",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first and most important task is to make the right diagnosis — and that begins by ruling out the causes of memory loss that are reversible. Thyroid problems, vitamin B12 deficiency, depression, certain medications, and other conditions can all mimic dementia and improve dramatically once treated, so he checks for them with a careful history, cognitive testing (such as the MMSE or MoCA), blood tests, and brain imaging. Once Alzheimer's is confirmed, treatment has several arms. Medications such as cholinesterase inhibitors and memantine can ease symptoms and help maintain function for a meaningful period. Just as important is managing the whole picture — sleep, mood, nutrition, and the behavioural changes that families find hardest — and building a structured plan for the road ahead. Dr. Kumar treats the family as part of the team, because in dementia, supporting the carer is supporting the patient. The honest goal is not a cure, but more good time, more dignity, and far less fear.",
        hi: "डॉ. कुमार का पहला और सबसे ज़रूरी काम सही निदान करना है — और यह याददाश्त की कमी के उन कारणों को नकारने से शुरू होता है जो प्रतिवर्ती हैं। थायरॉइड की समस्या, विटामिन B12 की कमी, अवसाद, कुछ दवाएँ, और अन्य स्थितियाँ सभी डिमेंशिया की नक़ल कर सकती हैं और इलाज होने पर नाटकीय रूप से सुधर सकती हैं, इसलिए वे ध्यान से ली हिस्ट्री, संज्ञानात्मक परीक्षण (जैसे MMSE या MoCA), रक्त परीक्षण और दिमाग़ी इमेजिंग से इनकी जाँच करते हैं। एक बार अल्ज़ाइमर पुष्ट हो जाए, इलाज के कई हिस्से होते हैं। कोलिनेस्टरेज़ इनहिबिटर और मेमेंटाइन जैसी दवाएँ लक्षण कम कर सकती हैं और एक सार्थक अवधि तक कार्य बनाए रखने में मदद कर सकती हैं। उतना ही ज़रूरी है पूरी तस्वीर संभालना — नींद, मनोदशा, पोषण, और वे व्यवहार बदलाव जो परिवारों को सबसे कठिन लगते हैं। डॉ. कुमार परिवार को टीम का हिस्सा मानते हैं। ईमानदार लक्ष्य इलाज नहीं, बल्कि ज़्यादा अच्छा समय, ज़्यादा गरिमा, और कहीं कम डर है।",
      },
    },

    /* ── Topic 2: Vascular Dementia ──────────────────────── */
    {
      slug: "vascular",
      name: { en: "Vascular Dementia", hi: "वैस्कुलर डिमेंशिया" },
      intro: {
        en: "Dementia caused by problems with the brain's blood supply — and the one type where treating the cause can genuinely slow it down.",
        hi: "दिमाग़ की रक्त आपूर्ति की समस्याओं से होने वाला डिमेंशिया — और एकमात्र प्रकार जहाँ कारण का इलाज इसे सच में धीमा कर सकता है।",
      },
      couldThisBeYou: {
        en: [
          "Memory or thinking that worsened noticeably after a stroke or 'mini-stroke'",
          "A decline that happens in steps — stable for a while, then a sudden drop — rather than smoothly",
          "Slowed thinking, poor concentration, and difficulty planning, more than pure memory loss",
          "Problems alongside high blood pressure, diabetes, high cholesterol, or heart disease",
          "Changes in walking, balance, or bladder control together with the thinking changes",
          "Low mood, apathy, or tearfulness appearing with the cognitive decline",
        ],
        hi: [
          "याददाश्त या सोच जो किसी स्ट्रोक या 'मिनी-स्ट्रोक' के बाद साफ़ तौर पर बिगड़ी",
          "ऐसी गिरावट जो चरणों में होती है — कुछ समय स्थिर, फिर अचानक गिरावट — न कि सहजता से",
          "धीमी सोच, कम एकाग्रता, और योजना बनाने में कठिनाई, शुद्ध याददाश्त की कमी से ज़्यादा",
          "उच्च रक्तचाप, मधुमेह, कोलेस्ट्रॉल, या हृदय रोग के साथ समस्याएँ",
          "सोच के बदलावों के साथ चलने, संतुलन, या मूत्राशय नियंत्रण में बदलाव",
          "संज्ञानात्मक गिरावट के साथ उदासी, उदासीनता, या रुलाई",
        ],
      },
      whatItFeelsLike: {
        en: "Vascular dementia often feels different from Alzheimer's to the families who watch it. Rather than a slow, even fading, it tends to move in steps: a person may be stable for months, then drop noticeably after a vascular event, then plateau again. Thinking becomes slow and effortful, planning and concentration suffer, and the person may seem to lose their drive. Because it is so closely tied to the health of the blood vessels, it frequently travels with the conditions that damage them — high blood pressure, diabetes, smoking — and that connection is also where the hope lies.",
        hi: "वैस्कुलर डिमेंशिया अक्सर इसे देखने वाले परिवारों को अल्ज़ाइमर से अलग लगता है। एक धीमे, समान फीकेपन के बजाय, यह चरणों में बढ़ता है: व्यक्ति महीनों स्थिर रह सकता है, फिर किसी संवहनी घटना के बाद साफ़ गिर सकता है, फिर फिर से ठहर सकता है। सोच धीमी और मेहनती हो जाती है, योजना और एकाग्रता प्रभावित होती है, और व्यक्ति अपनी प्रेरणा खोता लग सकता है। चूँकि यह रक्त-नलिकाओं की सेहत से इतना जुड़ा है, यह अक्सर उन्हीं स्थितियों के साथ चलता है जो उन्हें नुकसान पहुँचाती हैं — और वही जुड़ाव आशा भी देता है।",
      },
      whatsHappening: {
        en: "Vascular dementia is caused by reduced blood flow to the brain — whether from a major stroke, a series of small, sometimes unnoticed 'silent' strokes, or the gradual narrowing and damage of small blood vessels over years. Starved of a steady blood supply, areas of brain tissue are injured, and the thinking functions they support falter. The stepwise pattern reflects each new vascular injury. The crucial point is this: the same risk factors that cause heart attacks and strokes — high blood pressure, diabetes, high cholesterol, smoking — drive vascular dementia too, which means that controlling them can slow or even prevent further decline. This is the one dementia where treating the cause directly changes the course.",
        hi: "वैस्कुलर डिमेंशिया दिमाग़ में कम रक्त प्रवाह से होता है — चाहे किसी बड़े स्ट्रोक से, छोटे, कभी अनदेखे 'मूक' स्ट्रोकों की श्रृंखला से, या वर्षों में छोटी रक्त-नलिकाओं के धीरे-धीरे संकुचन और क्षति से। स्थिर रक्त आपूर्ति से वंचित, दिमाग़ी ऊतक के क्षेत्र घायल होते हैं, और जिन सोच कार्यों को वे सहारा देते हैं वे लड़खड़ाते हैं। चरणबद्ध पैटर्न हर नई संवहनी चोट को दर्शाता है। अहम बात यह है: वही जोखिम कारक जो दिल के दौरे और स्ट्रोक पैदा करते हैं — उच्च रक्तचाप, मधुमेह, कोलेस्ट्रॉल, धूम्रपान — वैस्कुलर डिमेंशिया भी चलाते हैं, यानी इन्हें नियंत्रित करना आगे की गिरावट धीमी या रोक भी सकता है।",
      },
      redFlags: {
        en: [
          "Sudden weakness, numbness, slurred speech, or facial droop — treat as a stroke and call 108",
          "A sharp, sudden worsening of thinking or alertness",
          "A severe new headache with the cognitive change",
          "Repeated falls or rapid changes in walking and balance",
          "Blood pressure or sugar that is very high or wildly uncontrolled",
        ],
        hi: [
          "अचानक कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, या चेहरा लटकना — स्ट्रोक मानें और 108 बुलाएँ",
          "सोच या सतर्कता का तेज़, अचानक बिगड़ना",
          "संज्ञानात्मक बदलाव के साथ तेज़ नया सिरदर्द",
          "बार-बार गिरना या चलने और संतुलन में तेज़ बदलाव",
          "रक्तचाप या शुगर जो बहुत ज़्यादा या बेक़ाबू हो",
        ],
      },
      howDrKumarTreats: {
        en: "Here, more than in any other dementia, treatment can change the trajectory — and that is the message Dr. Kumar wants families to hear. After confirming the diagnosis with cognitive assessment and brain imaging that shows the vascular damage, his focus turns aggressively to the risk factors driving it: tightly controlling blood pressure, managing diabetes and cholesterol, prescribing blood thinners where appropriate, and supporting the person to stop smoking. Bringing these under control is the single most effective way to slow further decline. Alongside this, he treats the cognitive symptoms, manages mood and the common overlap with depression, and coordinates physiotherapy and rehabilitation where strokes have affected movement. Because vascular dementia and stroke share the same roots, every step also protects the brain against the next event. The goal is to hold the line — to keep the person as stable, safe, and well as possible for as long as possible.",
        hi: "यहाँ, किसी भी अन्य डिमेंशिया से ज़्यादा, इलाज रास्ता बदल सकता है — और यही संदेश डॉ. कुमार परिवारों को सुनाना चाहते हैं। संज्ञानात्मक आकलन और संवहनी क्षति दिखाने वाली दिमाग़ी इमेजिंग से निदान पुष्ट करने के बाद, उनका ध्यान आक्रामक रूप से इसे चलाने वाले जोखिम कारकों की ओर जाता है: रक्तचाप कसकर नियंत्रित करना, मधुमेह और कोलेस्ट्रॉल संभालना, ज़रूरत पर खून पतला करने की दवाएँ देना, और व्यक्ति को धूम्रपान छोड़ने में सहारा देना। इन्हें नियंत्रण में लाना आगे की गिरावट धीमा करने का सबसे असरदार तरीक़ा है। साथ ही वे संज्ञानात्मक लक्षणों का इलाज करते हैं, मनोदशा और अवसाद के सामान्य ओवरलैप को संभालते हैं, और जहाँ स्ट्रोक ने हलचल प्रभावित की है वहाँ फिज़ियोथेरेपी का तालमेल करते हैं।",
      },
    },

    /* ── Topic 3: Frontotemporal Dementia ────────────────── */
    {
      slug: "ftd",
      name: { en: "Frontotemporal Dementia", hi: "फ़्रंटोटेम्पोरल डिमेंशिया" },
      intro: {
        en: "A dementia that often strikes younger, and changes personality and behaviour before it ever touches memory — which is exactly why it is so often misunderstood.",
        hi: "एक डिमेंशिया जो अक्सर कम उम्र में आता है, और याददाश्त छूने से पहले व्यक्तित्व व व्यवहार बदल देता है — इसीलिए इसे अक्सर ग़लत समझा जाता है।",
      },
      couldThisBeYou: {
        en: [
          "Marked changes in personality or behaviour in someone in their 50s or early 60s",
          "Loss of social awareness — saying inappropriate things, acting impulsively, or losing tact",
          "Apathy and loss of motivation, mistaken for depression or laziness",
          "Changes in eating — craving sweets, overeating, or eating non-food items",
          "Difficulty with language — struggling to find words or to understand them — with memory still fairly intact early on",
          "A loss of empathy or warmth that feels 'out of character' to the family",
        ],
        hi: [
          "50 के दशक या शुरुआती 60 के व्यक्ति में व्यक्तित्व या व्यवहार में साफ़ बदलाव",
          "सामाजिक समझ का खोना — अनुचित बातें कहना, आवेग में काम करना, या शिष्टता खोना",
          "उदासीनता और प्रेरणा की कमी, अवसाद या आलस्य समझ ली जाती है",
          "खाने में बदलाव — मिठाई की लालसा, ज़्यादा खाना, या न खाने योग्य चीज़ें खाना",
          "भाषा में कठिनाई — शब्द ढूँढने या समझने में संघर्ष — शुरू में याददाश्त काफ़ी हद तक बची रहना",
          "सहानुभूति या गर्मजोशी का खोना जो परिवार को 'स्वभाव के विरुद्ध' लगे",
        ],
      },
      whatItFeelsLike: {
        en: "Frontotemporal dementia is one of the most painful conditions for families to make sense of, because the person can seem, at first, not ill but changed — colder, more impulsive, strangely indifferent, or socially out of step. Memory may be relatively spared early on, so the obvious 'dementia' label doesn't fit, and the changes are heartbreakingly easy to misread as selfishness, a mid-life crisis, depression, or a marriage going wrong. It often begins younger than Alzheimer's, striking people still working and raising families. Knowing that this is a disease of specific brain regions — not a change of heart or character — is often the first relief, however hard, that a family receives.",
        hi: "फ़्रंटोटेम्पोरल डिमेंशिया परिवारों के लिए समझने में सबसे दर्दनाक स्थितियों में से एक है, क्योंकि व्यक्ति पहले बीमार नहीं बल्कि बदला हुआ लग सकता है — ज़्यादा ठंडा, ज़्यादा आवेगी, अजीब तरह उदासीन, या सामाजिक रूप से बेमेल। शुरू में याददाश्त अपेक्षाकृत बची रह सकती है, इसलिए साफ़ 'डिमेंशिया' का ठप्पा नहीं बैठता, और बदलावों को स्वार्थ, मध्य-जीवन संकट, अवसाद, या बिगड़ती शादी समझ लेना दिल तोड़ने वाला आसान है। यह अक्सर अल्ज़ाइमर से कम उम्र में शुरू होता है।",
      },
      whatsHappening: {
        en: "Frontotemporal dementia is caused by damage concentrated in the frontal and temporal lobes — the front and sides of the brain. These are precisely the regions that govern personality, judgement, social behaviour, motivation, and language. So while the memory-forming areas may be relatively untouched at first, the very functions that make someone seem 'themselves' are affected early. That is why the disease shows up as changed behaviour and lost words rather than forgetfulness. It is a physical disease of brain tissue, as real and involuntary as any other — the hurtful, out-of-character actions are symptoms, not choices, and recognising that is vital for everyone around them.",
        hi: "फ़्रंटोटेम्पोरल डिमेंशिया फ़्रंटल और टेम्पोरल लोब — दिमाग़ के आगे और किनारों — में केंद्रित क्षति से होता है। ये ठीक वही क्षेत्र हैं जो व्यक्तित्व, निर्णय, सामाजिक व्यवहार, प्रेरणा और भाषा को नियंत्रित करते हैं। इसलिए जबकि याददाश्त बनाने वाले क्षेत्र शुरू में अपेक्षाकृत अछूते रह सकते हैं, वे कार्य जो किसी को 'वह ख़ुद' बनाते हैं जल्दी प्रभावित होते हैं। इसीलिए बीमारी भुलक्कड़पन के बजाय बदले व्यवहार और खोए शब्दों के रूप में दिखती है। यह दिमाग़ी ऊतक की एक शारीरिक बीमारी है — दुखदायी, स्वभाव-विरुद्ध काम लक्षण हैं, चुनाव नहीं।",
      },
      redFlags: {
        en: [
          "Rapidly escalating behaviour that puts the person or others at risk",
          "New weakness, muscle wasting, twitching, or difficulty swallowing (a related overlap condition)",
          "Sudden confusion on top of the usual pattern — check for a treatable cause",
          "Severe depression or any talk of self-harm",
          "Behavioural change with a fever or signs of another acute illness",
        ],
        hi: [
          "तेज़ी से बढ़ता व्यवहार जो व्यक्ति या दूसरों को ख़तरे में डाले",
          "नई कमज़ोरी, मांसपेशी क्षय, फड़कन, या निगलने में कठिनाई (एक संबंधित ओवरलैप स्थिति)",
          "सामान्य पैटर्न के ऊपर अचानक भ्रम — इलाज-योग्य कारण की जाँच करें",
          "गंभीर अवसाद या आत्म-हानि की कोई बात",
          "बुख़ार या किसी अन्य तीव्र बीमारी के संकेतों के साथ व्यवहार बदलाव",
        ],
      },
      howDrKumarTreats: {
        en: "Because frontotemporal dementia is so easily mistaken for a psychiatric problem or a personal failing, the single most valuable thing Dr. Kumar offers is an accurate diagnosis — distinguishing it from depression, bipolar disorder, Alzheimer's, and other conditions through careful assessment, cognitive testing, and brain imaging. That clarity alone transforms how a family understands their loved one's behaviour. There is no cure, and notably the medicines used for Alzheimer's are not the answer here; instead, treatment focuses on managing the specific symptoms — using appropriate medication for distressing behaviours, agitation, or mood, and avoiding drugs that can make things worse. Just as important is practical guidance for the family: strategies to handle difficult behaviours with less conflict, structuring the environment for safety, and planning ahead. Dr. Kumar supports the whole family through a diagnosis that is uniquely hard to carry, and connects them with the help they need.",
        hi: "चूँकि फ़्रंटोटेम्पोरल डिमेंशिया इतनी आसानी से मानसिक समस्या या व्यक्तिगत कमी समझ लिया जाता है, डॉ. कुमार जो सबसे मूल्यवान चीज़ देते हैं वह है सही निदान — सावधान आकलन, संज्ञानात्मक परीक्षण और दिमाग़ी इमेजिंग के ज़रिए इसे अवसाद, बाइपोलर, अल्ज़ाइमर और अन्य स्थितियों से अलग करना। वह स्पष्टता ही बदल देती है कि परिवार अपने प्रियजन के व्यवहार को कैसे समझता है। कोई इलाज नहीं, और ख़ास तौर पर अल्ज़ाइमर की दवाएँ यहाँ जवाब नहीं हैं; बल्कि इलाज विशिष्ट लक्षणों को संभालने पर केंद्रित होता है — परेशान करने वाले व्यवहार, बेचैनी या मनोदशा के लिए उपयुक्त दवा, और ऐसी दवाओं से बचना जो चीज़ें बिगाड़ें। उतना ही ज़रूरी है परिवार के लिए व्यावहारिक मार्गदर्शन।",
      },
    },

    /* ── Topic 4: Mild Cognitive Impairment ──────────────── */
    {
      slug: "mci",
      name: { en: "Mild Cognitive Impairment (MCI)", hi: "हल्की संज्ञानात्मक हानि (MCI)" },
      intro: {
        en: "The grey zone between normal ageing and dementia — and the most valuable moment of all to be seen, because this is where action makes the biggest difference.",
        hi: "सामान्य उम्र बढ़ने और डिमेंशिया के बीच का धूसर क्षेत्र — और दिखाने का सबसे मूल्यवान पल, क्योंकि यहीं कार्रवाई सबसे बड़ा फ़र्क़ डालती है।",
      },
      couldThisBeYou: {
        en: [
          "Memory or thinking that is clearly more forgetful than before, but daily life still mostly manages",
          "Noticing the slips yourself, or having family gently point them out",
          "Forgetting appointments or conversations more often than peers of the same age",
          "Taking longer over tasks, or losing your thread, without being unable to do them",
          "Worry about whether this is the start of dementia — or 'just getting older'",
          "Changes that are real and measurable, but not yet interfering seriously with independence",
        ],
        hi: [
          "याददाश्त या सोच जो पहले से साफ़ तौर पर ज़्यादा भुलक्कड़, पर रोज़मर्रा अब भी ज़्यादातर सँभल जाता है",
          "ख़ुद चूक नोटिस करना, या परिवार का धीरे से इशारा करना",
          "मुलाक़ातें या बातचीत समान उम्र के साथियों से ज़्यादा बार भूलना",
          "कामों में ज़्यादा समय लगना, या सिलसिला खोना, बिना उन्हें करने में असमर्थ हुए",
          "चिंता कि यह डिमेंशिया की शुरुआत है — या 'बस उम्र बढ़ना'",
          "ऐसे बदलाव जो वास्तविक और मापने योग्य हैं, पर अभी स्वतंत्रता में गंभीर बाधा नहीं डाल रहे",
        ],
      },
      whatItFeelsLike: {
        en: "Mild cognitive impairment lives in an anxious in-between. The changes are real enough to notice — and to worry about — but not severe enough to take over daily life. Many people feel a private fear that this is the first step toward dementia, and that fear can be as heavy as the symptoms. The truth is more hopeful and more nuanced: MCI is not dementia, and it does not always progress to it. Some people stay stable for years, some improve when a reversible cause is found, and some do go on to develop dementia. Precisely because the path is not yet fixed, this is the moment when understanding what is happening matters most.",
        hi: "हल्की संज्ञानात्मक हानि एक चिंतित बीच की स्थिति में रहती है। बदलाव नोटिस करने — और चिंता करने — लायक़ काफ़ी वास्तविक हैं, पर रोज़मर्रा पर हावी होने लायक़ गंभीर नहीं। कई लोग एक निजी डर महसूस करते हैं कि यह डिमेंशिया की ओर पहला क़दम है, और वह डर लक्षणों जितना भारी हो सकता है। सच ज़्यादा आशावान और सूक्ष्म है: MCI डिमेंशिया नहीं है, और यह हमेशा उस तक नहीं बढ़ता। कुछ लोग वर्षों स्थिर रहते हैं, कुछ तब सुधरते हैं जब कोई प्रतिवर्ती कारण मिले। ठीक इसीलिए कि रास्ता अभी तय नहीं है, यही वह पल है जब समझना सबसे ज़्यादा मायने रखता है।",
      },
      whatsHappening: {
        en: "In mild cognitive impairment, there is a measurable decline in memory or thinking that is greater than expected for a person's age, but not yet enough to be called dementia or to rob them of independence. Think of it as an early warning light rather than a diagnosis of engine failure. Sometimes it is driven by the very same reversible factors that mimic dementia — poor sleep, depression, thyroid or vitamin problems, medication effects — which can be corrected. Sometimes it is the earliest stage of a condition like Alzheimer's. Identifying which it is, and tackling everything modifiable, is exactly why being assessed at this stage is so worthwhile.",
        hi: "हल्की संज्ञानात्मक हानि में याददाश्त या सोच में एक मापने योग्य गिरावट होती है जो व्यक्ति की उम्र के लिए अपेक्षित से ज़्यादा है, पर अभी इतनी नहीं कि इसे डिमेंशिया कहा जाए या स्वतंत्रता छीन ले। इसे इंजन फ़ेल होने के निदान के बजाय एक शुरुआती चेतावनी रोशनी समझें। कभी यह उन्हीं प्रतिवर्ती कारकों से चलता है जो डिमेंशिया की नक़ल करते हैं — कम नींद, अवसाद, थायरॉइड या विटामिन समस्याएँ, दवा प्रभाव — जिन्हें ठीक किया जा सकता है। कभी यह अल्ज़ाइमर जैसी स्थिति का सबसे शुरुआती चरण होता है। यह पहचानना कि कौन-सा है, और हर बदले जा सकने वाले को संभालना, इसीलिए इस चरण में जाँच इतनी सार्थक है।",
      },
      redFlags: {
        en: [
          "A faster decline that begins to interfere with managing money, medicines, or daily independence",
          "New confusion, disorientation, or getting lost in familiar places",
          "Mood changes, withdrawal, or loss of interest suggesting depression",
          "Memory change with any new physical symptom — weakness, tremor, or unsteadiness",
          "Rapid worsening over weeks rather than months",
        ],
        hi: [
          "तेज़ गिरावट जो पैसे, दवाएँ, या रोज़मर्रा की स्वतंत्रता संभालने में बाधा डालने लगे",
          "नया भ्रम, दिशाहीनता, या परिचित जगहों में खो जाना",
          "मनोदशा बदलाव, अलगाव, या रुचि की कमी जो अवसाद का सुझाव दे",
          "किसी नए शारीरिक लक्षण के साथ याददाश्त बदलाव — कमज़ोरी, कंपन, या अस्थिरता",
          "महीनों के बजाय हफ़्तों में तेज़ी से बिगड़ना",
        ],
      },
      howDrKumarTreats: {
        en: "MCI is, in many ways, the most rewarding stage to be seen, because it is where careful action makes the greatest difference. Dr. Kumar's first step is a thorough assessment — cognitive testing to map exactly what is and isn't affected, plus blood tests and, where needed, imaging — to hunt down every reversible contributor. Correcting a vitamin deficiency, treating depression or a thyroid problem, reviewing medications, and improving sleep can genuinely turn things around. Beyond that, he focuses on the factors known to protect the brain: tight control of blood pressure, diabetes and cholesterol, regular physical exercise, mental and social engagement, and good sleep — the very things that can slow or reduce progression to dementia. Rather than simply waiting to see what happens, he sets up a plan to monitor over time and to act early if there is any change. For many families, leaving with a clear picture and a real plan replaces months of fear with something far better: a sense of control.",
        hi: "MCI कई मायनों में दिखाने का सबसे फलदायी चरण है, क्योंकि यहीं सावधान कार्रवाई सबसे बड़ा फ़र्क़ डालती है। डॉ. कुमार का पहला क़दम एक गहन आकलन है — संज्ञानात्मक परीक्षण यह मानचित्रित करने के लिए कि ठीक-ठीक क्या प्रभावित है और क्या नहीं, साथ ही रक्त परीक्षण और ज़रूरत पर इमेजिंग — हर प्रतिवर्ती योगदानकर्ता को ढूँढने के लिए। विटामिन की कमी ठीक करना, अवसाद या थायरॉइड समस्या का इलाज, दवाओं की समीक्षा, और नींद सुधारना सच में चीज़ें पलट सकते हैं। उसके अलावा, वे दिमाग़ की रक्षा करने वाले कारकों पर ध्यान देते हैं: रक्तचाप, मधुमेह और कोलेस्ट्रॉल का कसा नियंत्रण, नियमित व्यायाम, मानसिक और सामाजिक जुड़ाव, और अच्छी नींद। बस देखने के बजाय, वे समय के साथ निगरानी और किसी बदलाव पर जल्दी कार्रवाई की योजना बनाते हैं।",
      },
    },
  ],

  /* ── Myths & Facts (Hindi-first) ─────────────────────────── */
  myths: [
    {
      myth: { en: "Memory loss is just a normal part of old age — every elderly person becomes forgetful.", hi: "याददाश्त की कमी बस बुढ़ापे का सामान्य हिस्सा है — हर बुज़ुर्ग भुलक्कड़ हो जाता है।" },
      fact: {
        en: "Mild slowing of memory can come with age, but significant memory loss that disrupts daily life is not normal ageing — it is a medical condition that deserves evaluation. Treating it as 'just old age' is the single biggest reason families lose years before seeking help, and sometimes miss a cause that is completely reversible.",
        hi: "उम्र के साथ याददाश्त का हल्का धीमापन आ सकता है, पर रोज़मर्रा बिगाड़ने वाली बड़ी याददाश्त की कमी सामान्य उम्र बढ़ना नहीं — यह एक चिकित्सीय स्थिति है जिसे जाँच चाहिए। इसे 'बस बुढ़ापा' मानना ही सबसे बड़ा कारण है जिससे परिवार मदद से पहले साल गँवाते हैं, और कभी पूरी तरह प्रतिवर्ती कारण चूक जाते हैं।",
      },
    },
    {
      myth: { en: "If there's no cure for dementia, there's no point seeing a doctor.", hi: "अगर डिमेंशिया का इलाज नहीं है, तो डॉक्टर को दिखाने का कोई फ़ायदा नहीं।" },
      fact: {
        en: "There is a great deal of point. Some causes of memory loss are completely reversible and only found by testing. Even in true dementia, medication can ease symptoms, treatment slows decline, and early planning, support, and managing behaviour transform quality of life for both the patient and the family. A diagnosis is the start of help, not the end of hope.",
        hi: "बहुत फ़ायदा है। याददाश्त की कमी के कुछ कारण पूरी तरह प्रतिवर्ती होते हैं और केवल जाँच से मिलते हैं। सच्चे डिमेंशिया में भी, दवा लक्षण कम कर सकती है, इलाज गिरावट धीमी करता है, और जल्दी योजना, सहारा व व्यवहार संभालना मरीज़ और परिवार दोनों के जीवन की गुणवत्ता बदल देते हैं। निदान मदद की शुरुआत है, उम्मीद का अंत नहीं।",
      },
    },
    {
      myth: { en: "They are doing it on purpose — being stubborn, lazy, or seeking attention.", hi: "वे जान-बूझकर कर रहे हैं — ज़िद्दी, आलसी, या ध्यान खींच रहे हैं।" },
      fact: {
        en: "The forgetting, the repeating, the difficult behaviour — none of it is deliberate. It is caused by physical damage to the brain, as real and involuntary as a fever or a fracture. Blaming the person, or arguing with them, only causes distress on both sides. Understanding that it is the illness speaking, not the person choosing, is the kindest and most useful shift a family can make.",
        hi: "भूलना, दोहराना, मुश्किल व्यवहार — इनमें से कुछ भी जान-बूझकर नहीं। यह दिमाग़ की शारीरिक क्षति से होता है, बुख़ार या फ़्रैक्चर जितना वास्तविक और अनैच्छिक। व्यक्ति को दोष देना, या उनसे बहस करना, बस दोनों तरफ़ तकलीफ़ देता है। यह समझना कि यह बीमारी बोल रही है, व्यक्ति चुन नहीं रहा, सबसे दयालु और उपयोगी बदलाव है जो परिवार कर सकता है।",
      },
    },
    {
      myth: { en: "Dementia is a kind of madness or mental illness, and it brings shame on the family.", hi: "डिमेंशिया एक तरह का पागलपन या मानसिक रोग है, और परिवार पर शर्म लाता है।" },
      fact: {
        en: "Dementia is a disease of the brain, not 'madness', and there is no shame in it whatsoever. Hiding the diagnosis to avoid gossip only isolates the family and delays help that genuinely makes life better. Caring openly for a parent or partner with dementia is not a source of shame — it is one of the most loving and dignified things a family ever does.",
        hi: "डिमेंशिया दिमाग़ की बीमारी है, 'पागलपन' नहीं, और इसमें कोई शर्म नहीं। गपशप से बचने के लिए निदान छुपाना बस परिवार को अलग करता है और उस मदद में देरी करता है जो सच में जीवन बेहतर बनाती है। डिमेंशिया वाले माता-पिता या साथी की खुलकर देखभाल करना शर्म नहीं — यह सबसे प्रेमपूर्ण और गरिमामय कामों में से एक है।",
      },
    },
    {
      myth: { en: "Nothing in our control affects dementia — it's purely fate or genes.", hi: "हमारे नियंत्रण में कुछ भी डिमेंशिया को प्रभावित नहीं करता — यह बस भाग्य या जीन है।" },
      fact: {
        en: "Much is in our hands. Controlling blood pressure, diabetes and cholesterol, staying physically active, keeping the mind and social life engaged, treating hearing loss, sleeping well, and not smoking all measurably lower the risk and can slow progression — especially in vascular dementia. Dementia is not simply destiny; how we live genuinely shapes the brain's future.",
        hi: "बहुत कुछ हमारे हाथ में है। रक्तचाप, मधुमेह और कोलेस्ट्रॉल नियंत्रित करना, शारीरिक रूप से सक्रिय रहना, मन और सामाजिक जीवन को व्यस्त रखना, सुनवाई की हानि का इलाज, अच्छी नींद, और धूम्रपान न करना — सब मापने योग्य रूप से जोखिम कम करते हैं और गिरावट धीमी कर सकते हैं, ख़ासकर वैस्कुलर डिमेंशिया में। डिमेंशिया बस भाग्य नहीं; हम कैसे जीते हैं यह सच में दिमाग़ का भविष्य आकार देता है।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you're bringing a parent or loved one to see Dr. Kumar for memory concerns, here's what to expect — and how to prepare.\n\n**The family's account is essential.** People with memory problems often cannot give a full or accurate history, so the observations of those who live with them are the most important information of all. Come ready to describe what you've noticed, when it began, and how it has changed. It helps to bring a written timeline.\n\n**A detailed history and cognitive testing.** Dr. Kumar takes a careful history from both the patient and the family, then performs structured cognitive screening (such as the MMSE or MoCA) — simple pen-and-paper tests of memory, attention, and thinking that map out exactly what is affected. None of it is distressing.\n\n**A search for reversible causes.** Blood tests (including thyroid and vitamin B12), a review of all current medicines, and brain imaging are used to find treatable contributors and to identify the type of dementia. This is the step that can change everything.\n\n**You leave with clarity and a plan.** By the end, you'll understand what is most likely going on, whether anything reversible was found, what treatment can help, what to expect, and — crucially — practical guidance for daily care and a follow-up plan.\n\n**What to bring:** a written timeline of the changes, all current medicines, any previous reports or scans, and ideally the family member who knows the day-to-day situation best.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आप किसी माता-पिता या प्रियजन को याददाश्त की चिंता के लिए डॉ. कुमार के पास ला रहे हैं, तो जानिए क्या होगा — और कैसे तैयारी करें।\n\n**परिवार का विवरण ज़रूरी है।** याददाश्त समस्या वाले लोग अक्सर पूरी या सही हिस्ट्री नहीं दे पाते, इसलिए उनके साथ रहने वालों की टिप्पणियाँ सबसे महत्वपूर्ण जानकारी होती हैं। आपने क्या नोटिस किया, कब शुरू हुआ, और कैसे बदला — यह बताने के लिए तैयार आएँ। एक लिखित समयरेखा लाना मददगार है।\n\n**विस्तृत हिस्ट्री और संज्ञानात्मक परीक्षण।** डॉ. कुमार मरीज़ और परिवार दोनों से ध्यान से हिस्ट्री लेते हैं, फिर संरचित संज्ञानात्मक स्क्रीनिंग (जैसे MMSE या MoCA) करते हैं — याददाश्त, ध्यान और सोच के सरल काग़ज़-कलम परीक्षण।\n\n**प्रतिवर्ती कारणों की खोज।** रक्त परीक्षण (थायरॉइड और विटामिन B12 सहित), सभी मौजूदा दवाओं की समीक्षा, और दिमाग़ी इमेजिंग इलाज-योग्य योगदानकर्ता ढूँढने और डिमेंशिया का प्रकार पहचानने के लिए उपयोग होते हैं।\n\n**आप स्पष्टता और योजना लेकर जाते हैं।** अंत तक आप समझेंगे कि सबसे संभावित क्या है, कोई प्रतिवर्ती चीज़ मिली या नहीं, क्या इलाज मदद कर सकता है, और रोज़मर्रा देखभाल के लिए व्यावहारिक मार्गदर्शन।\n\n**क्या लाएँ:** बदलावों की लिखित समयरेखा, सभी मौजूदा दवाएँ, पिछली रिपोर्ट या स्कैन, और आदर्श रूप से वह परिवार सदस्य जो रोज़मर्रा स्थिति सबसे अच्छी जानता हो।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── Stigma Callout (Hindi-first; exact master-layout copy) ─ */
  stigmaCallout: {
    en: "Memory loss in a parent or grandparent is not 'just old age.' It is not laziness, stubbornness, or something they can control. Dementia is a medical condition that affects the brain, and early diagnosis can genuinely help. There is no shame in seeking help — it is the most loving thing a family can do.",
    hi: "किसी माता-पिता या दादा-दादी में याददाश्त की कमी 'बस बुढ़ापा' नहीं है। यह आलस्य, ज़िद, या ऐसी चीज़ नहीं जिसे वे नियंत्रित कर सकें। डिमेंशिया एक चिकित्सीय स्थिति है जो दिमाग़ को प्रभावित करती है, और जल्दी निदान सच में मदद कर सकता है। मदद माँगने में कोई शर्म नहीं — यह सबसे प्रेमपूर्ण काम है जो एक परिवार कर सकता है।",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has guided several hundred families through memory disorders over the past decade, and his philosophy puts the family at the centre: *'In dementia, I have two patients — the person who is changing, and the family who loves them. I cannot always cure the first, but I can make sure neither of them faces it confused or alone.'*\n\n**He never accepts 'it's just old age'.** Every memory complaint gets a proper work-up — cognitive testing, blood tests, and imaging — because some causes are fully reversible and the type of dementia decides the treatment. Getting the diagnosis right is the foundation of everything that follows.\n\n**He treats the whole picture, not just the memory.** Beyond prescribing the appropriate medication, he manages sleep, mood, nutrition, and the behavioural changes families find hardest, and in vascular dementia he attacks the risk factors that can genuinely slow decline.\n\n**He supports the carer as part of the treatment.** He explains in plain Hindi, never rushes the family's questions, gives concrete day-to-day strategies, and checks how the carer themselves is coping — because in this condition, a supported family is the patient's best medicine. The honest aim is not a cure, but more good days, more dignity, and far less fear for everyone involved.",
    hi: "डॉ. कुमार ने पिछले दशक में कई सौ परिवारों को याददाश्त विकारों से गुज़ारा है, और उनका दर्शन परिवार को केंद्र में रखता है: *'डिमेंशिया में मेरे दो मरीज़ होते हैं — वह व्यक्ति जो बदल रहा है, और वह परिवार जो उससे प्यार करता है। मैं हमेशा पहले को ठीक नहीं कर सकता, पर यह सुनिश्चित कर सकता हूँ कि दोनों में से कोई इसे भ्रमित या अकेले न झेले।'*\n\n**वे कभी 'बस बुढ़ापा' स्वीकार नहीं करते।** हर याददाश्त शिकायत को उचित जाँच मिलती है — संज्ञानात्मक परीक्षण, रक्त परीक्षण और इमेजिंग — क्योंकि कुछ कारण पूरी तरह प्रतिवर्ती हैं और डिमेंशिया का प्रकार इलाज तय करता है।\n\n**वे पूरी तस्वीर का इलाज करते हैं, सिर्फ़ याददाश्त का नहीं।** उपयुक्त दवा देने के अलावा वे नींद, मनोदशा, पोषण, और वे व्यवहार बदलाव संभालते हैं जो परिवारों को सबसे कठिन लगते हैं, और वैस्कुलर डिमेंशिया में वे उन जोखिम कारकों पर वार करते हैं जो गिरावट सच में धीमी कर सकते हैं।\n\n**वे देखभालकर्ता को इलाज के हिस्से के रूप में सहारा देते हैं।** वे सरल हिंदी में समझाते हैं, परिवार के सवालों में जल्दबाज़ी नहीं करते, ठोस रोज़मर्रा रणनीतियाँ देते हैं, और जाँचते हैं कि देखभालकर्ता ख़ुद कैसे सँभाल रहा है।",
  },

  /* ── Patient Story (adapted from a verified Google review) ── */
  patientStory: {
    name: "Anjali Mishra",
    initials: "A",
    condition: { en: "Caring for a parent with dementia", hi: "डिमेंशिया वाले माता-पिता की देखभाल" },
    text: {
      en: "We consulted Dr. Kumar for dementia in our family, after a lot of confusion about what was even happening. What helped most was how systematically he approached it — the lifestyle management tips and the steady, well-explained medicines have genuinely made our day-to-day easier to manage. For the first time we felt we understood the condition and had a real plan, instead of just watching and worrying.",
      hi: "हमने अपने परिवार में डिमेंशिया के लिए डॉ. कुमार से सलाह ली, यह समझने में बहुत भ्रम के बाद कि आख़िर हो क्या रहा है। सबसे ज़्यादा मदद इस बात से मिली कि उन्होंने इसे कितने व्यवस्थित ढंग से देखा — जीवनशैली प्रबंधन की सलाह और स्थिर, अच्छी तरह समझाई गई दवाओं ने हमारे रोज़मर्रा को सच में आसान बना दिया है। पहली बार हमें लगा कि हम स्थिति को समझते हैं और हमारे पास एक असली योजना है, बजाय बस देखते और चिंता करते रहने के।",
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
      "Keep a calm, predictable daily routine. Familiar timings for meals, rest, and activities reduce confusion and agitation far more than any reminder — sudden change and unfamiliar surroundings are what unsettle a person with dementia most.",
      "Step into their reality rather than correcting it. Arguing about the date, or repeatedly breaking bad news they've forgotten, only causes fresh distress. Reassure, redirect gently, and meet them where they are — it is kinder and calmer for everyone.",
      "Treat any sudden worsening as a medical problem, not 'the dementia getting worse'. A rapid jump in confusion is often an infection, dehydration, pain, constipation, or a new medicine — all treatable. Get it checked promptly.",
      "Make the home safe. Reduce clutter and trip hazards, improve lighting, lock away medicines and sharp or dangerous items, and consider an ID bracelet in case the person wanders. Falls and wandering are the biggest day-to-day risks.",
      "Protect the body to protect the brain. Keep blood pressure, sugar, and cholesterol well controlled, encourage regular gentle exercise and good sleep, treat hearing loss, and keep the mind and social life as engaged as possible.",
      "Give medicines exactly as prescribed, and never stop or change them on your own. Use a pill box or alarms, and bring an up-to-date list to every visit so Dr. Kumar can adjust safely.",
      "Look after yourself, the carer. Share the load with family, accept help, take real breaks, and tell Dr. Kumar honestly if you are exhausted or low. Caregiver burnout is common and treatable, and a rested carer is the patient's greatest asset.",
    ],
    hi: [
      "एक शांत, पूर्वानुमेय दैनिक दिनचर्या रखें। भोजन, आराम और गतिविधियों के परिचित समय भ्रम और बेचैनी को किसी भी याद-दिलावे से कहीं ज़्यादा कम करते हैं — अचानक बदलाव और अपरिचित माहौल ही डिमेंशिया वाले व्यक्ति को सबसे ज़्यादा परेशान करते हैं।",
      "उन्हें सुधारने की बजाय उनकी दुनिया में क़दम रखें। तारीख़ पर बहस, या भूली बुरी ख़बर बार-बार देना, बस नई तकलीफ़ देता है। आश्वस्त करें, धीरे से ध्यान भटकाएँ, और उन्हें वहीं मिलें जहाँ वे हैं।",
      "किसी भी अचानक बिगड़ने को चिकित्सीय समस्या मानें, 'डिमेंशिया बढ़ना' नहीं। भ्रम में तेज़ उछाल अक्सर संक्रमण, पानी की कमी, दर्द, क़ब्ज़, या नई दवा होता है — सब इलाज-योग्य। तुरंत जाँच कराएँ।",
      "घर को सुरक्षित बनाएँ। बिखराव और गिरने के ख़तरे कम करें, रोशनी बेहतर करें, दवाएँ और तेज़ या ख़तरनाक चीज़ें ताले में रखें, और भटकने की स्थिति में पहचान-कड़ा सोचें।",
      "दिमाग़ की रक्षा के लिए शरीर की रक्षा करें। रक्तचाप, शुगर और कोलेस्ट्रॉल अच्छी तरह नियंत्रित रखें, नियमित हल्के व्यायाम और अच्छी नींद को बढ़ावा दें, सुनवाई की हानि का इलाज कराएँ, और मन व सामाजिक जीवन को यथासंभव व्यस्त रखें।",
      "दवाएँ ठीक वैसे ही दें जैसे लिखी गई हैं, और अपने आप कभी बंद या न बदलें। पिल बॉक्स या अलार्म उपयोग करें, और हर विज़िट पर अद्यतन सूची लाएँ।",
      "अपना, देखभालकर्ता का, ख़याल रखें। परिवार के साथ बोझ बाँटें, मदद स्वीकार करें, असली विराम लें, और डॉ. कुमार को ईमानदारी से बताएँ अगर आप थके या उदास हैं। देखभालकर्ता की थकान आम और इलाज-योग्य है।",
    ],
  },

  /* ── FAQs ────────────────────────────────────────────────── */
  faqs: [
    {
      q: { en: "Is this just normal old-age forgetfulness, or is it dementia?", hi: "क्या यह बस सामान्य बुढ़ापे का भुलक्कड़पन है, या डिमेंशिया?" },
      a: {
        en: "There's an important difference. Occasionally forgetting a name or where you left the keys, but remembering later, is usually normal. Forgetting recent events entirely, repeating the same question within minutes, getting lost in familiar places, or struggling with everyday tasks like handling money points to something more — and deserves proper assessment. The only way to know for sure is a cognitive evaluation, which is exactly what the first visit provides.",
        hi: "एक अहम अंतर है। कभी-कभी कोई नाम या चाबियाँ कहाँ रखीं भूलना, पर बाद में याद आना, आमतौर पर सामान्य है। हाल की घटनाएँ पूरी तरह भूलना, कुछ ही मिनटों में वही सवाल दोहराना, परिचित जगहों में खो जाना, या पैसे संभालने जैसे रोज़मर्रा कामों में संघर्ष किसी ज़्यादा गंभीर चीज़ की ओर इशारा करता है। पक्का जानने का एकमात्र तरीक़ा संज्ञानात्मक मूल्यांकन है।",
      },
    },
    {
      q: { en: "Is there any cure for dementia?", hi: "क्या डिमेंशिया का कोई इलाज है?" },
      a: {
        en: "For most types of true dementia there is no cure yet — but that is very far from 'nothing can be done.' Some causes of memory loss are completely reversible and only found by testing. In dementia itself, medication can ease symptoms and help maintain function, the decline can be slowed (especially in vascular dementia), and good management and family support dramatically improve quality of life. A diagnosis opens the door to real help.",
        hi: "अधिकांश प्रकार के सच्चे डिमेंशिया का अभी कोई इलाज नहीं — पर यह 'कुछ नहीं किया जा सकता' से बहुत दूर है। याददाश्त की कमी के कुछ कारण पूरी तरह प्रतिवर्ती होते हैं और केवल जाँच से मिलते हैं। डिमेंशिया में भी, दवा लक्षण कम कर सकती है और कार्य बनाए रखने में मदद कर सकती है, गिरावट धीमी की जा सकती है (ख़ासकर वैस्कुलर में), और अच्छा प्रबंधन व परिवार का सहारा जीवन गुणवत्ता नाटकीय रूप से सुधारते हैं।",
      },
    },
    {
      q: { en: "Will I get dementia too, because my parent has it?", hi: "क्या मुझे भी डिमेंशिया होगा, क्योंकि मेरे माता-पिता को है?" },
      a: {
        en: "For most people, having a parent with dementia raises the risk only modestly, and it is not a certainty — the great majority of dementia is not directly inherited. A small number of families, usually with several affected relatives or early-onset disease, carry a stronger genetic link. Either way, much of the risk is shaped by things you can control: blood pressure, diabetes, exercise, sleep, and not smoking. Dr. Kumar can discuss your specific situation.",
        hi: "ज़्यादातर लोगों के लिए, माता-पिता को डिमेंशिया होना जोखिम केवल थोड़ा बढ़ाता है, और यह निश्चितता नहीं — अधिकांश डिमेंशिया सीधे वंशानुगत नहीं। कुछ ही परिवार, आमतौर पर कई प्रभावित रिश्तेदारों या जल्दी शुरुआत वाले, मज़बूत आनुवंशिक संबंध रखते हैं। किसी भी तरह, ज़्यादातर जोखिम उन चीज़ों से आकार लेता है जिन्हें आप नियंत्रित कर सकते हैं।",
      },
    },
    {
      q: { en: "How do I handle it when they get angry, agitated, or accuse us of things?", hi: "जब वे ग़ुस्सा, बेचैन हों या हम पर आरोप लगाएँ तो कैसे संभालूँ?" },
      a: {
        en: "These behaviours are symptoms of the illness, not deliberate, and they're among the hardest parts for families. Try not to argue or correct; instead stay calm, reassure, and gently redirect their attention. Look for triggers — pain, hunger, tiredness, a noisy or unfamiliar setting — and ease them. If agitation is severe or distressing, tell Dr. Kumar: there are safe approaches, and sometimes medication, that can help, and he'll guide you on what works without over-sedating your loved one.",
        hi: "ये व्यवहार बीमारी के लक्षण हैं, जान-बूझकर नहीं, और परिवारों के लिए सबसे कठिन हिस्सों में से हैं। बहस या सुधार न करने की कोशिश करें; बजाय इसके शांत रहें, आश्वस्त करें, और धीरे से ध्यान भटकाएँ। ट्रिगर ढूँढें — दर्द, भूख, थकान, शोरगुल या अपरिचित माहौल — और उन्हें कम करें। अगर बेचैनी गंभीर हो, डॉ. कुमार को बताएँ: सुरक्षित तरीक़े और कभी दवा मदद कर सकती है।",
      },
    },
    {
      q: { en: "What tests will be needed, and what will it cost?", hi: "क्या जाँचें ज़रूरी होंगी, और कितना खर्च होगा?" },
      a: {
        en: "The first consultation is ₹1,000 and follow-ups are ₹500. The core assessment is a cognitive test done in the clinic, plus blood tests to look for reversible causes (such as thyroid and vitamin B12), and usually one brain scan to identify the type of dementia. Dr. Kumar orders only what genuinely guides treatment and explains why each test is needed. Ongoing treatment is mostly affordable oral medication adjusted over time.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। मुख्य आकलन क्लिनिक में किया गया एक संज्ञानात्मक परीक्षण है, साथ ही प्रतिवर्ती कारण (जैसे थायरॉइड और विटामिन B12) ढूँढने के लिए रक्त परीक्षण, और आमतौर पर डिमेंशिया का प्रकार पहचानने के लिए एक दिमाग़ी स्कैन। डॉ. कुमार केवल वही मँगाते हैं जो सच में इलाज तय करे। आगे का इलाज ज़्यादातर किफ़ायती मुँह की दवा है।",
      },
    },
    {
      q: { en: "When should I worry that something urgent is happening?", hi: "मुझे कब चिंता करनी चाहिए कि कुछ तत्काल हो रहा है?" },
      a: {
        en: "Seek prompt medical care if confusion worsens suddenly over hours or a few days, if there's a fever, severe headache, or stiff neck, or if there's new weakness, numbness, slurred speech, or a facial droop — the last group needs emergency stroke care, so call 108. A sudden change is usually a treatable problem layered on top of the dementia, not the dementia itself, and catching it early genuinely helps.",
        hi: "तुरंत चिकित्सा देखभाल लें अगर भ्रम घंटों या कुछ दिनों में अचानक बिगड़े, अगर बुख़ार, तेज़ सिरदर्द, या गर्दन अकड़न हो, या नई कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, या चेहरा लटकना हो — आख़िरी समूह को आपातकालीन स्ट्रोक देखभाल चाहिए, इसलिए 108 बुलाएँ। अचानक बदलाव आमतौर पर डिमेंशिया के ऊपर एक इलाज-योग्य समस्या होता है, डिमेंशिया ख़ुद नहीं।",
      },
    },
  ],
};

export default data;
