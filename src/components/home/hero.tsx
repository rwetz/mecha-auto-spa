"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Phone, Star } from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { asset } from "@/lib/asset";
import { CtaLink } from "@/components/shared/cta-link";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-background lg:min-h-[900px]">
      {/* Cinematic backdrop — vehicle occupies the right ~70% */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image
          src={asset("/images/hero-mustang.jpg")}
          alt="Black Mustang GT at golden hour after a full Mecha Auto Spa detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
      </motion.div>

      {/* Legibility + fade-to-black overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10"
      />
      {/* Extra darkening on small screens where text sits over the image */}
      <div aria-hidden className="absolute inset-0 bg-background/45 lg:hidden" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/70 to-transparent"
      />

      <div className="container-site relative z-10 pt-28 pb-24 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p variants={item} className="mb-6 flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-white/25" />
            <span className="eyebrow">
              Rochester, MN — Premium Mobile Detailing
            </span>
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-metallic">Precision.</span>
            <br />
            <span className="text-metallic">Protection.</span>
            <br />
            <span className="text-metallic">Perfection.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-lg text-base leading-relaxed text-[#bdbdbd] sm:text-lg"
          >
            Premium mobile detailing, ceramic coatings, and paint correction —
            serving Rochester, Winona, and surrounding communities.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <CtaLink href="/request-quote/" variant="primary">
              Request a Quote
            </CtaLink>
            <CtaLink href={SITE.bookingUrl} variant="outline">
              Book Appointment
            </CtaLink>
            <CtaLink href={SITE.phoneHref} variant="ghost">
              <Phone aria-hidden />
              Call Now
            </CtaLink>
          </motion.div>

          {/* Trust badge row */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-2"
          >
            <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 fill-warning text-warning"
                  />
                ))}
              </span>
              <span className="text-xs font-medium text-[#bdbdbd]">
                {SITE.rating.value} Google Reviews
              </span>
            </li>
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[#bdbdbd] backdrop-blur-sm"
              >
                {badge}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        aria-label="Scroll to content"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="size-5" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
