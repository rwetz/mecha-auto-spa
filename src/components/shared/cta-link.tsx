import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "lg" | "md" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-white hover:shadow-[0_10px_36px_-10px_rgba(245,245,245,0.4)] hover:-translate-y-px",
  outline:
    "border border-white/15 bg-white/[0.02] text-foreground backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.06]",
  ghost: "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
};

const sizeClasses: Record<Size, string> = {
  lg: "h-12 px-7 text-sm",
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-[13px]",
};

interface CtaLinkProps extends React.ComponentProps<"a"> {
  href: string;
  variant?: Variant;
  size?: Size;
}

/**
 * The site's conversion button. Renders a Next <Link> for internal
 * routes and a new-tab anchor for external URLs (booking, socials).
 */
export function CtaLink({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  ...props
}: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight whitespace-nowrap transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
