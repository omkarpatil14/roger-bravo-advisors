"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 0.8, 0.2, 1];

export function CinematicHero({
  eyebrow,
  title,
  lede,
  meta,
  actions,
  watermark = "RB",
  video,
  size = "xl",
  titleHref,
}) {
  const root = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const lines = Array.isArray(title) ? title : [title];
  let wordIndex = 0;

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !video) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || navigator.connection?.saveData) return undefined;

    let started = false;
    const start = window.setTimeout(() => {
      started = true;
      node.src = video;
      node.play().catch(() => {});
    }, 800);
    const onError = () => {
      node.hidden = true;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!started || node.hidden) return;
        if (entry.isIntersecting) node.play().catch(() => {});
        else node.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    node.addEventListener("error", onError);
    return () => {
      window.clearTimeout(start);
      observer.disconnect();
      node.removeEventListener("error", onError);
    };
  }, [video]);

  const heading = (
    <h1 className={size === "md" ? "display display-md" : "display display-xl"}>
      {lines.map((line, lineIndex) => (
        <span className="hero-line" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word) => {
            const index = wordIndex;
            wordIndex += 1;
            return (
              <span className="word" key={`${word}-${index}`}>
                <motion.span
                  className="word-inner"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.25 + index * 0.05, ease }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );

  return (
    <header ref={root} className={size === "md" ? "hero hero-md" : "hero"}>
      <div className="hero-field" aria-hidden="true" />
      {video ? (
        <video ref={videoRef} className="hero-video" muted loop playsInline preload="none" aria-hidden="true" />
      ) : null}
      <div className="hero-shade" aria-hidden="true" />
      <motion.p className="hero-mark" style={reduce ? undefined : { y: markY }} aria-hidden="true">
        {watermark}
      </motion.p>
      <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY }}>
        {eyebrow ? <p className="eyebrow fade-in">{eyebrow}</p> : null}
        {titleHref ? (
          <a className="hero-title-link" href={titleHref} data-cursor="Write">
            {heading}
          </a>
        ) : (
          heading
        )}
      </motion.div>
      {actions || lede ? (
        <div className="hero-bottom fade-in">
          {actions ? <div className="hero-actions">{actions}</div> : <span />}
          {lede ? <p className="hero-lede">{lede}</p> : null}
        </div>
      ) : null}
      {meta?.length ? (
        <div className="hero-foot fade-in">
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
