/**
 * Service-area cities. Order matters — primary markets first.
 * Also used for local-SEO structured data (areaServed).
 * Note: Fountain City is across the river in Wisconsin, so every
 * consumer of this list must use `state` rather than assuming MN.
 */
export interface ServiceCity {
  name: string;
  state: "MN" | "WI";
  primary?: boolean;
}

export const serviceCities: ServiceCity[] = [
  { name: "Rochester", state: "MN", primary: true },
  { name: "Winona", state: "MN", primary: true },
  { name: "Eyota", state: "MN" },
  { name: "Fountain City", state: "WI" },
];
