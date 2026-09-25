"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import SplitText from "@/components/SplitText";
import Magnet from "@/components/Magnet";
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/asset";
import { CtaLink } from "@/components/shared/cta-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background pt-20 lg:pt-24">
      <div className="container-site grid gap-8 py-10 lg:min-h-[760px] lg:grid-cols-[1fr_0.94fr] lg:items-center lg:gap-14 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block size-2 rounded-full bg-[#df6b47]" aria-hidden />
            Rochester, Minnesota · Mobile detailing
          </p>
          <SplitText
            tag="h1"
            text="A better view from the driver's seat."
            splitType="words"
            delay={70}
            duration={0.7}
            rootMargin="0px"
            className="mt-7 !block font-display text-[clamp(3.45rem,9vw,7.7rem)] leading-[0.94] font-medium tracking-[-0.065em] text-balance"
            textAlign="left"
          />
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mobile detailing, ceramic coatings, and paint correction around Rochester. We bring the care to your driveway or workplace.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnet padding={28} magnetStrength={5}>
              <CtaLink href={SITE.bookingUrl} variant="primary">
                Book a detail <ArrowUpRight aria-hidden />
              </CtaLink>
            </Magnet>
            <CtaLink href="/services/" variant="outline">
              Explore services <ArrowUpRight aria-hidden />
            </CtaLink>
          </div>
          <div className="mt-12 flex items-center gap-5 border-t border-white/10 pt-5 text-sm text-muted-foreground">
            <span className="font-mono text-xs text-[#df6b47]">MECHA / MN</span>
            <span>Detailing at your door</span>
            <ArrowDownRight className="ml-auto size-5 text-[#df6b47]" aria-hidden />
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] sm:min-h-[560px] lg:h-full lg:min-h-[640px]">
          <Image
            src={asset("/images/mobile-hand-wash-hero.jpg")}
            alt="A detailer hand-washing a foam-covered sedan outdoors"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-[center_43%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-24 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-white uppercase">Real work. Real vehicles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
