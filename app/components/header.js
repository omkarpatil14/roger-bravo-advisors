"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navItems } from "../content";
import { getLenisInstance } from "./lenis-store";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (!lenis) return undefined;
    if (open) lenis.stop();
    else lenis.start();
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={open ? "site-header is-open" : scrolled ? "site-header is-scrolled" : "site-header"}>
      <Link href="/" className="brand" data-cursor="Open" aria-current={pathname === "/" ? "page" : undefined}>
        <Image
          className="logo-mark"
          src="/assets/roger-bravo-logo-theme.png"
          alt="Roger Bravo Advisors"
          width={1800}
          height={437}
          priority
        />
      </Link>
      <LayoutGroup id="primary-nav">
        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={active ? "nav-link is-active" : "nav-link"}
                data-cursor="Open"
                aria-current={active ? "page" : undefined}
              >
                {active ? <motion.span layoutId="nav-dot" className="nav-dot" /> : null}
                {label}
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-burger" aria-hidden="true" />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      <nav
        id="site-menu"
        className="nav-mobile"
        aria-label="Mobile"
        hidden={!open}
        onClick={(event) => {
          if (event.target.closest("a")?.getAttribute("href") === pathname) setOpen(false);
        }}
      >
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
          Home
        </Link>
        {navItems.map(([label, href]) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
