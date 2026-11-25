/**
 * Central business information. Every phone number, email, link, and
 * service-area reference on the site reads from this file.
 *
 * ── PLACEHOLDERS ──────────────────────────────────────────────────────
 * Values marked PLACEHOLDER must be replaced with real business details
 * before launch. Nothing else needs to change, the whole site updates
 * from here.
 */
export const SITE = {
  name: "Mecha Auto Spa",
  tagline: "Precision. Protection. Perfection.",
  description:
    "Ceramic window tint, auto detailing, paint correction, and ceramic coatings in Rochester, MN, serving surrounding communities.",
  /** Canonical origin, www is the GitHub Pages custom domain. */
  url: "https://www.mechaautospa.com",

  phone: "(507) 993-3003",
  phoneHref: "tel:+15079933003",
  smsHref: "sms:+15079933003",
  email: "mechaautospa@gmail.com",

  /**
   * Square Appointments booking page. `CtaLink` opens any http(s) URL in
   * a new tab, so this works anywhere a CtaLink is used.
   */
  bookingUrl:
    "https://book.squareup.com/appointments/cf5z9nqvog67iw/location/LQG89HXRSNPGG",

  /**
   * PLACEHOLDER, POST endpoint for the quote form (e.g. Formspree,
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
    { days: "Monday to Friday", hours: "8:00 AM to 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM to 4:00 PM" },
    { days: "Sunday", hours: "By appointment" },
  ],

  /**
   * Sitewide promo strip. Set to null when the special ends, the banner
   * disappears everywhere.
   */
  promo: null as { headline: string; detail: string; href: string } | null,

  /** Empty string = not launched yet; the footer skips missing networks. */
  social: {
    instagram: "https://instagram.com/mecha.autospa",
    facebook: "https://facebook.com/mecha.autospa",
    google: "", // add Google Business Profile link when live
  },
} as const;

export const NAV_LINKS = [
  { label: "Window Tint", href: "/window-tinting/" },
  { label: "Detailing", href: "/detailing/" },
  { label: "Paint & Cosmetic", href: "/paint-and-cosmetic/" },
  { label: "Gallery", href: "/detailing/#before-after" },
  { label: "Contact", href: "/contact/" },
] as const;

export const TRUST_BADGES = [
  "Rochester Based",
  "Premium Products",
  "Satisfaction Guaranteed",
] as const;
