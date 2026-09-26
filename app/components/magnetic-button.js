"use client";

import Link from "next/link";
import { useRef } from "react";

export function MagneticButton({ href, children, cursor = "Open", type = "button", className = "", disabled = false }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const classNames = `magnetic-btn ${className}`.trim();
  const inner = (
    <span className="magnetic-faces">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
  const shared = {
    className: classNames,
    "data-cursor": cursor,
    onMouseMove: onMove,
    onMouseLeave: reset,
  };

  if (href) {
    const external = href.startsWith("mailto:") || href.startsWith("http");
    if (external) {
      return (
        <a ref={ref} href={href} {...shared}>
          {inner}
        </a>
      );
    }
    return (
      <Link ref={ref} href={href} {...shared}>
        {inner}
      </Link>
    );
  }

  return (
    <button ref={ref} type={type} disabled={disabled} {...shared}>
      {inner}
    </button>
  );
}
