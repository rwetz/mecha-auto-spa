import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Mecha Auto Spa detailing services.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="section-pad pt-36 lg:pt-44">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last updated: September 2026
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
          <div>
            <h2>Quotes &amp; pricing</h2>
            <p className="mt-3">
              Published prices are starting points by vehicle size (cars,
              SUVs, and trucks &amp; vans) for vehicles in average condition.
              Third-row SUVs are priced in the trucks &amp; vans category.
              Heavily soiled vehicles, pet hair, and other special conditions
              may adjust the price — final pricing is always confirmed before
              your appointment and never changes on arrival without your
              approval.
            </p>
          </div>
          <div>
            <h2>Vehicle condition</h2>
            <p className="mt-3">
              Detailing cleans and protects a vehicle — it does not repair
              it. Pre-existing damage such as clear-coat failure, chips,
              dents, cracked or brittle trim, torn or worn upholstery,
              aftermarket wraps and films, and previously applied fillers or
              glazes may become more visible once a surface is cleaned or
              polished. Please tell us about existing damage when requesting
              a quote and remove
              valuables and personal items before your appointment.
            </p>
          </div>
          <div>
            <h2>Appointments &amp; cancellations</h2>
            <p className="mt-3">
              Please provide at least 24 hours&rsquo; notice to reschedule or
              cancel. Contact us to arrange a new time if weather prevents a
              mobile appointment.
            </p>
          </div>
          <div>
            <h2>Satisfaction guarantee</h2>
            <p className="mt-3">
              If any part of a completed service doesn&rsquo;t meet the agreed
              standard, contact us within 48 hours and we&rsquo;ll return to
              make it right.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p className="mt-3">
              Questions about these terms? Call{" "}
              <a
                href={SITE.phoneHref}
                className="text-foreground underline underline-offset-2"
              >
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-foreground underline underline-offset-2"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
