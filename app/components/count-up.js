"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

export function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const state = { n: 0 };
    node.textContent = `0${suffix}`;
    const tween = gsap.to(state, {
      n: to,
      duration: 1.35,
      ease: "power2.out",
      onUpdate: () => {
        node.textContent = `${Math.round(state.n)}${suffix}`;
      },
    });
    return () => tween.kill();
  }, [inView, suffix, to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      {to}
      {suffix}
    </span>
  );
}
