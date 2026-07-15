import type { Metadata } from "next";
import { Mail, MessageSquareQuote, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { serviceCities } from "@/data/locations";
import { FadeUp } from "@/components/animations/fade-up";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Mecha Auto Spa — premium mobile detailing for Rochester, Winona, and Southern Minnesota. Call, email, or request a quote online.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    icon: Phone,
    title: "Call or text",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Fastest for same-week scheduling",
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Photos of your vehicle welcome",
  },
  {
    icon: MessageSquareQuote,
    title: "Request a quote",
    value: "2-minute form",
    href: "/request-quote/",
    note: "Exact pricing within one business day",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="section-pad pt-36 lg:pt-44">
        <div className="container-site">
          <FadeUp className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-white/25" />
              <span className="eyebrow">Contact</span>
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              We&rsquo;re mobile —{" "}
              <span className="text-metallic">so start here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              No storefront, no waiting room. Just a fully equipped detailing
              studio that arrives at your address.
            </p>
          </FadeUp>

          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <StaggerItem key={channel.title} className="h-full">
                  <a
                    href={channel.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="panel panel-hover flex h-full flex-col p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 lg:p-7"
                  >
                    <channel.icon
                      className="size-5 text-[#bdbdbd]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h2 className="mt-4 font-display text-[15px] font-semibold tracking-tight">
                      {channel.title}
                    </h2>
                    <p className="mt-1.5 font-mono text-sm text-foreground">
                      {channel.value}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                      {channel.note}
                    </p>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <h2 className="eyebrow">Business Hours</h2>
              <ul className="mt-5 divide-y divide-white/[0.06]">
                {SITE.hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-sm text-muted-foreground">
                      {entry.days}
                    </span>
                    <span className="font-mono text-sm">{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="eyebrow">Service Area</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {serviceCities.map((city) => (
                  <li
                    key={city.name}
                    className={
                      city.primary
                        ? "rounded-full border border-white/20 bg-white/[0.07] px-4 py-1.5 text-[13px] font-medium"
                        : "rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[13px] text-muted-foreground"
                    }
                  >
                    {city.name}, {city.state}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Based in Rochester, MN · More areas coming soon
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
