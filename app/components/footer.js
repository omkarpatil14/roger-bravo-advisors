import Image from "next/image";
import Link from "next/link";
import { brandMarks, contactCopy, navItems, services } from "../content";
import { MagneticButton } from "./magnetic-button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer tone-dark">
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
      <div className="footer-meta">
        <div>
          <div className="logo-plate">
            <Image className="footer-logo" src="/assets/roger-bravo-logo-theme.png" alt="Roger Bravo Advisors" width={1800} height={437} />
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
          <h3>{contactCopy.officeLabel}</h3>
          <p>
            {contactCopy.address[0]}
            <br />
            {contactCopy.address[1]}
          </p>
          <p style={{ marginTop: "0.8rem" }}>{contactCopy.presence}</p>
        </div>
      </div>
      <div className="footer-base">
        <p>© {year} Roger Bravo Advisors Pvt. Ltd.</p>
        <p>Business Advisory · Crisis Management</p>
      </div>
    </footer>
  );
}
