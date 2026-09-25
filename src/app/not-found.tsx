import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70svh] flex-col justify-center pt-32 pb-20">
      <p className="eyebrow">404 / Page not found</p>
      <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.98] tracking-[-0.06em] text-balance">
        This page took a wrong turn.
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
        The link may have moved. Head home or browse the current services.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground outline-none transition-colors hover:bg-[#f3eee5] focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="size-4" aria-hidden /> Back home
        </Link>
        <Link href="/services/" className="inline-flex h-12 items-center gap-2 rounded-md border border-[#e9d9bc]/30 px-6 text-sm font-medium text-foreground outline-none transition-colors hover:border-[#e9d9bc]/70 focus-visible:ring-2 focus-visible:ring-ring">
          View services <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
