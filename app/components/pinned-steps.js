"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PinnedSteps({ label, eyebrow, steps, id = "approach" }) {
  const root = useRef(null);
  const fill = useRef(null);

  useEffect(() => {
    const node = root.current;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray(".step", node);
      let current = 0;
      items.forEach((item, itemIndex) => item.classList.toggle("is-on", itemIndex === 0));
      const trigger = ScrollTrigger.create({
        trigger: node,
        start: "top top",
        end: "+=180%",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (fill.current) fill.current.style.transform = `scaleY(${self.progress})`;
          const index = Math.min(items.length - 1, Math.floor(self.progress * items.length));
          if (index === current) return;
          current = index;
          items.forEach((item, itemIndex) => item.classList.toggle("is-on", itemIndex <= index));
        },
      });
      return () => {
        trigger.kill();
        items.forEach((item) => item.classList.add("is-on"));
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="chapter chapter-pin tone-dark steps-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="steps-frame">
        <div className="steps-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="display display-md">
            {label}
          </h2>
        </div>
        <div className="steps-body">
          <div className="steps-rule" aria-hidden="true">
            <span ref={fill} />
          </div>
          <ol className="step-list">
            {steps.map(([title, body], index) => (
              <li key={title} className="step is-on">
                <span className="num">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
