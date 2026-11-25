"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { tint } from "@/data/services";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

const options = [...tint.shades, 100] as const; // 100 = no film

/**
 * A rough look at each shade: a daylight scene seen through a side-window
 * shape, darkened by how much light the film blocks. Deliberately generic
 * (no real vehicle, no brand) and labelled as approximate, real film
 * looks different in person and changes with the light.
 */
export function ShadePreview() {
  const [vlt, setVlt] = React.useState<number>(20);
  const darkness = 1 - vlt / 100;

  return (
    <div className="panel overflow-hidden">
      <div className="relative aspect-[16/9] bg-[#0b0a09] sm:aspect-[21/9]">
        {/* Side-window silhouette: the scene is only visible through it. */}
        <div
          className="absolute inset-[10%_6%_14%_6%]"
          style={{
            clipPath:
              "polygon(4% 100%, 14% 18%, 22% 6%, 48% 0%, 49% 100%, 51% 100%, 52% 0%, 84% 4%, 96% 40%, 98% 100%)",
          }}
        >
          <Image
            src={asset("/images/signature-full-suv.jpg")}
            alt="An SUV with its doors open in a driveway"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[#050505] transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
            style={{ opacity: darkness * 0.94 }}
          />
        </div>
        <p
          className="absolute top-4 right-4 font-display text-[11px] tracking-[0.2em] text-[#bdbdbd] uppercase"
          aria-live="polite"
        >
          {vlt === 100 ? "No film" : `${vlt}% shade`}
        </p>
      </div>

      <div className="border-t border-white/[0.06] p-5 sm:p-6">
        <div
          role="radiogroup"
          aria-label="Tint shade"
          className="grid grid-cols-6 gap-1 rounded-xl border border-white/[0.08] bg-surface p-1"
        >
          {options.map((v) => {
            const selected = v === vlt;
            return (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setVlt(v)}
                className={cn(
                  "press relative h-10 rounded-lg font-display text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                  selected
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="shade-highlight"
                    aria-hidden
                    className="absolute inset-0 rounded-lg bg-primary"
                    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  />
                )}
                <span className="relative">{v === 100 ? "None" : `${v}%`}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Lower is darker. Preview is approximate.
        </p>
      </div>
    </div>
  );
}
