"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 0.8, 0.2, 1];

export function RevealOnScroll({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`reveal-target ${className}`.trim()}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reduce ? 0.01 : 0.75, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}
