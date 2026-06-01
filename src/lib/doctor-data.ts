// ─── Dr. Pradeep Kumar — Real Profile Data ───────────────────────────────────
// Verified against Dr. Kumar's official prescription pad (May 2026).

export const DOCTOR = {
  name: "Dr. Pradeep Kumar",
  title: "MBBS, MD (Medicine), DM (Neurology)",
  designation: "Director — Neurology, Paras Health Kanpur",
  tagline: "Your brain health deserves gentle, expert care.",
  subTagline:
    "With 15+ years of clinical experience, Dr. Pradeep Kumar offers compassionate, evidence-based neurology care for patients across Lucknow & Kanpur — in a language you'll truly understand.",
  experience: "15+",
  patients: "Thousands",
  rating: "4.8",
  ratingCount: "32",
  recommendationScore: "97%",
  languages: ["Hindi", "English"],
  registrationNo: "UPMC-61202",

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    {
      degree: "MBBS",
      institution: "Motilal Nehru Medical College (MLNMC)",
      location: "Prayagraj, UP",
      year: "2005–2011",
    },
    {
      degree: "MD — General Medicine",
      institution: "King George's Medical University (KGMU)",
      location: "Lucknow, UP",
      year: "2013–2016",
    },
    {
      degree: "DM — Neurology",
      institution: "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS)",
      location: "Lucknow, UP",
      year: "2017–2020",
    },
  ],

  // ── Career Timeline ─────────────────────────────────────────────────────────
  timeline: [
    { year: "2005–2011", title: "MBBS", body: "Motilal Nehru Medical College (MLNMC), Prayagraj" },
    { year: "2013–2016", title: "MD — General Medicine", body: "King George's Medical University (KGMU), Lucknow" },
    { year: "2017", title: "Consultant — Internal Medicine", body: "Shri Harihar Hospital, Kullu, Himachal Pradesh" },
    { year: "2017–2020", title: "DM — Neurology", body: "Advanced Neurology training, RMLIMS Lucknow" },
    { year: "2021–2024", title: "Consultant Neurologist & Headache Clinic In-Charge", body: "Medanta, Lucknow" },
    { year: "2024–2026", title: "Associate Director & Stroke Lead", body: "Neurosciences, Apollomedics, Lucknow" },
    { year: "2026 – Present", title: "Director — Neurology", body: "Paras Health, Kanpur" },
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
    "Indian Stroke Association (ISA)",
    "Neurosonology Society of India",
    "Indian Federation of Neuro Rehabilitation (IFNR)",
    "World Stroke Organization (WSO)",
    "Indian Epilepsy Society",
    "Joint Secretary — Indian National Stroke Conference 2025",
    "Founder Member & Co-Treasurer — Stroke & Education Society",
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
      daysSummary: "Wednesday",
      timings: "Morning & evening · call to confirm",
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
      timings: "9:00 AM – 5:00 PM",
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
    followUp: 1000,
  },

  // ── Specialisations ─────────────────────────────────────────────────────────
  specialisations: [
    "Acute Stroke & Brain Attack Management",
    "Headache Disorders & Migraine",
    "Epilepsy & Seizures",
    "Vertigo",
    "Dementia & Alzheimer's",
    "Parkinsonism & Movement Disorders",
    "Neuro Infections & Tropical Neurology",
    "Neuro Rehabilitation",
    "Neuropathy",
    "Back Pain",
    "Cervical & Neck Pain",
  ],

  // ── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      id: "headache",
      name: "Headache Disorders",
      icon: "🧠",
      color: "coral",
      tagline: "Freedom from pain starts here.",
      description:
        "Modern preventive care for chronic migraine, cluster, and tension headaches.",
      conditions: ["Chronic Migraine", "Cluster Headache", "Tension Headache", "Secondary Headache"],
    },
    {
      id: "vertigo",
      name: "Vertigo",
      icon: "🌀",
      color: "teal",
      tagline: "Stop the world from spinning.",
      description:
        "In-clinic BPPV manoeuvres and vestibular rehab to stop the spinning.",
      conditions: ["BPPV", "Vestibular Neuritis", "Ménière's Disease", "Central Vertigo"],
    },
    {
      id: "epilepsy",
      name: "Epilepsy & Seizures",
      icon: "⚡",
      color: "teal",
      tagline: "Take back control of your life.",
      description:
        "EEG-guided diagnosis and drug optimisation, even for drug-resistant epilepsy.",
      conditions: ["Focal Epilepsy", "Generalised Epilepsy", "Status Epilepticus", "Febrile Seizures"],
    },
    {
      id: "stroke",
      name: "Stroke & Brain Attack",
      icon: "❤️‍🩹",
      color: "navy",
      tagline: "Every minute counts — we act fast.",
      description:
        "Rapid assessment, IV thrombolysis, and secondary-prevention planning.",
      conditions: ["Acute Stroke", "TIA", "Haemorrhagic Stroke", "Stroke Rehabilitation"],
    },
    {
      id: "parkinsonism",
      name: "Parkinsonism & Movement Disorders",
      icon: "🌿",
      color: "gold",
      tagline: "Living well, moving better.",
      description:
        "Medication tuning, rehab, and caregiver support to keep you moving.",
      conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Ataxia"],
    },
    {
      id: "dementia",
      name: "Dementia & Alzheimer's",
      icon: "🌙",
      color: "sky",
      tagline: "Clarity through careful assessment.",
      description:
        "Cognitive testing, accurate diagnosis, and memory-care plans for families.",
      conditions: ["Alzheimer's Disease", "Vascular Dementia", "MCI", "Frontotemporal Dementia"],
    },
    {
      id: "neuropathy",
      name: "Neuropathy",
      icon: "⚙️",
      color: "purple",
      tagline: "Relief from nerve pain starts here.",
      description:
        "Nerve-conduction testing and relief for diabetic and other neuropathies.",
      conditions: ["Diabetic Neuropathy", "Peripheral Neuropathy", "Hereditary Neuropathy", "Toxic Neuropathy"],
    },
    {
      id: "neuro-infections",
      name: "Neuro Infections",
      icon: "🦠",
      color: "navy",
      tagline: "Protecting the nervous system.",
      description:
        "Diagnosis and treatment of meningitis, encephalitis, and brain infections.",
      conditions: ["Bacterial Meningitis", "Viral Encephalitis", "Neurocysticercosis", "Tubercular Meningitis"],
    },
    {
      id: "neuro-rehabilitation",
      name: "Neuro Rehabilitation",
      icon: "🏃",
      color: "gold",
      tagline: "Recovery, one step at a time.",
      description:
        "Physiotherapy, speech, and occupational therapy to rebuild after injury.",
      conditions: ["Post-Stroke Rehab", "TBI Recovery", "Spasticity Management", "Gait Disorders"],
    },
    {
      id: "back-pain",
      name: "Back Pain",
      icon: "🦴",
      color: "sky",
      tagline: "Back to living pain-free.",
      description:
        "Neurological work-up for disc disease, sciatica, and chronic back pain.",
      conditions: ["Lumbar Disc Disease", "Radiculopathy", "Sciatica", "Spinal Stenosis"],
    },
    {
      id: "cervical-pain",
      name: "Cervical & Neck Pain",
      icon: "🫀",
      color: "coral",
      tagline: "Ease the burden on your neck.",
      description:
        "Targeted care for cervical spondylosis and nerve-related neck pain.",
      conditions: ["Cervical Spondylosis", "Cervical Myelopathy", "Cervical Radiculopathy", "Whiplash"],
    },
    {
      id: "myasthenia",
      name: "Myasthenia Gravis",
      icon: "💪",
      color: "purple",
      tagline: "Restoring strength and function.",
      description:
        "Immunotherapy and long-term management for myasthenia gravis.",
      conditions: ["Myasthenia Gravis", "Lambert-Eaton Syndrome", "Ocular MG", "Generalised MG"],
    },
    {
      id: "gbs",
      name: "GBS (Guillain-Barré Syndrome)",
      icon: "🔬",
      color: "navy",
      tagline: "Expert care from diagnosis to recovery.",
      description:
        "Rapid IVIG and plasmapheresis care for Guillain-Barré syndrome.",
      conditions: ["Guillain-Barré Syndrome", "CIDP", "Miller Fisher Syndrome", "Acute Polyneuropathy"],
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
    "Conducted IV Thrombolysis & Stroke Management Workshops — National Stroke Conference 2025",
    "Regular training of stroke-management teams at RMLIMS, Medanta & Apollo Hospitals, Lucknow",
    "Organised Migraine Management Workshops & a dedicated Migraine Clinic",
    "Epilepsy Awareness Workshop (Nov 2025) & Epilepsy Walkathon — International Epilepsy Day 2026",
    "World Parkinson's Day Workshop & Walkathon with PDMS, Mumbai (2025–2026)",
    "Platform & Poster Presentations — INSC 2023 & 2025",
    "Competent-authority member, Transplant Committee — Apollomedics, Lucknow",
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
    { value: "15+", label: "Years of Experience" },
    { value: "Thousands", label: "Patients Treated" },
    { value: "97%", label: "Recommendation Score" },
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
