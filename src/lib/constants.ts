/**
 * Central business information. Every phone number, email, link, and
 * service-area reference on the site reads from this file.
 *
 * ── PLACEHOLDERS ──────────────────────────────────────────────────────
 * Values marked PLACEHOLDER must be replaced with real business details
 * before launch. Nothing else needs to change — the whole site updates
 * from here.
 */
export const SITE = {
  name: "Mecha Auto Spa",
  tagline: "Precision. Protection. Perfection.",
  description:
    "Premium mobile detailing, ceramic coatings, and paint correction serving Rochester, Winona, and surrounding Southern Minnesota communities.",
  /** PLACEHOLDER — set to the purchased domain before launch. */
  url: "https://mechaautospa.com",

  /** PLACEHOLDER phone. */
  phone: "(507) 555-0123",
  phoneHref: "tel:+15075550123",
  /** PLACEHOLDER email. */
  email: "hello@mechaautospa.com",

  /** PLACEHOLDER — Cal.com scheduling link. */
  bookingUrl: "https://cal.com/mecha-auto-spa",

  /**
   * PLACEHOLDER — POST endpoint for the quote form (e.g. Formspree,
   * Basin, or a future API route). Leave empty to fall back to a
   * pre-filled email draft.
   */
  quoteEndpoint: "",

  home: {
    city: "Rochester",
    region: "MN",
    postalCode: "55901",
    country: "US",
  },

  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "By appointment" },
  ],

  /** PLACEHOLDER rating shown in trust UI. Not emitted as schema. */
  rating: { value: "5.0", count: 47 },

  /** PLACEHOLDER social links. */
  social: {
    instagram: "https://instagram.com/mechaautospa",
    facebook: "https://facebook.com/mechaautospa",
    google: "https://g.page/mecha-auto-spa",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Ceramic Coatings", href: "/ceramic-coatings/" },
  { label: "Paint Correction", href: "/paint-correction/" },
  { label: "Gallery", href: "/#before-after" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact/" },
] as const;

export const TRUST_BADGES = [
  "Fully Mobile",
  "Fully Insured",
  "Premium Products",
  "Satisfaction Guaranteed",
] as const;
