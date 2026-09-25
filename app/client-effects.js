"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Leadership", "#leadership"],
  ["Contact", "#contact"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-active" : ""}`}
    >
      <a className="brand" href="#home" aria-label="Roger Bravo Advisors, home">
        <img src="/assets/roger-bravo-logo.png" alt="Roger Bravo Advisors" />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <p>Strategic counsel for pivotal moments.</p>
      </div>
    </header>
  );
}

export function ClientEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll(".reveal");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    const hero = document.querySelector(".hero");
    const orbit = document.querySelector(".hero-orbit");
    const glow = document.querySelector(".hero-glow-one");
    const moveHero = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      if (orbit) orbit.style.translate = `${x * 10}px ${y * 10}px`;
      if (glow) glow.style.translate = `${x * 20}px ${y * 20}px`;
    };
    hero?.addEventListener("pointermove", moveHero, { passive: true });

    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", moveHero);
    };
  }, []);

  return null;
}

export function BackToTop() {
  const handleClick = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button type="button" onClick={handleClick}>
      Back to top ↑
    </button>
  );
}
