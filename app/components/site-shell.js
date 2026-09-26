"use client";

import { CustomCursor } from "./custom-cursor";
import { Footer } from "./footer";
import { Header } from "./header";
import { PageTransition } from "./page-transition";
import { ScrollProgress } from "./scroll-progress";
import { SmoothScroll } from "./smooth-scroll";

export function SiteShell({ children }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <PageTransition />
      <Header />
      {children}
      <Footer />
    </SmoothScroll>
  );
}
