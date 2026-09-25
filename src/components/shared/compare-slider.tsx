"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface CompareSliderProps {
  before: string;
  after: string;
  alt: string;
  /** Aspect-ratio utility for the frame. Defaults to portrait 3:4. */
  className?: string;
  sizes?: string;
}

export function CompareSlider({
  before,
  after,
  alt,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: CompareSliderProps) {
  const [position, setPosition] = React.useState(58);
  const instructionsId = React.useId();
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
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) e.preventDefault();
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 4));
    if (e.key === "Home") setPosition(4);
    if (e.key === "End") setPosition(96);
  };

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative cursor-ew-resize touch-none overflow-hidden rounded-3xl border border-white/[0.08] select-none",
        className ?? "aspect-[3/4]"
      )}
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
        sizes={sizes}
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
          sizes={sizes}
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 font-display text-[10px] tracking-[0.3em] text-[#bdbdbd] backdrop-blur-sm">
        BEFORE
      </span>
      <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 font-display text-[10px] tracking-[0.3em] text-foreground backdrop-blur-sm">
        AFTER
      </span>

      {/* Divider + handle */}
      <span id={instructionsId} className="sr-only">
        Use left and right arrow keys to compare the images. Home and End move the divider to either side.
      </span>
      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after image comparison"
        aria-describedby={instructionsId}
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent of the after image visible`}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 w-px bg-white/70 outline-none focus-visible:[&_span]:ring-2 focus-visible:[&_span]:ring-ring"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/70 shadow-xl backdrop-blur-md">
          <ChevronsLeftRight className="size-5 text-foreground" aria-hidden />
        </span>
      </div>
    </div>
  );
}
