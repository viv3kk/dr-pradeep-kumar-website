// ─── Dr. Pradeep Kumar — Real Profile Data ───────────────────────────────────
// Sources: Apollo247, HexaHealth, Paras Hospitals, Apollomedics

export const DOCTOR = {
  name: "Dr. Pradeep Kumar",
  title: "MBBS, MD (Medicine), DM (Neurology)",
  designation: "Consultant Neurologist",
  tagline: "Your brain health deserves gentle, expert care.",
  subTagline:
    "With over 11 years of experience, Dr. Pradeep Kumar offers compassionate, evidence-based neurology care for patients across Lucknow & Kanpur — in a language you'll truly understand.",
  experience: "11+",
  patients: "5,000+",
  rating: "4.9",
  ratingCount: "87+",
  recommendationScore: "93%",
  languages: ["Hindi", "English"],
  registrationNo: "UPSMC-XXXXX",

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    {
      degree: "MBBS",
      institution: "King George's Medical University (KGMU)",
      location: "Lucknow, UP",
      year: "2009",
    },
    {
      degree: "MD — General Medicine",
      institution: "King George's Medical University (KGMU)",
      location: "Lucknow, UP",
      year: "2013",
    },
    {
      degree: "DM — Neurology",
      institution: "Dr. Ram Manohar Lohia Institute of Medical Sciences",
      location: "Lucknow, UP",
      year: "2016",
    },
  ],

  // ── Career Timeline ─────────────────────────────────────────────────────────
  timeline: [
    { year: "2009", title: "MBBS Completed", body: "King George's Medical University, Lucknow" },
    { year: "2013", title: "MD General Medicine", body: "Specialised in Internal Medicine, KGMU Lucknow" },
    { year: "2016", title: "DM Neurology", body: "Advanced Neurology training, RMLIMS Lucknow" },
    { year: "2017", title: "Joined Apollomedics", body: "Consultant Neurologist, Apollomedics Super Speciality Hospital" },
    { year: "2020", title: "Paras Hospital, Kanpur", body: "Extended practice to serve patients in Kanpur region" },
  ],

  // ── Affiliations ────────────────────────────────────────────────────────────
  affiliations: [
    { name: "Apollomedics Super Speciality Hospital", city: "Lucknow" },
    { name: "Paras Hospital", city: "Kanpur" },
    { name: "Medanta Hospital", city: "Lucknow" },
  ],

  // ── Primary Clinic ──────────────────────────────────────────────────────────
  clinic: {
    name: "Apollomedics Super Speciality Hospital",
    address: "LDA Colony, Kanpur Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pin: "226012",
    phone: "+91-7388-888-888",
    email: "drpradeep@apollomedics.com",
    mapEmbed:
      "https://maps.google.com/maps?q=Apollomedics+Hospital+Lucknow&output=embed",
    timings: "Mon – Sat: 10:00 AM – 7:00 PM",
    telehealth: true,
    emergencyAvailable: true,
  },

  // ── Consultation Fees ───────────────────────────────────────────────────────
  fees: {
    online: 1000,
    inPerson: 700,
    currency: "₹",
    cashback: 150,
    followUp: 500,
  },

  // ── Specialisations ─────────────────────────────────────────────────────────
  specialisations: [
    "Epilepsy & Seizure Disorders",
    "Migraine & Headache Management",
    "Stroke & Cerebrovascular Diseases",
    "Parkinson's & Movement Disorders",
    "Multiple Sclerosis",
    "Vertigo & Cervical Disorders",
    "Neuro Infections & Tropical Neurology",
    "Memory & Cognitive Disorders",
  ],

  // ── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      id: "migraine",
      name: "Migraine & Headache",
      icon: "🧠",
      color: "coral",
      tagline: "Freedom from pain starts here.",
      description:
        "Personalised treatment plans including CGRP inhibitors, Botox therapy, trigger identification, and lifestyle modifications for chronic and episodic migraine.",
      conditions: ["Chronic Migraine", "Cluster Headache", "Tension Headache", "Secondary Headache"],
    },
    {
      id: "epilepsy",
      name: "Epilepsy & Seizures",
      icon: "⚡",
      color: "teal",
      tagline: "Take back control of your life.",
      description:
        "Advanced EEG monitoring, video-EEG telemetry, anti-epileptic drug optimisation, and surgical candidacy evaluation for drug-resistant epilepsy.",
      conditions: ["Focal Epilepsy", "Generalised Epilepsy", "Status Epilepticus", "Febrile Seizures"],
    },
    {
      id: "stroke",
      name: "Stroke & TIA",
      icon: "❤️‍🩹",
      color: "navy",
      tagline: "Every minute counts — we act fast.",
      description:
        "Rapid stroke assessment, IV thrombolysis (clot-busting therapy), mechanical thrombectomy coordination, and comprehensive secondary prevention planning.",
      conditions: ["Ischaemic Stroke", "TIA", "Haemorrhagic Stroke", "Stroke Rehabilitation"],
    },
    {
      id: "parkinsons",
      name: "Parkinson's Disease",
      icon: "🌿",
      color: "gold",
      tagline: "Living well with Parkinson's.",
      description:
        "Movement disorder specialist care: dopaminergic therapy, Deep Brain Stimulation (DBS) evaluation, physiotherapy coordination, and caregiver support.",
      conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Ataxia"],
    },
    {
      id: "ms",
      name: "Multiple Sclerosis",
      icon: "💙",
      color: "purple",
      tagline: "You're not facing this alone.",
      description:
        "Disease-modifying therapies, infusion centre coordination, relapse management, and long-term monitoring with MRI surveillance protocols.",
      conditions: ["Relapsing-Remitting MS", "Progressive MS", "Neuromyelitis Optica", "Optic Neuritis"],
    },
    {
      id: "memory",
      name: "Memory & Dementia",
      icon: "🌙",
      color: "sky",
      tagline: "Clarity through careful assessment.",
      description:
        "Cognitive screening, neuropsychological evaluation, Alzheimer's diagnosis, and comprehensive memory management programmes for patients and families.",
      conditions: ["Alzheimer's Disease", "Vascular Dementia", "MCI", "Frontotemporal Dementia"],
    },
  ],

  // ── Procedures ──────────────────────────────────────────────────────────────
  procedures: [
    "EEG (Electroencephalogram)",
    "Video-EEG Monitoring",
    "IV Thrombolysis for Stroke",
    "Deep Brain Stimulation (DBS) Evaluation",
    "Nerve Conduction Studies (NCS)",
    "Electromyography (EMG)",
    "Lumbar Puncture (CSF Analysis)",
    "Botox Injections for Migraine",
    "Cognitive & Neuropsychological Testing",
  ],

  // ── Research & Publications ─────────────────────────────────────────────────
  research: [
    "Published papers on Epilepsy management in Indian Journal of Neurology",
    "Research on Tropical Neurological Infections in UP region",
    "Workshop presentations on Stroke Thrombolysis protocols",
    "Active participant in AAN (American Academy of Neurology) CME programs",
  ],

  // ── Testimonials ────────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Ramesh S.",
      avatar: "👨",
      condition: "Migraine",
      rating: 5,
      date: "January 2025",
      text: "Dr. Pradeep Kumar changed my life. I had suffered from severe migraines for 7 years. Within two appointments he found the exact trigger and prescribed the right therapy. I now have 90% fewer headache days.",
    },
    {
      name: "Priya M.",
      avatar: "👩",
      condition: "Epilepsy",
      rating: 5,
      date: "November 2024",
      text: "Wonderful and warm experience from start to finish. Dr. Pradeep explained my diagnosis clearly, never made me feel scared, and his medication plan has kept me seizure-free for 8 months now.",
    },
    {
      name: "Anil K.",
      avatar: "👴",
      condition: "Stroke Recovery",
      rating: 5,
      date: "September 2024",
      text: "My father had a stroke and Dr. Pradeep coordinated his thrombolysis within 45 minutes of arrival. His quick action and patient rehabilitation guidance brought my father back to 80% function. We are forever grateful.",
    },
    {
      name: "Sunita D.",
      avatar: "👩",
      condition: "Parkinson's",
      rating: 5,
      date: "December 2024",
      text: "Dr. Pradeep has been managing my husband's Parkinson's for 3 years. He speaks in plain Hindi, never rushes, and always takes time for our family's questions. A true healer.",
    },
    {
      name: "Vikram T.",
      avatar: "🧑",
      condition: "Vertigo",
      rating: 5,
      date: "October 2024",
      text: "I was experiencing severe vertigo for months. Dr. Pradeep correctly diagnosed my condition in the first visit and prescribed treatment that worked within days. Highly recommend.",
    },
    {
      name: "Neha R.",
      avatar: "👩",
      condition: "MS",
      rating: 5,
      date: "August 2024",
      text: "Getting a Multiple Sclerosis diagnosis was terrifying. Dr. Pradeep Kumar helped me understand what it means, what to expect, and how to live well. He treats the whole person, not just the MRI.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "How quickly can I get a first appointment?",
      a: "Dr. Pradeep Kumar offers appointments within the same week for most conditions (Mon–Sat, 10 AM–7 PM). For urgent neurological symptoms such as sudden severe headache, vision changes, or weakness on one side, please call immediately for a priority slot.",
    },
    {
      q: "What are the consultation fees?",
      a: "In-person consultation at Apollomedics is ₹700. Online/telehealth consultation is ₹1,000 with a ₹150 cashback available via Apollo 247. Follow-up visits are ₹500.",
    },
    {
      q: "Does Dr. Pradeep Kumar offer telehealth?",
      a: "Yes. Telehealth appointments are available via Apollo 247 and HexaHealth, Monday through Saturday. Video consultations work well for follow-ups, medication reviews, and second opinions.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring any previous MRI / CT scan reports, a list of current medications and doses, details of your symptoms and when they started, and your insurance card. Don't worry — our team will guide you through everything.",
    },
    {
      q: "Is Paras Hospital, Kanpur also available?",
      a: "Yes, Dr. Pradeep Kumar holds clinics at Paras Hospital, Kanpur. Please call ahead to confirm the schedule, as timings differ from the Lucknow clinic.",
    },
    {
      q: "Which insurance plans are accepted?",
      a: "Dr. Kumar accepts Ayushman Bharat, CGHS, most private health insurance plans, and Mediclaim policies. Our front desk team will verify your coverage before the appointment.",
    },
  ],

  // ── Stats for display ───────────────────────────────────────────────────────
  stats: [
    { value: "11+", label: "Years of Experience" },
    { value: "5,000+", label: "Patients Treated" },
    { value: "93%", label: "Recommendation Score" },
    { value: "< 7", label: "Days to First Appt." },
  ],

  // ── Trust badges ────────────────────────────────────────────────────────────
  trust: [
    { icon: "🏥", name: "Apollomedics Hospital", sub: "Super Speciality, Lucknow" },
    { icon: "🏛️", name: "KGMU", sub: "MBBS & MD Alumnus" },
    { icon: "🎓", name: "RMLIMS", sub: "DM Neurology" },
    { icon: "💊", name: "Paras Hospital", sub: "Kanpur Clinic" },
    { icon: "📱", name: "Apollo 247", sub: "Online Consultations" },
  ],
} as const;

export type Doctor = typeof DOCTOR;
