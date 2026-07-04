"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeUp } from "@/components/animations/fade-up";

interface Comparison {
  image: string;
  alt: string;
  caption: string;
  quote?: string;
}

/**
 * PLACEHOLDER comparisons: until real before/after photography exists,
 * the "before" side renders the same photo through a grime filter.
 * Swap `image` for a real before/after pair component when available.
 */
const comparisons: Comparison[] = [
  {
    image: "/images/gallery-m3.jpg",
    alt: "BMW M3 paint correction before and after comparison",
    caption: "BMW M3 — Two-Step Paint Correction + 3-Year Ceramic",
    quote: "“The reflection is genuinely mirror-like. Worth every dollar.”",
  },
  {
    image: "/images/daily-driver.jpg",
    alt: "Tesla Model 3 full detail before and after comparison",
    caption: "Tesla Model 3 — Platinum Full Detail",
    quote: "“It hasn't looked this good since delivery day.”",
  },
];

function CompareSlider({ image, alt }: { image: string; alt: string }) {
  const [position, setPosition] = React.useState(58);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 4));
  };

  return (
    <div
      ref={trackRef}
      className="relative aspect-[16/9] cursor-ew-resize touch-none overflow-hidden rounded-3xl border border-white/[0.08] select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (base layer) */}
      <Image
        src={asset(image)}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 1280px, 100vw"
        className="object-cover"
      />

      {/* BEFORE (grime-filtered clip) */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={asset(image)}
          alt=""
          fill
          sizes="(min-width: 1024px) 1280px, 100vw"
          className="object-cover brightness-[0.62] contrast-[0.82] saturate-[0.35] sepia-[0.18]"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-[#bdbdbd] backdrop-blur-sm">
        BEFORE
      </span>
      <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-foreground backdrop-blur-sm">
        AFTER
      </span>

      {/* Divider + handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Reveal before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 w-px bg-white/70 outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/70 shadow-xl backdrop-blur-md">
          <ChevronsLeftRight className="size-5 text-foreground" aria-hidden />
        </span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="section-pad">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Before & After"
          title="The results speak. Drag to compare."
          lede="Real transformations from paint correction, ceramic coatings, and full details. Drag the divider to see the difference."
          align="center"
        />

        <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-20">
          {comparisons.map((comparison) => (
            <FadeUp key={comparison.image}>
              <CompareSlider image={comparison.image} alt={comparison.alt} />
              <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {comparison.caption}
                </p>
                {comparison.quote && (
                  <p className="max-w-md text-sm text-[#bdbdbd] italic">
                    {comparison.quote}
                  </p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
