import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  CircleDot,
  Dog,
  Droplets,
  Gem,
  Layers,
  Lightbulb,
  Sailboat,
  Shield,
  Sofa,
  Sparkles,
  SunDim,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────
 * Central service + pricing catalog. Used by the homepage, service
 * pages, quote form, and structured data. Single source of truth -
 * matches the printed Mecha Auto Spa pricing flyer.
 * ──────────────────────────────────────────────────────────────────── */

export interface VehiclePrices {
  cars: number;
  suvs: number;
  trucks: number;
}

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  priceNote?: string;
  /** Per-vehicle-size pricing rows (cars / SUVs / trucks & vans). */
  vehiclePrices?: VehiclePrices;
  blurb: string;
  features: string[];
  popular?: boolean;
}

export interface TierGroup {
  id: string;
  title: string;
  subtitle: string;
  /** Printed under the tier grid, e.g. the flyer's vehicle-sizing rule. */
  footnote?: string;
  tiers: ServiceTier[];
}

/* ── Detailing packages ──
 * Signature Exterior / Interior / Full match the Sept 2026 flyer 1:1.
 * Platinum is not on that flyer but is still sold (owner, Sept 2026) -
 * its pricing is carried over and has no flyer to check against.
 */
export const detailPackages: TierGroup = {
  id: "packages",
  title: "Detailing Packages",
  subtitle:
    "Four defined packages, priced by vehicle size.",
  footnote: "Third-row SUVs are priced in the Trucks & Vans category.",
  tiers: [
    {
      id: "signature-exterior",
      name: "Signature Exterior Detail",
      price: 105,
      vehiclePrices: { cars: 105, suvs: 125, trucks: 140 },
      blurb: "The essential reset for a clean, glossy, protected exterior.",
      features: [
        "Foam cannon pre-wash",
        "Hand wash (two-bucket method)",
        "Wheel & tire cleaning",
        "Tire dressing",
        "Door jamb cleaning",
        "Exterior windows",
        "Spray sealant protection (3–6 months)",
      ],
    },
    {
      id: "interior-detail",
      name: "Interior Detail",
      price: 150,
      vehiclePrices: { cars: 150, suvs: 175, trucks: 200 },
      blurb: "A thorough reset for the vehicle cabin.",
      features: [
        "Thorough vacuum",
        "Blowout with Tornador",
        "Dashboard & trim cleaned",
        "Door panels",
        "Cup holders & center console",
        "UV interior dressing",
        "Interior glass",
        "Floor mats cleaned",
      ],
    },
    {
      id: "signature-full",
      name: "Signature Full Detail",
      price: 225,
      popular: true,
      vehiclePrices: { cars: 225, suvs: 275, trucks: 299 },
      blurb: "Exterior + Interior combined, plus the finishing touches.",
      features: [
        "Everything in Exterior + Interior",
        "Door jambs",
        "Light stain removal",
        "Tire dressing",
        "Spray sealant protection",
        "Final inspection",
      ],
    },
    {
      id: "platinum",
      name: "Platinum Detail",
      price: 350,
      vehiclePrices: { cars: 350, suvs: 400, trucks: 450 },
      blurb: "Our deepest inside-and-out detail, with extra attention where it counts.",
      features: [
        "Everything in Full Detail",
        "Iron decontamination",
        "Clay bar treatment",
        "Carpet extraction",
        "Seat shampoo",
        "Engine bay detail",
      ],
    },
  ],
};

