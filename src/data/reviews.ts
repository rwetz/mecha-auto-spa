/**
 * PLACEHOLDER review content — replace with real Google reviews
 * (name, vehicle, date, text) before launch.
 */
export interface Review {
  name: string;
  vehicle: string;
  date: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Jason M.",
    vehicle: "Ford F-150 Platinum",
    date: "June 2026",
    rating: 5,
    text: "My truck hasn't looked this good since the day I drove it off the lot. The ceramic coating sheds Minnesota winter grime like nothing.",
  },
  {
    name: "Sarah K.",
    vehicle: "Audi Q7",
    date: "May 2026",
    rating: 5,
    text: "They came to my office and had it done before my last meeting. Interior looks and smells brand new — kids and dog had done real damage.",
  },
  {
    name: "Mike R.",
    vehicle: "Mustang GT",
    date: "May 2026",
    rating: 5,
    text: "The two-step paint correction removed every swirl the dealership put in. The reflection is genuinely mirror-like. Worth every dollar.",
  },
  {
    name: "Emily T.",
    vehicle: "Tesla Model Y",
    date: "April 2026",
    rating: 5,
    text: "Professional from first message to final walkaround. They explained exactly what the paint needed and didn't oversell me.",
  },
  {
    name: "Dan W.",
    vehicle: "GMC Sierra 2500",
    date: "April 2026",
    rating: 5,
    text: "Fleet of three work trucks detailed on-site at our shop. Scheduling was easy and the crew was in and out with zero disruption.",
  },
  {
    name: "Rachel B.",
    vehicle: "BMW X5",
    date: "March 2026",
    rating: 5,
    text: "Booked the 3-year ceramic package. Water beads off beautifully and washing it takes half the time. Should have done this years ago.",
  },
];
