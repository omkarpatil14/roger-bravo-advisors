"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 0.8, 0.2, 1];

const FLOW_PATHS = [
  ["M-100 620 C 240 460, 520 760, 860 560 S 1380 380, 1560 520", "green"],
  ["M-100 700 C 300 560, 600 820, 940 640 S 1400 480, 1560 600", "green"],
  ["M-100 300 C 260 180, 560 420, 900 260 S 1360 120, 1560 240", "orange"],
  ["M-100 780 C 360 680, 680 880, 1020 720 S 1420 600, 1560 700", "green"],
];

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
    }, 200);
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
      <svg className="hero-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="line-green" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#1b3054" stopOpacity="0" />
            <stop offset="0.5" stopColor="#1b3054" stopOpacity="0.75" />
            <stop offset="1" stopColor="#1b3054" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-orange" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#a68445" stopOpacity="0" />
            <stop offset="0.5" stopColor="#a68445" stopOpacity="0.8" />
            <stop offset="1" stopColor="#a68445" stopOpacity="0" />
          </linearGradient>
        </defs>
        {FLOW_PATHS.map(([d, tone], index) => (
          <g key={d}>
            <path className="flow-base" d={d} />
            <path className={`flow flow-${index + 1}`} d={d} stroke={`url(#line-${tone})`} />
          </g>
        ))}
      </svg>
      <motion.p className="hero-mark" style={reduce ? undefined : { y: markY }} aria-hidden="true">
        {watermark}
      </motion.p>
      <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY }}>
        {eyebrow ? (
          <p className="eyebrow fade-in">
            {String(eyebrow)
              .split(" · ")
              .map((part, index) => (
                <span className="eyebrow-part" key={`${part}-${index}`}>
                  {index > 0 ? (
                    <span className="eyebrow-sep" aria-hidden="true">
                      {" · "}
                    </span>
                  ) : null}
                  {part}
                </span>
              ))}
          </p>
        ) : null}
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
