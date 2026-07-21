import Link from "next/link";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { serviceCities } from "@/data/locations";
import { Logo } from "@/components/layout/logo";

/* Brand glyphs — lucide no longer ships brand icons. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.3" cy="6.7" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M13.5 21v-7h2.4l.45-3H13.5V9.1c0-.87.28-1.6 1.66-1.6h1.34V4.85c-.64-.09-1.42-.17-2.2-.17-2.29 0-3.8 1.39-3.8 3.94V11H8v3h2.5v7h3Z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Why Mecha", href: "/#why-mecha" },
      { label: "Contact", href: "/contact/" },
      { label: "Request a Quote", href: "/request-quote/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Detailing Packages", href: "/services/#packages" },
      { label: "Ceramic Coatings", href: "/ceramic-coatings/" },
      { label: "Paint Correction", href: "/paint-correction/" },
      { label: "Add-Ons", href: "/services/#add-ons" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Before & After", href: "/#before-after" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Service Areas", href: "/#service-area" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;

export function Footer() {
  const areaList = serviceCities.map((city) => city.name).join(" · ");

  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        {/* Brand */}
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {SITE.description}
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Satisfaction guaranteed — 48-hour make-it-right.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {SITE.social.instagram && (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.08] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
            )}
            {SITE.social.facebook && (
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.08] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <FacebookIcon className="size-4" />
              </a>
            )}
            {SITE.social.google && (
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.08] text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <MapPin className="size-4" aria-hidden />
              </a>
            )}
          </div>
        </div>

        {/* Link columns */}
        {columns.slice(0, 2).map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="eyebrow">{column.heading}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Resources + Contact merged column */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
          <nav aria-label="Resources">
            <h3 className="eyebrow">Resources</h3>
            <ul className="mt-5 space-y-3">
              {columns[2].links.map((link) =>
                "external" in link && link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="font-mono transition-colors hover:text-foreground"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              {SITE.hours.map((entry) => (
                <li key={entry.days} className="flex flex-col">
                  <span className="text-xs text-muted-foreground/70">
                    {entry.days}
                  </span>
                  <span className="font-mono text-[13px]">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Service area strip */}
      <div className="border-t border-white/[0.05]">
        <div className="container-site py-5">
          <p className="font-mono text-[11px] leading-relaxed tracking-wide text-muted-foreground/70">
            <span className="text-muted-foreground">SERVICE AREA —</span>{" "}
            {areaList} &amp; more to come
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container-site flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-xs text-muted-foreground/70">
            <p>
              © {new Date().getFullYear()} {SITE.name} · Rochester, MN
            </p>
            <p>
              Website designed &amp; maintained by{" "}
              <a
                href="https://ryanwetzstein.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Ryan Wetzstein
              </a>{" "}
              — check out more at{" "}
              <a
                href="https://ryanwetzstein.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                ryanwetzstein.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground/70">
            <Link
              href="/privacy/"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms/"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
