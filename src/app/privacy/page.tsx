import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mecha Auto Spa collects and uses your information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad pt-36 lg:pt-44">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last updated: July 2026
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
          <div>
            <h2>Information we collect</h2>
            <p className="mt-3">
              When you request a quote or contact us, we collect only the
              details you choose to provide — your name, phone number, email,
              city, vehicle information, and any notes about your vehicle. We
              don&rsquo;t use tracking cookies or advertising trackers on this
              site.
            </p>
          </div>
          <div>
            <h2>How we use it</h2>
            <p className="mt-3">
              Your information is used solely to prepare quotes, schedule
              appointments, and communicate about your service. We never sell
              or share your information with third parties for marketing.
            </p>
          </div>
          <div>
            <h2>Hosting</h2>
            <p className="mt-3">
              This site is served as static pages by our hosting provider,
              which may keep standard server logs (such as IP addresses) for
              security and operations, as described in the provider&rsquo;s
              own privacy policy.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p className="mt-3">
              Questions about this policy, or want your information removed?
              Email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-foreground underline underline-offset-2"
              >
                {SITE.email}
              </a>{" "}
              and we&rsquo;ll respond promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
