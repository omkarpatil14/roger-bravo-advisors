"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../content";
import { getLenisInstance } from "./lenis-store";

const ease = [0.22, 0.8, 0.2, 1];

export function ServiceAccordion() {
  const [open, setOpen] = useState(services[0].slug);
  const reduce = useReducedMotion();

  useEffect(() => {
    let timer = 0;
    const focusService = (id, delay) => {
      if (!services.some((service) => service.slug === id)) return;
      setOpen(id);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const node = document.getElementById(id);
        if (!node) return;
        const lenis = getLenisInstance();
        if (lenis) lenis.scrollTo(node, { offset: -90, duration: 1.1 });
        else node.scrollIntoView();
      }, delay);
    };
    focusService(window.location.hash.slice(1), 700);
    const onHash = (event) => focusService(event.detail, 60);
    window.addEventListener("rb:hash", onHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("rb:hash", onHash);
    };
  }, []);

  const toggle = (slug) => {
    setOpen((current) => (current === slug ? "" : slug));
  };

  const onKey = (event, index) => {
    const keys = { ArrowDown: 1, ArrowUp: -1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = services[(index + keys[event.key] + services.length) % services.length];
    document.getElementById(`${next.slug}-button`)?.focus();
  };

  return (
    <div className="service-index">
      {services.map((service, index) => {
        const expanded = open === service.slug;
        const panelId = `${service.slug}-panel`;
        return (
          <article id={service.slug} key={service.slug} className={expanded ? "service-article is-open" : "service-article"}>
            <h3>
              <button
                id={`${service.slug}-button`}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                data-cursor={expanded ? "Close" : "Read"}
                onClick={() => toggle(service.slug)}
                onKeyDown={(event) => onKey(event, index)}
              >
                <span className="num">0{index + 1}</span>
                <span className="service-head">
                  <strong>{service.title}</strong>
                  <span className="service-summary">{service.description}</span>
                </span>
                <span className="service-toggle" aria-hidden="true">
                  <span />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false} onExitComplete={() => ScrollTrigger.refresh()}>
              {expanded ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${service.slug}-button`}
                  className="service-panel-wrap"
                  initial={reduce ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 1, height: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.55, ease }}
                  onAnimationComplete={() => ScrollTrigger.refresh()}
                >
                  <div className="service-panel">
                    <div className="service-detail">
                      {service.detail.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="service-groups">
                      {service.groups.map((group) => (
                        <div key={group.label} className="service-group">
                          <p className="eyebrow">{group.label}</p>
                          <ul>
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
