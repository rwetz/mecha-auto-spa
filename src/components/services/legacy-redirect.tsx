"use client";

import * as React from "react";
import { serviceCategories } from "@/data/services";

const hashTargets: Record<string, string> = {
  "#packages": "/detailing/#packages",
  "#add-ons": "/detailing/#add-ons",
  "#by-quote": "/detailing/#by-quote",
};

/**
 * /services/ used to hold everything. Old links (`#packages`, `?c=tint`)
 * now forward to the page that owns that content. Static export has no
 * server redirects, so this runs client-side after load.
 */
export function LegacyServicesRedirect() {
  React.useEffect(() => {
    const { hash, search } = window.location;
    const c = new URLSearchParams(search).get("c");
    const target =
      hashTargets[hash] ?? serviceCategories.find((cat) => cat.id === c)?.href;
    if (target) window.location.replace(target);
  }, []);
  return null;
}
