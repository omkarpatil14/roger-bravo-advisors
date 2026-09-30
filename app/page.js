import Link from "next/link";
import Image from "next/image";
import {
  approach,
  brandMarks,
  expertise,
  hero,
  industries,
  leaders,
  leadershipIntro,
  manifesto,
  services,
  vision,
} from "./content";
import { CinematicHero } from "./components/cinematic-hero";
import { CountUp } from "./components/count-up";
import { IndustryRail } from "./components/industry-rail";
import { MagneticButton } from "./components/magnetic-button";
import { RevealOnScroll } from "./components/reveal-on-scroll";

const homeServices = services.filter((service) => service.slug !== "litigation");

export default function HomePage() {
  const years = new Date().getFullYear() - 2010;

  return (
    <main id="main">
      <CinematicHero
        video="/videos/corporate-skyline.mp4"
        eyebrow={hero.eyebrow}
        title={hero.lines}
        lede={hero.lede}
        meta={hero.meta}
        watermark="RB"
        actions={
          <>
            <MagneticButton href="/contact">Contact us</MagneticButton>
            <Link className="text-link" href="/services" data-cursor="Read">
              {expertise.label}
            </Link>
          </>
        }
      />

      <section className="home-motion-band" aria-label="Roger Bravo capabilities">
        <div className="motion-signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="motion-marquee">
          <div className="motion-marquee-track">
            {[0, 1].map((copy) => (
              <div className="motion-marquee-group" aria-hidden={copy === 1} key={copy}>
                <span>Business advisory</span>
                <i />
                <span>Fund raising</span>
                <i />
                <span>Crisis management</span>
                <i />
                <span>Communications</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="why-title">
        <p className="watermark" aria-hidden="true">
          01
        </p>
        <div className="chapter-inner asym">
          <RevealOnScroll>
            <p className="eyebrow">{manifesto.label}</p>
            <h2 id="why-title" className="display display-md">
              {manifesto.lead}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="asym-copy" delay={0.1}>
            <p>{manifesto.body}</p>
            <p className="muted-copy">{vision}</p>
            <Link className="text-link" href="/about" data-cursor="Read">
              Our story
            </Link>
          </RevealOnScroll>
        </div>
        <RevealOnScroll className="chapter-inner" delay={0.1}>
          <div className="stats" style={{ marginTop: "clamp(3rem, 8vh, 5.5rem)" }}>
            <div className="stat">
              <strong>
                <CountUp to={years} />
                <sup>+</sup>
              </strong>
              <span>Years since 2010</span>
            </div>
            <div className="stat">
              <strong>
                <CountUp to={industries.length} />
              </strong>
              <span>Industries served</span>
            </div>
            <div className="stat">
              <strong>
                <CountUp to={homeServices.length} />
              </strong>
              <span>Practice areas</span>
            </div>
            <div className="stat">
              <strong>
                <CountUp to={37} />
                <sup>+</sup>
              </strong>
              <span>Years, MD’s experience</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="chapter chapter-tight" aria-labelledby="services-title">
        <div className="chapter-inner asym">
          <RevealOnScroll>
            <p className="eyebrow">{expertise.label}</p>
            <h2 id="services-title" className="display display-md">
              Our practice areas.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="asym-copy" delay={0.1}>
            <p>{expertise.body}</p>
          </RevealOnScroll>
        </div>
        <div className="chapter-inner service-preview">
          {homeServices.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={index * 0.05}>
              <Link className="service-row" href={`/services#${service.slug}`} data-cursor="Read">
                <span className="num">0{index + 1}</span>
                <span className="service-row-title">{service.title}</span>
                <p>{service.description}</p>
                <span className="service-row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <IndustryRail />

      <section className="chapter" aria-labelledby="leaders-title">
        <p className="watermark" aria-hidden="true">
          03
        </p>
        <div className="chapter-inner asym">
          <RevealOnScroll>
            <p className="eyebrow">{leadershipIntro.eyebrow}</p>
            <h2 id="leaders-title" className="display display-md">
              {leadershipIntro.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="asym-copy" delay={0.1}>
            <Link className="text-link" href="/leadership" data-cursor="View">
              Meet the leadership
            </Link>
          </RevealOnScroll>
        </div>
        <div className="chapter-inner leader-strip">
          {leaders.map((leader, index) => (
            <RevealOnScroll key={leader.id} delay={index * 0.1}>
              <Link className="leader-card" href={`/leadership#${leader.id}`} data-cursor="View">
                <figure>
                  <div className="portrait">
                    <Image
                      src={leader.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 30vw"
                      className="portrait-img"
                    />
                  </div>
                  <figcaption>
                    <span>
                      <strong>{leader.name}</strong>
                      <em>{leader.role}</em>
                    </span>
                    <span className="num">0{index + 1}</span>
                  </figcaption>
                </figure>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="bleed tone-dark" aria-labelledby="tagline-title">
        <div className="bleed-glow" aria-hidden="true" />
        <RevealOnScroll className="chapter-inner">
          <p className="eyebrow">Our tagline</p>
          <h2 id="tagline-title" className="tagline" lang="sa">
            {brandMarks.tagline}
          </h2>
          <div className="tagline-meta">
            <p>
              <strong>{brandMarks.pronunciation}</strong>
            </p>
            <p>{brandMarks.taglineMeaning}</p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="chapter" aria-labelledby="approach-title">
        <p className="watermark" aria-hidden="true">
          04
        </p>
        <div className="chapter-inner asym asym-top">
          <RevealOnScroll>
            <p className="eyebrow">{approach.label}</p>
            <h2 id="approach-title" className="display display-md">
              How we work.
            </h2>
            <p style={{ marginTop: "2rem" }}>
              <Link className="text-link" href="/about#approach" data-cursor="Read">
                How we work
              </Link>
            </p>
          </RevealOnScroll>
          <ol className="step-list steps-static">
            {approach.steps.map(([title, body], index) => (
              <li key={title}>
                <RevealOnScroll className="step" delay={index * 0.08}>
                  <span className="num">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
