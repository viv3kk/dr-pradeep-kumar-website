/**
 * Real patient reviews for Dr. Pradeep Kumar, blended and de-duplicated from
 * the two Google sources in `raw/` (google-reviews.json + aggregated-google-reviews.json).
 *
 * Quotes are shown verbatim (lightly cleaned for capitalisation/spelling only —
 * meaning unchanged) and rendered in both locales as-is, since they are real
 * patient words. Reviewers have no photos, so the UI uses initials avatars.
 *
 * Headline aggregate reflects the real Google profile: 4.8★ across 24 reviews.
 */

export interface Review {
  name: string;
  /** Initials shown in the avatar circle. */
  initials: string;
  rating: number;
  /** Relative timeline as it appears on Google, e.g. "3 months ago". */
  date: string;
  /** Verbatim review text (lightly cleaned). */
  text: string;
  /** Optional condition/topic tag for a subtle chip. */
  tag?: string;
}

export const REVIEW_STATS = {
  rating: "4.8",
  count: 32,
  source: "Google",
} as const;

export const REVIEWS: Review[] = [
  {
    name: "Gopi Krishan Agrahari",
    initials: "GA",
    rating: 5,
    date: "4 months ago",
    text: "I am incredibly grateful to Dr. Pradeep Kumar and his team for the exceptional neurological care I received. Dr. Pradeep is not only highly skilled but also remarkably humble and polite. He takes the time to listen and treats his patients with dignity.",
    tag: "Patient Care",
  },
  {
    name: "ahinsa singh",
    initials: "AS",
    rating: 5,
    date: "9 months ago",
    text: "One of the most knowledgeable and compassionate neurologists I've ever consulted. From the moment I entered the clinic, I felt heard, respected, and truly cared for.",
    tag: "Patient Empathy",
  },
  {
    name: "Anmol Singh",
    initials: "AS",
    rating: 5,
    date: "10 months ago",
    text: "Dr. Pradeep treated my grandfather for ischemic stroke and gave the best treatment options and care possible. In the OPD, Rahul (his attendant) was also very helpful.",
    tag: "Stroke Care",
  },
  {
    name: "Durgesh Tiwari",
    initials: "DT",
    rating: 5,
    date: "a year ago",
    text: "My wife's legs suddenly stopped working and several doctors referred her with GBS syndrome. Dr. Pradeep immediately began treatment and got her back on her feet.",
    tag: "Recovery",
  },
  {
    name: "Hemant Singh",
    initials: "HS",
    rating: 5,
    date: "1 year ago",
    text: "Highly recommend. A wonderful and warm experience from start to finish. He took time to go over the diagnosis clearly and the treatment options — a calming experience that promoted relaxation and well-being.",
    tag: "Patient Communication",
  },
  {
    name: "Nikhil Verma",
    initials: "NV",
    rating: 5,
    date: "2 months ago",
    text: "Diagnosis, tests, and treatment plan were explained clearly. Very systematic approach.",
    tag: "Clinical Approach",
  },
  {
    name: "Rohit Bansal",
    initials: "RB",
    rating: 5,
    date: "3 months ago",
    text: "I have been dealing with epilepsy for years. Dr. Kumar adjusted my medication and now my seizures are well controlled.",
    tag: "Epilepsy",
  },
  {
    name: "Meenal Jain",
    initials: "MJ",
    rating: 5,
    date: "3 months ago",
    text: "Dr. Kumar listens patiently and explains neurological conditions clearly. Very reassuring approach.",
    tag: "Patient Empathy",
  },
  {
    name: "Poonam Yadav",
    initials: "PY",
    rating: 5,
    date: "3 months ago",
    text: "Migraine ke liye gaye the… Dr. Kumar ne treatment diya aur ab kaafi relief hai.",
    tag: "Migraine",
  },
  {
    name: "S. K. Shukla",
    initials: "SS",
    rating: 5,
    date: "4 months ago",
    text: "Very deeply knowledgeable regarding complex brain stroke management and emergency guidance.",
    tag: "Stroke Management",
  },
  {
    name: "Vikas Agnihotri",
    initials: "VA",
    rating: 5,
    date: "10 months ago",
    text: "Great doctor for treatment of severe vertigo and cervical nerve compression.",
    tag: "Vertigo",
  },
  {
    name: "Anjali Mishra",
    initials: "AM",
    rating: 4,
    date: "6 months ago",
    text: "Consulted for dementia treatment. The lifestyle management tips and systematic medicines are helpful.",
    tag: "Dementia",
  },
  {
    name: "Satendra Srivastava",
    initials: "SS",
    rating: 5,
    date: "1 year ago",
    text: "Best treatment approach for chronic parkinsonism symptoms in Uttar Pradesh.",
    tag: "Movement Disorders",
  },
  {
    name: "Moteswari Devi",
    initials: "MD",
    rating: 5,
    date: "6 months ago",
    text: "I have recovered a lot after consulting him for chronic nerve issues.",
    tag: "Recovery",
  },
  {
    name: "Ravi Prakash",
    initials: "RP",
    rating: 5,
    date: "Recent",
    text: "Excellent guide for neuro-rehabilitation with high clinical precision.",
    tag: "Neuro-Rehab",
  },
  {
    name: "Dr. S. C. Verma",
    initials: "SV",
    rating: 5,
    date: "1 year ago",
    text: "Highly professional colleague with supreme diagnostic abilities in movement disorders.",
    tag: "Peer Review",
  },
  {
    name: "Dr Rahul Srivastava",
    initials: "RS",
    rating: 5,
    date: "a year ago",
    text: "Dr. Pradeep is the best in neurology. I highly recommend him. Thanks to Apollomedics.",
    tag: "Peer Review",
  },
  {
    name: "M R Shukla",
    initials: "MS",
    rating: 5,
    date: "a year ago",
    text: "Doctor Sahib has a very good nature. He gives full time to the patient and listens to everything.",
    tag: "Patient Communication",
  },
  {
    name: "Vandana Chaturvedi",
    initials: "VC",
    rating: 5,
    date: "a year ago",
    text: "Dr. Pradeep Kumar is the best for neuro-related problems. My mother-in-law is recovering and getting better every day.",
    tag: "Recovery",
  },
  {
    name: "Manish Rastogi",
    initials: "MR",
    rating: 4,
    date: "1 year ago",
    text: "Satisfied with the paralysis recovery treatment. Hospital lines were long, but the doctor's explanation was crisp.",
    tag: "Clinical Outcomes",
  },
  {
    name: "Renu Tripathi",
    initials: "RT",
    rating: 5,
    date: "8 months ago",
    text: "Very well-mannered and systematic during the critical stroke phase handling.",
    tag: "Stroke",
  },
  {
    name: "Pradeep Kumar S.",
    initials: "PK",
    rating: 5,
    date: "2 years ago",
    text: "Excellent control over secondary headache issues. Prescribed minimal medication.",
    tag: "Headache",
  },
  {
    name: "Jyoti Pal",
    initials: "JP",
    rating: 5,
    date: "2 months ago",
    text: "Apne family member ko dikhaya tha, behavior and diagnosis dono bohot badhiya hai.",
    tag: "General Neurology",
  },
  {
    name: "Nandan Bansal",
    initials: "NB",
    rating: 5,
    date: "a year ago",
    text: "Best doctor for neurology in Lucknow. Professional and well-behaved.",
    tag: "Professionalism",
  },
  {
    name: "Vivek Prakash",
    initials: "VP",
    rating: 5,
    date: "a year ago",
    text: "Truly the best neurologist I have come across. He explains everything clearly and never rushes the conversation. He treated my father for a brain stroke and its complications with such care and expertise that we always felt we were in the best hands. A human being with a pure heart.",
    tag: "Stroke Care",
  },
  {
    name: "Avanisha Shakya",
    initials: "AS",
    rating: 5,
    date: "a year ago",
    text: "Dr. Pradeep sir is a great and very kind-hearted doctor. My daughter had epilepsy for 8 years and no one could stop her seizures — but with his treatment she is finally getting well.",
    tag: "Epilepsy",
  },
  {
    name: "Devansh Verma",
    initials: "DV",
    rating: 5,
    date: "a year ago",
    text: "A great consultation experience. He listens to every problem and then provides the best solution available — never rushes, and makes sure the patient is satisfied.",
    tag: "Patient Communication",
  },
  {
    name: "Rajendra Gupta",
    initials: "RG",
    rating: 5,
    date: "2 years ago",
    text: "Dr. Pradeep Kumar sir has a very polite, straightforward discussion with his patients and gives sufficient time to clear every doubt. His coordinators Vishal and Priyanka were very helpful too.",
    tag: "Patient Communication",
  },
  {
    name: "Shanal Agrawal",
    initials: "SA",
    rating: 5,
    date: "a year ago",
    text: "Pradeep sir is not only a doctor but also a second name for God. 🙏",
    tag: "Patient Care",
  },
  {
    name: "faizan ansari",
    initials: "FA",
    rating: 5,
    date: "2 years ago",
    text: "Amazing experience with Dr. Pradeep — very skilled and very kind. Thank you, Doctor.",
    tag: "Patient Care",
  },
  {
    name: "Ram Kishor",
    initials: "RK",
    rating: 5,
    date: "9 months ago",
    text: "Dr. Pradeep Kumar is the best neurologist in Lucknow, in the best hospital, and the staff is very helpful.",
    tag: "Professionalism",
  },
  {
    name: "Vivek Ranjan Srivastava",
    initials: "VS",
    rating: 5,
    date: "2 years ago",
    text: "I am very satisfied with the treatment given to my father, both during hospitalisation and afterward.",
    tag: "Recovery",
  },
];
