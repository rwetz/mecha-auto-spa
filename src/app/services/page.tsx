import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { LegacyServicesRedirect } from "@/components/services/legacy-redirect";

export const metadata: Metadata = {
  title: "Services | Window Tint, Detailing & Paint in Rochester MN",
  description:
    "Choose window tinting, auto detailing, or paint correction and ceramic coatings in Rochester, MN.",
  alternates: { canonical: "/services/" },
};

/** Kept so old /services/ links still land somewhere useful. */
export default function ServicesPage() {
  return (
    <>
      <LegacyServicesRedirect />
      <Hero />
    </>
  );
}
