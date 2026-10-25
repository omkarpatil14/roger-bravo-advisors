"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandMarks, contactCopy, fundFacts, navItems, services } from "../content";
import { MagneticButton } from "./magnetic-button";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const showContactBand = pathname !== "/services";

  return (
    <footer className={showContactBand ? "site-footer tone-dark" : "site-footer tone-dark is-compact"}>
      {showContactBand ? (
        <div className="footer-top">
          <div>
            <p className="eyebrow">{contactCopy.eyebrow}</p>
            <h2 className="display display-md footer-cta">
              {contactCopy.lines[0]} {contactCopy.lines[1]}
            </h2>
          </div>
          <div>
            <MagneticButton href="/contact">Contact us</MagneticButton>
          </div>
        </div>
      ) : null}
      <div className="footer-meta">
        <div>
          <div className="logo-plate">
            <Image className="footer-logo" src="/assets/roger-bravo-logo.png" alt="Roger Bravo Advisors" width={1800} height={437} />
          </div>
          <p className="footer-tagline">{brandMarks.pronunciation}</p>
        </div>
        <div>
          <h3>Pages</h3>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/">Home</Link>
            {navItems.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Services</h3>
          <nav className="footer-nav" aria-label="Services">
            {services.map((service) => (
              <Link key={service.slug} href={`/services#${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            {contactCopy.company}
            <br />
            CIN {contactCopy.cin}
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            <a href={`mailto:${contactCopy.email}`}>{contactCopy.email}</a>
            <br />
            <a href={contactCopy.phoneHref}>{contactCopy.phone}</a>
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            {contactCopy.address[0]}
            <br />
            {contactCopy.address[1]}
          </p>
        </div>
      </div>
      <dl className="footer-fund">
        {fundFacts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              {(Array.isArray(value) ? value : [value]).map((line) => (
                <span key={line}>{line}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <div className="footer-base">
        <p>© {year} {contactCopy.company}</p>
        <p>Business Advisory · Crisis Management</p>
      </div>
    </footer>
  );
}
