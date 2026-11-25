export interface Faq {
  question: string;
  answer: string;
}

/* Answers restate facts from CLAUDE.md's fact sheet and src/data/services.ts.
 * The business is not mobile (owner, Nov 2026): no "we come to you". */

/** Neutral questions, homepage. */
export const generalFaqs: Faq[] = [
  {
    question: "Where is the work done?",
    answer:
      "At our location in Rochester, MN. We send the address when you request a quote.",
  },
  {
    question: "How do I schedule?",
    answer:
      "Book detailing online with Book Now. Window tinting, paint correction, and ceramic coatings are quoted first: call, text, email, or use the quote form.",
  },
  {
    question: "When is my price confirmed?",
    answer:
      "Before your appointment. Published prices are starting points and depend on the vehicle.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "Detailing has a 48-hour make-it-right guarantee. Window tint has free re-dos and a lifetime guarantee for as long as you own the vehicle.",
  },
];

/** Detailing-specific questions, /detailing. */
export const detailingFaqs: Faq[] = [
  {
    question: "How long does a detail take?",
    answer:
      "Most single services take 2 to 4 hours. Full details take 4 to 6 hours. Ceramic coating installs typically take a full day.",
  },
  {
    question: "Can you detail trucks and SUVs?",
    answer:
      "Yes. Pricing comes in three sizes: cars, SUVs, and trucks & vans. Third-row SUVs use the trucks & vans price.",
  },
  {
    question: "Do you remove pet hair?",
    answer:
      "Yes. Pet hair removal is an add-on priced by severity, $50 to $150.",
  },
  {
    question: "Can you remove odors?",
    answer:
      "Yes, including smoke, pet, and spill odors. Odor treatment is an add-on priced by severity, $50 to $100.",
  },
  {
    question: "How long does ceramic coating last?",
    answer:
      "Packages are rated for 1, 3, or 5 years, assuming regular maintenance washes. How the vehicle is driven and stored affects how long it lasts.",
  },
];

/** Everything, for anywhere that wants the full list. */
export const faqs: Faq[] = [...generalFaqs, ...detailingFaqs];
