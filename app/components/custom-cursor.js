"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const root = useRef(null);
  const dot = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    document.documentElement.classList.add("has-cursor");
    const node = root.current;
    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let frame = 0;
    let armed = false;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!armed) {
        armed = true;
        cx = x;
        cy = y;
        node.classList.add("is-armed");
      }
    };
    const onOver = (event) => {
      const target = event.target.closest?.("[data-cursor]");
      if (target) {
        dot.current?.classList.add("is-hot");
        if (label.current) label.current.textContent = target.getAttribute("data-cursor") || "";
      } else {
        dot.current?.classList.remove("is-hot");
        if (label.current) label.current.textContent = "";
      }
    };
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      node.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div ref={root} className="cursor" aria-hidden="true">
      <div ref={dot} className="cursor-dot">
        <span ref={label} />
      </div>
    </div>
  );
}
