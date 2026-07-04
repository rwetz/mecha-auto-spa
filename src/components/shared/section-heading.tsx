import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animations/fade-up";

interface SectionHeadingProps {
  /** Two-digit spec-sheet index, e.g. "03". */
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

/** Standard section opener: mono eyebrow rule + display heading + lede. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <FadeUp
      className={cn("max-w-3xl", centered && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          {index && (
            <span className="font-mono text-[11px] font-medium text-muted-foreground/60">
              {index}
            </span>
          )}
          <span aria-hidden className="h-px w-8 bg-white/20" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            centered && "mx-auto"
          )}
        >
          {lede}
        </p>
      )}
    </FadeUp>
  );
}
