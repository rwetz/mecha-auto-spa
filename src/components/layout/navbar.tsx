"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";
import { CtaLink } from "@/components/shared/cta-link";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Sticky navigation. Transparent while resting over the hero,
 * dark glass (blur + hairline border) once the page scrolls.
 */
export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(9,9,9,0.75)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {SITE.promo && (
        <Link
          href={SITE.promo.href}
          className="block bg-warning text-center text-black transition-colors hover:bg-warning/90"
        >
          <p className="container-site py-2 text-[13px] font-semibold tracking-tight">
            ★ {SITE.promo.headline}{" "}
            <span className="hidden font-normal sm:inline">
              · {SITE.promo.detail}
            </span>
          </p>
        </Link>
      )}
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm whitespace-nowrap text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden xl:inline font-mono text-[13px] tracking-tight">
              {SITE.phone}
            </span>
            <span className="sr-only">Call {SITE.name}</span>
          </a>
          <CtaLink href="/request-quote/" variant="primary" size="md">
            Request Quote
          </CtaLink>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.name}`}
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/[0.06]"
          >
            <Phone className="size-[18px]" aria-hidden />
          </a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/[0.06]"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm border-white/[0.08] bg-[#0d0d0d] p-0"
            >
              <SheetHeader className="border-b border-white/[0.06] px-6 py-5">
                <SheetTitle>
                  <span className="font-display text-sm font-semibold tracking-[0.22em] text-foreground">
                    MECHA{" "}
                    <span className="font-mono text-[10px] tracking-[0.42em] text-muted-foreground">
                      AUTO SPA
                    </span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={link.href}
                            className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-foreground transition-colors hover:bg-white/[0.05]"
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 border-t border-white/[0.06] p-6">
                <CtaLink
                  href="/request-quote/"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Quote
                </CtaLink>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 inline-flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4" aria-hidden />
                  <span className="font-mono">{SITE.phone}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
