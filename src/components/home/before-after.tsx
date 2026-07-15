"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeUp } from "@/components/animations/fade-up";

interface Comparison {
  before: string;
  after: string;
  alt: string;
  caption: string;
}

/** Real client work — shot on the job, not stock. */
const comparisons: Comparison[] = [
  {
    before: "/images/edge-wheel-before.jpg",
    after: "/images/edge-wheel-after.jpg",
    alt: "Ford Edge wheel before and after cleaning and tire dressing",
    caption: "Ford Edge — Wheel & Tire Cleaning, Signature Exterior Detail",
  },
  {
    before: "/images/edge-mats-before.jpg",
    after: "/images/edge-mats-after.jpg",
    alt: "Ford Edge driver floor mats before and after interior detail",
    caption: "Ford Edge — Floor Mats & Carpet, Interior Detail",
  },
];

function CompareSlider({ before, after, alt }: Comparison) {
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
      className="relative aspect-[3/4] cursor-ew-resize touch-none overflow-hidden rounded-3xl border border-white/[0.08] select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (base layer) */}
      <Image
        src={asset(after)}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      {/* BEFORE (clipped overlay) */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={asset(before)}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
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
          lede="Real transformations from real client vehicles. Drag the divider to see the difference."
          align="center"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16">
          {comparisons.map((comparison) => (
            <FadeUp key={comparison.after}>
              <CompareSlider {...comparison} />
              <p className="mt-5 text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {comparison.caption}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
