import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "parkinsonism-and-movement-disorders",
  name: { en: "Parkinsonism & Movement Disorders", hi: "पार्किंसनिज़्म और मूवमेंट डिसऑर्डर" },
  shortName: { en: "Parkinsonism & Movement", hi: "पार्किंसनिज़्म" },
  color: "gold",
  icon: "🌿",
  tier: 1,

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: { en: "Parkinsonism & Movement Disorders Clinic", hi: "पार्किंसनिज़्म और मूवमेंट डिसऑर्डर क्लिनिक" },
    tagline: {
      en: "When your hands stop listening to you.",
      hi: "जब आपके हाथ आपकी बात सुनना बंद कर दें।",
    },
    supportLine: {
      en: "A tremor, a stiffness, a slowness that wasn't there before — these changes can be frightening, and the fear of what they might mean often keeps people away from help. But movement disorders are among the most treatable conditions in neurology, and the earlier care begins, the better life looks. If you or someone you love is changing in ways that worry you, this page will help you understand what's happening — and what can be done.",
      hi: "एक कंपन, एक अकड़न, एक सुस्ती जो पहले नहीं थी — ये बदलाव डरावने हो सकते हैं, और इनके मतलब का डर अक्सर लोगों को मदद से दूर रखता है। लेकिन मूवमेंट डिसऑर्डर न्यूरोलॉजी की सबसे इलाज-योग्य स्थितियों में से हैं, और जितनी जल्दी इलाज शुरू हो, जीवन उतना बेहतर दिखता है। अगर आप या आपका कोई अपना ऐसे बदल रहा है जो आपको चिंतित करता है, यह पन्ना आपको समझने में मदद करेगा कि क्या हो रहा है — और क्या किया जा सकता है।",
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
    en: "Parkinson's disease and related movement disorders are becoming more common as our population ages — yet many families lose precious years to fear and delay, mistaking the early signs for 'just getting old' or hiding a tremor out of embarrassment. That wait is costly, because these conditions respond best to treatment started early. Here is what most people don't realise: a diagnosis of Parkinson's is not the end of an active life. With the right medication, physiotherapy, and support, most patients live independent, meaningful lives for many years. This page explains the conditions we see most often, what the treatments actually do, and how Dr. Kumar walks each family through the journey.",
    hi: "हमारी आबादी की उम्र बढ़ने के साथ पार्किंसन रोग और संबंधित मूवमेंट डिसऑर्डर अधिक आम होते जा रहे हैं — फिर भी कई परिवार डर और देरी में क़ीमती साल गँवा देते हैं, शुरुआती संकेतों को 'बस बुढ़ापा' समझकर, या शर्म से कंपन छुपाकर। यह इंतज़ार महँगा है, क्योंकि ये स्थितियाँ जल्दी शुरू किए इलाज पर सबसे अच्छा असर दिखाती हैं। ज़्यादातर लोग यह नहीं समझते: पार्किंसन का निदान सक्रिय जीवन का अंत नहीं है। सही दवा, फिज़ियोथेरेपी और सहारे के साथ, अधिकांश मरीज़ कई सालों तक स्वतंत्र, सार्थक जीवन जीते हैं। यह पन्ना उन स्थितियों को समझाता है जो हम सबसे ज़्यादा देखते हैं।",
  },

  /* ── TOC with entity tags ─────────────────────────────────── */
  toc: [
    {
      label: { en: "Parkinson's Disease", hi: "पार्किंसन रोग" },
      anchor: "parkinsons",
      entityTags: [
        { en: "Resting tremor", hi: "विश्राम कंपन" },
        { en: "Rigidity & slowness", hi: "अकड़न और सुस्ती" },
        { en: "Atypical parkinsonism", hi: "एटिपिकल पार्किंसनिज़्म" },
      ],
    },
    {
      label: { en: "Essential Tremor", hi: "एसेंशियल ट्रेमर" },
      anchor: "essential-tremor",
      entityTags: [
        { en: "Action tremor", hi: "क्रिया कंपन" },
        { en: "Familial tremor", hi: "पारिवारिक कंपन" },
      ],
    },
    {
      label: { en: "Dystonia", hi: "डिस्टोनिया" },
      anchor: "dystonia",
      entityTags: [
        { en: "Cervical dystonia", hi: "सर्वाइकल डिस्टोनिया" },
        { en: "Writer's cramp", hi: "राइटर्स क्रैम्प" },
        { en: "Blepharospasm", hi: "ब्लेफ़रोस्पाज़्म" },
      ],
    },
    {
      label: { en: "Ataxia", hi: "एटैक्सिया" },
      anchor: "ataxia",
      entityTags: [
        { en: "Balance & coordination loss", hi: "संतुलन और तालमेल की हानि" },
        { en: "Gait ataxia", hi: "चाल एटैक्सिया" },
      ],
    },
  ],

  /* ── For Families & Caregivers — ELEVATED (Tier 1) ──────── */
  caregiverSection: {
    en: "If you're caring for someone with a movement disorder, you've likely become an expert in things you never expected to learn — the exact timing of each tablet, which chair is easiest to rise from, how to steady an arm without taking over. This is one of the quietest, longest caregiving journeys in medicine, and it asks a great deal of you. Whatever you're feeling — grief for who they were, frustration on the hard days, guilt for that frustration — all of it is normal, and none of it makes you anything but human.\n\nA few things make a real difference. **Medication timing is everything in Parkinson's** — the tablets work in windows, and a dose even an hour late can mean a sudden loss of movement (an 'off' period). Help protect the schedule with alarms, and bring a simple diary of good and bad hours to each visit; it's how Dr. Kumar fine-tunes the doses. **Watch the mood, not just the movement** — depression and apathy are common, treatable, and easy to mistake for 'just slowing down.' If they withdraw or lose interest, tell Dr. Kumar. **Make the home safer** — clear loose rugs and clutter, add grab-rails, improve lighting, because a fall can change everything.\n\nAnd please protect yourself. This is a marathon, not a sprint. Accept help when offered, hold on to something that is yours alone, and remember that a rested, supported carer is the single most valuable thing your loved one has.",
    hi: "अगर आप किसी मूवमेंट डिसऑर्डर वाले व्यक्ति की देखभाल कर रहे हैं, तो आप शायद उन चीज़ों के विशेषज्ञ बन गए हैं जो आपने कभी सीखने की उम्मीद नहीं की थी — हर गोली का सटीक समय, कौन-सी कुर्सी से उठना आसान है, बिना नियंत्रण लिए हाथ को कैसे थामना है। यह चिकित्सा की सबसे शांत, सबसे लंबी देखभाल यात्राओं में से एक है। आप जो भी महसूस कर रहे हैं — वे जैसे थे उसके लिए दुख, कठिन दिनों पर झुंझलाहट, उस झुंझलाहट के लिए अपराधबोध — सब सामान्य है।\n\nकुछ बातें असली फ़र्क़ डालती हैं। **पार्किंसन में दवा का समय ही सब कुछ है** — गोलियाँ खिड़कियों में काम करती हैं, और एक घंटा देर की खुराक भी अचानक हलचल खो देने ('ऑफ़' अवधि) का मतलब हो सकती है। अलार्म से समय की रक्षा करें, और अच्छे-बुरे घंटों की एक छोटी डायरी हर विज़िट पर लाएँ। **हलचल ही नहीं, मनोदशा पर भी नज़र रखें** — अवसाद और उदासीनता आम, इलाज-योग्य हैं, और 'बस धीमे पड़ना' समझ ली जाती हैं। अगर वे सिमट जाएँ या रुचि खो दें, डॉ. कुमार को बताएँ। **घर को सुरक्षित बनाएँ** — ढीले कालीन और बिखराव हटाएँ, ग्रैब-रेल लगाएँ, रोशनी बेहतर करें, क्योंकि एक गिरना सब कुछ बदल सकता है।\n\nऔर कृपया अपनी भी रक्षा करें। यह एक मैराथन है, दौड़ नहीं। मदद मिले तो स्वीकार करें, और याद रखें कि एक आराम पाया, सहारा पाया देखभालकर्ता आपके प्रियजन की सबसे मूल्यवान चीज़ है।",
  },

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic 1: Parkinson's Disease ────────────────────── */
    {
      slug: "parkinsons",
      name: { en: "Parkinson's Disease", hi: "पार्किंसन रोग" },
      intro: {
        en: "Parkinson's is more than a tremor — and recognising its quieter signs early is what makes treatment work best.",
        hi: "पार्किंसन केवल कंपन से ज़्यादा है — और इसके शांत संकेतों को जल्दी पहचानना ही इलाज को सबसे अच्छा बनाता है।",
      },
      couldThisBeYou: {
        en: [
          "A tremor in one hand that appears at rest and eases when you reach for something",
          "Movements becoming slower — buttoning a shirt, writing, or rising from a chair takes longer",
          "Stiffness in an arm or leg that you first blamed on age or arthritis",
          "Handwriting shrinking and becoming cramped, or a softer, quieter voice",
          "A reduced arm swing on one side, a stooped posture, or shuffling steps",
          "Loss of smell, disturbed sleep, constipation, or low mood appearing before any tremor",
        ],
        hi: [
          "एक हाथ में कंपन जो आराम में दिखता है और कुछ पकड़ने पर कम हो जाता है",
          "हलचल धीमी होना — शर्ट के बटन लगाना, लिखना, या कुर्सी से उठना ज़्यादा समय लेना",
          "बाँह या पैर में अकड़न जिसे पहले आप उम्र या गठिया मान बैठे",
          "लिखावट छोटी और सिकुड़ी होना, या आवाज़ धीमी और मंद होना",
          "एक तरफ़ बाँह का कम झूलना, झुकी मुद्रा, या घिसटते क़दम",
          "किसी भी कंपन से पहले सूँघने की क्षमता खोना, नींद बिगड़ना, क़ब्ज़, या उदासी",
        ],
      },
      whatItFeelsLike: {
        en: "Parkinson's usually arrives slowly and on one side first — so slowly that families often look back and realise the signs were there for years. A spouse may notice the reduced arm swing or the quieter voice long before the person themselves does. The tremor people associate with Parkinson's is a 'resting' tremor: it shows up when the hand is still and settles when the hand is busy, which is the opposite of most other tremors. But for many, the hardest changes aren't the visible ones — it's the slowness, the heaviness, the sense that the body no longer does automatically what it always did. None of this is laziness or weakness, and none of it is the patient's fault.",
        hi: "पार्किंसन आमतौर पर धीरे-धीरे और पहले एक तरफ़ आता है — इतने धीरे कि परिवार अक्सर पीछे मुड़कर देखते हैं और समझते हैं कि संकेत सालों से थे। पति या पत्नी कम झूलती बाँह या धीमी आवाज़ को व्यक्ति से बहुत पहले नोटिस कर सकते हैं। पार्किंसन से जुड़ा कंपन 'विश्राम' कंपन है: यह तब दिखता है जब हाथ स्थिर हो और हाथ व्यस्त होने पर थम जाता है — जो ज़्यादातर अन्य कंपनों के उलट है। पर कई के लिए सबसे कठिन बदलाव दिखने वाले नहीं होते — वह सुस्ती, भारीपन, यह एहसास कि शरीर अब अपने आप वह नहीं करता जो हमेशा करता था। यह न आलस है, न कमज़ोरी, न मरीज़ की ग़लती।",
      },
      whatsHappening: {
        en: "Deep in the brain sits a small factory that produces dopamine — a chemical messenger that lets movement flow smoothly and automatically. In Parkinson's, the cells in this factory gradually slow down and the dopamine supply falls. With less dopamine, the brain's movements lose their smoothness: they become slower, stiffer, and harder to start, like a machine running low on oil. This is why the cornerstone of treatment is replacing or boosting dopamine — it doesn't cure the underlying loss, but it can restore movement remarkably well, often for many years. 'Atypical parkinsonism' refers to a few related conditions that look similar but behave differently, which is exactly why an accurate diagnosis matters.",
        hi: "दिमाग़ की गहराई में एक छोटी फ़ैक्टरी होती है जो डोपामिन बनाती है — एक रासायनिक संदेशवाहक जो हलचल को सहज और स्वचालित रूप से बहने देता है। पार्किंसन में इस फ़ैक्टरी की कोशिकाएँ धीरे-धीरे सुस्त पड़ती हैं और डोपामिन की आपूर्ति गिरती है। कम डोपामिन से दिमाग़ की हलचल अपनी सहजता खो देती है: धीमी, अकड़ी, और शुरू करने में कठिन हो जाती है — जैसे तेल की कमी वाली मशीन। इसीलिए इलाज की नींव डोपामिन को बदलना या बढ़ाना है — यह मूल हानि ठीक नहीं करता, पर हलचल को उल्लेखनीय रूप से बहाल कर सकता है, अक्सर कई सालों तक। 'एटिपिकल पार्किंसनिज़्म' कुछ संबंधित स्थितियाँ हैं जो समान दिखती हैं पर अलग व्यवहार करती हैं — इसीलिए सही निदान मायने रखता है।",
      },
      redFlags: {
        en: [
          "A sudden, rapid worsening of movement over days — Parkinson's itself progresses slowly",
          "Frequent falls early in the illness, or falling backwards",
          "Severe dizziness on standing, fainting, or marked bladder problems early on",
          "Rapidly progressing stiffness with difficulty looking up or down",
          "A high fever with severe rigidity in someone on Parkinson's medication (a medical emergency)",
        ],
        hi: [
          "कुछ दिनों में हलचल का अचानक, तेज़ बिगड़ना — पार्किंसन ख़ुद धीरे बढ़ता है",
          "बीमारी की शुरुआत में बार-बार गिरना, या पीछे की ओर गिरना",
          "खड़े होने पर तेज़ चक्कर, बेहोशी, या शुरू में ही गंभीर मूत्राशय समस्याएँ",
          "तेज़ी से बढ़ती अकड़न के साथ ऊपर या नीचे देखने में कठिनाई",
          "पार्किंसन दवा ले रहे व्यक्ति में तेज़ बुख़ार के साथ गंभीर अकड़न (एक चिकित्सीय आपात स्थिति)",
        ],
      },
      howDrKumarTreats: {
        en: "Parkinson's is a clinical diagnosis — Dr. Kumar makes it through a careful history and a hands-on movement examination, assessing tremor, stiffness, slowness, gait, and balance. Brain imaging is used mainly to rule out look-alike conditions, not to confirm Parkinson's itself. Treatment is then tailored to the individual: levodopa remains the most effective medicine for restoring movement, often combined with dopamine agonists and other agents, with the regimen adjusted to smooth out the day and minimise 'off' periods and side effects. Dr. Kumar coordinates physiotherapy and exercise — which are genuinely disease-modifying for symptoms — and addresses the non-movement aspects that matter just as much: sleep, mood, blood pressure, and constipation. For carefully selected patients whose symptoms are no longer well-controlled by tablets alone, he evaluates and refers for advanced therapies such as deep brain stimulation (DBS). With a well-tuned plan, most patients stay active and independent for many years; the goal is not just fewer symptoms, but a fuller life.",
        hi: "पार्किंसन एक नैदानिक निदान है — डॉ. कुमार इसे ध्यान से ली गई हिस्ट्री और प्रत्यक्ष मूवमेंट जाँच से करते हैं, कंपन, अकड़न, सुस्ती, चाल और संतुलन का आकलन करते हुए। दिमाग़ी इमेजिंग मुख्यतः मिलती-जुलती स्थितियों को नकारने के लिए होती है, पार्किंसन की पुष्टि के लिए नहीं। फिर इलाज व्यक्ति के अनुसार ढाला जाता है: हलचल बहाल करने के लिए लेवोडोपा सबसे असरदार दवा है, अक्सर डोपामिन एगोनिस्ट और अन्य दवाओं के साथ, और दिनचर्या को सहज करने व 'ऑफ़' अवधि और दुष्प्रभाव कम करने के लिए समायोजित। डॉ. कुमार फिज़ियोथेरेपी और व्यायाम का तालमेल करते हैं — जो लक्षणों के लिए सच में लाभकारी हैं — और नींद, मनोदशा, रक्तचाप और क़ब्ज़ जैसे ग़ैर-हलचल पहलुओं को संभालते हैं। सावधानी से चुने मरीज़ों के लिए जिनके लक्षण अकेली गोलियों से नियंत्रित न हों, वे डीप ब्रेन स्टिमुलेशन (DBS) जैसी उन्नत चिकित्सा के लिए मूल्यांकन और रेफ़र करते हैं। अच्छी तरह ट्यून की योजना से ज़्यादातर मरीज़ कई सालों तक सक्रिय और स्वतंत्र रहते हैं।",
      },
    },

    /* ── Topic 2: Essential Tremor ───────────────────────── */
    {
      slug: "essential-tremor",
      name: { en: "Essential Tremor", hi: "एसेंशियल ट्रेमर" },
      intro: {
        en: "Not every tremor is Parkinson's — and telling them apart changes everything about treatment.",
        hi: "हर कंपन पार्किंसन नहीं होता — और इन्हें अलग पहचानना इलाज का सब कुछ बदल देता है।",
      },
      couldThisBeYou: {
        en: [
          "A shaking that appears when you use your hands — holding a cup, writing, threading a needle",
          "Tremor that eases when your hands are resting in your lap (the opposite of Parkinson's)",
          "Shaking that gets worse with stress, caffeine, or tiredness",
          "A tremor in the head or voice, giving a quivering quality when you speak",
          "Other family members with the same kind of tremor",
          "Tremor that briefly settles after a small amount of alcohol",
        ],
        hi: [
          "हाथों के इस्तेमाल पर दिखने वाला कंपन — कप पकड़ना, लिखना, सुई में धागा डालना",
          "कंपन जो गोद में हाथ रखने पर कम हो जाता है (पार्किंसन के उलट)",
          "तनाव, कैफ़ीन या थकान से बढ़ने वाला कंपन",
          "सिर या आवाज़ में कंपन, बोलते समय काँपती गुणवत्ता",
          "परिवार के अन्य सदस्यों में वैसा ही कंपन",
          "थोड़ी शराब के बाद थोड़ी देर के लिए थमने वाला कंपन",
        ],
      },
      whatItFeelsLike: {
        en: "Essential tremor is the most common movement disorder of all, and although it isn't dangerous, it can be deeply frustrating and socially embarrassing — soup spilled from a spoon, a signature that won't come out steady, a cup of tea that has to be held with both hands. People often assume the worst and fear Parkinson's, which is exactly why a clear diagnosis brings such relief. The key difference is simple: essential tremor appears with action and movement and quietens at rest, while Parkinson's tremor does the reverse. It often runs in families and can begin at any age, sometimes worsening gradually over years.",
        hi: "एसेंशियल ट्रेमर सबसे आम मूवमेंट डिसऑर्डर है, और हालाँकि यह ख़तरनाक नहीं, यह बेहद परेशान करने वाला और सामाजिक रूप से शर्मनाक हो सकता है — चम्मच से गिरता सूप, स्थिर न आने वाले हस्ताक्षर, दोनों हाथों से थामनी पड़ती चाय की प्याली। लोग अक्सर सबसे बुरा मान लेते हैं और पार्किंसन से डरते हैं, इसीलिए स्पष्ट निदान इतनी राहत देता है। मुख्य अंतर सरल है: एसेंशियल ट्रेमर क्रिया और हलचल पर दिखता है और आराम में थमता है, जबकि पार्किंसन कंपन इसका उल्टा करता है। यह अक्सर परिवारों में चलता है और किसी भी उम्र में शुरू हो सकता है।",
      },
      whatsHappening: {
        en: "Unlike Parkinson's, essential tremor isn't about a loss of dopamine. It arises from abnormal rhythmic signals in the brain's movement-control circuits — think of a faint electrical 'hum' that the brain normally cancels out, but which here gets through to the muscles. It is not a sign of brain damage, it does not shorten life, and it is not Parkinson's, even though the two are often confused. Because the mechanism is different, the treatment is different too — and many people gain excellent control once the right approach is found.",
        hi: "पार्किंसन के विपरीत, एसेंशियल ट्रेमर डोपामिन की हानि के बारे में नहीं है। यह दिमाग़ के हलचल-नियंत्रण परिपथों में असामान्य लयबद्ध संकेतों से उठता है — एक हल्के बिजली के 'गुंजन' की तरह जिसे दिमाग़ आमतौर पर रद्द कर देता है, पर यहाँ वह मांसपेशियों तक पहुँच जाता है। यह दिमाग़ी क्षति का संकेत नहीं, जीवन छोटा नहीं करता, और पार्किंसन नहीं है। चूँकि तंत्र अलग है, इलाज भी अलग है — और सही तरीक़ा मिलने पर कई लोग बहुत अच्छा नियंत्रण पाते हैं।",
      },
      redFlags: {
        en: [
          "A tremor that begins suddenly rather than gradually",
          "Tremor on only one side, with stiffness or slowness (may point to Parkinson's instead)",
          "Tremor with weakness, numbness, headache, or difficulty walking",
          "Rapid worsening over weeks, or tremor after starting a new medication",
          "Tremor that severely interferes with eating, dressing, or work",
        ],
        hi: [
          "अचानक शुरू होने वाला कंपन, धीरे-धीरे नहीं",
          "केवल एक तरफ़ कंपन, अकड़न या सुस्ती के साथ (पार्किंसन की ओर इशारा कर सकता है)",
          "कमज़ोरी, सुन्नपन, सिरदर्द, या चलने में कठिनाई के साथ कंपन",
          "हफ़्तों में तेज़ बिगड़ना, या नई दवा शुरू करने के बाद कंपन",
          "खाने, कपड़े पहनने या काम में गंभीर बाधा डालने वाला कंपन",
        ],
      },
      howDrKumarTreats: {
        en: "The first and most valuable step is an accurate diagnosis — distinguishing essential tremor from Parkinson's and from other causes such as an overactive thyroid or medication side-effects, which Dr. Kumar checks for. Many mild tremors need only reassurance and simple measures. When the tremor interferes with daily life, effective medications can substantially reduce it, and Dr. Kumar selects and titrates these to balance benefit against side-effects. For tremor that is troublesome in specific situations or resistant to tablets, botulinum toxin (Botox) injections can help selected cases, and for severe, disabling tremor he discusses advanced options including referral for deep brain stimulation. Most people with essential tremor can expect meaningful improvement and the reassurance that this is a manageable, non-threatening condition.",
        hi: "पहला और सबसे मूल्यवान क़दम है सही निदान — एसेंशियल ट्रेमर को पार्किंसन से और थायरॉइड या दवा के दुष्प्रभाव जैसे अन्य कारणों से अलग पहचानना, जिनकी डॉ. कुमार जाँच करते हैं। कई हल्के कंपनों को केवल आश्वासन और सरल उपाय चाहिए। जब कंपन रोज़मर्रा में बाधा डाले, असरदार दवाएँ इसे काफ़ी कम कर सकती हैं, और डॉ. कुमार इन्हें लाभ व दुष्प्रभाव के संतुलन के लिए चुनते और समायोजित करते हैं। विशिष्ट स्थितियों में परेशान करने वाले या गोलियों से न ठीक होने वाले कंपन के लिए बोटुलिनम टॉक्सिन (बोटॉक्स) इंजेक्शन चुनिंदा मामलों में मदद कर सकते हैं, और गंभीर कंपन के लिए वे डीप ब्रेन स्टिमुलेशन रेफ़रल सहित उन्नत विकल्पों पर बात करते हैं।",
      },
    },

    /* ── Topic 3: Dystonia ───────────────────────────────── */
    {
      slug: "dystonia",
      name: { en: "Dystonia", hi: "डिस्टोनिया" },
      intro: {
        en: "Dystonia twists muscles into postures you didn't ask for — and it is frequently, and wrongly, dismissed as 'just stress.'",
        hi: "डिस्टोनिया मांसपेशियों को ऐसी मुद्राओं में मोड़ देता है जो आपने नहीं माँगीं — और इसे अक्सर, ग़लत तरीक़े से, 'बस तनाव' कहकर टाल दिया जाता है।",
      },
      couldThisBeYou: {
        en: [
          "Your neck pulls or turns to one side on its own, sometimes painfully (cervical dystonia)",
          "Your hand cramps and twists only when you write or play an instrument (writer's cramp)",
          "Your eyelids squeeze shut involuntarily, making it hard to keep your eyes open",
          "Sustained, twisting postures of a limb or the trunk that you cannot relax away",
          "Symptoms that ease with a curious 'sensory trick' — touching the chin or cheek lightly",
          "Movements that worsen with stress or fatigue and disappear during sleep",
        ],
        hi: [
          "आपकी गर्दन अपने आप एक तरफ़ खिंचती या मुड़ती है, कभी दर्द के साथ (सर्वाइकल डिस्टोनिया)",
          "लिखते या वाद्य बजाते समय ही आपका हाथ अकड़ता और मुड़ता है (राइटर्स क्रैम्प)",
          "आपकी पलकें अनैच्छिक रूप से भिंच जाती हैं, आँखें खुली रखना कठिन",
          "किसी अंग या धड़ की लगातार, मुड़ी मुद्राएँ जिन्हें आप ढीला नहीं कर पाते",
          "एक अनोखी 'सेंसरी ट्रिक' से कम होने वाले लक्षण — ठोड़ी या गाल को हल्के छूना",
          "तनाव या थकान से बढ़ने वाली और नींद में ग़ायब होने वाली हरकतें",
        ],
      },
      whatItFeelsLike: {
        en: "Dystonia can be bewildering, because the affected part of the body seems to have a will of its own — pulling, gripping, or twisting at exactly the wrong moment. It is often painful, and because it can be triggered by specific tasks or eased by odd little tricks, patients are frequently told it is 'in their head' or due to anxiety. It is not. Dystonia is a genuine neurological condition, and being disbelieved is one of the most demoralising parts of living with it. Naming it correctly is the first relief many patients feel.",
        hi: "डिस्टोनिया चकरा देने वाला हो सकता है, क्योंकि शरीर का प्रभावित हिस्सा अपनी मर्ज़ी वाला लगता है — ठीक ग़लत पल पर खिंचता, पकड़ता या मुड़ता। यह अक्सर दर्दनाक होता है, और चूँकि यह विशिष्ट कामों से शुरू हो सकता है या अजीब छोटी तरकीबों से कम हो सकता है, मरीज़ों को अक्सर कहा जाता है कि यह 'उनके दिमाग़ में है' या घबराहट से है। ऐसा नहीं है। डिस्टोनिया एक वास्तविक तंत्रिका-संबंधी स्थिति है, और विश्वास न किया जाना इसके साथ जीने के सबसे निराशाजनक हिस्सों में से एक है।",
      },
      whatsHappening: {
        en: "In dystonia, the brain's control over muscle 'tone' misfires: muscles that should relax stay switched on, and opposing muscle groups contract at the same time, pulling the body into abnormal postures. It is a problem of faulty signalling in the movement circuits, not a psychological one and not a sign of weakness. Dystonia can affect a single area (like the neck or hand) or be more widespread, and it can occur on its own or alongside another condition. Understanding which pattern is present is what guides the treatment.",
        hi: "डिस्टोनिया में दिमाग़ का मांसपेशी 'टोन' पर नियंत्रण ग़लत चलता है: जिन मांसपेशियों को ढीला होना चाहिए वे चालू रहती हैं, और विरोधी मांसपेशी समूह एक साथ सिकुड़ते हैं, शरीर को असामान्य मुद्राओं में खींचते हुए। यह हलचल परिपथों में ख़राब संकेतन की समस्या है, मनोवैज्ञानिक नहीं और कमज़ोरी का संकेत नहीं। डिस्टोनिया एक क्षेत्र (जैसे गर्दन या हाथ) को प्रभावित कर सकता है या ज़्यादा फैला हो सकता है। कौन-सा पैटर्न मौजूद है यह समझना ही इलाज तय करता है।",
      },
      redFlags: {
        en: [
          "Dystonia that spreads rapidly to many parts of the body",
          "Sudden onset after a head injury, infection, or new medication",
          "Dystonia in a child or young adult (needs prompt specialist work-up)",
          "Associated weakness, slowness, or cognitive change",
          "A sudden, severe, generalised episode with fever (a rare emergency)",
        ],
        hi: [
          "शरीर के कई हिस्सों में तेज़ी से फैलने वाला डिस्टोनिया",
          "सिर की चोट, संक्रमण, या नई दवा के बाद अचानक शुरुआत",
          "बच्चे या युवा में डिस्टोनिया (तुरंत विशेषज्ञ जाँच ज़रूरी)",
          "साथ में कमज़ोरी, सुस्ती, या संज्ञानात्मक बदलाव",
          "बुख़ार के साथ अचानक, गंभीर, व्यापक प्रकरण (एक दुर्लभ आपात स्थिति)",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first job is to confirm that this is dystonia, identify its pattern, and check for any underlying cause that needs separate treatment. For focal dystonias — the neck, the eyelids, a writing hand — botulinum toxin (Botox) injections are the mainstay and are highly effective: carefully targeted, they relax the overactive muscles and restore function, with the effect lasting a few months and repeated as needed. Oral medications help some patients, particularly for more widespread dystonia, and physiotherapy and the use of sensory tricks form part of the plan. For severe, treatment-resistant dystonia, Dr. Kumar discusses advanced options including deep brain stimulation. Most people gain substantial relief — and, just as importantly, the validation that their condition is real and treatable.",
        hi: "डॉ. कुमार का पहला काम है पुष्टि करना कि यह डिस्टोनिया है, इसका पैटर्न पहचानना, और किसी अंतर्निहित कारण की जाँच करना जिसे अलग इलाज चाहिए। फ़ोकल डिस्टोनिया के लिए — गर्दन, पलकें, लिखने वाला हाथ — बोटुलिनम टॉक्सिन (बोटॉक्स) इंजेक्शन मुख्य आधार हैं और बहुत असरदार: सावधानी से लक्षित, वे अति-सक्रिय मांसपेशियों को ढीला करते और कार्य बहाल करते हैं, असर कुछ महीने रहता है और ज़रूरत पर दोहराया जाता है। मुँह की दवाएँ कुछ मरीज़ों की मदद करती हैं, और फिज़ियोथेरेपी व सेंसरी ट्रिक्स योजना का हिस्सा हैं। गंभीर, इलाज-प्रतिरोधी डिस्टोनिया के लिए वे डीप ब्रेन स्टिमुलेशन सहित उन्नत विकल्पों पर बात करते हैं।",
      },
    },

    /* ── Topic 4: Ataxia ─────────────────────────────────── */
    {
      slug: "ataxia",
      name: { en: "Ataxia", hi: "एटैक्सिया" },
      intro: {
        en: "Ataxia is a loss of coordination — the body's balance and precision slipping out of tune — and finding its cause is the key to managing it.",
        hi: "एटैक्सिया तालमेल की हानि है — शरीर का संतुलन और सटीकता बिगड़ना — और इसका कारण ढूँढना ही इसे संभालने की कुंजी है।",
      },
      couldThisBeYou: {
        en: [
          "An unsteady, wide-based walk that looks unsteady or 'drunk', though you haven't been drinking",
          "Clumsiness in the hands — missing when reaching, fumbling buttons, spilling drinks",
          "Slurred or irregular speech that comes and goes",
          "Difficulty with fine, precise movements and frequent loss of balance",
          "Dizziness or a sense of veering to one side when walking",
          "Symptoms that have crept in gradually, or arrived more suddenly after an illness",
        ],
        hi: [
          "अस्थिर, चौड़े आधार वाली चाल जो डगमगाती या 'नशे जैसी' दिखे, जबकि आपने पिया नहीं",
          "हाथों में अनाड़ीपन — पकड़ने में चूकना, बटन में उलझना, पेय गिराना",
          "लड़खड़ाती या अनियमित बोली जो आती-जाती है",
          "बारीक, सटीक हलचल में कठिनाई और बार-बार संतुलन खोना",
          "चक्कर या चलते समय एक तरफ़ मुड़ने का एहसास",
          "धीरे-धीरे आए लक्षण, या किसी बीमारी के बाद ज़्यादा अचानक आए",
        ],
      },
      whatItFeelsLike: {
        en: "Living with ataxia can feel like the body has lost its sense of where it is in space — every step needs concentration, every reach lands slightly off, and tasks that were once automatic now demand effort and care. Because an unsteady walk and slurred speech can be mistaken for intoxication, many people with ataxia also carry the sting of being misjudged in public. The experience varies enormously depending on the cause: some ataxias are temporary and reversible, others are long-term, which is exactly why a thorough search for the reason matters so much.",
        hi: "एटैक्सिया के साथ जीना ऐसा लग सकता है जैसे शरीर ने यह एहसास खो दिया हो कि वह अंतरिक्ष में कहाँ है — हर क़दम ध्यान माँगता है, हर पहुँच थोड़ी चूक जाती है, और जो काम कभी स्वचालित थे अब मेहनत माँगते हैं। चूँकि डगमगाती चाल और लड़खड़ाती बोली नशे से भ्रमित हो सकती है, एटैक्सिया वाले कई लोग सार्वजनिक रूप से ग़लत आँके जाने की चुभन भी झेलते हैं। अनुभव कारण के अनुसार बहुत बदलता है: कुछ एटैक्सिया अस्थायी और प्रतिवर्ती हैं, अन्य दीर्घकालिक — इसीलिए कारण की गहन खोज इतनी मायने रखती है।",
      },
      whatsHappening: {
        en: "Smooth, coordinated movement depends on the cerebellum — a region at the back of the brain that works like the body's fine-tuning controller, constantly correcting and balancing every action. In ataxia, the cerebellum or its connecting pathways aren't working properly, so movements lose their precision and balance falters. The causes are many: vitamin deficiencies, the effects of long-term alcohol, a stroke, an infection, certain medications, immune conditions, or inherited disorders. Because some of these are very treatable, the single most important step is identifying which one is responsible.",
        hi: "सहज, समन्वित हलचल अनुमस्तिष्क (सेरिबेलम) पर निर्भर है — दिमाग़ के पीछे का एक क्षेत्र जो शरीर के फ़ाइन-ट्यूनिंग नियंत्रक की तरह काम करता है, हर क्रिया को लगातार सुधारता और संतुलित करता हुआ। एटैक्सिया में सेरिबेलम या इसके जोड़ने वाले मार्ग ठीक से काम नहीं करते, इसलिए हलचल अपनी सटीकता खो देती है और संतुलन डगमगाता है। कारण कई हैं: विटामिन की कमी, लंबे समय की शराब का असर, स्ट्रोक, संक्रमण, कुछ दवाएँ, प्रतिरक्षा स्थितियाँ, या वंशानुगत विकार। चूँकि इनमें से कुछ बहुत इलाज-योग्य हैं, सबसे ज़रूरी क़दम है यह पहचानना कि कौन-सा ज़िम्मेदार है।",
      },
      redFlags: {
        en: [
          "Ataxia that comes on suddenly — over minutes or hours — needs emergency assessment for stroke",
          "Ataxia with a severe headache, vomiting, double vision, or slurred speech",
          "Rapidly worsening unsteadiness over days to weeks",
          "Ataxia with fever, confusion, or neck stiffness",
          "New falls with weakness or numbness in the limbs",
        ],
        hi: [
          "अचानक — मिनटों या घंटों में — आने वाला एटैक्सिया स्ट्रोक के लिए आपातकालीन जाँच माँगता है",
          "तेज़ सिरदर्द, उल्टी, दोहरा दिखना, या लड़खड़ाती बोली के साथ एटैक्सिया",
          "दिनों से हफ़्तों में तेज़ी से बिगड़ती अस्थिरता",
          "बुख़ार, भ्रम, या गर्दन अकड़न के साथ एटैक्सिया",
          "अंगों में कमज़ोरी या सुन्नपन के साथ नया गिरना",
        ],
      },
      howDrKumarTreats: {
        en: "With ataxia, the diagnosis is the treatment's foundation. Dr. Kumar performs a detailed neurological examination and then searches methodically for the cause — blood tests for vitamin levels, thyroid and other reversible factors, brain imaging to look at the cerebellum, and further targeted tests where indicated. When a treatable cause is found — a vitamin deficiency, an immune process, a medication effect — addressing it can lead to real recovery. Where the ataxia is long-term, the focus shifts to maximising function and safety: physiotherapy and balance rehabilitation to retrain coordination, occupational therapy and walking aids to prevent falls, speech therapy where needed, and treatment of any symptoms that can be eased. Throughout, Dr. Kumar's aim is to keep patients as steady, safe, and independent as possible, and to give families a clear understanding of what to expect.",
        hi: "एटैक्सिया में निदान ही इलाज की नींव है। डॉ. कुमार विस्तृत न्यूरोलॉजिकल जाँच करते हैं और फिर कारण की व्यवस्थित खोज करते हैं — विटामिन स्तर, थायरॉइड और अन्य प्रतिवर्ती कारकों के लिए रक्त परीक्षण, सेरिबेलम देखने के लिए दिमाग़ी इमेजिंग, और ज़रूरत पर आगे की लक्षित जाँचें। जब कोई इलाज-योग्य कारण मिले — विटामिन की कमी, प्रतिरक्षा प्रक्रिया, दवा का असर — उसे संबोधित करना वास्तविक रिकवरी ला सकता है। जहाँ एटैक्सिया दीर्घकालिक हो, ध्यान कार्य और सुरक्षा को अधिकतम करने पर जाता है: तालमेल फिर सिखाने के लिए फिज़ियोथेरेपी और संतुलन पुनर्वास, गिरने से रोकने के लिए ऑक्युपेशनल थेरेपी और चलने के सहारे, ज़रूरत पर स्पीच थेरेपी। पूरे दौरान डॉ. कुमार का लक्ष्य मरीज़ों को यथासंभव स्थिर, सुरक्षित और स्वतंत्र रखना है।",
      },
    },
  ],

  /* ── Myths & Facts (Hindi-first) ─────────────────────────── */
  myths: [
    {
      myth: { en: "A tremor in old age is just normal ageing — nothing can be done about it.", hi: "बुढ़ापे में कंपन बस सामान्य उम्र है — इसके बारे में कुछ नहीं किया जा सकता।" },
      fact: {
        en: "A persistent tremor is never 'just age' — it has a cause, and most causes are treatable. Whether it's Parkinson's, essential tremor, or something reversible like a thyroid problem, the right diagnosis opens the door to real relief. Dismissing it as ageing is how families lose years they didn't need to.",
        hi: "लगातार कंपन कभी 'बस उम्र' नहीं होता — इसका एक कारण है, और ज़्यादातर कारण इलाज-योग्य हैं। चाहे पार्किंसन हो, एसेंशियल ट्रेमर हो, या थायरॉइड जैसी प्रतिवर्ती समस्या, सही निदान असली राहत का दरवाज़ा खोलता है। इसे उम्र कहकर टालना ही वह तरीक़ा है जिससे परिवार बिना ज़रूरत के साल गँवाते हैं।",
      },
    },
    {
      myth: { en: "Parkinson's disease is a death sentence — life is basically over after the diagnosis.", hi: "पार्किंसन रोग मौत का फ़रमान है — निदान के बाद ज़िंदगी मूलतः ख़त्म हो जाती है।" },
      fact: {
        en: "Parkinson's is not fatal in itself, and a diagnosis is far from the end of an active life. With the right medication and exercise, most people continue to work, travel, and enjoy their families for many years. Treatment has transformed what living with Parkinson's looks like — the outlook is far more hopeful than the fear suggests.",
        hi: "पार्किंसन अपने आप में जानलेवा नहीं है, और निदान सक्रिय जीवन का अंत नहीं है। सही दवा और व्यायाम से ज़्यादातर लोग कई सालों तक काम करते, यात्रा करते, और परिवार का आनंद लेते रहते हैं। इलाज ने पार्किंसन के साथ जीने का रूप बदल दिया है — दृष्टिकोण डर से कहीं ज़्यादा आशावान है।",
      },
    },
    {
      myth: { en: "Shaking hands mean the person is just nervous, weak, or lacks willpower.", hi: "काँपते हाथों का मतलब है व्यक्ति बस घबराया, कमज़ोर, या इच्छाशक्ति की कमी वाला है।" },
      fact: {
        en: "A neurological tremor has nothing to do with nerves, weakness, or character — it comes from the brain's movement circuits, and no amount of 'trying harder' will stop it. Telling someone to just relax or be stronger adds shame to a medical condition. What helps is diagnosis and treatment, not willpower.",
        hi: "तंत्रिका-संबंधी कंपन का घबराहट, कमज़ोरी या चरित्र से कोई लेना-देना नहीं — यह दिमाग़ के हलचल परिपथों से आता है, और कितना भी 'ज़्यादा कोशिश' करना इसे नहीं रोकेगा। किसी को बस शांत होने या मज़बूत बनने कहना चिकित्सीय स्थिति में शर्म जोड़ता है। मदद निदान और इलाज करते हैं, इच्छाशक्ति नहीं।",
      },
    },
    {
      myth: { en: "Once Parkinson's medicines stop working as well, there's nothing more that can be done.", hi: "एक बार पार्किंसन दवाएँ कम काम करने लगें, तो कुछ और नहीं किया जा सकता।" },
      fact: {
        en: "When tablets alone stop giving smooth control, that is not the end of treatment — it's the point to adjust the regimen, and for carefully selected patients, to consider advanced therapies like deep brain stimulation, which can dramatically restore movement. Persistent symptoms almost always mean there is another option worth exploring.",
        hi: "जब अकेली गोलियाँ सहज नियंत्रण देना बंद कर दें, वह इलाज का अंत नहीं — यह दवाओं को समायोजित करने, और सावधानी से चुने मरीज़ों के लिए डीप ब्रेन स्टिमुलेशन जैसी उन्नत चिकित्सा पर विचार करने का बिंदु है, जो हलचल को नाटकीय रूप से बहाल कर सकती है। बने रहने वाले लक्षण लगभग हमेशा यह मतलब रखते हैं कि एक और विकल्प मौजूद है।",
      },
    },
    {
      myth: { en: "Parkinson's is contagious, or it means the family is cursed (kampvaat).", hi: "पार्किंसन संक्रामक है, या इसका मतलब है परिवार शापित है (कंपवात)।" },
      fact: {
        en: "Parkinson's cannot be passed from one person to another — not by touch, food, or living together — and it has nothing to do with curses, sin, or fate. It is a medical condition caused by changes in the brain's dopamine system. Treating it with rituals instead of medicine only delays the care that genuinely helps.",
        hi: "पार्किंसन एक व्यक्ति से दूसरे में नहीं फैल सकता — न छूने से, न खाने से, न साथ रहने से — और इसका श्राप, पाप या भाग्य से कोई लेना-देना नहीं। यह दिमाग़ के डोपामिन तंत्र में बदलाव से होने वाली चिकित्सीय स्थिति है। दवा की जगह कर्मकांड से इलाज केवल उस देखभाल को टालता है जो सच में मदद करती है।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you've never seen a neurologist for movement symptoms before, here's what a first visit with Dr. Kumar looks like.\n\n**The story comes first.** Dr. Kumar will ask in detail about the changes — when they started, which side, what's hardest in daily life, and the non-movement symptoms that matter too: sleep, smell, mood, and bowel habits. Because patients often adapt without realising how much has changed, a family member's observations are invaluable. If you have a phone video of the tremor or walking, bring it.\n\n**A hands-on movement examination.** Unlike many conditions, movement disorders are diagnosed mainly by examination, not scans. Dr. Kumar assesses tremor, stiffness, slowness, posture, balance, and gait — watching you walk and move. None of it is uncomfortable.\n\n**Investigations only where they add something.** Brain imaging is used mainly to rule out look-alike conditions, and blood tests to check for reversible causes. You won't be sent for tests without a clear reason.\n\n**You leave with a plan.** By the end you'll understand what condition is most likely, what the treatment options are, what to expect over time, and a follow-up schedule — because these conditions are managed over the long term, not in a single visit. Dr. Kumar also guides the family on day-to-day support.\n\n**What to bring:** any previous reports and scans, a complete list of current medicines, a phone video of the symptoms if available, and ideally a family member who has watched the changes unfold.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आप मूवमेंट लक्षणों के लिए पहले कभी न्यूरोलॉजिस्ट के पास नहीं गए, तो डॉ. कुमार की पहली विज़िट ऐसी होती है।\n\n**पहले कहानी।** डॉ. कुमार बदलावों के बारे में विस्तार से पूछेंगे — कब शुरू हुए, कौन-सी तरफ़, रोज़मर्रा में सबसे कठिन क्या है, और ग़ैर-हलचल लक्षण भी जो मायने रखते हैं: नींद, सूँघना, मनोदशा, और मल की आदतें। चूँकि मरीज़ अक्सर बिना एहसास के ढल जाते हैं, परिवार के सदस्य की टिप्पणियाँ अमूल्य हैं। अगर कंपन या चलने का फ़ोन वीडियो है, लाएँ।\n\n**प्रत्यक्ष मूवमेंट जाँच।** कई स्थितियों के विपरीत, मूवमेंट डिसऑर्डर मुख्यतः जाँच से पहचाने जाते हैं, स्कैन से नहीं। डॉ. कुमार कंपन, अकड़न, सुस्ती, मुद्रा, संतुलन और चाल का आकलन करते हैं — आपको चलते और हिलते देखते हुए। कुछ भी असहज नहीं है।\n\n**जाँचें केवल जहाँ कुछ जोड़ें।** दिमाग़ी इमेजिंग मुख्यतः मिलती-जुलती स्थितियों को नकारने के लिए, और रक्त परीक्षण प्रतिवर्ती कारणों की जाँच के लिए।\n\n**आप एक योजना लेकर जाते हैं।** अंत तक आप समझेंगे कि कौन-सी स्थिति सबसे संभावित है, इलाज के विकल्प क्या हैं, समय के साथ क्या उम्मीद रखें, और फ़ॉलो-अप का कार्यक्रम।\n\n**क्या लाएँ:** पिछली रिपोर्ट और स्कैन, मौजूदा दवाओं की पूरी सूची, उपलब्ध हो तो लक्षणों का फ़ोन वीडियो, और आदर्श रूप से एक परिवार का सदस्य।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── Stigma Callout (Hindi-first; exact master-layout copy) ─ */
  stigmaCallout: {
    en: "A tremor does not mean your life is over. Parkinson's is a treatable condition — most patients continue to live active, independent lives for many years with the right medical support. If you've been avoiding a diagnosis out of fear, know this: the earlier treatment begins, the better the outcomes.",
    hi: "कंपन का मतलब यह नहीं कि आपका जीवन ख़त्म हो गया। पार्किंसन एक इलाज-योग्य स्थिति है — सही चिकित्सा सहारे के साथ ज़्यादातर मरीज़ कई सालों तक सक्रिय, स्वतंत्र जीवन जीते रहते हैं। अगर आप डर से निदान टालते रहे हैं, तो यह जानें: इलाज जितनी जल्दी शुरू हो, परिणाम उतने बेहतर होते हैं।",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has cared for several hundred patients with Parkinson's and other movement disorders over the past decade, many of them followed for years as the condition and the family's needs evolve. His conviction is simple: *'A movement disorder is a long road, not a single appointment. My job is to keep people moving, keep them safe, and walk the whole journey with the family — not just write a prescription.'*\n\n**He diagnoses with his hands and his time, not just a scanner.** Movement disorders are clinical diagnoses, so he takes a detailed history and performs a careful movement examination, distinguishing Parkinson's from essential tremor, dystonia, ataxia, and the atypical conditions that mimic them — because the right label changes the entire treatment.\n\n**He tunes treatment to the day, not just the diagnosis.** Beyond starting levodopa and other medicines, he adjusts the timing and combination to smooth out fluctuations, uses botulinum toxin (Botox) for dystonia and selected tremor, and evaluates suitable patients for advanced options including deep brain stimulation referral.\n\n**He treats the whole person and the whole family.** He coordinates physiotherapy and exercise, watches for and treats depression, sleep problems and blood-pressure changes, and supports caregivers directly — because in these conditions, the family is part of the treatment. Most patients, with a well-tuned plan, stay active and independent for many years.",
    hi: "डॉ. कुमार ने पिछले दशक में कई सौ पार्किंसन और अन्य मूवमेंट डिसऑर्डर मरीज़ों की देखभाल की है, कई को सालों तक देखते हुए जैसे-जैसे स्थिति और परिवार की ज़रूरतें बदलती हैं। उनका विश्वास सरल है: *'मूवमेंट डिसऑर्डर एक लंबा रास्ता है, एक मुलाक़ात नहीं। मेरा काम है लोगों को चलते रखना, सुरक्षित रखना, और पूरी यात्रा परिवार के साथ चलना — सिर्फ़ नुस्ख़ा लिखना नहीं।'*\n\n**वे अपने हाथों और समय से निदान करते हैं, सिर्फ़ स्कैनर से नहीं।** मूवमेंट डिसऑर्डर नैदानिक निदान हैं, इसलिए वे विस्तृत हिस्ट्री लेते और ध्यान से मूवमेंट जाँच करते हैं, पार्किंसन को एसेंशियल ट्रेमर, डिस्टोनिया, एटैक्सिया और इनकी नक़ल करने वाली एटिपिकल स्थितियों से अलग करते हुए।\n\n**वे इलाज को दिन के अनुसार ट्यून करते हैं, सिर्फ़ निदान के अनुसार नहीं।** लेवोडोपा और अन्य दवाएँ शुरू करने के अलावा, वे उतार-चढ़ाव सहज करने के लिए समय और संयोजन समायोजित करते हैं, डिस्टोनिया और चुनिंदा कंपन के लिए बोटॉक्स उपयोग करते हैं, और उपयुक्त मरीज़ों का डीप ब्रेन स्टिमुलेशन रेफ़रल सहित उन्नत विकल्पों के लिए मूल्यांकन करते हैं।\n\n**वे पूरे व्यक्ति और पूरे परिवार का इलाज करते हैं।** वे फिज़ियोथेरेपी और व्यायाम का तालमेल करते हैं, अवसाद, नींद और रक्तचाप बदलाव देखते व इलाज करते हैं, और देखभालकर्ताओं को सीधे सहारा देते हैं।",
  },

  /* ── Patient Story (adapted from a verified Google review) ── */
  patientStory: {
    name: "Satendra Srivastava",
    initials: "S",
    condition: { en: "Parkinsonism", hi: "पार्किंसनिज़्म" },
    text: {
      en: "After living with Parkinson's symptoms for a long time, I finally found care that actually fit. Dr. Kumar's treatment approach for chronic parkinsonism is the best I have come across anywhere in Uttar Pradesh — patient, clearly explained, and genuinely effective. For the first time, I feel my condition is properly understood and managed.",
      hi: "लंबे समय तक पार्किंसन के लक्षणों के साथ जीने के बाद, आख़िरकार मुझे ऐसी देखभाल मिली जो सच में सही बैठी। पुराने पार्किंसनिज़्म के लिए डॉ. कुमार का इलाज का तरीक़ा उत्तर प्रदेश में मैंने जो भी देखा उनमें सबसे अच्छा है — धैर्यवान, साफ़ समझाया हुआ, और सच में असरदार। पहली बार मुझे लगता है कि मेरी स्थिति को ठीक से समझा और संभाला जा रहा है।",
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
      "Take Parkinson's medicines exactly on time, every time. The tablets work in windows — even being an hour late can bring on a sudden 'off' period of stiffness and slowness. Set phone alarms and keep a small spare supply with you when you go out.",
      "Never stop or change levodopa abruptly. Stopping suddenly can cause a dangerous reaction. Any change happens gradually and only under Dr. Kumar's guidance — including if another doctor or surgeon asks you to pause it.",
      "Move every day — exercise is genuine medicine here. Regular walking, stretching, balance work, and physiotherapy slow the impact of symptoms. Activities like dance, tai chi, or yoga are especially good for balance and confidence.",
      "Fall-proof the home. Remove loose rugs and clutter, add grab-rails in the bathroom, improve lighting, and wear well-fitting shoes. A single fall can undo months of progress.",
      "Watch mood and motivation, not just movement. Depression and apathy are common and very treatable — if you or the person you care for loses interest or withdraws, tell Dr. Kumar; treating it improves everything else.",
      "Keep a simple symptom diary — note good hours, 'off' periods, falls, and how the tremor changes. Bring it to every visit; it's the single most useful tool for fine-tuning the medicines.",
      "Caregivers: protect your own health and rest. This is a long road. Accept help, take breaks without guilt, and remember that a supported carer is the most valuable thing the patient has.",
    ],
    hi: [
      "पार्किंसन दवाएँ हर बार ठीक समय पर लें। गोलियाँ खिड़कियों में काम करती हैं — एक घंटा देर भी अकड़न और सुस्ती की अचानक 'ऑफ़' अवधि ला सकती है। फ़ोन अलार्म लगाएँ और बाहर जाते समय थोड़ी अतिरिक्त दवा रखें।",
      "लेवोडोपा कभी अचानक बंद या न बदलें। अचानक रोकना ख़तरनाक प्रतिक्रिया दे सकता है। कोई भी बदलाव धीरे-धीरे और केवल डॉ. कुमार के मार्गदर्शन में — भले ही कोई और डॉक्टर या सर्जन रोकने को कहे।",
      "हर दिन हिलें-डुलें — यहाँ व्यायाम सच्ची दवा है। नियमित सैर, खिंचाव, संतुलन अभ्यास और फिज़ियोथेरेपी लक्षणों का असर धीमा करते हैं। नृत्य, ताई ची, या योग संतुलन व आत्मविश्वास के लिए ख़ासकर अच्छे हैं।",
      "घर को गिरने से सुरक्षित बनाएँ। ढीले कालीन और बिखराव हटाएँ, बाथरूम में ग्रैब-रेल लगाएँ, रोशनी बेहतर करें, और ठीक फ़िट जूते पहनें। एक गिरना महीनों की प्रगति बिगाड़ सकता है।",
      "हलचल ही नहीं, मनोदशा और प्रेरणा पर नज़र रखें। अवसाद और उदासीनता आम और बहुत इलाज-योग्य हैं — अगर आप या जिनकी देखभाल करते हैं वे रुचि खोएँ या सिमटें, डॉ. कुमार को बताएँ।",
      "एक छोटी लक्षण डायरी रखें — अच्छे घंटे, 'ऑफ़' अवधि, गिरना, और कंपन कैसे बदलता है नोट करें। हर विज़िट पर लाएँ; दवाएँ ठीक करने का सबसे उपयोगी उपकरण यही है।",
      "देखभालकर्ता: अपनी सेहत और आराम की रक्षा करें। यह लंबा रास्ता है। मदद स्वीकार करें, बिना अपराधबोध के विराम लें, और याद रखें कि सहारा पाया देखभालकर्ता मरीज़ की सबसे मूल्यवान चीज़ है।",
    ],
  },

  /* ── FAQs ────────────────────────────────────────────────── */
  faqs: [
    {
      q: { en: "Will Parkinson's keep getting worse?", hi: "क्या पार्किंसन बिगड़ता ही रहेगा?" },
      a: {
        en: "Parkinson's does progress slowly over years, but 'progress' does not mean a rapid decline — with the right treatment, most people stay active and independent for a long time. The pace varies a lot between individuals, and good medication, exercise, and follow-up genuinely change the trajectory. We'll have a much clearer picture of your own pattern after the first few months of treatment.",
        hi: "पार्किंसन सालों में धीरे-धीरे बढ़ता है, पर 'बढ़ना' का मतलब तेज़ गिरावट नहीं — सही इलाज से ज़्यादातर लोग लंबे समय तक सक्रिय और स्वतंत्र रहते हैं। गति व्यक्तियों में बहुत बदलती है, और अच्छी दवा, व्यायाम और फ़ॉलो-अप सच में रास्ता बदलते हैं। इलाज के पहले कुछ महीनों बाद आपके अपने पैटर्न की स्पष्ट तस्वीर मिलेगी।",
      },
    },
    {
      q: { en: "Is Parkinson's disease fatal?", hi: "क्या पार्किंसन रोग जानलेवा है?" },
      a: {
        en: "Parkinson's itself is not a fatal disease, and people live with it for many years. The main risks come from complications like falls and difficulty swallowing in advanced stages — which is exactly why we work to prevent them with exercise, home safety, and careful follow-up. With good care, the goal of a full and long life is very realistic.",
        hi: "पार्किंसन अपने आप में जानलेवा बीमारी नहीं है, और लोग इसके साथ कई साल जीते हैं। मुख्य ख़तरे उन्नत चरणों में गिरने और निगलने में कठिनाई जैसी जटिलताओं से आते हैं — इसीलिए हम व्यायाम, घर की सुरक्षा और सावधान फ़ॉलो-अप से इन्हें रोकने का काम करते हैं। अच्छी देखभाल से पूरा और लंबा जीवन बहुत वास्तविक लक्ष्य है।",
      },
    },
    {
      q: { en: "Will I have to take medicines forever, and will they stop working?", hi: "क्या मुझे हमेशा दवाएँ लेनी होंगी, और क्या वे काम करना बंद कर देंगी?" },
      a: {
        en: "Most people with Parkinson's do take medication long-term, because it replaces what the brain is missing. Over time, some find the smooth effect wears off sooner between doses — but this is managed by adjusting the timing and combination, adding other medicines, and for selected patients considering deep brain stimulation. Running into 'wearing off' is not the end of options; it's a signal to fine-tune the plan.",
        hi: "ज़्यादातर पार्किंसन मरीज़ दवा लंबे समय तक लेते हैं, क्योंकि यह उसकी भरपाई करती है जो दिमाग़ में कम है। समय के साथ कुछ को खुराकों के बीच सहज असर जल्दी कम होता लगता है — पर इसे समय और संयोजन समायोजित करके, अन्य दवाएँ जोड़कर, और चुनिंदा मरीज़ों में डीप ब्रेन स्टिमुलेशन पर विचार करके संभाला जाता है। 'वियरिंग ऑफ़' तक पहुँचना विकल्पों का अंत नहीं।",
      },
    },
    {
      q: { en: "Is Parkinson's hereditary — will my children get it?", hi: "क्या पार्किंसन वंशानुगत है — क्या मेरे बच्चों को होगा?" },
      a: {
        en: "For the large majority of people, Parkinson's is not directly inherited, and having it does not mean your children will develop it. A small minority of cases have a genetic component, usually when the disease starts at a young age or several close relatives are affected. If that applies to your family, Dr. Kumar can discuss it with you — but for most families, the risk to children is low.",
        hi: "अधिकांश लोगों के लिए पार्किंसन सीधे वंशानुगत नहीं है, और इसका होना यह मतलब नहीं कि आपके बच्चों को होगा। मामलों के एक छोटे हिस्से में आनुवंशिक घटक होता है, आमतौर पर जब बीमारी कम उम्र में शुरू हो या कई क़रीबी रिश्तेदार प्रभावित हों। अगर यह आपके परिवार पर लागू हो, डॉ. कुमार आपसे चर्चा कर सकते हैं — पर ज़्यादातर परिवारों के लिए बच्चों को ख़तरा कम है।",
      },
    },
    {
      q: { en: "What is deep brain stimulation, and am I a candidate?", hi: "डीप ब्रेन स्टिमुलेशन क्या है, और क्या मैं इसके लिए उपयुक्त हूँ?" },
      a: {
        en: "Deep brain stimulation (DBS) is an advanced treatment in which fine electrodes, placed in specific brain regions, deliver gentle electrical signals that smooth out movement. It can be remarkably effective for selected patients whose symptoms are no longer well-controlled by tablets alone — particularly troublesome tremor or fluctuations. Not everyone needs or is suited to it, and it doesn't replace medication entirely. Dr. Kumar assesses whether it's appropriate for you and refers to a specialist centre when it is.",
        hi: "डीप ब्रेन स्टिमुलेशन (DBS) एक उन्नत इलाज है जिसमें विशिष्ट दिमाग़ी क्षेत्रों में रखे बारीक इलेक्ट्रोड हल्के बिजली संकेत देते हैं जो हलचल को सहज करते हैं। यह चुनिंदा मरीज़ों के लिए उल्लेखनीय रूप से असरदार हो सकता है जिनके लक्षण अकेली गोलियों से नियंत्रित न हों — ख़ासकर परेशान करने वाला कंपन या उतार-चढ़ाव। हर किसी को इसकी ज़रूरत या उपयुक्तता नहीं, और यह दवा को पूरी तरह नहीं बदलता। डॉ. कुमार आकलन करते हैं कि यह आपके लिए उपयुक्त है या नहीं।",
      },
    },
    {
      q: { en: "What will the consultation cost, and is the treatment expensive?", hi: "परामर्श में कितना खर्च होगा, और क्या इलाज महँगा है?" },
      a: {
        en: "The first consultation is ₹1,000 and follow-ups are ₹500. For most patients, treatment means daily oral medication that is affordable and adjusted over time, plus exercise and physiotherapy. Because the diagnosis is clinical, expensive tests are usually not needed — and Dr. Kumar will always explain why any investigation is necessary before ordering it. Advanced therapies like DBS are only for a small, selected group and are discussed in detail if relevant.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। ज़्यादातर मरीज़ों के लिए इलाज का मतलब है रोज़ की मुँह की दवा जो किफ़ायती है और समय के साथ समायोजित, साथ ही व्यायाम और फिज़ियोथेरेपी। चूँकि निदान नैदानिक है, महँगी जाँचें आमतौर पर ज़रूरी नहीं — और डॉ. कुमार कोई भी जाँच मँगाने से पहले हमेशा कारण बताएँगे। DBS जैसी उन्नत चिकित्सा केवल एक छोटे, चुनिंदा समूह के लिए है।",
      },
    },
  ],
};

export default data;
