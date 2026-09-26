"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industries } from "../content";

gsap.registerPlugin(ScrollTrigger);

export function IndustryRail() {
  const root = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth);
        gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="rail chapter chapter-pin tone-dark" aria-labelledby="industries-title">
      <div className="rail-frame">
        <div className="rail-head">
          <p className="eyebrow">Industries served</p>
          <h2 id="industries-title" className="display display-md">
            Sectors as diverse as the mandates.
          </h2>
        </div>
        <ol ref={track} className="rail-track">
          {industries.map(([name, detail], index) => (
            <li className="rail-item" key={name}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              {detail ? <em>{detail}</em> : null}
            </li>
          ))}
        </ol>
        <div className="rail-meter" aria-hidden="true">
          <span ref={bar} />
        </div>
      </div>
    </section>
  );
}
