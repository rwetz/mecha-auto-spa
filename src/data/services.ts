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
  ShieldCheck,
  Sofa,
  Sparkles,
  Sun,
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
    imageAlt:
      "An SUV coated in foam-cannon suds during a wash in a client's driveway",
    href: "/services/#packages",
  },
  {
    id: "interior",
    name: "Interior Detail",
    description: "Deep-cleaned cabins, conditioned surfaces, and streak-free glass.",
    price: 150,
    image: "/images/interior-detail-cabin.jpg",
    imageAlt:
      "A cleaned vehicle cabin — dashboard, centre console, and front seats",
    href: "/services/#packages",
  },
  {
    id: "signature-full",
    name: "Signature Full Detail",
    description: "Complete inside-and-out care — our most requested package.",
    price: 225,
    image: "/images/signature-full-suv.jpg",
    imageAlt:
      "A freshly detailed SUV with its doors open on a client's driveway",
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
      blurb: "Every interior surface cleaned, dressed, and protected.",
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
    "Long-lasting protection. Easy maintenance. Maximum shine. Paint preparation included with every install.",
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
        "High-durability coating layer",
        "High-gloss finish",
        "UV + chemical resistance",
        "Wash, decon & paint prep included",
      ],
    },
    {
      id: "ceramic-5yr",
      name: "5-Year Ceramic",
      price: 999,
      blurb: "Maximum protection for long-term ownership.",
      features: [
        "Premium ceramic coating system",
        "Premium gloss finish",
        "Maximum UV + chemical resistance",
        "Wash, decon & paint prep included",
      ],
    },
  ],
};

/* ── Paint correction tiers ── */
export const correctionTiers: TierGroup = {
  id: "paint-correction",
  title: "Paint Correction",
  subtitle: "Machine polishing that removes defects — not covers them.",
  tiers: [
    {
      id: "correction-one-step",
      name: "One-Step Enhancement",
      price: 450,
      priceNote: "from",
      blurb: "Removes light swirls and restores deep gloss in one stage.",
      features: [
        "Removes approx. 50–70% of light swirls & defects",
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
        "Removes approx. 80–95% of deeper defects",
        "Near-showroom finish",
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
    description: "Clarity and light output restored on oxidized lenses.",
    icon: Lightbulb,
  },
  {
    name: "Trim Restoration",
    priceRange: "$75",
    description: "Faded exterior plastic brought back to deep black.",
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
    description: "Brake dust and grime release with a simple rinse.",
    icon: CircleDot,
  },
  {
    name: "Leather Conditioning",
    priceRange: "$40",
    description: "Cleaned and conditioned to stay soft and crack-free.",
    icon: Sofa,
  },
  {
    name: "Odor Treatment",
    priceRange: "$50–$100",
    description: "Treats smoke, pet, and spill odors at the source.",
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
    imageAlt: "Machine polishing the hull of a client's boat",
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
    title: "Extreme Hydrophobics",
    description: "Water beads and sheets off, taking road grime with it.",
    icon: Droplets,
  },
  {
    title: "UV Protection",
    description: "Shields clear coat from sun fade and oxidation.",
    icon: Sun,
  },
  {
    title: "Chemical Resistance",
    description: "Stands up to road salt, bird droppings, and bug acids.",
    icon: ShieldCheck,
  },
  {
    title: "Enhanced Gloss",
    description: "A wet-look depth that wax can't replicate.",
    icon: Gem,
  },
  {
    title: "Easier Maintenance",
    description: "Contamination releases with a simple hand wash.",
    icon: Zap,
  },
  {
    title: "Years of Protection",
    description: "Measured in years — not weeks like traditional wax.",
    icon: Layers,
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
    description: "We recommend the right level — never upsell.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Schedule Service",
    description: "Pick a time. We arrive fully equipped.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Enjoy the Results",
    description: "Like-new finish, backed by our guarantee.",
    icon: Sparkles,
  },
] as const;
