import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

/** Brand monogram — the metallic "M" lifted from the real logo, matching
 *  the site favicon. Sits on a dark tile so it reads over the bright hero. */
function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block size-9 overflow-hidden rounded-lg ring-1 ring-white/10",
        className
      )}
    >
      <Image
        src={asset("/images/logo-mark.png")}
        alt=""
        aria-hidden
        fill
        sizes="36px"
        className="object-cover"
      />
    </span>
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