/* ── Ceramic coating tiers ── */
export const ceramicTiers: TierGroup = {
  id: "ceramic",
  title: "Ceramic Coating Packages",
  subtitle:
    "Coating packages rated for 1, 3, or 5 years, with paint preparation included.",
  tiers: [
    {
      id: "ceramic-1yr",
      name: "1-Year Ceramic",
      price: 299,
      blurb: "Entry protection with real ceramic gloss and beading.",
      features: [
        "Single-layer ceramic coating",
        "Gloss enhancement",
        "Hydrophobic protection",
        "Wash & full paint prep included",
      ],
    },
    {
      id: "ceramic-3yr",
      name: "3-Year Ceramic",
      price: 699,
      popular: true,
      blurb: "The durability sweet spot for daily-driven vehicles.",
      features: [
        "Ceramic coating application",
        "High-gloss finish",
        "Care guidance",
        "Wash, decon & paint prep included",
      ],
    },
    {
      id: "ceramic-5yr",
      name: "5-Year Ceramic",
      price: 999,
      blurb: "Maximum protection for long-term ownership.",
      features: [
        "Ceramic coating application",
        "Gloss enhancement",
        "Care guidance",
        "Wash, decon & paint prep included",
      ],
    },
  ],
};

/* ── Paint correction tiers ── */
export const correctionTiers: TierGroup = {
  id: "paint-correction",
  title: "Paint Correction",
  subtitle: "Machine polishing for visible swirls and surface defects.",
  tiers: [
    {
      id: "correction-one-step",
      name: "One-Step Enhancement",
      price: 450,
      priceNote: "from",
      blurb: "Removes light swirls and restores deep gloss in one stage.",
      features: [
        "Targets light swirls and surface defects",
        "Enhances gloss & clarity",
        "Single-stage machine polish",
        "Full wash & decontamination prep",
      ],
    },
    {
      id: "correction-two-step",
      name: "Two-Step Correction",
      price: 800,
      priceNote: "from",
      popular: true,
      blurb: "Cut and polish for heavily swirled or scratched paint.",
      features: [
        "Targets deeper swirls and surface defects",
        "Multi-stage gloss refinement",
        "Multi-stage compounding & polishing",
        "Full wash & decontamination prep",
      ],
    },
  ],
};

/* ── Add-ons ──
 * All match the Sept 2026 flyer except Glass Ceramic Coating, which is
 * still offered but was left off that flyer (owner, Sept 2026).
 */
export interface AddOn {
  name: string;
  priceRange: string;
  description: string;
  icon: LucideIcon;
}

export const addOns: AddOn[] = [
  {
    name: "Engine Bay Detail",
    priceRange: "$50",
    description: "Safely degreased, rinsed, and dressed.",
    icon: Wrench,
  },
  {
    name: "Pet Hair Removal",
    priceRange: "$50–$150",
    description: "Specialized tools for embedded hair in carpet and cloth.",
    icon: Dog,
  },
  {
    name: "Carpet Extraction",
    priceRange: "$75+",
    description: "Hot-water extraction that lifts dirt from deep in the fibers.",
    icon: Droplets,
  },
  {
    name: "Seat Shampoo",
    priceRange: "$75+",
    description: "Cloth seats shampooed, extracted, and dried.",
    icon: Armchair,
  },
  {
    name: "Headlight Restoration",
    priceRange: "$80",
    description: "Improves clarity on oxidized headlight lenses.",
    icon: Lightbulb,
  },
  {
    name: "Trim Restoration",
    priceRange: "$75",
    description: "Treatment for faded exterior plastic trim.",
    icon: Layers,
  },
  {
    name: "Glass Ceramic Coating",
    priceRange: "$100",
    description: "Rain beads and wipes away for clearer visibility.",
    icon: Shield,
  },
  {
    name: "Wheel Ceramic Coating",
    priceRange: "$200",
    description: "Coating for wheels to make routine cleaning easier.",
    icon: CircleDot,
  },
  {
    name: "Leather Conditioning",
    priceRange: "$40",
    description: "Cleaning and conditioning for leather surfaces.",
    icon: Sofa,
  },
  {
    name: "Odor Treatment",
    priceRange: "$50–$100",
    description: "Treatment for smoke, pet, and spill odors.",
    icon: Wind,
  },
];

