"use client";

import { MotionConfig } from "framer-motion";

/** Honors the user's OS reduced-motion preference across every animation. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
