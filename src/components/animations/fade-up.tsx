"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  duration?: number;
}

/** Scroll-triggered fade + rise. The house entrance for every section. */
export function FadeUp({
  delay = 0,
  y = 28,
  duration = 0.7,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    />
  );
}
