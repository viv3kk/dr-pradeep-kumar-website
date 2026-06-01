import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "epilepsy-and-seizures",
  name: { en: "Epilepsy & Seizures", hi: "मिर्गी और दौरे" },
  shortName: { en: "Epilepsy & Seizures", hi: "मिर्गी और दौरे" },
  color: "teal",
  icon: "⚡",
  tier: 2,

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: { en: "Epilepsy & Seizures Clinic", hi: "मिर्गी और दौरे क्लिनिक" },
    tagline: {
      en: "When your body does things your mind didn't choose.",
      hi: "जब आपका शरीर वो करता है जो आपके मन ने नहीं चुना।",
    },
    supportLine: {
      en: "A seizure can be one of the most frightening things to witness — or to live through. But epilepsy is a medical condition of the brain, not a curse, not a weakness, and in most people it is highly treatable. If you or someone you love has had a seizure, you're in the right place. Let's understand what's happening, and what can be done.",
      hi: "दौरा देखना — या उससे गुज़रना — सबसे डरावने अनुभवों में से एक हो सकता है। लेकिन मिर्गी दिमाग़ की एक चिकित्सीय स्थिति है, न कोई श्राप, न कमज़ोरी — और ज़्यादातर लोगों में इसका बहुत अच्छा इलाज होता है। अगर आपको या आपके किसी अपने को दौरा पड़ा है, आप सही जगह पर हैं। आइए समझते हैं कि क्या हो रहा है, और क्या किया जा सकता है।",
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
    en: "Epilepsy affects roughly 1 in 100 people in India — millions of families — yet it remains one of the most misunderstood conditions in medicine. Many patients never reach a neurologist because of fear, stigma, or the belief that seizures are caused by something supernatural. That delay is costly: epilepsy is, for most people, highly treatable, and around 70% of patients become seizure-free with the right medication. The first step is the right diagnosis — what type of seizures you have, and why. If your family doctor has suggested you see a neurologist, that's the right move, and this page will help you understand what comes next.",
    hi: "भारत में मिर्गी लगभग हर 100 में से 1 व्यक्ति को होती है — लाखों परिवार — फिर भी यह चिकित्सा की सबसे ग़लत समझी जाने वाली स्थितियों में से एक है। कई मरीज़ डर, कलंक, या इस विश्वास के कारण कभी न्यूरोलॉजिस्ट तक नहीं पहुँचते कि दौरे किसी अलौकिक शक्ति से होते हैं। यह देरी महँगी पड़ती है: ज़्यादातर लोगों के लिए मिर्गी का बहुत अच्छा इलाज है, और सही दवा से लगभग 70% मरीज़ दौरे-मुक्त हो जाते हैं। पहला कदम है सही पहचान — आपको किस प्रकार के दौरे पड़ते हैं, और क्यों। अगर आपके परिवार के डॉक्टर ने न्यूरोलॉजिस्ट के पास जाने को कहा है, तो यह सही कदम है।",
  },

  /* ── TOC with entity tags ─────────────────────────────────── */
  toc: [
    {
      label: { en: "Focal Epilepsy", hi: "फ़ोकल मिर्गी" },
      anchor: "focal",
      entityTags: [
        { en: "Focal aware seizures", hi: "फ़ोकल अवेयर दौरे" },
        { en: "Focal impaired-awareness", hi: "फ़ोकल इम्पेयर्ड-अवेयरनेस" },
        { en: "Temporal lobe epilepsy", hi: "टेम्पोरल लोब मिर्गी" },
      ],
    },
    {
      label: { en: "Generalised Epilepsy", hi: "जनरलाइज़्ड मिर्गी" },
      anchor: "generalised",
      entityTags: [
        { en: "Tonic-clonic seizures", hi: "टॉनिक-क्लोनिक दौरे" },
        { en: "Absence seizures", hi: "एब्सेंस दौरे" },
        { en: "Myoclonic seizures", hi: "मायोक्लोनिक दौरे" },
      ],
    },
    {
      label: { en: "Status Epilepticus", hi: "स्टेटस एपिलेप्टिकस" },
      anchor: "status-epilepticus",
      entityTags: [
        { en: "Prolonged seizure", hi: "लंबा दौरा" },
        { en: "Seizure emergency", hi: "दौरा आपात स्थिति" },
      ],
    },
    {
      label: { en: "Febrile Seizures", hi: "बुख़ार के दौरे" },
      anchor: "febrile",
      entityTags: [
        { en: "Fever seizures in children", hi: "बच्चों में बुख़ार के दौरे" },
        { en: "Simple febrile seizure", hi: "साधारण बुख़ार दौरा" },
      ],
    },
  ],

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic 1: Focal Epilepsy ─────────────────────────── */
    {
      slug: "focal",
      name: { en: "Focal Epilepsy", hi: "फ़ोकल मिर्गी" },
      intro: {
        en: "Focal seizures start in one part of the brain — and they don't always look like the seizures people imagine.",
        hi: "फ़ोकल दौरे दिमाग़ के एक हिस्से से शुरू होते हैं — और हमेशा वैसे नहीं दिखते जैसे लोग सोचते हैं।",
      },
      couldThisBeYou: {
        en: [
          "Sudden, brief episodes where you 'blank out' or stare for a few seconds, then carry on",
          "A strange rising feeling in the stomach, an odd smell, or a wave of déjà vu that comes from nowhere",
          "Repetitive movements you don't control — lip-smacking, fumbling with your hands, fidgeting",
          "Jerking or twitching in one arm, one leg, or one side of the face",
          "Moments you can't remember afterwards — people tell you that you 'weren't there' for a minute",
          "Episodes that always feel the same each time they happen",
        ],
        hi: [
          "अचानक, छोटे पल जहाँ आप कुछ सेकंड के लिए 'खो' जाते हैं या एकटक देखते रहते हैं, फिर सामान्य हो जाते हैं",
          "पेट में ऊपर उठती अजीब-सी भावना, एक विचित्र गंध, या अचानक 'यह पहले हो चुका है' का एहसास",
          "ऐसी दोहराई जाने वाली हरकतें जो आपके बस में नहीं — होंठ चबाना, हाथ टटोलना, बेचैनी",
          "एक बाँह, एक पैर, या चेहरे के एक तरफ़ झटके या फड़कन",
          "ऐसे पल जो बाद में याद नहीं रहते — लोग बताते हैं कि आप एक मिनट के लिए 'वहाँ नहीं थे'",
          "ऐसे दौरे जो हर बार एक जैसे महसूस होते हैं",
        ],
      },
      whatItFeelsLike: {
        en: "Focal seizures are deeply personal — no two people experience them quite the same way. Some describe a warning 'aura' seconds before: a rising sensation, a metallic taste, a sudden fear, or a memory that feels too vivid. In a focal aware seizure, the person stays conscious but cannot stop what's happening. In a focal impaired-awareness seizure, awareness fades — the person may stare, repeat movements, or wander, and remember nothing afterwards. To family members, these can look like daydreaming, confusion, or 'odd behaviour' — which is exactly why they're so often missed.",
        hi: "फ़ोकल दौरे बहुत निजी होते हैं — कोई भी दो लोग इन्हें एक जैसा अनुभव नहीं करते। कुछ कुछ सेकंड पहले एक चेतावनी 'ऑरा' बताते हैं: ऊपर उठती भावना, धातु जैसा स्वाद, अचानक डर, या बहुत स्पष्ट लगने वाली याद। फ़ोकल अवेयर दौरे में व्यक्ति होश में रहता है पर रोक नहीं सकता। फ़ोकल इम्पेयर्ड-अवेयरनेस दौरे में होश धुंधला जाता है — व्यक्ति एकटक देख सकता है, हरकतें दोहरा सकता है, और बाद में कुछ याद नहीं रहता। परिवार को यह दिवास्वप्न, भ्रम या 'अजीब व्यवहार' लग सकता है — इसीलिए ये अक्सर पकड़ में नहीं आते।",
      },
      whatsHappening: {
        en: "A seizure is, at its core, an electrical event. The brain runs on tiny, carefully-timed electrical signals between cells. In a focal seizure, a small group of brain cells in one area suddenly fires together in an abnormal, synchronised burst — like a short-circuit in one room of a house rather than the whole building. What you experience depends entirely on which 'room' is involved: the part of the brain that handles smell, memory, movement, or emotion. This is why focal seizures take so many forms. Identifying where they start is the key to treating them — and that's what an EEG and a careful history are designed to find.",
        hi: "दौरा अपने मूल में एक बिजली की घटना है। दिमाग़ कोशिकाओं के बीच छोटे, सटीक समय वाले बिजली के संकेतों पर चलता है। फ़ोकल दौरे में, एक क्षेत्र की कुछ दिमाग़ी कोशिकाएँ अचानक असामान्य, एक-साथ विस्फोट में चलने लगती हैं — जैसे पूरे घर की बजाय एक कमरे में शॉर्ट-सर्किट। आप क्या अनुभव करते हैं यह पूरी तरह इस पर निर्भर है कि कौन-सा 'कमरा' शामिल है: गंध, याददाश्त, हलचल या भावना संभालने वाला हिस्सा। इसीलिए फ़ोकल दौरे इतने रूप लेते हैं। वे कहाँ से शुरू होते हैं यह पहचानना ही इलाज की कुंजी है — और EEG व ध्यान से ली गई हिस्ट्री यही ढूँढने के लिए हैं।",
      },
      redFlags: {
        en: [
          "A first-ever seizure of any kind — always needs medical evaluation",
          "Seizures that change in pattern, frequency, or become longer",
          "A seizure followed by weakness, confusion, or difficulty speaking that doesn't fully clear",
          "Injury during a seizure — a fall, a burn, a tongue bite",
          "Seizures despite taking medication regularly",
        ],
        hi: [
          "किसी भी प्रकार का पहला दौरा — हमेशा चिकित्सीय मूल्यांकन ज़रूरी",
          "दौरों का पैटर्न, बारंबारता बदलना, या लंबा होना",
          "दौरे के बाद कमज़ोरी, भ्रम, या बोलने में तकलीफ़ जो पूरी तरह न जाए",
          "दौरे के दौरान चोट — गिरना, जलना, जीभ कटना",
          "नियमित दवा के बावजूद दौरे पड़ना",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first task is to confirm that the episodes are seizures — many conditions can mimic them — and then identify the type and where they begin. This starts with a detailed history (often the family's account matters more than the patient's), a neurological examination, and an EEG to record the brain's electrical activity. For cases that are hard to pin down, video-EEG monitoring captures both the seizure and the brain activity together. An MRI is ordered when a structural cause is suspected. For most focal epilepsy, the right anti-epileptic medication brings seizures fully under control. When seizures persist despite well-chosen medication (drug-resistant epilepsy), Dr. Kumar evaluates the patient for further options and refers for epilepsy surgery assessment where appropriate. Most patients achieve good control within a few months — and many eventually live completely seizure-free.",
        hi: "डॉ. कुमार का पहला काम यह पुष्टि करना है कि ये पल दौरे हैं — कई स्थितियाँ इनकी नक़ल कर सकती हैं — और फिर प्रकार व शुरुआत का स्थान पहचानना। यह विस्तृत हिस्ट्री (अक्सर परिवार का विवरण मरीज़ से ज़्यादा मायने रखता है), न्यूरोलॉजिकल जाँच, और दिमाग़ की बिजली गतिविधि रिकॉर्ड करने के लिए EEG से शुरू होता है। मुश्किल मामलों में video-EEG निगरानी दौरे और दिमाग़ी गतिविधि दोनों एक साथ पकड़ती है। संरचनात्मक कारण की आशंका पर MRI मँगाई जाती है। ज़्यादातर फ़ोकल मिर्गी में सही दवा दौरों को पूरी तरह नियंत्रित कर देती है। जब अच्छी दवा के बावजूद दौरे बने रहें (ड्रग-रेज़िस्टेंट मिर्गी), डॉ. कुमार आगे के विकल्पों के लिए मूल्यांकन करते हैं और ज़रूरत पर मिर्गी सर्जरी आकलन के लिए रेफ़र करते हैं। ज़्यादातर मरीज़ कुछ महीनों में अच्छा नियंत्रण पा लेते हैं।",
      },
    },

    /* ── Topic 2: Generalised Epilepsy ───────────────────── */
    {
      slug: "generalised",
      name: { en: "Generalised Epilepsy", hi: "जनरलाइज़्ड मिर्गी" },
      intro: {
        en: "Generalised seizures involve both sides of the brain from the start — and range from a brief blank stare to a full convulsion.",
        hi: "जनरलाइज़्ड दौरे शुरू से ही दिमाग़ के दोनों हिस्सों को शामिल करते हैं — और एक छोटे शून्य घूरने से लेकर पूरे ऐंठन तक होते हैं।",
      },
      couldThisBeYou: {
        en: [
          "A sudden convulsion — the body stiffens, then jerks rhythmically, with loss of consciousness (a tonic-clonic seizure)",
          "Brief 'absences' — staring spells of a few seconds, common in children, often mistaken for inattention",
          "Sudden, brief muscle jerks, especially in the morning — dropping a cup, a coffee, a toothbrush",
          "Biting the tongue or losing bladder control during an episode",
          "Waking up confused, sore, or with no memory of what happened",
          "A family history of seizures or epilepsy",
        ],
        hi: [
          "अचानक ऐंठन — शरीर अकड़ता है, फिर लयबद्ध झटके, बेहोशी के साथ (टॉनिक-क्लोनिक दौरा)",
          "छोटे 'एब्सेंस' — कुछ सेकंड के घूरने वाले पल, बच्चों में आम, अक्सर असावधानी समझे जाते हैं",
          "अचानक, छोटे मांसपेशी झटके, ख़ासकर सुबह — कप, चाय, या ब्रश गिरना",
          "दौरे के दौरान जीभ कटना या पेशाब पर नियंत्रण खोना",
          "उठने पर भ्रमित, दर्द में, या कुछ याद न रहना",
          "परिवार में दौरों या मिर्गी का इतिहास",
        ],
      },
      whatItFeelsLike: {
        en: "A tonic-clonic seizure is what most people picture as 'a fit' — and it is genuinely frightening to witness. The person loses consciousness, the body stiffens and then jerks, and breathing may briefly look laboured. It usually stops on its own within 1–3 minutes, followed by deep confusion and exhaustion. Absence seizures are the opposite — so subtle that a child may have dozens a day before anyone notices the staring spells are not daydreaming. Myoclonic seizures feel like sudden electric jolts. What unites them is that, from the very first second, the abnormal electrical activity sweeps across the whole brain at once.",
        hi: "टॉनिक-क्लोनिक दौरा वही है जिसे ज़्यादातर लोग 'फ़िट' समझते हैं — और देखना सच में डरावना होता है। व्यक्ति बेहोश हो जाता है, शरीर अकड़ता और फिर झटके खाता है, साँस कुछ पल कठिन लग सकती है। यह आमतौर पर 1–3 मिनट में अपने आप रुक जाता है, फिर गहरा भ्रम और थकान। एब्सेंस दौरे उल्टे होते हैं — इतने सूक्ष्म कि किसी बच्चे को दिन में दर्जनों पड़ सकते हैं इससे पहले कि कोई समझे कि घूरना दिवास्वप्न नहीं है। मायोक्लोनिक दौरे अचानक बिजली के झटके जैसे लगते हैं।",
      },
      whatsHappening: {
        en: "If a focal seizure is a short-circuit in one room, a generalised seizure is a power surge that hits the whole house at once. The brain's two halves fire in an abnormal, synchronised storm from the very beginning. Many generalised epilepsies have a genetic basis — they run in families and often begin in childhood or the teenage years — which is why they are not anyone's 'fault' and not the result of anything the patient did. The good news is that generalised epilepsies are often among the most responsive to medication, and many people outgrow certain types entirely.",
        hi: "अगर फ़ोकल दौरा एक कमरे का शॉर्ट-सर्किट है, तो जनरलाइज़्ड दौरा एक बिजली का झटका है जो पूरे घर को एक साथ पकड़ता है। दिमाग़ के दोनों हिस्से शुरू से ही असामान्य, एक-साथ तूफ़ान में चलते हैं। कई जनरलाइज़्ड मिर्गी आनुवंशिक होती हैं — परिवारों में चलती हैं और अक्सर बचपन या किशोरावस्था में शुरू होती हैं — इसीलिए ये किसी की 'ग़लती' नहीं हैं। अच्छी ख़बर यह है कि जनरलाइज़्ड मिर्गी अक्सर दवा पर सबसे अच्छा असर दिखाती हैं, और कई लोग कुछ प्रकारों से पूरी तरह उबर जाते हैं।",
      },
      redFlags: {
        en: [
          "Any convulsion lasting longer than 5 minutes — call an ambulance (108) immediately",
          "A second seizure before the person fully recovers from the first",
          "A seizure in water, or one causing a serious injury",
          "Difficulty breathing or blue lips that don't recover after the seizure ends",
          "A first convulsion in someone with no prior history",
        ],
        hi: [
          "5 मिनट से लंबा कोई भी ऐंठन — तुरंत एम्बुलेंस (108) बुलाएँ",
          "पहले दौरे से पूरी तरह उबरने से पहले दूसरा दौरा",
          "पानी में दौरा, या गंभीर चोट पहुँचाने वाला दौरा",
          "दौरा ख़त्म होने के बाद भी साँस लेने में तकलीफ़ या नीले होंठ",
          "बिना पूर्व इतिहास वाले व्यक्ति में पहला ऐंठन",
        ],
      },
      howDrKumarTreats: {
        en: "Diagnosis again begins with a careful history and an EEG, which is especially useful in generalised epilepsy because it often shows a characteristic pattern. Choosing the right medication matters enormously here — some anti-epileptic drugs that work for focal seizures can actually worsen certain generalised types, so getting the classification right is not academic. Dr. Kumar selects the medication to match the specific syndrome, starts at a low dose, and adjusts gradually to control seizures with the fewest side effects. For women of child-bearing age, he pays particular attention to choosing medications that are safe for future pregnancy. Most patients with generalised epilepsy gain excellent control, and Dr. Kumar reviews regularly to fine-tune the plan and, where appropriate, discuss eventually reducing medication.",
        hi: "निदान फिर ध्यान से ली गई हिस्ट्री और EEG से शुरू होता है, जो जनरलाइज़्ड मिर्गी में ख़ास उपयोगी है क्योंकि यह अक्सर एक विशिष्ट पैटर्न दिखाती है। यहाँ सही दवा चुनना बेहद अहम है — कुछ दवाएँ जो फ़ोकल दौरों में काम करती हैं वे कुछ जनरलाइज़्ड प्रकारों को बिगाड़ सकती हैं, इसलिए वर्गीकरण सही करना ज़रूरी है। डॉ. कुमार दवा को विशिष्ट सिंड्रोम के अनुसार चुनते हैं, कम खुराक से शुरू करते हैं, और कम से कम दुष्प्रभाव के साथ दौरे नियंत्रित करने के लिए धीरे-धीरे समायोजित करते हैं। बच्चे पैदा करने की उम्र की महिलाओं के लिए वे भविष्य की गर्भावस्था हेतु सुरक्षित दवाएँ चुनने पर ख़ास ध्यान देते हैं।",
      },
    },

    /* ── Topic 3: Status Epilepticus ─────────────────────── */
    {
      slug: "status-epilepticus",
      name: { en: "Status Epilepticus", hi: "स्टेटस एपिलेप्टिकस" },
      intro: {
        en: "A seizure that won't stop — lasting more than 5 minutes, or repeating without recovery — is a medical emergency. Every minute counts.",
        hi: "एक दौरा जो रुकता नहीं — 5 मिनट से ज़्यादा चले, या उबरे बिना दोहराए — एक चिकित्सीय आपात स्थिति है। हर मिनट मायने रखता है।",
      },
      couldThisBeYou: {
        en: [
          "A convulsion that has lasted more than 5 minutes without stopping",
          "One seizure followed by another, without the person waking up in between",
          "A person who remains unconscious and unresponsive long after the jerking stops",
          "Continuous confusion or altered behaviour that doesn't clear (non-convulsive status)",
          "A known epilepsy patient whose seizure is far longer than their usual ones",
        ],
        hi: [
          "5 मिनट से ज़्यादा बिना रुके चलने वाला ऐंठन",
          "एक दौरे के बाद दूसरा, बीच में व्यक्ति के होश में आए बिना",
          "झटके रुकने के बहुत बाद तक बेहोश और अनुत्तरदायी व्यक्ति",
          "लगातार भ्रम या बदला व्यवहार जो न जाए (नॉन-कन्वल्सिव स्टेटस)",
          "ज्ञात मिर्गी मरीज़ का दौरा जो उसके सामान्य से कहीं लंबा हो",
        ],
      },
      whatItFeelsLike: {
        en: "For the family, status epilepticus is terrifying because the seizure simply does not end the way previous ones did. The body keeps convulsing, or the person stays unconscious between repeated seizures. This is the one seizure situation that must never be 'waited out' at home. The longer the brain stays in this continuous electrical storm, the higher the risk of lasting harm — which is why the response is the same as for any emergency: get to a hospital immediately.",
        hi: "परिवार के लिए स्टेटस एपिलेप्टिकस भयावह है क्योंकि दौरा वैसे ख़त्म नहीं होता जैसे पहले होते थे। शरीर ऐंठता रहता है, या व्यक्ति बार-बार दौरों के बीच बेहोश रहता है। यह एकमात्र दौरा स्थिति है जिसे घर पर कभी 'इंतज़ार' नहीं करना चाहिए। दिमाग़ जितनी देर इस लगातार बिजली तूफ़ान में रहे, स्थायी नुकसान का ख़तरा उतना बढ़ता है — इसीलिए जवाब वही है जो किसी आपात स्थिति में: तुरंत अस्पताल पहुँचें।",
      },
      whatsHappening: {
        en: "Normally, the brain has its own 'brakes' that bring a seizure to a stop within a minute or two. In status epilepticus, those braking mechanisms fail, and the abnormal electrical activity sustains itself. It can happen to someone with known epilepsy (often after missed medication) or as the first sign of a new problem — an infection, a metabolic disturbance, or a stroke. Because prolonged seizure activity can injure brain cells, hospital treatment aims to stop it as fast as possible with emergency medications, while finding and treating the underlying trigger.",
        hi: "आम तौर पर, दिमाग़ के पास अपने 'ब्रेक' होते हैं जो दौरे को एक-दो मिनट में रोक देते हैं। स्टेटस एपिलेप्टिकस में ये ब्रेक विफल हो जाते हैं, और असामान्य बिजली गतिविधि खुद को बनाए रखती है। यह ज्ञात मिर्गी वाले व्यक्ति को (अक्सर दवा छूटने के बाद) या किसी नई समस्या के पहले संकेत के रूप में — संक्रमण, चयापचय गड़बड़ी, या स्ट्रोक — हो सकता है। चूँकि लंबा दौरा दिमाग़ी कोशिकाओं को चोट पहुँचा सकता है, अस्पताल इलाज इसे जल्द से जल्द रोकने का लक्ष्य रखता है।",
      },
      redFlags: {
        en: [
          "Any seizure lasting 5 minutes or more — call 108 and get to an emergency room now",
          "Repeated seizures without the person regaining consciousness in between",
          "A seizure with high fever, stiff neck, or a severe headache",
          "Breathing difficulty during or after the seizure",
          "A first prolonged seizure in someone with no epilepsy history",
        ],
        hi: [
          "5 मिनट या उससे ज़्यादा चलने वाला कोई भी दौरा — 108 बुलाएँ और अभी आपातकालीन कक्ष पहुँचें",
          "बीच में होश में आए बिना बार-बार दौरे",
          "तेज़ बुख़ार, गर्दन अकड़न, या तेज़ सिरदर्द के साथ दौरा",
          "दौरे के दौरान या बाद में साँस लेने में तकलीफ़",
          "बिना मिर्गी इतिहास वाले व्यक्ति में पहला लंबा दौरा",
        ],
      },
      howDrKumarTreats: {
        en: "Status epilepticus is a true emergency, and the priority is to stop the seizure immediately with fast-acting medications given in hospital, while protecting the airway and breathing. At Paras Health Kanpur, Dr. Kumar manages these cases with the emergency and intensive-care teams, escalating treatment in a structured sequence until the seizure stops. Equally important is finding why it happened — blood tests, imaging, and sometimes a lumbar puncture to look for infection. Once the crisis is over, Dr. Kumar reviews the patient's long-term plan: if medication was missed, why; if this is new epilepsy, starting the right treatment; and how to make sure it does not happen again. Families are given a clear written plan, including a rescue medication where appropriate, so they know exactly what to do if a seizure ever runs long again.",
        hi: "स्टेटस एपिलेप्टिकस एक सच्ची आपात स्थिति है, और प्राथमिकता है अस्पताल में तेज़-असर वाली दवाओं से दौरे को तुरंत रोकना, साथ ही साँस की रक्षा करना। पारस हेल्थ कानपुर में डॉ. कुमार इन मामलों को आपातकालीन और गहन-चिकित्सा टीमों के साथ संभालते हैं, दौरा रुकने तक इलाज को क्रमबद्ध बढ़ाते हैं। उतना ही ज़रूरी है यह जानना कि ऐसा क्यों हुआ — रक्त परीक्षण, इमेजिंग, और कभी-कभी संक्रमण देखने के लिए लम्बर पंक्चर। संकट टलने के बाद डॉ. कुमार दीर्घकालिक योजना की समीक्षा करते हैं। परिवारों को एक स्पष्ट लिखित योजना दी जाती है, जिसमें ज़रूरत पर एक रेस्क्यू दवा शामिल है।",
      },
    },

    /* ── Topic 4: Febrile Seizures ───────────────────────── */
    {
      slug: "febrile",
      name: { en: "Febrile Seizures", hi: "बुख़ार के दौरे" },
      intro: {
        en: "A seizure during a fever in a young child is one of the most frightening things a parent can see — and one of the most often harmless.",
        hi: "छोटे बच्चे में बुख़ार के दौरान दौरा माता-पिता के लिए सबसे डरावनी चीज़ों में से एक है — और अक्सर सबसे कम हानिकारक भी।",
      },
      couldThisBeYou: {
        en: [
          "A child between 6 months and 5 years has a seizure while running a fever",
          "The child stiffens or jerks, then becomes drowsy, during an illness with high temperature",
          "The seizure was brief — under a few minutes — and the child recovered afterwards",
          "There may be a family history of febrile seizures in childhood",
          "It happened with a common infection — a cold, ear infection, or viral fever",
        ],
        hi: [
          "6 महीने से 5 साल के बीच का बच्चा बुख़ार के दौरान दौरे का शिकार होता है",
          "तेज़ बुख़ार वाली बीमारी में बच्चा अकड़ता या झटके खाता है, फिर सुस्त हो जाता है",
          "दौरा छोटा था — कुछ मिनटों से कम — और बच्चा बाद में उबर गया",
          "बचपन में बुख़ार के दौरों का पारिवारिक इतिहास हो सकता है",
          "यह किसी आम संक्रमण के साथ हुआ — सर्दी, कान का संक्रमण, या वायरल बुख़ार",
        ],
      },
      whatItFeelsLike: {
        en: "For a parent, watching a feverish child suddenly seize feels like the worst moment of your life — many are convinced their child is dying. The reassuring truth is that most febrile seizures are simple, brief, and harmless: they stop on their own, the child recovers, and there is no lasting effect on the brain or on development. They are not epilepsy, and most children never have another once they grow past this age. What matters in the moment is staying calm, keeping the child safe from injury, and getting them seen to confirm the fever's cause.",
        hi: "माता-पिता के लिए, बुख़ार वाले बच्चे को अचानक दौरा पड़ते देखना ज़िंदगी का सबसे बुरा पल लगता है — कई आश्वस्त हो जाते हैं कि उनका बच्चा मर रहा है। आश्वस्त करने वाला सच यह है कि ज़्यादातर बुख़ार के दौरे साधारण, छोटे और हानिरहित होते हैं: अपने आप रुक जाते हैं, बच्चा उबर जाता है, और दिमाग़ या विकास पर कोई स्थायी असर नहीं होता। ये मिर्गी नहीं हैं, और ज़्यादातर बच्चों को इस उम्र के बाद दोबारा नहीं होते।",
      },
      whatsHappening: {
        en: "A young child's developing brain is more sensitive to a rapid rise in body temperature. In some children — often those with a family tendency — a sudden fever can briefly trigger the brain into a seizure. It is the rate of temperature change, not a brain disease, that sets it off. This is why febrile seizures are a normal-development phenomenon, not a sign of epilepsy, and why children reliably outgrow them as the brain matures. A neurologist's role is mainly to confirm that this is what happened, rule out the rare serious causes, and reassure the family.",
        hi: "छोटे बच्चे का विकसित होता दिमाग़ शरीर के तापमान में तेज़ वृद्धि के प्रति ज़्यादा संवेदनशील होता है। कुछ बच्चों में — अक्सर पारिवारिक प्रवृत्ति वाले — अचानक बुख़ार दिमाग़ को थोड़ी देर के लिए दौरे में डाल सकता है। यह तापमान बदलने की गति है, न कि कोई दिमाग़ी बीमारी, जो इसे शुरू करती है। इसीलिए बुख़ार के दौरे सामान्य-विकास की घटना हैं, मिर्गी का संकेत नहीं, और बच्चे दिमाग़ परिपक्व होते ही इनसे उबर जाते हैं।",
      },
      redFlags: {
        en: [
          "A febrile seizure lasting more than 5 minutes — call 108",
          "More than one seizure within the same illness or same day",
          "A seizure affecting only one side of the body",
          "A child who remains drowsy, floppy, or unwell long after the seizure",
          "Fever with a stiff neck, persistent vomiting, or a rash — possible brain infection",
        ],
        hi: [
          "5 मिनट से ज़्यादा चलने वाला बुख़ार दौरा — 108 बुलाएँ",
          "एक ही बीमारी या एक ही दिन में एक से ज़्यादा दौरे",
          "केवल शरीर के एक तरफ़ असर करने वाला दौरा",
          "ऐसा बच्चा जो दौरे के बहुत बाद तक सुस्त, ढीला या बीमार रहे",
          "बुख़ार के साथ गर्दन अकड़न, लगातार उल्टी, या चकत्ते — संभावित दिमाग़ी संक्रमण",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's main job with febrile seizures is careful reassurance backed by a proper check. He confirms the seizure was febrile, examines the child, and looks for the source of the fever — making sure a serious infection like meningitis is not being missed. Simple febrile seizures usually need no anti-epilepsy medication at all; the focus is on managing fevers sensibly and knowing what to do if another occurs. For the rare complex or prolonged cases, he advises on a rescue plan and follow-up. Most importantly, he gives parents what they most need: a clear explanation that their child does not have epilepsy, is not brain-damaged, and will almost certainly outgrow this.",
        hi: "बुख़ार के दौरों में डॉ. कुमार का मुख्य काम है उचित जाँच के साथ सावधान आश्वासन। वे पुष्टि करते हैं कि दौरा बुख़ार से था, बच्चे की जाँच करते हैं, और बुख़ार का स्रोत ढूँढते हैं — यह सुनिश्चित करते हुए कि मेनिनजाइटिस जैसा गंभीर संक्रमण छूट न जाए। साधारण बुख़ार के दौरों में आमतौर पर कोई मिर्गी दवा नहीं चाहिए; ध्यान बुख़ार को समझदारी से संभालने और दोबारा होने पर क्या करें यह जानने पर होता है। सबसे ज़रूरी, वे माता-पिता को वही देते हैं जिसकी उन्हें सबसे ज़्यादा ज़रूरत है: एक स्पष्ट समझ कि उनके बच्चे को मिर्गी नहीं है।",
      },
    },
  ],

  /* ── Myths & Facts (Hindi-first; addresses Mirgi beliefs) ── */
  myths: [
    {
      myth: { en: "Epilepsy is caused by supernatural forces, black magic, or past sins.", hi: "मिर्गी अलौकिक शक्तियों, जादू-टोने, या पिछले पापों से होती है।" },
      fact: {
        en: "Epilepsy is a medical condition of the brain — abnormal electrical activity between brain cells. It has nothing to do with curses, spirits, or sin. Treating it with prayers or rituals instead of medicine costs patients years of needless suffering. With the right diagnosis and medication, around 70% of people become completely seizure-free.",
        hi: "मिर्गी दिमाग़ की एक चिकित्सीय स्थिति है — दिमाग़ी कोशिकाओं के बीच असामान्य बिजली गतिविधि। इसका श्राप, आत्माओं या पाप से कोई लेना-देना नहीं। दवा की जगह झाड़-फूँक से इलाज मरीज़ों के सालों बर्बाद करता है। सही पहचान और दवा से लगभग 70% लोग पूरी तरह दौरे-मुक्त हो जाते हैं।",
      },
    },
    {
      myth: { en: "Epilepsy is a mental illness or a sign of low intelligence.", hi: "मिर्गी एक मानसिक बीमारी या कम बुद्धि का संकेत है।" },
      fact: {
        en: "Epilepsy is a neurological condition, not a psychiatric one, and it has no connection to intelligence. People with epilepsy include doctors, engineers, athletes, and artists. Between seizures, the vast majority lead completely ordinary lives, study, work, and raise families like anyone else.",
        hi: "मिर्गी एक तंत्रिका-संबंधी स्थिति है, मानसिक रोग नहीं, और इसका बुद्धि से कोई संबंध नहीं। मिर्गी वाले लोगों में डॉक्टर, इंजीनियर, खिलाड़ी और कलाकार शामिल हैं। दौरों के बीच, अधिकांश पूरी तरह सामान्य जीवन जीते हैं, पढ़ते हैं, काम करते हैं, और परिवार चलाते हैं।",
      },
    },
    {
      myth: { en: "Epilepsy is contagious — you can catch it from someone having a seizure.", hi: "मिर्गी संक्रामक है — दौरे वाले से यह फैल सकती है।" },
      fact: {
        en: "Epilepsy cannot be passed from person to person in any way — not by touch, by sharing food, or by being near someone during a seizure. Holding and helping someone during a seizure is completely safe, and it can keep them from getting hurt. The fear of 'catching' epilepsy is one of the cruellest myths, because it isolates people who most need support.",
        hi: "मिर्गी किसी भी तरह एक व्यक्ति से दूसरे में नहीं फैल सकती — न छूने से, न खाना बाँटने से, न दौरे के दौरान पास रहने से। दौरे के दौरान किसी को थामना और मदद करना पूरी तरह सुरक्षित है। 'मिर्गी लग जाने' का डर सबसे क्रूर भ्रांतियों में से एक है, क्योंकि यह उन्हें अलग कर देता है जिन्हें सबसे ज़्यादा सहारे की ज़रूरत है।",
      },
    },
    {
      myth: { en: "You should put a spoon, key, or shoe in the mouth to stop someone swallowing their tongue during a seizure.", hi: "दौरे में जीभ निगलने से रोकने के लिए मुँह में चम्मच, चाबी या जूता रखना चाहिए।" },
      fact: {
        en: "Never put anything in the mouth of a person having a seizure — it is impossible to swallow your tongue, and forcing objects in causes broken teeth, injuries, and choking. Instead: turn them gently onto their side, cushion the head, move dangerous objects away, and time the seizure. Call 108 if it lasts more than 5 minutes.",
        hi: "दौरे वाले व्यक्ति के मुँह में कभी कुछ न डालें — जीभ निगलना असंभव है, और ज़बरदस्ती चीज़ें डालने से दाँत टूटना, चोट और दम घुटना होता है। इसके बजाय: उन्हें धीरे से करवट पर लिटाएँ, सिर के नीचे कुछ नरम रखें, ख़तरनाक चीज़ें हटाएँ, और दौरे का समय देखें। 5 मिनट से ज़्यादा चले तो 108 बुलाएँ।",
      },
    },
    {
      myth: { en: "A person with epilepsy can never marry, have children, drive, or hold a normal job.", hi: "मिर्गी वाला व्यक्ति कभी शादी, बच्चे, गाड़ी या सामान्य नौकरी नहीं कर सकता।" },
      fact: {
        en: "Once seizures are well-controlled, most people with epilepsy marry, have healthy children, work, and live fully. Women with epilepsy can have safe pregnancies with the right medication planning — which is exactly why seeing a neurologist matters. Driving is usually possible after a defined seizure-free period. Hiding the diagnosis to avoid stigma is far more dangerous than the condition itself.",
        hi: "एक बार दौरे अच्छी तरह नियंत्रित हो जाएँ, ज़्यादातर मिर्गी वाले लोग शादी करते हैं, स्वस्थ बच्चे पैदा करते हैं, काम करते हैं और पूरा जीवन जीते हैं। मिर्गी वाली महिलाएँ सही दवा योजना के साथ सुरक्षित गर्भावस्था पा सकती हैं — इसीलिए न्यूरोलॉजिस्ट से मिलना ज़रूरी है। एक निश्चित दौरे-मुक्त अवधि के बाद आमतौर पर गाड़ी चलाना संभव है। कलंक से बचने के लिए बीमारी छुपाना बीमारी से कहीं ज़्यादा ख़तरनाक है।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you've never seen a neurologist before, here's what a first visit with Dr. Kumar for seizures looks like.\n\n**The story matters most.** Dr. Kumar will ask in detail about the episodes — what happens before, during, and after, how long they last, how often they come, and whether there are any triggers. Because patients often don't remember their own seizures, an account from a family member who has witnessed one is incredibly valuable. If anyone has managed to record a seizure on a phone, bring that — it can be more useful than any test.\n\n**A focused examination.** Dr. Kumar performs a neurological examination, and an EEG may be scheduled to record the brain's electrical activity. For seizures that are hard to classify, video-EEG monitoring may be arranged. An MRI is ordered only when a structural cause needs to be ruled out.\n\n**Investigations with a reason.** You won't be sent for a long list of tests 'just in case.' Each investigation is chosen to answer a specific question about your seizure type and cause.\n\n**You leave with a plan.** By the end of the visit you'll understand what type of seizures you have, whether you need medication, what to do if a seizure happens, and a follow-up timeline. Dr. Kumar also explains seizure first-aid to the family so everyone knows how to keep you safe.\n\n**What to bring:** any previous EEG or MRI reports, a list of current medicines, a phone video of a seizure if available, and ideally a family member who has witnessed an episode.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आप पहले कभी न्यूरोलॉजिस्ट के पास नहीं गए, तो दौरों के लिए डॉ. कुमार की पहली विज़िट ऐसी होती है।\n\n**कहानी सबसे ज़्यादा मायने रखती है।** डॉ. कुमार दौरों के बारे में विस्तार से पूछेंगे — पहले, दौरान और बाद में क्या होता है, कितनी देर चलते हैं, कितनी बार आते हैं, और कोई ट्रिगर है या नहीं। चूँकि मरीज़ अक्सर अपने दौरे याद नहीं रख पाते, किसी परिवार के सदस्य का विवरण बेहद मूल्यवान है। अगर किसी ने फ़ोन पर दौरा रिकॉर्ड किया है, उसे लाएँ — वह किसी भी जाँच से ज़्यादा उपयोगी हो सकता है।\n\n**केंद्रित जाँच।** डॉ. कुमार न्यूरोलॉजिकल जाँच करते हैं, और दिमाग़ की बिजली गतिविधि रिकॉर्ड करने के लिए EEG तय की जा सकती है। मुश्किल मामलों में video-EEG निगरानी की व्यवस्था हो सकती है। MRI केवल तभी मँगाई जाती है जब संरचनात्मक कारण नकारना हो।\n\n**कारण सहित जाँचें।** आपको 'सिर्फ़ एहतियातन' लंबी जाँचों की सूची के लिए नहीं भेजा जाएगा।\n\n**आप एक योजना लेकर जाते हैं।** विज़िट के अंत तक आप समझेंगे कि आपको किस प्रकार के दौरे हैं, दवा चाहिए या नहीं, दौरा पड़ने पर क्या करें, और फ़ॉलो-अप का समय। डॉ. कुमार परिवार को दौरे का प्राथमिक उपचार भी समझाते हैं।\n\n**क्या लाएँ:** पिछली EEG या MRI रिपोर्ट, मौजूदा दवाओं की सूची, उपलब्ध हो तो दौरे का फ़ोन वीडियो, और आदर्श रूप से एक परिवार का सदस्य जिसने दौरा देखा हो।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── Stigma Callout (Hindi-first; exact master-layout copy) ─ */
  stigmaCallout: {
    en: "Epilepsy is not a mental illness. It is not contagious. It is not caused by supernatural forces or past sins. It is a medical condition of the brain — and in most cases, it is treatable. If anyone has told you otherwise, they were wrong. You deserve proper medical care without shame.",
    hi: "मिर्गी कोई मानसिक बीमारी नहीं है। यह संक्रामक नहीं है। यह किसी अलौकिक शक्ति या पिछले पापों से नहीं होती। यह दिमाग़ की एक चिकित्सीय स्थिति है — और ज़्यादातर मामलों में इसका इलाज होता है। अगर किसी ने आपसे कुछ और कहा है, तो वे ग़लत थे। आप बिना किसी शर्म के सही चिकित्सा देखभाल के हक़दार हैं।",
  },

  /* ── For the People Caring for Them ─────────────────────── */
  caregiverSection: {
    en: "If someone you love has epilepsy, you carry a quiet, constant alertness that others rarely see — listening for a fall in the next room, watching for the blank stare, never quite switching off. That vigilance is love, but it's also exhausting, and it's okay to admit that.\n\nThe single most useful thing you can do is learn seizure first-aid, because it turns helplessness into action. If you witness a seizure: stay calm and time it, ease the person to the floor and turn them onto their side, put something soft under the head, and move away anything they could hit. Do not hold them down, and never put anything in their mouth. Most seizures stop on their own within 2–3 minutes — but if one lasts more than 5 minutes, or a second begins before they wake, call 108 immediately.\n\nBeyond the moment, you can help by gently supporting medication routines (missed doses are the commonest cause of breakthrough seizures), keeping a simple seizure diary for Dr. Kumar, and pushing back — kindly but firmly — against the stigma and 'advice' that surrounds epilepsy in our communities. And please look after yourself too. A rested, supported carer is the best thing for the person you're caring for.",
    hi: "अगर आपके किसी अपने को मिर्गी है, तो आप एक शांत, लगातार सतर्कता लिए रहते हैं जो दूसरों को कम दिखती है — अगले कमरे में गिरने की आहट सुनते, शून्य घूरने पर नज़र रखते, कभी पूरी तरह आराम नहीं कर पाते। यह सतर्कता प्यार है, पर थकाने वाली भी — और इसे मानना ठीक है।\n\nसबसे उपयोगी काम है दौरे का प्राथमिक उपचार सीखना, क्योंकि यह बेबसी को कार्रवाई में बदल देता है। अगर दौरा देखें: शांत रहें और समय देखें, व्यक्ति को धीरे से फ़र्श पर लिटाकर करवट पर करें, सिर के नीचे कुछ नरम रखें, और टकराने वाली चीज़ें हटाएँ। उन्हें दबाएँ नहीं, और मुँह में कुछ न डालें। ज़्यादातर दौरे 2–3 मिनट में अपने आप रुक जाते हैं — पर अगर एक 5 मिनट से ज़्यादा चले, या जागने से पहले दूसरा शुरू हो, तुरंत 108 बुलाएँ।\n\nउस पल के अलावा, आप दवा की दिनचर्या में मदद करके (खुराक छूटना दौरों का सबसे आम कारण है), डॉ. कुमार के लिए एक छोटी दौरा डायरी रखकर, और मिर्गी के इर्द-गिर्द के कलंक व 'सलाहों' के ख़िलाफ़ नम्रता से डटकर मदद कर सकते हैं। और अपना भी ख़याल रखें।",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has cared for several hundred patients with epilepsy over the past decade — from children with febrile seizures to adults with drug-resistant epilepsy. His conviction is simple: *'Epilepsy is one of the most treatable conditions in neurology. The tragedy is how many people never get treated — not because medicine fails them, but because stigma reaches them first.'*\n\n**He gets the diagnosis right before reaching for a prescription.** Using a careful history, EEG, and where needed video-EEG monitoring, he classifies the seizure type precisely — because the wrong drug for the wrong seizure type can make epilepsy worse, not better.\n\n**He treats drug-resistant epilepsy seriously.** When seizures persist despite well-chosen medication, he reassesses the diagnosis, optimises therapy, and refers appropriate patients for epilepsy-surgery evaluation rather than leaving them to struggle indefinitely.\n\n**He plans for the whole life, not just the seizure.** That means choosing medications that are safe for women planning pregnancy, counselling on driving, study and work, and treating the stigma around epilepsy as part of the condition itself. Most patients reach good seizure control within a few months of starting the right plan.",
    hi: "डॉ. कुमार ने पिछले दशक में कई सौ मिर्गी मरीज़ों की देखभाल की है — बुख़ार के दौरों वाले बच्चों से लेकर ड्रग-रेज़िस्टेंट मिर्गी वाले वयस्कों तक। उनका विश्वास सरल है: *'मिर्गी न्यूरोलॉजी की सबसे इलाज-योग्य स्थितियों में से एक है। त्रासदी यह है कि कितने लोग कभी इलाज नहीं पाते — इसलिए नहीं कि दवा विफल होती है, बल्कि इसलिए कि कलंक उन तक पहले पहुँच जाता है।'*\n\n**वे नुस्ख़े से पहले निदान सही करते हैं।** ध्यान से ली गई हिस्ट्री, EEG, और ज़रूरत पर video-EEG निगरानी से वे दौरे का प्रकार सटीक वर्गीकृत करते हैं — क्योंकि ग़लत प्रकार के लिए ग़लत दवा मिर्गी बिगाड़ सकती है।\n\n**वे ड्रग-रेज़िस्टेंट मिर्गी को गंभीरता से लेते हैं।** जब अच्छी दवा के बावजूद दौरे बने रहें, वे निदान फिर से जाँचते हैं, इलाज अनुकूलित करते हैं, और उपयुक्त मरीज़ों को मिर्गी-सर्जरी मूल्यांकन के लिए रेफ़र करते हैं।\n\n**वे पूरे जीवन की योजना बनाते हैं, सिर्फ़ दौरे की नहीं।** इसका मतलब है गर्भावस्था की योजना बनाने वाली महिलाओं के लिए सुरक्षित दवाएँ चुनना, गाड़ी, पढ़ाई और काम पर सलाह, और मिर्गी के कलंक का इलाज स्थिति के हिस्से के रूप में करना।",
  },

  /* ── Patient Story (adapted from a verified Google review) ── */
  patientStory: {
    name: "Rohit Bansal",
    initials: "R",
    condition: { en: "Epilepsy", hi: "मिर्गी" },
    text: {
      en: "I had been dealing with epilepsy for years before I came to Dr. Kumar. He reviewed everything carefully and adjusted my medication — and now my seizures are well controlled. After so long without proper answers, finally having it managed the right way has made all the difference.",
      hi: "डॉ. कुमार के पास आने से पहले मैं सालों से मिर्गी से जूझ रहा था। उन्होंने सब कुछ ध्यान से देखा और मेरी दवा को समायोजित किया — और अब मेरे दौरे अच्छी तरह नियंत्रित हैं। इतने लंबे समय तक सही जवाब न मिलने के बाद, आख़िरकार इसका ठीक से इलाज होना सब कुछ बदल गया।",
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
      "Take your medication at the same time every day, without fail. Missed doses are the single most common reason a controlled epilepsy suddenly breaks through. Set a phone alarm and keep a spare day's supply with you.",
      "Never stop anti-epileptic medication on your own, even if you've had no seizures for a long time. Stopping suddenly can trigger a severe seizure. Any change happens gradually and only under Dr. Kumar's guidance.",
      "Protect your sleep. Lack of sleep is one of the most powerful seizure triggers — keep a regular sleep schedule, even on weekends and during exams or night shifts.",
      "Keep a simple seizure diary — date, time, how long it lasted, and what was happening before. Bring it to every visit; it's how Dr. Kumar fine-tunes your treatment.",
      "Limit alcohol and avoid recreational drugs — both lower the seizure threshold and interact with medication. Be cautious with swimming and heights until your seizures are well-controlled.",
      "Teach the people around you simple seizure first-aid: turn me on my side, cushion my head, time it, nothing in the mouth, and call 108 if it lasts over 5 minutes. It protects you and calms them.",
      "Talk openly with Dr. Kumar about driving, pregnancy, study, and work. These are normal parts of life with epilepsy, and there are clear, safe ways to manage each — secrecy only creates risk.",
    ],
    hi: [
      "अपनी दवा हर दिन एक ही समय पर लें, बिना चूके। खुराक छूटना नियंत्रित मिर्गी के अचानक लौटने का सबसे आम कारण है। फ़ोन पर अलार्म लगाएँ और एक दिन की अतिरिक्त दवा साथ रखें।",
      "मिर्गी की दवा अपने आप कभी बंद न करें, भले ही लंबे समय से दौरा न पड़ा हो। अचानक रोकना गंभीर दौरा ला सकता है। कोई भी बदलाव धीरे-धीरे और केवल डॉ. कुमार के मार्गदर्शन में होता है।",
      "अपनी नींद की रक्षा करें। नींद की कमी सबसे ताक़तवर दौरा ट्रिगर्स में से एक है — नियमित नींद का समय रखें, छुट्टियों, परीक्षाओं या रात की पाली में भी।",
      "एक छोटी दौरा डायरी रखें — तारीख़, समय, कितनी देर चला, और पहले क्या हो रहा था। हर विज़िट पर लाएँ; इसी से डॉ. कुमार इलाज ठीक करते हैं।",
      "शराब सीमित करें और नशीली चीज़ों से बचें — दोनों दौरे की सीमा घटाते हैं और दवा से टकराते हैं। दौरे अच्छी तरह नियंत्रित होने तक तैराकी और ऊँचाई में सावधानी रखें।",
      "अपने आस-पास के लोगों को सरल दौरा प्राथमिक उपचार सिखाएँ: करवट पर लिटाएँ, सिर के नीचे नरम रखें, समय देखें, मुँह में कुछ न डालें, और 5 मिनट से ज़्यादा चले तो 108 बुलाएँ।",
      "गाड़ी, गर्भावस्था, पढ़ाई और काम के बारे में डॉ. कुमार से खुलकर बात करें। ये मिर्गी के साथ जीवन के सामान्य हिस्से हैं, और हर एक को संभालने के स्पष्ट, सुरक्षित तरीक़े हैं — छुपाना ही ख़तरा पैदा करता है।",
    ],
  },

  /* ── FAQs ────────────────────────────────────────────────── */
  faqs: [
    {
      q: { en: "Will I have epilepsy for the rest of my life?", hi: "क्या मुझे जीवन भर मिर्गी रहेगी?" },
      a: {
        en: "Not necessarily. Around 70% of people with epilepsy become completely seizure-free with the right medication. For many, after a long seizure-free period (often 2–3 years), Dr. Kumar may carefully consider gradually reducing and even stopping medication. Some epilepsies, especially certain childhood types, are outgrown entirely. The outlook is far more hopeful than most people assume.",
        hi: "ज़रूरी नहीं। लगभग 70% मिर्गी वाले लोग सही दवा से पूरी तरह दौरे-मुक्त हो जाते हैं। कई के लिए, लंबे दौरे-मुक्त समय (अक्सर 2–3 साल) के बाद, डॉ. कुमार सावधानी से दवा धीरे-धीरे कम करने और बंद करने पर भी विचार कर सकते हैं। कुछ मिर्गी, ख़ासकर बचपन की कुछ प्रकार, पूरी तरह उबर जाती हैं।",
      },
    },
    {
      q: { en: "Will I have to take medicine forever?", hi: "क्या मुझे हमेशा दवा लेनी होगी?" },
      a: {
        en: "Not always. Anti-epileptic medication is usually continued until you've been seizure-free for a sustained period, after which Dr. Kumar may discuss slowly tapering it. The key is that any change is gradual and supervised — stopping medication suddenly or on your own is dangerous and can trigger a serious seizure. Many patients do eventually come off medication successfully.",
        hi: "हमेशा नहीं। मिर्गी की दवा आमतौर पर तब तक जारी रहती है जब तक आप एक लंबे समय तक दौरे-मुक्त न रहें, जिसके बाद डॉ. कुमार धीरे-धीरे कम करने पर बात कर सकते हैं। मुख्य बात यह है कि कोई भी बदलाव धीरे-धीरे और निगरानी में हो — दवा अचानक या अपने आप बंद करना ख़तरनाक है। कई मरीज़ अंततः सफलतापूर्वक दवा छोड़ देते हैं।",
      },
    },
    {
      q: { en: "Can I drive, work, marry, and have children with epilepsy?", hi: "क्या मैं मिर्गी के साथ गाड़ी चला सकता हूँ, काम कर सकता हूँ, शादी और बच्चे कर सकता हूँ?" },
      a: {
        en: "Yes — once your seizures are well-controlled, all of these are possible, and most people with epilepsy live full, ordinary lives. Driving is generally allowed after a defined seizure-free period. Women can have safe, healthy pregnancies with the right medication planned in advance — which is exactly why it's important to tell Dr. Kumar if you're planning a family. The biggest barrier is usually stigma, not the condition.",
        hi: "हाँ — एक बार आपके दौरे अच्छी तरह नियंत्रित हो जाएँ, ये सब संभव हैं, और ज़्यादातर मिर्गी वाले लोग पूरा, सामान्य जीवन जीते हैं। एक निश्चित दौरे-मुक्त अवधि के बाद आमतौर पर गाड़ी चलाने की अनुमति होती है। महिलाएँ पहले से योजना बनाई सही दवा के साथ सुरक्षित, स्वस्थ गर्भावस्था पा सकती हैं — इसीलिए परिवार की योजना हो तो डॉ. कुमार को बताना ज़रूरी है।",
      },
    },
    {
      q: { en: "What should my family do if I have a seizure?", hi: "अगर मुझे दौरा पड़े तो मेरे परिवार को क्या करना चाहिए?" },
      a: {
        en: "Stay calm and note the time. Ease the person to the floor, turn them onto their side, cushion the head, and move away anything they could hit. Do not hold them down and never put anything in the mouth. Most seizures stop on their own in 2–3 minutes. Call 108 immediately if the seizure lasts more than 5 minutes, if a second one starts before they wake, or if they're injured or struggling to breathe.",
        hi: "शांत रहें और समय नोट करें। व्यक्ति को फ़र्श पर लिटाएँ, करवट पर करें, सिर के नीचे नरम रखें, और टकराने वाली चीज़ें हटाएँ। उन्हें दबाएँ नहीं और मुँह में कुछ न डालें। ज़्यादातर दौरे 2–3 मिनट में अपने आप रुक जाते हैं। 5 मिनट से ज़्यादा चले, जागने से पहले दूसरा शुरू हो, या चोट/साँस की तकलीफ़ हो तो तुरंत 108 बुलाएँ।",
      },
    },
    {
      q: { en: "Do I really need an EEG or MRI?", hi: "क्या मुझे सच में EEG या MRI चाहिए?" },
      a: {
        en: "An EEG is usually very helpful in epilepsy — it records the brain's electrical activity and helps identify the seizure type, which directly guides treatment. An MRI is not always needed; Dr. Kumar orders it when a structural cause needs to be ruled out. You won't be sent for unnecessary tests — each one is chosen to answer a specific question about your seizures.",
        hi: "मिर्गी में EEG आमतौर पर बहुत उपयोगी है — यह दिमाग़ की बिजली गतिविधि रिकॉर्ड करती है और दौरे का प्रकार पहचानने में मदद करती है, जो सीधे इलाज तय करता है। MRI हमेशा ज़रूरी नहीं; डॉ. कुमार इसे तब मँगाते हैं जब संरचनात्मक कारण नकारना हो। आपको ग़ैर-ज़रूरी जाँचों के लिए नहीं भेजा जाएगा।",
      },
    },
    {
      q: { en: "What will the consultation cost, and is treatment expensive?", hi: "परामर्श में कितना खर्च होगा, और क्या इलाज महँगा है?" },
      a: {
        en: "The first consultation is ₹1,000 and follow-ups are ₹500. For most patients, epilepsy treatment is affordable — it usually means one or two oral medications taken daily, adjusted over time. An EEG is a modest one-time cost. Dr. Kumar will always explain why any test is needed before ordering it, and chooses effective medications with cost in mind.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। ज़्यादातर मरीज़ों के लिए मिर्गी का इलाज किफ़ायती है — आमतौर पर रोज़ ली जाने वाली एक या दो मुँह की दवाएँ, समय के साथ समायोजित। EEG एक मामूली एक-बार का खर्च है। डॉ. कुमार कोई भी जाँच मँगाने से पहले हमेशा कारण बताते हैं।",
      },
    },
  ],
};

export default data;