/* ── Quote-only services ──
 * Offered, but deliberately carry no numbers: the owner has not set rates
 * (Sept 2026). Do NOT invent pricing here, and do not add film brands, VLT
 * percentages, warranty terms, or any claim about Minnesota tint law, none
 * of that has been confirmed. Descriptions stay at the level of "tell us
 * what you have and we'll quote it".
 */
export interface InquiryService {
  id: string;
  name: string;
  /** What we ask for in order to quote, never an implied price. */
  description: string;
  /** Real photo only. Omitted until we have one; the card handles that. */
  image?: string;
  imageAlt?: string;
  icon: LucideIcon;
}

export const inquiryServices: InquiryService[] = [
  {
    id: "watercraft",
    name: "Watercraft Detailing",
    description:
      "Boats and personal watercraft, washed and machine polished. Quoted per hull.",
    image: "/images/boat-polish.jpg",
    imageAlt: "Machine polishing the hull of a boat",
    icon: Sailboat,
  },
];

/* ── Ceramic benefits (landing page cards) ── */
export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ceramicBenefits: Benefit[] = [
  {
    title: "Water Beading",
    description: "Helps water bead and release from treated paint.",
    icon: Droplets,
  },
  {
    title: "Paint Preparation",
    description: "Wash and paint preparation are included before application.",
    icon: Layers,
  },
  {
    title: "Gloss Enhancement",
    description: "Adds depth and gloss to prepared paint.",
    icon: Gem,
  },
  {
    title: "Routine Maintenance",
    description: "Makes routine hand washing easier.",
    icon: Zap,
  },
  {
    title: "Package Choices",
    description: "Choose a coating package rated for 1, 3, or 5 years.",
    icon: Sparkles,
  },
];

/* ── Service categories ──
 * The three top-level doors: homepage hero, nav, footer, and the quote
 * form's grouped dropdown. Order is the owner's (Nov 2026): tint first,
 * then detailing, then paint & cosmetic. Every highlight restates a fact
 * already in this file, add nothing here that isn't sourced elsewhere.
 */
export type ServiceCategoryId = "tint" | "detailing" | "paint";

export interface ServiceCategory {
  id: ServiceCategoryId;
  /** Short label for nav. */
  label: string;
  title: string;
  /** The category's own page. */
  href: string;
  description: string;
  /** "from $105+" style; omitted when the category is quote-only. */
  startingAt?: string;
  highlights: string[];
  icon: LucideIcon;
  /** Real or stock photo; omitted falls back to the icon panel. */
  image?: string;
  /** Describes only what is in the frame. */
  imageAlt?: string;
  /** Options this category contributes to the quote form dropdown. */
  quoteOptions: string[];
}

/* ── Window tinting facts ──
 * All from the owner in chat, Nov 2026. Tinting is quote-only (no Square
 * booking); "from $99" is the owner's published starting point, actual
 * packages vary by vehicle. Do NOT add a film brand, tint-law/legality
 * claims (owner: put nothing about legality on the site), or warranty
 * wording beyond what's below.
 */
export const tint = {
  startingAt: 99,
  film: "Ceramic window film",
  /** Visible light transmission, lower is darker. */
  shades: [5, 15, 20, 35, 50],
  windows: [
    "Front side windows",
    "Rear side windows",
    "Back glass",
    "Windshield strip",
    "Full windshield",
  ],
  removal: "Old tint removal, priced per job.",
  timing: [
    { label: "Side windows only", value: "About 3 hours" },
    { label: "Full vehicle", value: "Up to 7 hours" },
  ],
  guarantee: [
    "Free re-dos if you're not satisfied",
    "Lifetime guarantee for as long as you own the vehicle",
  ],
} as const;

/* ── Tint work photos ──
 * Owner's own jobs. Every caption is the owner's answer (Nov 2026), keyed
 * by the original file name. "Factory glass" = rear windows left as the
 * car came; we did not film them. Alt text describes only what's visible.
 */
