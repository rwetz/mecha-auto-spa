import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "lg" | "md" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#f3eee5] hover:-translate-y-px",
  outline:
    "border border-[#e9d9bc]/30 bg-transparent text-foreground hover:border-[#e9d9bc]/70 hover:bg-white/[0.04]",
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
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight whitespace-nowrap transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isExternal = /^https?:\/\//.test(href);
  const isProtocolLink = /^(mailto:|tel:|sms:)/.test(href);

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

  if (isProtocolLink) {
    return (
      <a href={href} className={classes} {...props}>
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
