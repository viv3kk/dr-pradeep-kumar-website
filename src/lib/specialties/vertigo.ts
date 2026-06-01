import type { Specialty } from "@/lib/specialties-data";

const data: Specialty = {
  slug: "vertigo",
  name: { en: "Vertigo", hi: "चक्कर (वर्टिगो)" },
  shortName: { en: "Vertigo", hi: "चक्कर (वर्टिगो)" },
  color: "teal",
  icon: "🌀",
  tier: 2,

  /* ── Hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: { en: "Vertigo & Dizziness Clinic", hi: "चक्कर और सिर घूमना क्लिनिक" },
    tagline: {
      en: "When the world won't stand still.",
      hi: "जब दुनिया रुकने का नाम न ले।",
    },
    supportLine: {
      en: "If the room spins when you turn over in bed, if you grab the wall just to stay upright, if you've been told it's 'just weakness' or 'just gas' — you deserve a real answer. Vertigo is one of the most misdiagnosed problems in medicine, and also one of the most treatable, often in a single visit. Let's find out exactly what's making your world spin, and stop it.",
      hi: "अगर बिस्तर पर करवट लेते ही कमरा घूमने लगे, अगर खड़े रहने के लिए आपको दीवार थामनी पड़े, अगर आपसे कहा गया है कि यह 'बस कमज़ोरी' है या 'बस गैस' — तो आप एक सच्चे जवाब के हक़दार हैं। चक्कर चिकित्सा की सबसे ग़लत पहचानी जाने वाली समस्याओं में से एक है, और सबसे इलाज-योग्य भी, अक्सर एक ही विज़िट में। आइए ठीक-ठीक पता लगाते हैं कि आपकी दुनिया क्यों घूम रही है, और इसे रोकते हैं।",
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
    en: "Vertigo — the false sense that you or the world around you is spinning — is one of the most common reasons people visit a doctor, and one of the most frequently misdiagnosed. Patients are often told it's weakness, low blood pressure, anaemia, or 'just stress', and handed medicines that dull the symptom without ever finding the cause. Here is the good news: the great majority of vertigo comes from the inner ear, and most causes are highly treatable — some, like the commonest one, can be fixed in a few minutes in the clinic with no daily medication at all. The key is a correct diagnosis. This page explains the conditions we see most often, and how Dr. Kumar gets to the bottom of why your world is spinning.",
    hi: "चक्कर — यह झूठा एहसास कि आप या आपके चारों ओर की दुनिया घूम रही है — डॉक्टर के पास जाने के सबसे आम कारणों में से एक है, और सबसे ज़्यादा ग़लत पहचाने जाने वालों में भी। मरीज़ों को अक्सर कहा जाता है कि यह कमज़ोरी, कम रक्तचाप, ख़ून की कमी, या 'बस तनाव' है, और ऐसी दवाएँ दी जाती हैं जो लक्षण दबा देती हैं पर कारण कभी नहीं ढूँढतीं। अच्छी ख़बर यह है: ज़्यादातर चक्कर भीतरी कान से आते हैं, और अधिकांश कारण बहुत इलाज-योग्य हैं — कुछ, जैसे सबसे आम वाला, बिना किसी रोज़ की दवा के क्लिनिक में कुछ मिनटों में ठीक हो सकते हैं। कुंजी है सही निदान।",
  },

  /* ── TOC with entity tags ─────────────────────────────────── */
  toc: [
    {
      label: { en: "BPPV", hi: "बीपीपीवी (BPPV)" },
      anchor: "bppv",
      entityTags: [
        { en: "Positional vertigo", hi: "पोज़िशनल चक्कर" },
        { en: "Ear-crystal vertigo", hi: "कान-क्रिस्टल चक्कर" },
        { en: "Epley manoeuvre", hi: "एप्ले मूवमेंट" },
      ],
    },
    {
      label: { en: "Vestibular Neuritis", hi: "वेस्टिबुलर न्यूराइटिस" },
      anchor: "vestibular-neuritis",
      entityTags: [
        { en: "Labyrinthitis", hi: "लैबिरिंथाइटिस" },
        { en: "Balance-nerve inflammation", hi: "संतुलन-नस सूजन" },
      ],
    },
    {
      label: { en: "Ménière's Disease", hi: "मेनियर्स रोग" },
      anchor: "menieres",
      entityTags: [
        { en: "Recurrent vertigo", hi: "बार-बार चक्कर" },
        { en: "Hearing loss & tinnitus", hi: "सुनने की हानि और कान बजना" },
      ],
    },
    {
      label: { en: "Central Vertigo", hi: "केंद्रीय चक्कर" },
      anchor: "central",
      entityTags: [
        { en: "Brain-related vertigo", hi: "दिमाग़-संबंधी चक्कर" },
        { en: "Vestibular migraine", hi: "वेस्टिबुलर माइग्रेन" },
      ],
    },
  ],

  /* ── Condition Topics ─────────────────────────────────────── */
  topics: [
    /* ── Topic 1: BPPV ───────────────────────────────────── */
    {
      slug: "bppv",
      name: { en: "BPPV (Positional Vertigo)", hi: "बीपीपीवी (पोज़िशनल चक्कर)" },
      intro: {
        en: "The single most common cause of vertigo — and one of the most satisfying to treat, often in minutes, without any daily medicine.",
        hi: "चक्कर का सबसे आम कारण — और इलाज में सबसे संतोषजनक, अक्सर मिनटों में, बिना किसी रोज़ की दवा के।",
      },
      couldThisBeYou: {
        en: [
          "A sudden, intense spinning when you roll over in bed, lie down, or sit up",
          "Vertigo triggered by tipping your head back — reaching a high shelf, hanging washing, at the salon",
          "Short bursts of spinning that last seconds to a minute, then settle",
          "Nausea that comes with the spinning episodes",
          "A sense that the room keeps moving for a moment even after you've stopped",
          "Symptoms that come and go in clusters over days, with normal hearing",
        ],
        hi: [
          "बिस्तर पर करवट लेते, लेटते या उठते समय अचानक, तेज़ घूमना",
          "सिर पीछे झुकाने से चक्कर — ऊँची शेल्फ़ तक पहुँचना, कपड़े टाँगना, सैलून में",
          "कुछ सेकंड से एक मिनट तक चलने वाले छोटे घूमने के झोंके, फिर थम जाना",
          "घूमने के साथ आने वाली मिचली",
          "रुकने के बाद भी एक पल कमरे के हिलते रहने का एहसास",
          "दिनों में झुंड में आते-जाते लक्षण, सामान्य सुनवाई के साथ",
        ],
      },
      whatItFeelsLike: {
        en: "BPPV announces itself in a very particular way: you turn in bed and the whole room lurches into a violent spin, gripping and frightening — and then, within seconds, it's gone. The attacks are short but intense, and they're tied to movement and position rather than appearing out of nowhere. Many people become afraid to lie down on one side, or learn to move their head slowly and stiffly to avoid setting it off. Crucially, between attacks, hearing is normal and there's no ringing in the ears — a clue that helps separate BPPV from other causes.",
        hi: "बीपीपीवी एक ख़ास तरीक़े से सामने आता है: आप बिस्तर पर करवट लेते हैं और पूरा कमरा एक हिंसक घुमाव में झपट पड़ता है, पकड़ने वाला और डरावना — और फिर, कुछ सेकंड में, चला जाता है। दौरे छोटे पर तीव्र होते हैं, और हलचल व स्थिति से जुड़े होते हैं, अचानक कहीं से नहीं आते। कई लोग एक तरफ़ लेटने से डरने लगते हैं, या इसे शुरू होने से बचाने के लिए सिर धीरे और अकड़कर हिलाना सीख जाते हैं। ख़ास बात: दौरों के बीच सुनवाई सामान्य रहती है और कान में घंटी नहीं बजती — एक संकेत जो बीपीपीवी को अन्य कारणों से अलग करने में मदद करता है।",
      },
      whatsHappening: {
        en: "Deep inside the ear are tiny calcium crystals (otoconia) that normally help the brain sense gravity and movement. In BPPV, some of these crystals come loose and drift into one of the ear's fluid-filled balance canals, where they don't belong. Now, every time you move your head a certain way, the crystals shift and send the brain a false, exaggerated signal that you're spinning — even though you aren't. It is a purely mechanical problem, not a sign of anything sinister in the brain, which is exactly why it can be corrected mechanically: by guiding those crystals back out of the canal and into the chamber where they belong.",
        hi: "कान की गहराई में छोटे कैल्शियम क्रिस्टल (otoconia) होते हैं जो आमतौर पर दिमाग़ को गुरुत्व और हलचल महसूस करने में मदद करते हैं। बीपीपीवी में इनमें से कुछ क्रिस्टल ढीले होकर कान की द्रव-भरी संतुलन नलिकाओं में चले जाते हैं, जहाँ उनकी जगह नहीं। अब, जब भी आप सिर एक ख़ास तरह हिलाते हैं, क्रिस्टल खिसकते हैं और दिमाग़ को झूठा, बढ़ा-चढ़ा संकेत भेजते हैं कि आप घूम रहे हैं — जबकि आप नहीं घूम रहे। यह विशुद्ध यांत्रिक समस्या है, दिमाग़ में किसी गंभीर चीज़ का संकेत नहीं — इसीलिए इसे यांत्रिक रूप से ठीक किया जा सकता है।",
      },
      redFlags: {
        en: [
          "Vertigo with a severe headache, double vision, slurred speech, or weakness — go to an emergency room",
          "Vertigo that is constant and doesn't change with head position",
          "New deafness or ringing in one ear along with the spinning",
          "Difficulty walking or a strong pull to one side that doesn't settle",
          "A first severe episode in someone over 60, or with vascular risk factors",
        ],
        hi: [
          "तेज़ सिरदर्द, दोहरा दिखना, लड़खड़ाती बोली, या कमज़ोरी के साथ चक्कर — आपातकालीन कक्ष जाएँ",
          "लगातार रहने वाला चक्कर जो सिर की स्थिति से न बदले",
          "घूमने के साथ एक कान में नया बहरापन या घंटी बजना",
          "चलने में कठिनाई या एक तरफ़ तेज़ खिंचाव जो न थमे",
          "60 से ऊपर या संवहनी जोखिम वाले व्यक्ति में पहला गंभीर प्रकरण",
        ],
      },
      howDrKumarTreats: {
        en: "BPPV is one of the few conditions in medicine that can often be diagnosed and cured in the same short visit. Dr. Kumar confirms it with the Dix-Hallpike test — a simple, guided change of head position that reproduces the vertigo for a few seconds and lets him see the tell-tale eye movements that pinpoint which ear and which canal is involved. The treatment is not a tablet but a manoeuvre: the Epley (or a related repositioning technique), a precise sequence of head and body movements that walks the loose crystals back out of the canal. Many patients feel dramatically better the same day. Dr. Kumar also teaches you the movements to do safely at home if it recurs, and avoids unnecessary long-term 'vertigo medicines', which actually slow the brain's natural recovery if overused.",
        hi: "बीपीपीवी चिकित्सा की उन कुछ स्थितियों में से एक है जिसे अक्सर उसी छोटी विज़िट में पहचाना और ठीक किया जा सकता है। डॉ. कुमार इसे Dix-Hallpike टेस्ट से पुष्टि करते हैं — सिर की स्थिति का एक सरल, निर्देशित बदलाव जो कुछ सेकंड के लिए चक्कर दोहराता है और उन्हें वे ख़ास आँखों की हरकतें देखने देता है जो बताती हैं कि कौन-सा कान और कौन-सी नलिका शामिल है। इलाज कोई गोली नहीं बल्कि एक मूवमेंट है: एप्ले (या संबंधित रिपोज़िशनिंग तकनीक), सिर और शरीर की हलचल का एक सटीक क्रम जो ढीले क्रिस्टल को नलिका से बाहर वापस ले जाता है। कई मरीज़ उसी दिन काफ़ी बेहतर महसूस करते हैं। डॉ. कुमार आपको दोबारा होने पर घर पर सुरक्षित रूप से करने की हरकतें भी सिखाते हैं।",
      },
    },

    /* ── Topic 2: Vestibular Neuritis ────────────────────── */
    {
      slug: "vestibular-neuritis",
      name: { en: "Vestibular Neuritis & Labyrinthitis", hi: "वेस्टिबुलर न्यूराइटिस और लैबिरिंथाइटिस" },
      intro: {
        en: "A sudden, severe, days-long spinning — often after a viral illness — that is frightening but usually recovers well.",
        hi: "अचानक, गंभीर, कई दिनों तक चलने वाला घूमना — अक्सर किसी वायरल बीमारी के बाद — जो डरावना है पर आमतौर पर अच्छी तरह ठीक हो जाता है।",
      },
      couldThisBeYou: {
        en: [
          "A sudden onset of intense, constant spinning that lasts for hours to days, not seconds",
          "Vertigo so severe you can't stand or walk without help, with vomiting",
          "Symptoms that began during or just after a cold, flu, or viral infection",
          "The spinning is there even when you keep your head perfectly still (though movement worsens it)",
          "In labyrinthitis, hearing in one ear is affected too; in pure neuritis, hearing is spared",
          "Gradual improvement over days, with unsteadiness lingering for a while after",
        ],
        hi: [
          "अचानक तीव्र, लगातार घूमना जो सेकंड नहीं, घंटों से दिनों तक चले",
          "इतना गंभीर चक्कर कि आप बिना मदद खड़े या चल न सकें, उल्टी के साथ",
          "लक्षण जो सर्दी, फ़्लू, या वायरल संक्रमण के दौरान या ठीक बाद शुरू हुए",
          "सिर बिल्कुल स्थिर रखने पर भी घूमना मौजूद (हालाँकि हलचल बढ़ाती है)",
          "लैबिरिंथाइटिस में एक कान की सुनवाई भी प्रभावित; शुद्ध न्यूराइटिस में सुनवाई बची रहती है",
          "दिनों में धीरे-धीरे सुधार, बाद में कुछ समय अस्थिरता बनी रहना",
        ],
      },
      whatItFeelsLike: {
        en: "This is vertigo at its most overwhelming. Unlike the brief spins of BPPV, vestibular neuritis arrives as a sustained, relentless spinning that can flatten a person completely — many describe being unable to lift their head from the pillow without violent dizziness and vomiting, sometimes for a day or two. It is genuinely distressing, and because it can come on so suddenly and severely, people often fear the worst. The reassuring part is that this is usually inflammation of the balance nerve, not a stroke, and the body has a remarkable ability to recover from it.",
        hi: "यह चक्कर का सबसे भारी रूप है। बीपीपीवी के छोटे घुमावों के विपरीत, वेस्टिबुलर न्यूराइटिस एक निरंतर, लगातार घूमने के रूप में आता है जो व्यक्ति को पूरी तरह बिछा सकता है — कई बताते हैं कि वे बिना हिंसक चक्कर और उल्टी के तकिए से सिर नहीं उठा पाते, कभी एक-दो दिन तक। यह सच में तकलीफ़देह है, और चूँकि यह इतना अचानक और गंभीर आ सकता है, लोग अक्सर सबसे बुरा सोचते हैं। राहत की बात यह है कि यह आमतौर पर संतुलन नस की सूजन है, स्ट्रोक नहीं।",
      },
      whatsHappening: {
        en: "The inner ear sends a constant stream of balance signals to the brain through the vestibular nerve. In vestibular neuritis, this nerve becomes inflamed — usually from a viral infection — and suddenly starts sending faulty, lopsided signals. The brain, receiving strong balance information from one ear and almost none from the other, interprets the mismatch as violent spinning. When the inner ear's hearing part is involved too, it's called labyrinthitis. Over days to weeks, the inflammation settles and, importantly, the brain learns to recalibrate around the change — which is why recovery, helped by the right exercises, is the rule rather than the exception.",
        hi: "भीतरी कान वेस्टिबुलर नस के ज़रिए दिमाग़ को संतुलन संकेतों की लगातार धारा भेजता है। वेस्टिबुलर न्यूराइटिस में यह नस सूज जाती है — आमतौर पर वायरल संक्रमण से — और अचानक ख़राब, एकतरफ़ा संकेत भेजने लगती है। दिमाग़, एक कान से तेज़ संतुलन जानकारी और दूसरे से लगभग कुछ नहीं पाकर, इस बेमेल को हिंसक घूमने के रूप में समझता है। जब भीतरी कान का सुनने वाला हिस्सा भी शामिल हो, इसे लैबिरिंथाइटिस कहते हैं। दिनों से हफ़्तों में सूजन बैठ जाती है और दिमाग़ बदलाव के इर्द-गिर्द फिर से ढल जाता है।",
      },
      redFlags: {
        en: [
          "Vertigo with weakness, numbness, slurred speech, or double vision — this needs emergency stroke assessment",
          "A severe headache or neck pain with the vertigo",
          "Inability to walk at all, or falling consistently to one side",
          "Sudden hearing loss with the vertigo (needs urgent attention)",
          "Symptoms not improving at all after several days",
        ],
        hi: [
          "कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, या दोहरे दिखने के साथ चक्कर — आपातकालीन स्ट्रोक जाँच ज़रूरी",
          "चक्कर के साथ तेज़ सिरदर्द या गर्दन दर्द",
          "बिल्कुल न चल पाना, या लगातार एक तरफ़ गिरना",
          "चक्कर के साथ अचानक सुनवाई की हानि (तुरंत ध्यान ज़रूरी)",
          "कई दिनों बाद भी लक्षणों में बिल्कुल सुधार न होना",
        ],
      },
      howDrKumarTreats: {
        en: "Dr. Kumar's first and most important job here is to confirm that this is vestibular neuritis and not a stroke affecting the balance centres — a distinction made carefully at the bedside through specific eye-movement and coordination tests, with imaging when there's any doubt. Once a benign cause is established, the approach is twofold. In the acute phase, short-term medication can ease the worst of the spinning and vomiting — but only briefly, because relying on these drugs too long actually delays recovery. The real treatment is vestibular rehabilitation: a set of graded balance and eye-head exercises that retrain the brain to compensate. Dr. Kumar guides this recovery and arranges vestibular physiotherapy where needed, and most patients return to normal function over a few weeks.",
        hi: "डॉ. कुमार का पहला और सबसे ज़रूरी काम यहाँ यह पुष्टि करना है कि यह वेस्टिबुलर न्यूराइटिस है, संतुलन केंद्रों को प्रभावित करने वाला स्ट्रोक नहीं — यह अंतर बिस्तर के पास विशिष्ट आँख-हलचल और तालमेल परीक्षणों से सावधानी से किया जाता है, संदेह होने पर इमेजिंग के साथ। एक बार सौम्य कारण स्थापित हो जाए, तरीक़ा दोहरा है। तीव्र चरण में, थोड़े समय की दवा सबसे बुरे घूमने और उल्टी को कम कर सकती है — पर केवल थोड़े समय, क्योंकि इन दवाओं पर बहुत देर निर्भर रहना रिकवरी में देरी करता है। असली इलाज वेस्टिबुलर पुनर्वास है: संतुलन और आँख-सिर अभ्यासों का एक क्रमबद्ध सेट जो दिमाग़ को भरपाई करना फिर सिखाता है।",
      },
    },

    /* ── Topic 3: Ménière's Disease ──────────────────────── */
    {
      slug: "menieres",
      name: { en: "Ménière's Disease", hi: "मेनियर्स रोग" },
      intro: {
        en: "Recurring attacks of vertigo with hearing changes and a fullness in the ear — a condition that needs a clear diagnosis and a long-term plan.",
        hi: "सुनवाई में बदलाव और कान में भरापन के साथ बार-बार चक्कर के दौरे — एक स्थिति जिसे स्पष्ट निदान और दीर्घकालिक योजना चाहिए।",
      },
      couldThisBeYou: {
        en: [
          "Attacks of severe spinning that last from twenty minutes to several hours",
          "Hearing that drops or muffles in one ear, often during or before an attack",
          "Ringing, roaring, or buzzing in the same ear (tinnitus)",
          "A feeling of pressure or fullness in the affected ear",
          "Attacks that come in clusters, then quiet down for weeks or months",
          "Over time, hearing in that ear gradually becoming worse",
        ],
        hi: [
          "बीस मिनट से कई घंटों तक चलने वाले गंभीर घूमने के दौरे",
          "एक कान में सुनवाई का गिरना या दबना, अक्सर दौरे के दौरान या पहले",
          "उसी कान में घंटी, गरज, या भनभनाहट (टिनिटस)",
          "प्रभावित कान में दबाव या भरेपन का एहसास",
          "झुंड में आने वाले दौरे, फिर हफ़्तों या महीनों के लिए शांत",
          "समय के साथ उस कान की सुनवाई धीरे-धीरे ख़राब होना",
        ],
      },
      whatItFeelsLike: {
        en: "Ménière's has a cruel unpredictability to it. An attack can strike with little warning — a roar building in one ear, a sense of pressure, and then hours of disabling vertigo with nausea that leaves a person wrung out. Between attacks, life can feel almost normal, which makes the next one all the harder to live with. The combination of spinning, changing hearing, and ear fullness is the signature that sets it apart from other vertigos, and the slow threat to hearing over the years is what makes getting it properly managed so important.",
        hi: "मेनियर्स में एक क्रूर अनिश्चितता होती है। दौरा बहुत कम चेतावनी के साथ आ सकता है — एक कान में बढ़ती गरज, दबाव का एहसास, और फिर घंटों का अपंग करने वाला चक्कर और मिचली जो व्यक्ति को निचोड़ देती है। दौरों के बीच जीवन लगभग सामान्य लग सकता है, जो अगले दौरे को और कठिन बना देता है। घूमना, बदलती सुनवाई और कान का भरापन — यह संयोजन इसे अन्य चक्करों से अलग करने वाला हस्ताक्षर है।",
      },
      whatsHappening: {
        en: "Ménière's disease is linked to a build-up of excess fluid in the inner ear, the delicate chamber that handles both balance and hearing. When the pressure of this fluid rises, it disrupts both systems at once — producing the vertigo, the muffled or roaring hearing, and the sense of fullness together. Exactly why the fluid accumulates isn't fully understood, but it tends to be a long-term, fluctuating condition rather than a one-off event. Because it threatens hearing as well as balance, the goal of treatment is both to control the attacks and to protect hearing over time.",
        hi: "मेनियर्स रोग भीतरी कान में अतिरिक्त द्रव के जमाव से जुड़ा है — वह नाज़ुक कक्ष जो संतुलन और सुनवाई दोनों संभालता है। जब इस द्रव का दबाव बढ़ता है, यह दोनों तंत्रों को एक साथ बाधित करता है — चक्कर, दबी या गरजती सुनवाई, और भरेपन का एहसास एक साथ पैदा करते हुए। द्रव क्यों जमा होता है यह पूरी तरह समझा नहीं गया, पर यह एक-बार की घटना नहीं, बल्कि दीर्घकालिक, उतार-चढ़ाव वाली स्थिति होती है। चूँकि यह संतुलन के साथ सुनवाई को भी ख़तरा देता है, इलाज का लक्ष्य दौरों को नियंत्रित करना और समय के साथ सुनवाई की रक्षा करना दोनों है।",
      },
      redFlags: {
        en: [
          "A sudden, significant drop in hearing — this needs urgent assessment, not a wait-and-see",
          "Vertigo with neurological symptoms: weakness, numbness, slurred speech, or double vision",
          "A severe new headache with the attacks",
          "Attacks becoming much more frequent or severe than before",
          "Unsteadiness that no longer fully recovers between attacks",
        ],
        hi: [
          "अचानक, बड़ी सुनवाई गिरावट — इसे तुरंत जाँच चाहिए, इंतज़ार नहीं",
          "तंत्रिका लक्षणों के साथ चक्कर: कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, या दोहरा दिखना",
          "दौरों के साथ तेज़ नया सिरदर्द",
          "दौरे पहले से कहीं ज़्यादा बार-बार या गंभीर होना",
          "दौरों के बीच अब पूरी तरह न सुधरने वाली अस्थिरता",
        ],
      },
      howDrKumarTreats: {
        en: "Because several conditions can imitate it, Dr. Kumar's first step is a careful diagnosis — confirming the pattern of vertigo, hearing change and ear fullness, and arranging a hearing test to document it. Management is then long-term and layered. Day-to-day, simple measures make a real difference: reducing salt, caffeine and other triggers helps lower inner-ear fluid pressure, and Dr. Kumar prescribes medication to reduce the frequency and severity of attacks, along with a rescue plan for when one strikes. Vestibular rehabilitation helps with the unsteadiness between attacks. Throughout, hearing is monitored so it can be protected. The aim is fewer, milder attacks and a life that is no longer ruled by the fear of the next one — and for the great majority, that is very achievable.",
        hi: "चूँकि कई स्थितियाँ इसकी नक़ल कर सकती हैं, डॉ. कुमार का पहला क़दम सावधान निदान है — चक्कर, सुनवाई बदलाव और कान भरेपन का पैटर्न पुष्टि करना, और इसे दर्ज करने के लिए सुनवाई परीक्षण की व्यवस्था करना। फिर प्रबंधन दीर्घकालिक और परतदार है। रोज़मर्रा में सरल उपाय असली फ़र्क़ डालते हैं: नमक, कैफ़ीन और अन्य ट्रिगर कम करना भीतरी-कान द्रव दबाव घटाने में मदद करता है, और डॉ. कुमार दौरों की संख्या व गंभीरता कम करने की दवा देते हैं, साथ ही दौरा पड़ने पर एक रेस्क्यू योजना। वेस्टिबुलर पुनर्वास दौरों के बीच अस्थिरता में मदद करता है। पूरे दौरान सुनवाई की निगरानी होती है ताकि उसकी रक्षा हो सके।",
      },
    },

    /* ── Topic 4: Central Vertigo ────────────────────────── */
    {
      slug: "central",
      name: { en: "Central Vertigo", hi: "केंद्रीय चक्कर" },
      intro: {
        en: "The less common vertigo that comes from the brain rather than the ear — which is exactly why a neurologist needs to be the one to rule it in or out.",
        hi: "कम आम चक्कर जो कान की बजाय दिमाग़ से आता है — इसीलिए एक न्यूरोलॉजिस्ट को ही इसे पहचानना या नकारना चाहिए।",
      },
      couldThisBeYou: {
        en: [
          "Vertigo together with double vision, slurred speech, or trouble swallowing",
          "Spinning with weakness or numbness on one side of the body or face",
          "Severe unsteadiness or falling, out of proportion to the spinning sensation",
          "Vertigo with a new, severe, or unusual headache (sometimes vestibular migraine)",
          "Dizziness that is constant and not clearly triggered by head position",
          "Vertigo appearing for the first time in someone with stroke risk factors",
        ],
        hi: [
          "दोहरे दिखने, लड़खड़ाती बोली, या निगलने में तकलीफ़ के साथ चक्कर",
          "शरीर या चेहरे के एक तरफ़ कमज़ोरी या सुन्नपन के साथ घूमना",
          "घूमने के एहसास से ज़्यादा गंभीर अस्थिरता या गिरना",
          "नए, तेज़, या असामान्य सिरदर्द के साथ चक्कर (कभी वेस्टिबुलर माइग्रेन)",
          "लगातार रहने वाला चक्कर जो सिर की स्थिति से साफ़ न जुड़े",
          "स्ट्रोक जोखिम वाले व्यक्ति में पहली बार चक्कर",
        ],
      },
      whatItFeelsLike: {
        en: "Central vertigo can feel similar to inner-ear vertigo, which is exactly what makes it dangerous to dismiss. The spinning may be less violent than BPPV or neuritis, but it tends to be more persistent, and it often travels with company — a visual disturbance, a clumsy hand, a slur in the speech, an unsteadiness that's worse than the dizziness itself would explain. Vestibular migraine, a common and very treatable cause, can bring vertigo with or without the headache people expect. The honest message is simple: when vertigo arrives with any neurological symptom, it deserves a proper look, not reassurance over the phone.",
        hi: "केंद्रीय चक्कर भीतरी-कान के चक्कर जैसा महसूस हो सकता है, यही इसे टालना ख़तरनाक बनाता है। घूमना बीपीपीवी या न्यूराइटिस से कम हिंसक हो सकता है, पर ज़्यादा बना रहने वाला होता है, और अक्सर साथ लेकर चलता है — दृष्टि गड़बड़ी, अनाड़ी हाथ, बोली में लड़खड़ाहट, एक अस्थिरता जो चक्कर से ज़्यादा। वेस्टिबुलर माइग्रेन, एक आम और बहुत इलाज-योग्य कारण, सिरदर्द के साथ या बिना चक्कर ला सकता है। ईमानदार संदेश सरल है: जब चक्कर किसी तंत्रिका लक्षण के साथ आए, उसे फ़ोन पर आश्वासन नहीं, उचित जाँच चाहिए।",
      },
      whatsHappening: {
        en: "Most vertigo comes from the inner ear, but a minority arises from the brain itself — specifically the brainstem and cerebellum, the regions that process balance signals. Here the cause isn't loose crystals or inner-ear fluid but a problem in the brain's own circuitry: a reduced blood supply or small stroke, vestibular migraine, multiple sclerosis, or other conditions. This is the vertigo you must not miss, because some central causes are time-critical. It is also where a neurologist's training matters most — telling a harmless inner-ear spin from a brain-based one is a clinical skill, and getting it right decides whether you need reassurance and a manoeuvre, or urgent treatment.",
        hi: "ज़्यादातर चक्कर भीतरी कान से आता है, पर एक अल्पसंख्यक दिमाग़ से ही उठता है — ख़ासकर ब्रेनस्टेम और सेरिबेलम, वे क्षेत्र जो संतुलन संकेत संसाधित करते हैं। यहाँ कारण ढीले क्रिस्टल या भीतरी-कान द्रव नहीं बल्कि दिमाग़ के अपने परिपथ में समस्या है: कम रक्त आपूर्ति या छोटा स्ट्रोक, वेस्टिबुलर माइग्रेन, मल्टीपल स्क्लेरोसिस, या अन्य स्थितियाँ। यह वह चक्कर है जिसे चूकना नहीं चाहिए, क्योंकि कुछ केंद्रीय कारण समय-महत्वपूर्ण होते हैं। यहीं न्यूरोलॉजिस्ट का प्रशिक्षण सबसे ज़्यादा मायने रखता है।",
      },
      redFlags: {
        en: [
          "Vertigo with any of: weakness, numbness, slurred speech, double vision, or facial droop — call 108",
          "A sudden, severe 'worst ever' headache with the vertigo",
          "Difficulty walking or standing that is far worse than the spinning",
          "Vertigo that is constant and unrelenting over hours with new neurological signs",
          "First severe vertigo in an older person with diabetes, high blood pressure, or heart disease",
        ],
        hi: [
          "इनमें से किसी के साथ चक्कर: कमज़ोरी, सुन्नपन, लड़खड़ाती बोली, दोहरा दिखना, या चेहरा लटकना — 108 बुलाएँ",
          "चक्कर के साथ अचानक, तेज़ 'अब तक का सबसे बुरा' सिरदर्द",
          "घूमने से कहीं ज़्यादा बुरी चलने या खड़े होने की कठिनाई",
          "घंटों लगातार बना रहने वाला चक्कर नए तंत्रिका संकेतों के साथ",
          "मधुमेह, उच्च रक्तचाप, या हृदय रोग वाले बुज़ुर्ग में पहला गंभीर चक्कर",
        ],
      },
      howDrKumarTreats: {
        en: "This is where being seen by a neurologist genuinely changes outcomes. Dr. Kumar's role is first to separate central vertigo from the far more common inner-ear causes, using targeted bedside examination — particular patterns of eye movement, coordination, and gait can distinguish the two with surprising accuracy — and arranging brain imaging such as an MRI when the picture warrants it. If a central cause is found, treatment is directed at it: urgent stroke pathways where relevant, preventive treatment for vestibular migraine (which responds very well to the right medication and trigger management), or management of the underlying condition. Where it turns out to be a benign inner-ear problem after all, the greatest gift is often the confident reassurance that it is not a stroke — backed by a proper examination rather than a guess.",
        hi: "यहीं न्यूरोलॉजिस्ट से दिखाना सच में परिणाम बदलता है। डॉ. कुमार की भूमिका पहले केंद्रीय चक्कर को कहीं अधिक आम भीतरी-कान कारणों से अलग करना है, लक्षित बिस्तर-पास जाँच से — आँखों की हलचल, तालमेल और चाल के ख़ास पैटर्न दोनों को हैरान करने वाली सटीकता से अलग कर सकते हैं — और तस्वीर ज़रूरत बताए तो MRI जैसी दिमाग़ी इमेजिंग की व्यवस्था करना। यदि केंद्रीय कारण मिले, इलाज उस पर केंद्रित होता है: ज़रूरत पर तत्काल स्ट्रोक मार्ग, वेस्टिबुलर माइग्रेन के लिए रोकथाम इलाज (जो सही दवा और ट्रिगर प्रबंधन पर बहुत अच्छा असर करता है), या अंतर्निहित स्थिति का प्रबंधन। जहाँ यह आख़िरकार सौम्य भीतरी-कान समस्या निकले, सबसे बड़ा उपहार अक्सर यह आश्वासन होता है कि यह स्ट्रोक नहीं है।",
      },
    },
  ],

  /* ── Myths & Facts ───────────────────────────────────────── */
  myths: [
    {
      myth: { en: "Vertigo is just weakness or low blood pressure — eat better and it will pass.", hi: "चक्कर बस कमज़ोरी या कम रक्तचाप है — अच्छा खाओ और ठीक हो जाएगा।" },
      fact: {
        en: "True vertigo — a spinning sensation — is almost never simple 'weakness'. The great majority comes from the inner ear or, less often, the brain, and each cause has a specific treatment. Putting it down to weakness or 'gas' is exactly how people end up spinning for months when a few minutes of the right treatment could have fixed it.",
        hi: "असली चक्कर — घूमने का एहसास — लगभग कभी साधारण 'कमज़ोरी' नहीं होता। अधिकांश भीतरी कान से या कम बार दिमाग़ से आता है, और हर कारण का एक विशिष्ट इलाज है। इसे कमज़ोरी या 'गैस' मान लेना ही वह तरीक़ा है जिससे लोग महीनों घूमते रहते हैं जबकि कुछ मिनटों का सही इलाज इसे ठीक कर सकता था।",
      },
    },
    {
      myth: { en: "All dizziness is vertigo, and all vertigo is the same.", hi: "हर सिर घूमना चक्कर है, और हर चक्कर एक जैसा है।" },
      fact: {
        en: "'Dizziness' covers very different things — light-headedness from blood pressure, imbalance, and true spinning vertigo are not the same, and vertigo itself has several distinct causes. Telling them apart is the whole game, because the treatment for BPPV is completely different from that for Ménière's or a central cause. The label matters.",
        hi: "'सिर घूमना' बहुत अलग चीज़ों को कवर करता है — रक्तचाप से सिर हल्का होना, असंतुलन, और असली घूमने वाला चक्कर एक जैसे नहीं, और चक्कर के ख़ुद कई अलग कारण हैं। इन्हें अलग पहचानना ही पूरा खेल है, क्योंकि बीपीपीवी का इलाज मेनियर्स या केंद्रीय कारण से बिल्कुल अलग है।",
      },
    },
    {
      myth: { en: "You need an MRI of the brain for every case of vertigo.", hi: "हर चक्कर के लिए दिमाग़ की MRI ज़रूरी है।" },
      fact: {
        en: "Most vertigo is diagnosed at the bedside with simple position and eye-movement tests, not with a scan — in fact the commonest cause, BPPV, never shows on an MRI. Imaging is reserved for when the examination suggests a central, brain-based cause. A careful neurologist saves you from both unnecessary scans and missed serious causes.",
        hi: "ज़्यादातर चक्कर बिस्तर के पास सरल स्थिति और आँख-हलचल परीक्षणों से पहचाना जाता है, स्कैन से नहीं — असल में सबसे आम कारण बीपीपीवी MRI में कभी नहीं दिखता। इमेजिंग तब के लिए रखी जाती है जब जाँच केंद्रीय, दिमाग़-आधारित कारण का सुझाव दे।",
      },
    },
    {
      myth: { en: "Take vertigo medicine daily and it will keep the dizziness away for good.", hi: "रोज़ चक्कर की दवा लो और यह सिर घूमना हमेशा के लिए दूर रखेगी।" },
      fact: {
        en: "Vertigo-suppressant medicines are meant for short-term relief during a severe attack only. Taken long-term, they actually slow the brain's natural ability to recalibrate and can leave you more unsteady, not less. The lasting answer for most causes is treating the cause and doing vestibular rehabilitation exercises — not staying on suppressant tablets.",
        hi: "चक्कर-दबाने वाली दवाएँ केवल गंभीर दौरे के दौरान थोड़े समय की राहत के लिए होती हैं। लंबे समय तक लेने पर वे दिमाग़ की फिर से ढलने की प्राकृतिक क्षमता को धीमा कर देती हैं और आपको कम नहीं, ज़्यादा अस्थिर छोड़ सकती हैं। अधिकांश कारणों का स्थायी जवाब है कारण का इलाज और वेस्टिबुलर पुनर्वास अभ्यास।",
      },
    },
    {
      myth: { en: "Vertigo always means something dangerous in the brain.", hi: "चक्कर का हमेशा मतलब है दिमाग़ में कुछ ख़तरनाक।" },
      fact: {
        en: "The opposite is usually true: the large majority of vertigo comes from the inner ear and is benign and very treatable. Only a minority is 'central' (from the brain). The point of seeing a neurologist is precisely to tell which is which — to treat the common, harmless causes quickly, and to catch the rare serious ones early.",
        hi: "आमतौर पर उल्टा सच है: अधिकांश चक्कर भीतरी कान से आता है और सौम्य व बहुत इलाज-योग्य है। केवल अल्पसंख्यक 'केंद्रीय' (दिमाग़ से) होता है। न्यूरोलॉजिस्ट से दिखाने का मक़सद ठीक यही है — कौन-सा कौन-सा है यह बताना, आम हानिरहित कारणों का जल्दी इलाज करना, और दुर्लभ गंभीर कारणों को जल्दी पकड़ना।",
      },
    },
  ],

  /* ── First Consultation ─────────────────────────────────── */
  firstConsultation: {
    en: "If you've never been properly evaluated for vertigo before, here's what a first visit with Dr. Kumar looks like.\n\n**The story comes first.** Dr. Kumar will ask exactly what you feel — true spinning or light-headedness — how long each episode lasts (seconds, hours, or constant), what brings it on, and whether there is any hearing change, ringing, headache, or other symptom. These details alone point to the diagnosis more than any test.\n\n**A focused bedside examination.** Much of vertigo is diagnosed by examination, not machines. Dr. Kumar checks your eye movements, coordination, and walking, and performs the Dix-Hallpike test for BPPV — a guided change of head position that briefly reproduces the vertigo and reveals its source. None of it is painful, though it may make you dizzy for a few seconds.\n\n**Treatment, often the same day.** For BPPV, the repositioning manoeuvre is done right there in the clinic, and many patients leave already better. For other causes, you'll get a clear plan.\n\n**Investigations only where they help.** A hearing test or an MRI is arranged only when the history and examination call for it — not routinely.\n\n**You leave with a plan.** By the end you'll understand which type of vertigo you have, what to do during an attack, any exercises to practise, and a follow-up plan if needed.\n\n**What to bring:** any previous reports or hearing tests, a list of current medicines, and a note of when and how your episodes happen.\n\n**Consultation fee:** ₹1,000 (first visit) · ₹500 (follow-up)",
    hi: "अगर आपकी पहले कभी चक्कर के लिए ठीक से जाँच नहीं हुई, तो डॉ. कुमार की पहली विज़िट ऐसी होती है।\n\n**पहले कहानी।** डॉ. कुमार ठीक-ठीक पूछेंगे कि आप क्या महसूस करते हैं — असली घूमना या सिर हल्का होना — हर प्रकरण कितनी देर चलता है (सेकंड, घंटे, या लगातार), क्या इसे शुरू करता है, और क्या कोई सुनवाई बदलाव, घंटी, सिरदर्द या अन्य लक्षण है। ये विवरण ही किसी भी जाँच से ज़्यादा निदान की ओर इशारा करते हैं।\n\n**केंद्रित बिस्तर-पास जाँच।** ज़्यादातर चक्कर जाँच से पहचाना जाता है, मशीनों से नहीं। डॉ. कुमार आपकी आँखों की हलचल, तालमेल और चलना जाँचते हैं, और बीपीपीवी के लिए Dix-Hallpike टेस्ट करते हैं — सिर की स्थिति का निर्देशित बदलाव जो थोड़ी देर चक्कर दोहराता है और इसका स्रोत बताता है।\n\n**इलाज, अक्सर उसी दिन।** बीपीपीवी के लिए रिपोज़िशनिंग मूवमेंट वहीं क्लिनिक में होता है, और कई मरीज़ पहले से बेहतर होकर जाते हैं।\n\n**जाँचें केवल जहाँ मदद करें।** सुनवाई परीक्षण या MRI केवल तब जब हिस्ट्री और जाँच माँगे — रूटीन में नहीं।\n\n**आप एक योजना लेकर जाते हैं।** अंत तक आप समझेंगे कि आपको किस प्रकार का चक्कर है, दौरे के दौरान क्या करें, कौन से अभ्यास करें, और ज़रूरत पर फ़ॉलो-अप।\n\n**क्या लाएँ:** पिछली रिपोर्ट या सुनवाई परीक्षण, मौजूदा दवाओं की सूची, और कब-कैसे प्रकरण होते हैं इसका नोट।\n\n**परामर्श शुल्क:** ₹1,000 (पहली विज़िट) · ₹500 (फ़ॉलो-अप)",
  },

  /* ── For the People Caring for Them ─────────────────────── */
  caregiverSection: {
    en: "Vertigo is invisible, which makes it lonely. From the outside, the person looks completely well; on the inside, the floor is heaving. If someone you love has vertigo, the most helpful thing you can do is believe them — the spinning, the nausea, the sudden fear of falling are all real, even when nothing shows.\n\nDuring a bad attack, keep it simple: help them sit or lie still in a quiet, dim room, give them something to focus their eyes on, and don't rush them to move. Keep the path to the bathroom clear and well-lit, because falls are the real danger — especially at night and in older relatives. Encourage them to do their vestibular exercises even when it feels easier to stay still; that gentle, repeated practice is what retrains the brain and speeds recovery. And watch for the warning signs that need a doctor urgently — a new severe headache, slurred speech, weakness, or sudden hearing loss with the vertigo. Most vertigo is harmless and very treatable; your steadiness, patience, and belief make the journey through it far easier.",
    hi: "चक्कर अदृश्य होता है, जो इसे अकेला बना देता है। बाहर से व्यक्ति पूरी तरह ठीक दिखता है; अंदर फ़र्श हिल रहा होता है। अगर आपके किसी अपने को चक्कर है, सबसे मददगार काम है उन पर विश्वास करना — घूमना, मिचली, गिरने का अचानक डर सब असली है, भले कुछ न दिखे।\n\nबुरे दौरे के दौरान सरल रखें: उन्हें शांत, मद्धम कमरे में स्थिर बैठने या लेटने में मदद करें, आँखें टिकाने के लिए कुछ दें, और जल्दी हिलने को मजबूर न करें। बाथरूम तक रास्ता साफ़ और अच्छी रोशनी वाला रखें, क्योंकि गिरना असली ख़तरा है — ख़ासकर रात में और बुज़ुर्गों में। उन्हें वेस्टिबुलर अभ्यास करने के लिए प्रोत्साहित करें भले ही स्थिर रहना आसान लगे; वही कोमल, दोहराया अभ्यास दिमाग़ को फिर सिखाता है। और उन चेतावनी संकेतों पर नज़र रखें जिन्हें तुरंत डॉक्टर चाहिए — नया तेज़ सिरदर्द, लड़खड़ाती बोली, कमज़ोरी, या चक्कर के साथ अचानक सुनवाई हानि।",
  },

  /* ── Dr. Kumar's Approach ────────────────────────────────── */
  drKumarsApproach: {
    en: "Dr. Kumar has evaluated several hundred patients with vertigo and balance disorders over the past decade, many of whom arrived after months of being told it was nothing. His conviction is simple: *'Vertigo is not a diagnosis — it's a symptom. My job is to find out exactly why the world is spinning, because once you know that, most vertigo is genuinely fixable.'*\n\n**He diagnoses by examination, not by reflex scanning.** Using the Dix-Hallpike and other targeted bedside tests, he identifies the precise cause — which ear, which canal, inner-ear or central — and reserves the MRI for the minority who truly need it.\n\n**He treats the cause, not just the symptom.** For BPPV he performs the Epley and related repositioning manoeuvres in the clinic, often resolving the vertigo the same visit; for vestibular neuritis and other causes he prescribes vestibular rehabilitation rather than leaving patients on long-term suppressant tablets that slow recovery.\n\n**He knows when vertigo is the brain's problem.** As a neurologist, his real value is telling a harmless inner-ear spin from a central, brain-based cause — catching the dangerous minority early while sparing everyone else unnecessary worry and tests. Most patients leave with a clear answer and a genuine plan, often feeling better the very first day.",
    hi: "डॉ. कुमार ने पिछले दशक में कई सौ चक्कर और संतुलन विकार मरीज़ों की जाँच की है, जिनमें से कई महीनों यह सुनने के बाद आए कि यह कुछ नहीं है। उनका विश्वास सरल है: *'चक्कर कोई निदान नहीं — एक लक्षण है। मेरा काम है ठीक-ठीक पता लगाना कि दुनिया क्यों घूम रही है, क्योंकि एक बार यह पता चल जाए, ज़्यादातर चक्कर सच में ठीक हो सकता है।'*\n\n**वे जाँच से निदान करते हैं, रिफ़्लेक्स स्कैनिंग से नहीं।** Dix-Hallpike और अन्य लक्षित बिस्तर-पास परीक्षणों से वे सटीक कारण पहचानते हैं — कौन-सा कान, कौन-सी नलिका, भीतरी-कान या केंद्रीय — और MRI उन अल्पसंख्यकों के लिए रखते हैं जिन्हें सच में चाहिए।\n\n**वे कारण का इलाज करते हैं, सिर्फ़ लक्षण का नहीं।** बीपीपीवी के लिए वे क्लिनिक में एप्ले और संबंधित रिपोज़िशनिंग मूवमेंट करते हैं, अक्सर उसी विज़िट में चक्कर ठीक करते हुए; वेस्टिबुलर न्यूराइटिस और अन्य कारणों के लिए वे लंबे समय की दबाने वाली गोलियों की बजाय वेस्टिबुलर पुनर्वास देते हैं।\n\n**वे जानते हैं कि कब चक्कर दिमाग़ की समस्या है।** एक न्यूरोलॉजिस्ट के रूप में उनका असली मूल्य हानिरहित भीतरी-कान घुमाव को केंद्रीय, दिमाग़-आधारित कारण से अलग बताना है।",
  },

  /* ── Patient Story (adapted from a verified Google review) ── */
  patientStory: {
    name: "Vikas Agnihotri",
    initials: "V",
    condition: { en: "Severe Vertigo", hi: "गंभीर चक्कर" },
    text: {
      en: "I had severe vertigo and neck-related nerve problems that had really worn me down. Dr. Kumar correctly identified what was going on and gave me treatment that actually worked. After being unsteady for so long, getting a clear diagnosis and real relief made all the difference. I would strongly recommend him for anyone struggling with vertigo.",
      hi: "मुझे गंभीर चक्कर और गर्दन से जुड़ी नस की समस्याएँ थीं जिन्होंने मुझे सच में थका दिया था। डॉ. कुमार ने सही पहचाना कि क्या हो रहा है और मुझे ऐसा इलाज दिया जो सच में काम कर गया। इतने लंबे समय अस्थिर रहने के बाद, एक स्पष्ट निदान और असली राहत मिलना सब कुछ बदल गया। चक्कर से जूझ रहे किसी भी व्यक्ति को मैं उन्हें ज़रूर सुझाऊँगा।",
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
      "During an attack, stay still and fix your eyes on one steady point. Sit or lie down somewhere safe, keep the lights low, and let the worst of the spinning pass before you try to move — sudden movement makes it worse and risks a fall.",
      "Do your vestibular rehabilitation exercises every day, even when staying still feels easier. This gentle, repeated practice is what retrains the brain to rebalance, and it works better than any tablet for lasting recovery.",
      "Don't rely on vertigo-suppressant medicines long-term. They're for short-term relief in a severe attack only — taken for weeks, they slow your recovery and can leave you more unsteady. Use them exactly as Dr. Kumar advises.",
      "If you have Ménière's, watch your salt, caffeine, and alcohol. Cutting back lowers inner-ear fluid pressure and can genuinely reduce how often attacks come. Keep a simple diary of attacks and possible triggers.",
      "Fall-proof your home, especially for older family members. Clear loose rugs, light the path to the bathroom, add grab-rails, and get up from bed in slow stages — sit first, then stand. A fall is the real danger of vertigo.",
      "Learn the home repositioning movements for BPPV if you're prone to it. Dr. Kumar can teach you the manoeuvre to do safely yourself, so a recurrence doesn't mean another anxious wait.",
      "Know the red flags. If vertigo ever comes with a severe new headache, slurred speech, weakness, double vision, or sudden hearing loss, treat it as an emergency and seek care immediately — don't wait it out.",
    ],
    hi: [
      "दौरे के दौरान स्थिर रहें और आँखें एक स्थिर बिंदु पर टिकाएँ। किसी सुरक्षित जगह बैठें या लेटें, रोशनी कम रखें, और हिलने की कोशिश से पहले सबसे बुरे घूमने को गुज़र जाने दें — अचानक हलचल इसे बढ़ाती है और गिरने का ख़तरा है।",
      "अपने वेस्टिबुलर पुनर्वास अभ्यास हर दिन करें, भले ही स्थिर रहना आसान लगे। यह कोमल, दोहराया अभ्यास दिमाग़ को फिर से संतुलित होना सिखाता है, और स्थायी रिकवरी के लिए किसी भी गोली से बेहतर काम करता है।",
      "चक्कर-दबाने वाली दवाओं पर लंबे समय निर्भर न रहें। ये केवल गंभीर दौरे में थोड़े समय की राहत के लिए हैं — हफ़्तों लेने पर रिकवरी धीमी करती हैं। डॉ. कुमार की सलाह अनुसार ही लें।",
      "अगर मेनियर्स है, नमक, कैफ़ीन और शराब पर नज़र रखें। कम करने से भीतरी-कान द्रव दबाव घटता है और दौरों की बारंबारता सच में कम हो सकती है। दौरों और संभावित ट्रिगर की एक छोटी डायरी रखें।",
      "अपने घर को गिरने से सुरक्षित बनाएँ, ख़ासकर बुज़ुर्गों के लिए। ढीले कालीन हटाएँ, बाथरूम का रास्ता रोशन करें, ग्रैब-रेल लगाएँ, और बिस्तर से धीरे-धीरे उठें — पहले बैठें, फिर खड़े हों।",
      "अगर आपको बार-बार बीपीपीवी होता है, घर पर रिपोज़िशनिंग हरकतें सीखें। डॉ. कुमार आपको ख़ुद सुरक्षित रूप से करने की मूवमेंट सिखा सकते हैं।",
      "रेड फ़्लैग जानें। अगर चक्कर कभी तेज़ नए सिरदर्द, लड़खड़ाती बोली, कमज़ोरी, दोहरे दिखने, या अचानक सुनवाई हानि के साथ आए, इसे आपात स्थिति मानें और तुरंत देखभाल लें।",
    ],
  },

  /* ── FAQs ────────────────────────────────────────────────── */
  faqs: [
    {
      q: { en: "Is my vertigo dangerous — could it be a brain problem?", hi: "क्या मेरा चक्कर ख़तरनाक है — क्या यह दिमाग़ी समस्या हो सकती है?" },
      a: {
        en: "Most vertigo — the large majority — comes from the inner ear and is benign and very treatable, not a brain problem. A small minority is 'central' (from the brain), and that's exactly what a neurologist is trained to check for. The warning signs to take seriously are vertigo with a severe headache, slurred speech, weakness, double vision, or sudden hearing loss — those need emergency care. Otherwise, a proper examination usually brings reassurance, not alarm.",
        hi: "अधिकांश चक्कर भीतरी कान से आता है और सौम्य व बहुत इलाज-योग्य है, दिमाग़ी समस्या नहीं। एक छोटा अल्पसंख्यक 'केंद्रीय' (दिमाग़ से) होता है, और न्यूरोलॉजिस्ट ठीक इसी की जाँच के लिए प्रशिक्षित है। गंभीरता से लेने वाले संकेत हैं तेज़ सिरदर्द, लड़खड़ाती बोली, कमज़ोरी, दोहरा दिखना, या अचानक सुनवाई हानि के साथ चक्कर — इन्हें आपातकालीन देखभाल चाहिए।",
      },
    },
    {
      q: { en: "Can vertigo really be cured in a single visit, without medicine?", hi: "क्या चक्कर सच में एक ही विज़िट में, बिना दवा के ठीक हो सकता है?" },
      a: {
        en: "For BPPV — the single commonest cause — yes, very often. It's treated with a repositioning manoeuvre (the Epley) done in the clinic in a few minutes, and many patients walk out already better, with no daily medicine. Other causes need a bit more — exercises, treating the underlying problem, or short-term medication — but the idea that vertigo is something you just have to endure is simply not true for most people.",
        hi: "बीपीपीवी के लिए — सबसे आम कारण — हाँ, अक्सर। इसे क्लिनिक में कुछ मिनटों में रिपोज़िशनिंग मूवमेंट (एप्ले) से ठीक किया जाता है, और कई मरीज़ बिना किसी रोज़ की दवा के पहले से बेहतर होकर जाते हैं। अन्य कारणों को थोड़ा ज़्यादा चाहिए — अभ्यास, अंतर्निहित समस्या का इलाज, या थोड़े समय की दवा।",
      },
    },
    {
      q: { en: "Why do I keep getting vertigo again and again?", hi: "मुझे बार-बार चक्कर क्यों आता रहता है?" },
      a: {
        en: "It depends on the cause. BPPV can recur because the ear crystals come loose again — but the repositioning manoeuvre works each time, and Dr. Kumar can teach you to do it at home. Ménière's comes in clusters of attacks that we reduce with diet and medication. Recurring vertigo is a reason to get the diagnosis confirmed, not to give up — once we know the type, we can both treat the attacks and reduce how often they come.",
        hi: "यह कारण पर निर्भर है। बीपीपीवी दोबारा हो सकता है क्योंकि कान के क्रिस्टल फिर ढीले हो जाते हैं — पर रिपोज़िशनिंग मूवमेंट हर बार काम करता है, और डॉ. कुमार आपको घर पर करना सिखा सकते हैं। मेनियर्स दौरों के झुंड में आता है जिसे हम खानपान और दवा से कम करते हैं। बार-बार चक्कर निदान पुष्ट कराने का कारण है, हार मानने का नहीं।",
      },
    },
    {
      q: { en: "Do I need an MRI or a lot of tests for vertigo?", hi: "क्या चक्कर के लिए मुझे MRI या बहुत सारी जाँचें चाहिए?" },
      a: {
        en: "Usually not. Most vertigo is diagnosed at the bedside with simple position and eye-movement tests — the commonest cause, BPPV, doesn't even show on an MRI. Dr. Kumar arranges a hearing test or a scan only when the history and examination point to a cause that needs it, such as a suspected central problem. You won't be sent for expensive tests without a clear reason.",
        hi: "आमतौर पर नहीं। ज़्यादातर चक्कर बिस्तर के पास सरल स्थिति और आँख-हलचल परीक्षणों से पहचाना जाता है — सबसे आम कारण बीपीपीवी तो MRI में दिखता ही नहीं। डॉ. कुमार सुनवाई परीक्षण या स्कैन केवल तब कराते हैं जब हिस्ट्री और जाँच ऐसे कारण की ओर इशारा करें जिसे इसकी ज़रूरत हो।",
      },
    },
    {
      q: { en: "Should I keep taking the vertigo tablets I was given?", hi: "क्या मुझे दी गई चक्कर की गोलियाँ लेते रहना चाहिए?" },
      a: {
        en: "Vertigo-suppressant tablets are meant for short-term relief during a bad attack, not for daily long-term use. Taken for too long, they actually slow the brain's natural recovery and can leave you more unsteady. If you've been on them for weeks or months, that's worth reviewing with Dr. Kumar — the better long-term answer is usually treating the cause and doing rehabilitation exercises.",
        hi: "चक्कर-दबाने वाली गोलियाँ बुरे दौरे के दौरान थोड़े समय की राहत के लिए हैं, रोज़ लंबे समय के उपयोग के लिए नहीं। बहुत देर लेने पर वे दिमाग़ की प्राकृतिक रिकवरी धीमी करती हैं और आपको ज़्यादा अस्थिर छोड़ सकती हैं। अगर आप इन्हें हफ़्तों या महीनों से ले रहे हैं, इसे डॉ. कुमार के साथ देखना ज़रूरी है।",
      },
    },
    {
      q: { en: "What will the consultation cost, and is the treatment expensive?", hi: "परामर्श में कितना खर्च होगा, और क्या इलाज महँगा है?" },
      a: {
        en: "The first consultation is ₹1,000 and follow-ups are ₹500. For the commonest cause, BPPV, the treatment is a manoeuvre done in the clinic — there's no expensive medication at all. Other causes are usually managed with affordable tablets and exercises. Most patients don't need costly scans, and Dr. Kumar will always explain why any test is needed before ordering it.",
        hi: "पहली विज़िट ₹1,000 और फ़ॉलो-अप ₹500। सबसे आम कारण बीपीपीवी के लिए इलाज क्लिनिक में किया गया एक मूवमेंट है — कोई महँगी दवा बिल्कुल नहीं। अन्य कारण आमतौर पर किफ़ायती गोलियों और अभ्यासों से संभाले जाते हैं। ज़्यादातर मरीज़ों को महँगे स्कैन की ज़रूरत नहीं।",
      },
    },
  ],
};

export default data;
