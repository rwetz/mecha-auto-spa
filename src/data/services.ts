import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Car,
  Droplets,
  Gem,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────
 * Central service + pricing catalog. Used by the homepage, service
 * pages, quote form, and structured data. Single source of truth.
 * ──────────────────────────────────────────────────────────────────── */

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  priceNote?: string;
  blurb: string;
  features: string[];
  popular?: boolean;
}

export interface TierGroup {
  id: string;
  title: string;
  subtitle: string;
  tiers: ServiceTier[];
}

/* ── Featured services (homepage 2×2 grid) ── */
export interface FeaturedService {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  href: string;
}

export const featuredServices: FeaturedService[] = [
  {
    id: "exterior",
    name: "Exterior Detail",
    description: "Restore shine and protect your paint with a meticulous hand wash and finish.",
    price: 90,
    image: "/images/service-exterior.jpg",
    href: "/services/#exterior",
  },
  {
    id: "interior",
    name: "Interior Detail",
    description: "Deep-cleaned cabins, conditioned surfaces, and streak-free glass.",
    price: 120,
    image: "/images/service-interior.jpg",
    href: "/services/#interior",
  },
  {
    id: "signature",
    name: "Signature Detail",
    description: "Complete inside-and-out care — our most requested full detail.",
    price: 220,
    image: "/images/service-signature.jpg",
    href: "/services/#full-detail",
  },
  {
    id: "platinum",
    name: "Platinum Detail",
    description: "The no-compromise restoration: full correction-grade depth on every surface.",
    price: 450,
    image: "/images/service-platinum.jpg",
    href: "/services/#full-detail",
  },
];

/* ── Exterior tiers ── */
export const exteriorTiers: TierGroup = {
  id: "exterior",
  title: "Exterior Detail",
  subtitle: "Hand-washed, decontaminated, and protected — never a tunnel wash.",
  tiers: [
    {
      id: "exterior-basic",
      name: "Basic Exterior",
      price: 90,
      blurb: "The essential reset for a clean, glossy exterior.",
      features: [
        "Foam pre-wash",
        "Hand wash with pH-balanced soap",
        "Wheels & tires cleaned",
        "Hand dry with plush microfiber",
        "Tire shine",
      ],
    },
    {
      id: "exterior-premium",
      name: "Premium Exterior",
      price: 140,
      popular: true,
      blurb: "Deeper decontamination plus months of slick protection.",
      features: [
        "Everything in Basic",
        "Iron decontamination",
        "Spray sealant protection",
        "Trim conditioning",
      ],
    },
    {
      id: "exterior-signature",
      name: "Signature Exterior",
      price: 220,
      blurb: "Show-ready gloss with a hydrophobic protective layer.",
      features: [
        "Everything in Premium",
        "Clay bar treatment",
        "Light machine polish",
        "Hydrophobic protection layer",
      ],
    },
  ],
};

/* ── Interior tiers ── */
export const interiorTiers: TierGroup = {
  id: "interior",
  title: "Interior Detail",
  subtitle: "From daily-driver refresh to full extraction and sanitization.",
  tiers: [
    {
      id: "interior-basic",
      name: "Basic Interior",
      price: 120,
      blurb: "A thorough refresh for well-kept cabins.",
      features: [
        "Full interior vacuum",
        "All surfaces wiped & dressed",
        "Light stain treatment",
        "Interior glass cleaned",
      ],
    },
    {
      id: "interior-deep",
      name: "Deep Interior",
      price: 180,
      popular: true,
      blurb: "Steam, shampoo, and conditioning for lived-in vehicles.",
      features: [
        "Hot steam cleaning",
        "Carpet & upholstery shampoo",
        "Leather cleaned & conditioned",
        "Pet hair removal",
        "Odor treatment",
      ],
    },
    {
      id: "interior-signature",
      name: "Signature Interior",
      price: 250,
      blurb: "Full extraction and sanitization — as close to new as it gets.",
      features: [
        "Full extraction cleaning",
        "Deep steam sanitization",
        "Advanced stain removal",
        "UV-protective interior dressing",
      ],
    },
  ],
};