export interface TintPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const tintGallery: TintPhoto[] = [
  { src: "/images/tint/tint-20-all.jpg", alt: "A grey sedan with tinted windows, side view", caption: "20% all around" }, // IMG_0341
  { src: "/images/tint/tint-15-all.jpg", alt: "A black sedan with tinted windows, side view", caption: "15% all around" }, // IMG_0343
  { src: "/images/tint/tint-5-all.jpg", alt: "A white sedan with dark tinted windows, side view", caption: "5% all around" }, // IMG_0342
  { src: "/images/tint/tint-20-front-5-rear-a.jpg", alt: "A dark grey sedan with tinted windows, side view", caption: "20% front, 5% rear" }, // IMG_0345
  { src: "/images/tint/tint-20-front-5-rear-b.jpg", alt: "A red SUV with tinted windows, side view", caption: "20% front, 5% rear" }, // IMG_0346
  { src: "/images/tint/tint-50-front.jpg", alt: "A black SUV with tinted windows, side view", caption: "50% front, factory glass rear" }, // IMG_0294
  { src: "/images/tint/tint-20-front.jpg", alt: "A silver crossover with tinted windows, side view", caption: "20% front, factory glass rear" }, // IMG_0344
  { src: "/images/tint/tint-5-door.jpg", alt: "A red car with its door open and a dark tinted window", caption: "5%" }, // IMG_0018
];

/** IMG_0157: installed film edges and clarity, up close. 5% film. */
export const tintVideo = {
  src: "/images/tint/tint-edges-5.mp4",
  poster: "/images/tint/tint-edges-5-poster.jpg",
  caption: "5% film, edges up close",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "tint",
    label: "Window Tint",
    title: "Window Tinting",
    href: "/window-tinting/",
    description:
      "Ceramic film, 5% to 50%.",
    startingAt: "from $99+",
    highlights: [
      "Ceramic film · 5%, 15%, 20%, 35%, 50%",
      "Side windows, back glass, and windshield",
      "Free re-dos and a lifetime guarantee",
    ],
    icon: SunDim,
    image: "/images/tint/tint-card.jpg",
    imageAlt: "A grey sedan with tinted windows, side view",
    quoteOptions: ["Window Tinting"],
  },
  {
    id: "detailing",
    label: "Detailing",
    title: "Detailing",
    href: "/detailing/",
    description:
      "Exterior, interior, and full-vehicle packages, priced by vehicle size.",
    startingAt: "from $105+",
    highlights: [
      "Four packages, Signature Exterior to Platinum",
      "Add-ons like pet hair, extraction, and odor treatment",
      "Boats and personal watercraft by quote",
    ],
    icon: Sparkles,
    image: "/images/signature-exterior-foam.jpg",
    imageAlt: "An SUV covered in foam during a wash",
    quoteOptions: [
      "Signature Exterior Detail",
      "Interior Detail",
      "Signature Full Detail",
      "Platinum Detail",
      "Watercraft Detailing",
    ],
  },
  {
    id: "paint",
    label: "Paint & Cosmetic",
    title: "Paint & Cosmetic",
    href: "/paint-and-cosmetic/",
    description:
      "Paint correction and ceramic coatings, plus headlight and trim restoration as detail add-ons.",
    startingAt: "from $299+",
    highlights: [
      "Paint correction from $450+",
      "Ceramic coatings from $299+",
      "Headlight restoration $80 · Trim restoration $75",
    ],
    icon: Gem,
    image: "/images/f150-correction-after.jpg",
    imageAlt: "A truck's rear panel after paint correction",
    quoteOptions: [
      "Paint Correction",
      "Ceramic Coating",
      "Headlight Restoration",
      "Trim Restoration",
    ],
  },
];

/** Restoration add-ons shown on the Paint & Cosmetic page. */
export const cosmeticRestoration = addOns.filter((a) =>
  ["Headlight Restoration", "Trim Restoration"].includes(a.name)
);
