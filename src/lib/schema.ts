import { SITE } from "@/lib/constants";
import { serviceCities } from "@/data/locations";
import type { Faq } from "@/data/faqs";

/** schema.org LocalBusiness — emitted once in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/hero-mustang.jpg`,
    priceRange: "$90–$999",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.home.city,
      addressRegion: SITE.home.region,
      postalCode: SITE.home.postalCode,
      addressCountry: SITE.home.country,
    },
    areaServed: serviceCities.map((city) => ({
      "@type": "City",
      name: `${city.name}, MN`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
  };
}

/** schema.org Service with tiered Offers — for service landing pages. */
export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  offers: { name: string; price: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: `${SITE.url}${options.path}`,
    serviceType: options.name,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: serviceCities.map((city) => ({
      "@type": "City",
      name: `${city.name}, MN`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${options.name} packages`,
      itemListElement: options.offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: "USD",
      })),
    },
  };
}

/** schema.org FAQPage — homepage FAQ accordion. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Serialize for a <script type="application/ld+json"> tag. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