/* ── Full detail packages ── */
export const fullDetailTiers: TierGroup = {
  id: "full-detail",
  title: "Full Detail Packages",
  subtitle: "Complete inside-and-out packages at package pricing.",
  tiers: [
    {
      id: "full-signature",
      name: "Signature Detail",
      price: 220,
      blurb: "Basic Exterior + Basic Interior in a single visit.",
      features: [
        "Complete Basic Exterior detail",
        "Complete Basic Interior detail",
        "Interior & exterior glass",
        "Finishing inspection",
      ],
    },
    {
      id: "full-premium",
      name: "Premium Detail",
      price: 350,
      popular: true,
      blurb: "Premium Exterior + Deep Interior — our best-value package.",
      features: [
        "Premium Exterior with sealant",
        "Deep Interior with steam & shampoo",
        "Iron decontamination",
        "Odor treatment",
      ],
    },
    {
      id: "full-platinum",
      name: "Platinum Detail",
      price: 450,
      blurb: "Signature-level care on every surface, plus a gloss pass.",
      features: [
        "Signature Exterior with light polish",
        "Signature Interior with extraction",
        "Paint enhancement gloss pass",
        "Hydrophobic protection layer",
      ],
    },
  ],
};

/* ── Ceramic coating tiers ── */
export const ceramicTiers: TierGroup = {
  id: "ceramic",
  title: "Ceramic Coating Packages",
  subtitle: "Professional-grade coatings, prepped and applied by hand.",
  tiers: [
    {
      id: "ceramic-1yr",
      name: "1-Year Ceramic",
      price: 299,
      blurb: "Entry protection with real ceramic gloss and beading.",
      features: [
        "Single-layer ceramic coating",
        "Gloss enhancement",
        "Hydrophobic base layer",
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
      blurb: "Maximum multi-layer protection for long-term ownership.",
      features: [
        "Multi-layer ceramic system",
        "Premium gloss finish",
        "Maximum UV + chemical resistance",
        "Annual inspection included",
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
      name: "One-Step Correction",
      price: 450,
      blurb: "Removes light swirls and restores deep gloss in one stage.",
      features: [
        "Light defect & swirl removal",
        "Single-stage machine polish",
        "Gloss enhancement",
        "Full wash & decontamination prep",
      ],
    },
    {
      id: "correction-two-step",
      name: "Two-Step Correction",
      price: 800,
      popular: true,
      blurb: "Cut and polish for heavily swirled or scratched paint.",
      features: [
        "Heavy defect removal",
        "Multi-stage compounding & polishing",
        "Deep gloss restoration",
        "Paint depth measurements",
      ],
    },
  ],
};

/* ── Add-ons ── */
export interface AddOn {
  name: string;
  priceRange: string;
  description: string;
  icon: LucideIcon;
}

export const addOns: AddOn[] = [
  {
    name: "Headlight Restoration",
    priceRange: "$50–$100",
    description: "Clarity and light output restored on oxidized lenses.",
    icon: Sun,
  },
  {
    name: "Engine Bay Cleaning",
    priceRange: "$75–$150",
    description: "Safely degreased, rinsed, and dressed.",
    icon: Wrench,
  },
  {
    name: "Pet Hair Removal",
    priceRange: "$40–$100",
    description: "Specialized tools for embedded hair in carpet and cloth.",
    icon: Armchair,
  },
  {
    name: "Odor Removal",
    priceRange: "$60–$120",
    description: "Enzyme and ozone treatment for smoke, pets, and spills.",
    icon: SprayCan,
  },
  {
    name: "Clay Bar Treatment",
    priceRange: "$50–$120",
    description: "Removes bonded contamination for glass-smooth paint.",
    icon: Sparkles,
  },
  {
    name: "Wheel & Glass Coating",
    priceRange: "$50–$150",
    description: "Ceramic protection for wheels, glass, and trim.",
    icon: Shield,
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
    description: "We come to your driveway or workplace, fully self-contained.",
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
    description: "Steamers, extractors, and machine polishers — not gas-station tools.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "If something isn't right, we return and make it right.",
  },
  {
    title: "Fully Insured",
    description: "Complete coverage for total peace of mind.",
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
