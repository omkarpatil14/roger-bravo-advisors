"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { leaders } from "../content";
import { getLenisInstance } from "./lenis-store";

gsap.registerPlugin(ScrollTrigger);

export function LeadershipStage() {
  const root = useRef(null);
  const trigger = useRef(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const leader = leaders[active];

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const index = leaders.findIndex((item) => item.id === id);
    if (index < 0) return;
    setActive(index);
    if (window.matchMedia("(max-width: 900px)").matches) {
      document.getElementById(`${id}-bio`)?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      trigger.current = ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "+=160%",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.min(leaders.length - 1, Math.floor(self.progress * leaders.length));
          setActive((current) => (current === index ? current : index));
        },
      });
      return () => {
        trigger.current?.kill();
        trigger.current = null;
      };
    });
    return () => mm.revert();
  }, []);

  const select = (index) => {
    setActive(index);
    const instance = trigger.current;
    if (!instance) return;
    const span = instance.end - instance.start;
    const target = instance.start + ((index + 0.5) / leaders.length) * span;
    const lenis = getLenisInstance();
    if (lenis) lenis.scrollTo(target, { duration: 1 });
    else window.scrollTo({ top: target });
  };

  const onKey = (event, index) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowDown" ? 1 : -1) + leaders.length) % leaders.length;
    select(next);
    document.getElementById(leaders[next].id)?.focus();
  };

  return (
    <section className="chapter chapter-pin" aria-labelledby="leadership-stage-title">
      <h2 id="leadership-stage-title" className="sr-only">
        Leadership
      </h2>
      <div ref={root} className="spotlight-desktop">
        <div className="spotlight-frame">
          <div className="spotlight-names" role="tablist" aria-label="Leadership" aria-orientation="vertical">
            {leaders.map((item, index) => (
              <button
                key={item.id}
                id={item.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="leader-panel"
                tabIndex={active === index ? 0 : -1}
                data-cursor="View"
                onMouseEnter={() => setActive(index)}
                onClick={() => select(index)}
                onKeyDown={(event) => onKey(event, index)}
              >
                <span className="num">0{index + 1}</span>
                <span>
                  <strong>{item.name}</strong>
                  <em>{item.role}</em>
                </span>
              </button>
            ))}
            <div className="spotlight-meter" aria-hidden="true">
              <span style={{ transform: `scaleX(${(active + 1) / leaders.length})` }} />
            </div>
          </div>
          <div className="spotlight-stage" id="leader-panel" role="tabpanel" aria-labelledby={leader.id}>
            <div className="portrait portrait-stack">
              {leaders.map((item, index) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={index === active ? item.name : ""}
                  fill
                  sizes="(max-width: 900px) 100vw, 32vw"
                  className={index === active ? "portrait-img is-active is-color" : "portrait-img"}
                  priority={index === 0}
                />
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={leader.id}
                className="spotlight-copy"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: reduce ? 0 : 0.38, ease: [0.22, 0.8, 0.2, 1] }}
              >
                <p className="eyebrow">{leader.role}</p>
                <p className="spotlight-bio">{leader.bio}</p>
                <ul className="highlight-list">
                  {leader.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="spotlight-mobile">
        {leaders.map((item) => (
          <article key={item.id} id={`${item.id}-bio`} className="leader-block">
            <div className="portrait">
              <Image src={item.image} alt={item.name} fill sizes="360px" className="portrait-img is-color" />
            </div>
            <h2>{item.name}</h2>
            <p className="role">{item.role}</p>
            <p>{item.bio}</p>
            <ul className="highlight-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
