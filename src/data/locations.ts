/**
 * Service-area cities. Order matters — primary market first, then the
 * surrounding communities roughly by distance from Rochester.
 * Also used for local-SEO structured data (areaServed).
 *
 * Scope narrowed to Rochester + surrounding towns (Aug 2026). Winona and
 * Fountain City WI were dropped, so every city here is now in Minnesota.
 */
export interface ServiceCity {
  name: string;
  state: "MN";
  primary?: boolean;
}

export const serviceCities: ServiceCity[] = [
  { name: "Rochester", state: "MN", primary: true },
  { name: "Byron", state: "MN" },
  { name: "Oronoco", state: "MN" },
  { name: "Stewartville", state: "MN" },
  { name: "Eyota", state: "MN" },
  { name: "Kasson", state: "MN" },
  { name: "Pine Island", state: "MN" },
];
