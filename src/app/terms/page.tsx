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
          Last updated: July 2026
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
          <div>
            <h2>Quotes &amp; pricing</h2>
            <p className="mt-3">
              Published prices are starting points by vehicle size (cars,
              SUVs, and full-size trucks) for vehicles in average condition.
              Heavily soiled vehicles, pet hair, and other special conditions
              may adjust the price — final pricing is always confirmed before
              your appointment and never changes on arrival without your
              approval.
            </p>
          </div>
          <div>
            <h2>Promotions</h2>
            <p className="mt-3">
              Promotional discounts (including the grand-opening special)
              apply to new clients only, cannot be combined with other offers,
              and exclude add-on services unless stated otherwise.
            </p>
          </div>
          <div>
            <h2>Appointments &amp; cancellations</h2>
            <p className="mt-3">
              Please provide at least 24 hours&rsquo; notice to reschedule or
              cancel. Weather-related mobile appointments are rescheduled at
              no charge.
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
