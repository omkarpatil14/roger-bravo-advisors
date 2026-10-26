import Image from "next/image";
import {
  approach,
  brandMarks,
  fundFacts,
  manifesto,
  nameStory,
  profile,
  vision,
} from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { MagneticButton } from "../components/magnetic-button";
import { PinnedSteps } from "../components/pinned-steps";
import { RevealOnScroll } from "../components/reveal-on-scroll";

export const metadata = {
  title: "About",
  description: manifesto.lead,
};

export default function AboutPage() {
  return (
    <main id="main">
      <CinematicHero
        video="/videos/about.mp4"
        title={["About the firm."]}
        lede={manifesto.lead}
        watermark="RB"
        size="md"
        meta={["Est. 2010", "India", "Business advisory · Crisis management"]}
      />

      <section className="chapter" aria-labelledby="name-title">
        <p className="watermark" aria-hidden="true">
          01
        </p>
        <div className="chapter-inner">
          <RevealOnScroll>
            <p className="eyebrow">Name narrative</p>
            <h2 id="name-title" className="display display-sm">
              The name Roger Bravo indicates two terms:
            </h2>
          </RevealOnScroll>
        </div>
        <div className="chapter-inner name-grid">
          {nameStory.map((item, index) => (
            <RevealOnScroll key={item.word} delay={index * 0.12}>
              <article className="name-card">
                <h3 className={`name-word is-${item.tone}`}>{item.word}</h3>
                <p className="name-origin">Meaning — {item.origin}</p>
                <p>{item.body}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="chapter chapter-tight" aria-labelledby="logo-title">
        <div className="chapter-inner brand-block">
          <RevealOnScroll className="brand-logo">
            <Image
              src="/assets/roger-bravo-logo.png"
              alt="Roger Bravo logo with a thumbs-up in Roger and a tick mark in Bravo"
              width={1800}
              height={437}
              sizes="280px"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="eyebrow">Our logo</p>
            <h2 id="logo-title" className="display display-sm">
              The mark.
            </h2>
            <p className="brand-copy">{brandMarks.logo}</p>
          </RevealOnScroll>
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

      <section className="chapter" aria-labelledby="profile-title">
        <p className="watermark" aria-hidden="true">
          02
        </p>
        <div className="chapter-inner asym asym-top">
          <RevealOnScroll>
            <p className="eyebrow">Company profile</p>
            <h2 id="profile-title" className="vision">
              {vision}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="asym-copy" delay={0.1}>
            <p>{profile.body}</p>
            <dl className="fund-facts">
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
          </RevealOnScroll>
        </div>
        <RevealOnScroll className="chapter-inner" delay={0.05}>
          <p className="eyebrow" style={{ marginTop: "clamp(3rem, 7vh, 5rem)" }}>
            {profile.competenceLabel}
          </p>
          <ol className="profile-list">
            {profile.competence.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ol>
        </RevealOnScroll>
      </section>

      <PinnedSteps label={approach.label} eyebrow={approach.eyebrow} steps={approach.steps} />

      <section className="chapter chapter-end" aria-label="Explore our services">
        <div className="chapter-inner">
          <MagneticButton href="/services">Explore our services</MagneticButton>
        </div>
      </section>
    </main>
  );
}
