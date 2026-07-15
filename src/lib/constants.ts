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
    "Premium mobile detailing, ceramic coatings, and paint correction serving Rochester, Winona, Eyota, Fountain City, and nearby communities.",
  /** Canonical origin — www is the GitHub Pages custom domain. */
  url: "https://www.mechaautospa.com",

  phone: "(507) 993-3003",
  phoneHref: "tel:+15079933003",
  smsHref: "sms:+15079933003",
  email: "mechaautospa@gmail.com",

  // Online booking is deprecated for now — every CTA routes to phone/email.
  // When a scheduling service launches, re-add `bookingUrl` here and wire it
  // back into the navbar, heroes, pricing cards, contact page, and footer.

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

  /**
   * Sitewide promo strip. Set to null when the special ends — the banner
   * disappears everywhere.
   */
  promo: {
    headline: "Grand Opening — 25% off all services in July!",
    detail: "New clients only · Excludes add-ons",
    href: "/request-quote/",
  } as { headline: string; detail: string; href: string } | null,

  /** Empty string = not launched yet; the footer skips missing networks. */
  social: {
    instagram: "https://instagram.com/mecha.autospa",
    facebook: "https://facebook.com/mecha.autospa",
    google: "", // add Google Business Profile link when live
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Ceramic Coatings", href: "/ceramic-coatings/" },
  { label: "Paint Correction", href: "/paint-correction/" },
  { label: "Gallery", href: "/#before-after" },
  { label: "Contact", href: "/contact/" },
] as const;

export const TRUST_BADGES = [
  "Fully Mobile",
  "Premium Products",
  "Satisfaction Guaranteed",
] as const;
