"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { serviceCities } from "@/data/locations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.email("Please enter a valid email"),
  city: z.string().min(1, "Select your city"),
  vehicle: z.string().min(2, "Tell us the year, make, and model"),
  vehicleType: z.string().min(1, "Select a vehicle type"),
  service: z.string().min(1, "Select a service"),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const vehicleTypes = [
  "Sedan / Coupe",
  "SUV / Crossover",
  "Pickup Truck",
  "Sports / Performance",
  "Van / Minivan",
  "Other",
];

const services = [
  "Exterior Detail",
  "Interior Detail",
  "Full Detail Package",
  "Ceramic Coating",
  "Paint Correction",
  "Fleet / Commercial",
  "Not sure yet — recommend something",
];

const selectClasses =
  "flex h-10 w-full appearance-none rounded-lg border border-input bg-white/[0.02] px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 invalid:text-muted-foreground";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function QuoteForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "sent" | "mailto" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { city: "", vehicleType: "", service: "" },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");

    // Static hosting: POST to the configured endpoint when available,
    // otherwise open a pre-filled email draft.
    if (SITE.quoteEndpoint) {
      try {
        const res = await fetch(SITE.quoteEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = `Quote request — ${values.vehicle} (${values.service})`;
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `City: ${values.city}`,
      `Vehicle: ${values.vehicle} (${values.vehicleType})`,
      `Service: ${values.service}`,
      "",
      values.message ?? "",
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  if (status === "sent" || status === "mailto") {
    return (
      <div className="panel flex flex-col items-center p-10 text-center lg:p-14">
        <CheckCircle2 className="size-10 text-success" aria-hidden />
        <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          {status === "sent" ? "Request received." : "Almost there."}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {status === "sent"
            ? "We'll review your vehicle details and get back to you within one business day with an exact quote."
            : "We opened an email draft with your details — hit send and we'll reply within one business day. If nothing opened, call or email us directly."}
        </p>
        <a
          href={SITE.phoneHref}
          className="mt-6 font-mono text-sm text-foreground underline-offset-4 hover:underline"
        >
          {SITE.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="panel space-y-6 p-7 lg:p-9"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(507) 555-0000"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>
        <Field label="City" htmlFor="city" error={errors.city?.message}>
          <select
            id="city"
            className={selectClasses}
            aria-invalid={Boolean(errors.city)}
            {...register("city")}
          >
            <option value="" disabled>
              Select your city
            </option>
            {serviceCities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Vehicle"
          htmlFor="vehicle"
          error={errors.vehicle?.message}
        >
          <Input
            id="vehicle"
            placeholder="e.g. 2022 Ford F-150"
            aria-invalid={Boolean(errors.vehicle)}
            {...register("vehicle")}
          />
        </Field>
        <Field
          label="Vehicle type"
          htmlFor="vehicleType"
          error={errors.vehicleType?.message}
        >
          <select
            id="vehicleType"
            className={selectClasses}
            aria-invalid={Boolean(errors.vehicleType)}
            {...register("vehicleType")}
          >
            <option value="" disabled>
              Select type
            </option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Service you're interested in"
        htmlFor="service"
        error={errors.service?.message}
      >
        <select
          id="service"
          className={selectClasses}
          aria-invalid={Boolean(errors.service)}
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Anything we should know? (optional)"
        htmlFor="message"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={4}
          placeholder="Condition, pet hair, water spots, timeline…"
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong sending your request. Please try again, or call
          us at <a href={SITE.phoneHref} className="underline">{SITE.phone}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-all duration-300 outline-none select-none",
          "hover:bg-white hover:shadow-[0_10px_36px_-10px_rgba(245,245,245,0.4)] focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-60"
        )}
      >
        {status === "submitting" ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
        ) : (
          <>
            Request My Quote
            <ArrowRight className="size-4" aria-hidden />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground/70">
        No spam, no obligation — just an exact price for your vehicle.
      </p>
    </form>
  );
}
