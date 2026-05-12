// ─── Dr. Pradeep Kumar — Real Profile Data ───────────────────────────────────
// Verified against Dr. Kumar's official prescription pad (May 2026).

export const DOCTOR = {
  name: "Dr. Pradeep Kumar",
  title: "MBBS, MD (Medicine), DM (Neurology)",
  designation: "Director — Neurology, Paras Health Kanpur",
  tagline: "Your brain health deserves gentle, expert care.",
  subTagline:
    "With over a decade of experience, Dr. Pradeep Kumar offers compassionate, evidence-based neurology care for patients across Lucknow & Kanpur — in a language you'll truly understand.",
  experience: "11+",
  patients: "25,000+",
  rating: "4.9",
  ratingCount: "87+",
  recommendationScore: "93%",
  languages: ["Hindi", "English"],
  registrationNo: "UPMC-61202",

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    {
      degree: "MBBS",
      institution: "Motilal Nehru Medical College (MLNMC)",
      location: "Prayagraj, UP",
      year: "",
    },
    {
      degree: "MD — General Medicine",
      institution: "King George's Medical University (KGMU)",
      location: "Lucknow, UP",
      year: "",
    },
    {
      degree: "DM — Neurology",
      institution: "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS)",
      location: "Lucknow, UP",
      year: "",
    },
  ],

  // ── Career Timeline ─────────────────────────────────────────────────────────
  timeline: [
    { year: "2009", title: "MBBS Completed", body: "Motilal Nehru Medical College (MLNMC), Prayagraj" },
    { year: "2016", title: "MD — General Medicine", body: "Specialised in Internal Medicine, KGMU Lucknow" },
    { year: "2020", title: "DM — Neurology", body: "Advanced Neurology training, RMLIMS Lucknow" },
    { year: "2021–2024", title: "Consultant Neurologist, Medanta", body: "Department of Neurology, Lucknow" },
    { year: "2024–2026", title: "Associate Director, Apollomedics", body: "Apollomedics Super Speciality Hospital, Lucknow" },
    { year: "2026 – Till Date", title: "Director — Neurology, Paras Health Kanpur", body: "Extended practice to serve patients in Kanpur region" },
  ],

  // ── Affiliations ────────────────────────────────────────────────────────────
  affiliations: [
    { name: "Paras Health", city: "Kanpur", note: "Director — Neurology (current)" },
    { name: "Equinox Neuro Clinic", city: "Lucknow — Gomti Nagar", note: "Consulting (Wednesday morning & evening)" },
    { name: "Apollo Medics, Lucknow", city: "Lucknow", note: "Former Associate Director" },
    { name: "Medanta, Lucknow", city: "Lucknow", note: "Former Consultant" },
  ],

  // ── Professional Memberships ────────────────────────────────────────────────
  memberships: [
    "Life Member — Indian Stroke Association (ISA)",
    "Life Member — Indian Federation of Neuro Rehabilitation (IFNR)",
    "Platform & Poster Presentation — INSC 2023 & 2025",
  ],

  // ── Primary Clinic (kept for backward-compat — points to Paras Kanpur) ──────
  clinic: {
    name: "Paras Health",
    address: "Paras Health Hospital",
    city: "Kanpur",
    state: "Uttar Pradesh",
    pin: "208001",
    phone: "+91-9793440057",
    email: "equinoxneuro.drpradeep@gmail.com",
    mapEmbed:
      "https://maps.google.com/maps?q=Paras+Health+Kanpur&output=embed",
    timings: "Mon · Tue · Thu · Fri · Sat",
    telehealth: true,
    emergencyAvailable: true,
  },

  // ── All Practice Locations ──────────────────────────────────────────────────
  // Dr. Kumar splits his week across 3 locations. Order here = display order
  // (Lucknow morning → Lucknow evening → Kanpur).
  clinics: [
    {
      id: "lucknow-equinox",
      shortName: "Equinox Neuro Clinic",
      name: "Equinox Neuro Clinic",
      addressLine1: "Vijyant Khand",
      addressLine2: "Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pin: "226010",
      phone: "+91-9793440057",
      days: ["Wed"],
      daysSummary: "Wed: morning & evening",
      timings: "Wednesday morning & evening · call to confirm",
      mapSearchQuery: "Vijyant Khand Gomti Nagar Lucknow",
      mapEmbed:
        "https://maps.google.com/maps?q=Vijyant+Khand+Gomti+Nagar+Lucknow&output=embed",
      mapsUrl:
        "https://www.google.com/maps/search/Vijyant+Khand+Gomti+Nagar+Lucknow",
    },
    {
      id: "kanpur-paras",
      shortName: "Kanpur — Paras Health",
      name: "Paras Health, Kanpur",
      addressLine1: "Paras Health Hospital",
      addressLine2: "",
      city: "Kanpur",
      state: "Uttar Pradesh",
      pin: "208001",
      phone: "+91-9793440057",
      days: ["Mon", "Tue", "Thu", "Fri", "Sat"],
      daysSummary: "Mon, Tue, Thu, Fri, Sat",
      timings: "Mon · Tue · Thu · Fri · Sat",
      mapSearchQuery: "Paras Health Kanpur",
      mapEmbed:
        "https://maps.google.com/maps?q=Paras+Health+Kanpur&output=embed",
      mapsUrl: "https://www.google.com/maps/search/Paras+Health+Kanpur",
    },
  ],

  // ── Weekly schedule (derived from clinics, for the UI ribbon) ───────────────
  weeklySchedule: [
    { day: "Mon", location: "Kanpur" },
    { day: "Tue", location: "Kanpur" },
    { day: "Wed", location: "Lucknow" },
    { day: "Thu", location: "Kanpur" },
    { day: "Fri", location: "Kanpur" },
    { day: "Sat", location: "Kanpur" },
    { day: "Sun", location: "Available" },
  ],

  // ── Consultation Fees ───────────────────────────────────────────────────────
  fees: {
    inPerson: 1000,
    currency: "₹",
    followUp: 500,
  },

  // ── Specialisations ─────────────────────────────────────────────────────────
  specialisations: [
    "Stroke & Cerebrovascular Diseases",
    "Migraine & Headache Management",
    "Epilepsy & Seizure Disorders",
    "Vertigo & Cervical Disorders",
    "Parkinson's & Movement Disorders",
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
        "Movement disorder specialist care: dopaminergic therapy optimisation, physiotherapy and neuro-rehabilitation coordination, and comprehensive caregiver support.",
      conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Ataxia"],
    },
    {
      id: "myasthenia",
      name: "Myasthenia Gravis",
      icon: "💪",
      color: "purple",
      tagline: "Restoring strength and function.",
      description:
        "Comprehensive management of neuromuscular junction disorders with immunotherapy, cholinesterase inhibitors, plasmapheresis coordination, and long-term monitoring.",
      conditions: ["Myasthenia Gravis", "Lambert-Eaton Syndrome", "Ocular MG", "Generalised MG"],
    },
    {
      id: "gbs",
      name: "GBS (Guillain-Barré Syndrome)",
      icon: "🔬",
      color: "navy",
      tagline: "Expert care from diagnosis to recovery.",
      description:
        "Rapid diagnosis and management of acute inflammatory polyneuropathy including IVIG therapy, plasmapheresis, respiratory monitoring, and rehabilitation coordination.",
      conditions: ["Guillain-Barré Syndrome", "CIDP", "Miller Fisher Syndrome", "Acute Polyneuropathy"],
    },
    {
      id: "neuropathy",
      name: "Neuropathy",
      icon: "⚙️",
      color: "sky",
      tagline: "Relief from nerve pain starts here.",
      description:
        "Evaluation and treatment of peripheral nerve disorders including diabetic neuropathy, hereditary neuropathies, and toxic or nutritional causes with nerve conduction studies.",
      conditions: ["Diabetic Neuropathy", "Peripheral Neuropathy", "Hereditary Neuropathy", "Toxic Neuropathy"],
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
    "Nerve Conduction Studies (NCS)",
    "Electromyography (EMG)",
    "Lumbar Puncture (CSF Analysis)",
    "Botox Injections for Migraine & Movement Disorders",
    "Cognitive & Neuropsychological Testing",
    "Dietician",
    "Neuro-Rehabilitation",
  ],

  // ── Neuro-Rehabilitation sub-services ──────────────────────────────────────
  neuroRehab: [
    "Physiotherapy",
    "Speech Therapy",
    "Psychotherapy",
    "Occupational Therapy",
    "Yoga",
    "Naturopathy",
  ],

  // ── Research & Publications ─────────────────────────────────────────────────
  research: [
    "Workshop presentations on Stroke Thrombolysis protocols",
    "Platform & Poster Presentation — INSC 2023 & 2025",
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
      a: "Dr. Kumar offers appointments within the same week for most conditions. Kanpur (Paras Health) runs Mon, Tue, Thu, Fri & Sat; Lucknow clinics run on Wednesday — morning at Equinox Neuro (Gomti Nagar) and evening at Medicentrum (near SGPGI). For urgent symptoms such as sudden severe headache, vision changes, or weakness on one side, please call immediately for a priority slot.",
    },
    {
      q: "What are the consultation fees?",
      a: "In-person consultation is ₹1,000. Follow-up visits are ₹500.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring any previous MRI / CT scan reports, a list of current medications and doses, details of your symptoms and when they started, and your insurance card. Don't worry — our team will guide you through everything.",
    },
    {
      q: "Which day should I come to Lucknow vs Kanpur?",
      a: "Wednesdays are reserved for Lucknow — morning at Equinox Neuro Clinic (Vijyant Khand, Gomti Nagar) and evening at Medicentrum (near SGPGI on Raebareli Road). All other weekdays plus Saturday, Dr. Kumar is at Paras Health, Kanpur. Sunday is also available — please call ahead to confirm.",
    },
    {
      q: "Which insurance plans are accepted?",
      a: "Dr. Kumar accepts Ayushman Bharat, CGHS, most private health insurance plans, and Mediclaim policies. Our front desk team will verify your coverage before the appointment.",
    },
  ],

  // ── Stats for display ───────────────────────────────────────────────────────
  stats: [
    { value: "11+", label: "Years of Experience" },
    { value: "25,000+", label: "Patients Treated" },
    { value: "93%", label: "Recommendation Score" },
    { value: "< 7", label: "Days to First Appt." },
  ],

  // ── Trust badges ────────────────────────────────────────────────────────────
  trust: [
    { icon: "🏥", name: "Paras Health", sub: "Director — Neurology, Kanpur" },
    { icon: "🎓", name: "MLNMC Prayagraj", sub: "MBBS alumnus" },
    { icon: "🏛️", name: "KGMU Lucknow", sub: "MD Medicine alumnus" },
    { icon: "🎓", name: "RMLIMS Lucknow", sub: "DM Neurology" },
    { icon: "🧠", name: "Equinox Neuro Clinic", sub: "Lucknow, Gomti Nagar" },
  ],
} as const;

export type Doctor = typeof DOCTOR;
