import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Car,
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
 * pages, quote form, and structured data. Single source of truth —
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
  /** Printed under the tier grid — e.g. the flyer's vehicle-sizing rule. */
  footnote?: string;
  tiers: ServiceTier[];
}

/* ── Featured services (homepage 2×2 grid) ── */
export interface FeaturedService {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  /** Describes what the photo shows — never asserts whose work it is. */
  imageAlt: string;
  href: string;
}

export const featuredServices: FeaturedService[] = [
  {
    id: "signature-exterior",
    name: "Signature Exterior Detail",
    description: "Foam cannon pre-wash, two-bucket hand wash, and months of spray sealant protection.",
    price: 105,
    image: "/images/signature-exterior-foam.jpg",
    imageAlt: "An SUV covered in foam during a wash",
    href: "/services/#packages",
  },
  {
    id: "interior",
    name: "Interior Detail",
    description: "Deep-cleaned cabins, conditioned surfaces, and streak-free glass.",
    price: 150,
    image: "/images/interior-detail-cabin.jpg",
    imageAlt: "Vehicle cabin with dashboard, center console, and front seats",
    href: "/services/#packages",
  },
  {
    id: "signature-full",
    name: "Signature Full Detail",
    description: "Exterior and interior care in one package, with finishing touches.",
    price: 225,
    image: "/images/signature-full-suv.jpg",
    imageAlt: "An SUV with its doors open in a driveway",
    href: "/services/#packages",
  },
  {
    id: "platinum",
    name: "Platinum Detail",
    description: "A deeper inside-and-out detail with decontamination, extraction, and engine bay care.",
    price: 350,
    image: "/images/mustang-night-front.jpg",
    // Stock placeholder — swap for a real Platinum vehicle when we have one.
    imageAlt: "A dark sports car photographed head-on at night",
    href: "/services/#packages",
  },
];

/* ── Detailing packages ──
 * Signature Exterior / Interior / Full match the Sept 2026 flyer 1:1.
 * Platinum is not on that flyer but is still sold (owner, Sept 2026) —
 * its pricing is carried over and has no flyer to check against.
 */
export const detailPackages: TierGroup = {
  id: "packages",
  title: "Detailing Packages",
  subtitle:
    "Four defined packages, priced by vehicle size — confirmed up front, never on arrival.",
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
 * percentages, warranty terms, or any claim about Minnesota tint law — none
 * of that has been confirmed. Descriptions stay at the level of "tell us
 * what you have and we'll quote it".
 */
export interface InquiryService {
  id: string;
  name: string;
  /** What we ask for in order to quote — never an implied price. */
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
      "Boats and personal watercraft, washed and machine polished the same way we treat paint. Every hull is a different size and condition, so we quote each one individually.",
    image: "/images/boat-polish.jpg",
    imageAlt: "Machine polishing the hull of a boat",
    icon: Sailboat,
  },
  {
    id: "window-tinting",
    name: "Window Tinting",
    description:
      "Tell us the vehicle and which windows you want done, and we'll put a quote together for you.",
    // No tint photo yet — the card falls back to its icon treatment.
    icon: SunDim,
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

export const whyMechaFeatures = [
  {
    title: "Mobile Convenience",
    description: "We come to your driveway or workplace in the Rochester area.",
  },
  {
    title: "Premium Products",
    description: "Professional-grade chemicals and coatings only.",
  },
  {
    title: "Paint-Safe Methods",
    description: "Two-bucket washes, plush microfiber, measured polishing.",
  },
  {
    title: "Professional Equipment",
    description: "Extractors and machine polishers — not gas-station tools.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Tell us within 48 hours and we will make it right.",
  },
  {
    title: "Attention to Detail",
    description: "Door jambs, cup holders, trim — nothing gets skipped.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Tell us about your vehicle and what it needs.",
    icon: Car,
  },
  {
    step: "02",
    title: "Choose Your Package",
    description: "Choose the service level that fits your vehicle.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Schedule Service",
    description: "Pick a time and confirm the appointment details.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Enjoy the Results",
    description: "Like-new finish, backed by our guarantee.",
    icon: Sparkles,
  },
] as const;
