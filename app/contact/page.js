import { contactCopy } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { RevealOnScroll } from "../components/reveal-on-scroll";

export const metadata = {
  title: "Contact",
  description: "Contact Roger Bravo Advisors at info@rogerbravo.com. India and Dubai.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <CinematicHero
        video="/videos/contact.mp4"
        eyebrow={contactCopy.eyebrow}
        title={contactCopy.lines}
        size="md"
        watermark="RB"
        meta={[contactCopy.presence, "Mumbai · BKC"]}
      />

      <section className="chapter chapter-tight" aria-labelledby="contact-mail-label">
        <div className="chapter-inner enquiry">
          <RevealOnScroll>
            <p className="eyebrow" id="contact-mail-label">
              Email
            </p>
            <h2 className="display display-sm">Contact us on this email.</h2>
            <a className="contact-mail" href={`mailto:${contactCopy.email}`} data-cursor="Write">
              {contactCopy.email}
            </a>
            <p className="eyebrow" style={{ marginTop: "2.4rem" }}>
              Telephone
            </p>
            <a className="contact-mail" href={contactCopy.phoneHref} data-cursor="Call">
              {contactCopy.phone}
            </a>
          </RevealOnScroll>
          <RevealOnScroll className="offices" delay={0.1}>
            <div className="office-card">
              <span>{contactCopy.officeLabel}</span>
              <address>
                {contactCopy.address[0]}
                <br />
                {contactCopy.address[1]}
              </address>
              <a className="text-link" href={contactCopy.mapHref} target="_blank" rel="noreferrer" data-cursor="Open">
                Open in Maps ↗
              </a>
              <iframe
                className="map-frame"
                title="Map of the Mumbai office at Inspire Building, BKC"
                src={contactCopy.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="office-card">
              <span>Dubai</span>
              <p>{contactCopy.presence}</p>
              <p className="office-note">Dubai street address — pending client confirmation.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
