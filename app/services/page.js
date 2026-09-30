import { expertise, services } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { IndustryRail } from "../components/industry-rail";
import { MagneticButton } from "../components/magnetic-button";
import { RevealOnScroll } from "../components/reveal-on-scroll";
import { ServiceAccordion } from "../components/service-accordion";

export const metadata = {
  title: "Services",
  description: expertise.body,
};

export default function ServicesPage() {
  return (
    <main id="main">
      <CinematicHero
        video="/videos/services.mp4"
        eyebrow={expertise.label}
        title={["What we advise on."]}
        lede={expertise.body}
        size="md"
        watermark="05"
        meta={[`${services.length} practices`, "India · Dubai", "Est. 2010"]}
      />

      <section className="chapter" aria-labelledby="index-title">
        <div className="chapter-inner asym">
          <RevealOnScroll>
            <p className="eyebrow">Practice index</p>
            <h2 id="index-title" className="display display-md">
              The five practice areas.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="asym-copy" delay={0.1}>
            <p>
              For litigation and arbitration, we partner with India Law Alliance to provide legal remedies under
              one roof.
            </p>
          </RevealOnScroll>
        </div>
        <div className="chapter-inner" style={{ marginTop: "clamp(2.5rem, 6vh, 4rem)" }}>
          <ServiceAccordion />
        </div>
      </section>

      <IndustryRail />

      <section className="chapter" aria-labelledby="services-cta">
        <div className="chapter-inner asym">
          <h2 id="services-cta" className="display display-md">
            Write to us about a matter.
          </h2>
          <div className="asym-copy">
            <MagneticButton href="/contact">Contact us</MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
