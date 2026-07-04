/**
 * Service-area cities. Order matters — primary markets first.
 * Also used for local-SEO structured data (areaServed).
 */
export interface ServiceCity {
  name: string;
  primary?: boolean;
}

export const serviceCities: ServiceCity[] = [
  { name: "Rochester", primary: true },
  { name: "Winona", primary: true },
  { name: "Byron" },
  { name: "Stewartville" },
  { name: "Kasson" },
  { name: "Pine Island" },
  { name: "Chatfield" },
  { name: "Plainview" },
  { name: "Eyota" },
  { name: "Lake City" },
];
