"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenisInstance } from "./lenis-store";

const COVER_MS = 520;
const REVEAL_MS = 620;

function internalHref(anchor) {
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return null;
  const raw = anchor.getAttribute("href");
  if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return null;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  return url;
}

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState("idle");
  const pending = useRef(false);
  const previous = useRef(pathname);
  const timers = useRef([]);
  const safety = useRef(0);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = internalHref(event.target.closest?.("a[href]"));
      if (!url) return;
      if (url.pathname === window.location.pathname) {
        if (url.hash) {
          const id = url.hash.slice(1);
          window.setTimeout(() => window.dispatchEvent(new CustomEvent("rb:hash", { detail: id })), 0);
        }
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      if (pending.current) return;
      pending.current = true;
      getLenisInstance()?.stop();
      setPhase("cover");
      const href = url.pathname + url.search + url.hash;
      router.prefetch(url.pathname);
      timers.current.push(window.setTimeout(() => router.push(href, { scroll: false }), COVER_MS));
      window.clearTimeout(safety.current);
      safety.current = window.setTimeout(() => {
        if (!pending.current) return;
        pending.current = false;
        getLenisInstance()?.start();
        setPhase("reveal");
        timers.current.push(window.setTimeout(() => setPhase("idle"), REVEAL_MS));
      }, 6000);
    };
    window.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("click", onClick, true);
      timers.current.forEach(window.clearTimeout);
      window.clearTimeout(safety.current);
    };
  }, [router]);

  useLayoutEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    window.clearTimeout(safety.current);

    const lenis = getLenisInstance();
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);

    if (!pending.current) {
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }
    pending.current = false;
    lenis?.start();
    setPhase("reveal");
    const done = window.setTimeout(() => {
      setPhase("idle");
      ScrollTrigger.refresh();
    }, REVEAL_MS);
    timers.current.push(done);
  }, [pathname]);

  return (
    <div className={`route-wipe is-${phase}`} aria-hidden="true">
      <span className="route-wipe-mark">Roger Bravo</span>
    </div>
  );
}
