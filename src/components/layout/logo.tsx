import Link from "next/link";
import { cn } from "@/lib/utils";

/** Angular monogram — precision-machined "M" with a single Ford-blue node. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-9", className)}
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        className="stroke-white/15"
        strokeWidth="1.25"
      />
      <path
        d="M8 23V10.5L16 18.5L24 10.5V23"
        className="stroke-foreground"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18.5" r="1.6" fill="#1859B3" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Mecha Auto Spa — home"
      className={cn(
        "group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 rounded-lg",
        className
      )}
    >
      <LogoMark className="transition-transform duration-300 group-hover:scale-[1.04]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-semibold tracking-[0.22em] text-foreground">
          MECHA
        </span>
        <span className="mt-1 font-mono text-[9px] font-medium tracking-[0.42em] text-muted-foreground">
          AUTO&nbsp;SPA
        </span>
      </span>
    </Link>
  );
}
