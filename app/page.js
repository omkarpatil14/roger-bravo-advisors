import Image from "next/image";
import { BackToTop, ClientEffects, Header } from "./client-effects";

const services = [
  {
    title: "Business Advisory & Corporate Liaison",
    description:
      "New ventures, strategic alliances, B2B access, government liaison and statutory compliance—built around your business objectives.",
    items: ["Market entry & expansion", "Partner due diligence", "Regulatory representation"],
  },
  {
    title: "Fund Raising & Financial Advisory",
    description:
      "Debt syndication and equity funding—from deal structuring and valuation through investor meetings, negotiation and close.",
    items: [
      "Project & structured finance",
      "Private equity & venture capital",
      "CFO & strategic finance services",
    ],
  },
  {
    title: "Crisis & Debt Management",
    description:
      "Clear-headed counsel for stressed situations, including refinancing, settlements, restructuring, ARC consultancy and promoter funding.",
    items: ["Debt refinancing & OTS", "Corporate debt restructuring", "Stressed asset funding"],
  },
  {
    title: "Litigation, Arbitration & Investigation",
    description:
      "Legal strategy, civil and criminal case coordination, international arbitration, mediation, forensic review and corporate fraud investigation.",
    items: ["Dispute strategy", "Arbitration & mediation", "Fraud & forensic investigation"],
  },
  {
    title: "Brand Promotion & Media Management",
    description:
      "Perception management and communications strategies aligned with your growth plans, stakeholders and operating environment.",
    items: ["PR & media advisory", "Issue & crisis communications", "Stakeholder strategy"],
  },
];

const industries = [
  "Infrastructure",
  "Financial Services",
  "Natural Resources",
  "Technology",
  "Healthcare",
  "Real Estate",
  "Aviation",
  "Hospitality",
];

const steps = [
  ["Listen", "Understand the context, stakeholders and true nature of the mandate."],
  ["Analyse", "Build a clear, well-researched view of risk, opportunity and leverage."],
  ["Strategise", "Shape the right path with commercial realism and regulatory insight."],
  ["Execute", "Move decisively, coordinate closely and stay accountable to the outcome."],
];

export default function Home() {
  return (
    <>
      <ClientEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow reveal visible">
              Business advisory · Crisis management
            </p>
            <h1 className="hero-title">
              <span className="line">
                <span>When the stakes are high,</span>
              </span>
              <span className="line accent-line">
                <span>move with clarity.</span>
              </span>
            </h1>
            <div className="hero-bottom reveal visible">
              <p>
                We listen deeply, think decisively and act boldly—bringing senior strategic counsel
                to complex business, financial and legal challenges.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Discuss your challenge <span>↗</span>
                </a>
                <a className="text-link" href="#expertise">
                  Explore our expertise <span>↓</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-meta reveal visible">
            <span>Est. 2010</span>
            <span>India · Dubai</span>
            <span>Scroll to discover</span>
          </div>
        </section>

        <section className="manifesto section" id="about">
          <div className="section-label reveal">
            <span>01</span>
            <p>Why Roger Bravo</p>
          </div>
          <div className="manifesto-layout">
            <div className="manifesto-title reveal">
              <p className="eyebrow">Your message, well received.</p>
              <h2>
                We understand first.
                <br />
                Then we move <em>boldly.</em>
              </h2>
            </div>
            <div className="manifesto-copy reveal">
              <p className="lead">
                “Roger” acknowledges that we have listened. “Bravo” is the courage to deliver an
                exceptional outcome.
              </p>
              <p>
                Since 2010, Roger Bravo Advisors has helped institutions and businesses navigate new
                ventures, raise capital, manage legal and financial crises, and open doors across
                industries and markets.
              </p>
            </div>
          </div>
          <div className="principles">
            <article className="principle reveal">
              <span>R</span>
              <div>
                <h3>Receive</h3>
                <p>We listen without assumptions and get to the heart of the situation.</p>
              </div>
            </article>
            <article className="principle reveal">
              <span>B</span>
              <div>
                <h3>Be bold</h3>
                <p>We apply experience, agility and resolve where ordinary answers fall short.</p>
              </div>
            </article>
            <article className="principle reveal">
              <span>✓</span>
              <div>
                <h3>Deliver</h3>
                <p>We stay relentlessly focused on the mandate and the outcome that matters.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="expertise section" id="expertise">
          <div className="section-label section-label-light reveal">
            <span>02</span>
            <p>What we do</p>
          </div>
          <div className="expertise-heading reveal">
            <h2>
              Complex mandates.
              <br />
              <span>One trusted advisor.</span>
            </h2>
            <p>
              Cross-functional expertise, senior attention and an execution-first mindset—designed
              for situations where every decision counts.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service reveal" key={service.title}>
                <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <span className="service-mark">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="sectors" aria-label="Industries served">
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...industries, ...industries].map((industry, index) => (
                <span className="ticker-item" key={`${industry}-${index}`}>
                  <span>{industry}</span>
                  <i>◆</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="leadership section" id="leadership">
          <div className="section-label reveal">
            <span>03</span>
            <p>Leadership</p>
          </div>
          <div className="leadership-grid">
            <div className="portrait-wrap reveal">
              <div className="portrait-frame">
                <Image
                  src="/assets/leadership.webp"
                  alt="Roger Bravo Advisors leadership"
                  width={413}
                  height={531}
                  sizes="(max-width: 680px) 90vw, 38vw"
                />
              </div>
              <span className="portrait-note">Experience when it matters most</span>
            </div>
            <div className="leadership-copy reveal">
              <p className="eyebrow">Senior counsel, direct involvement</p>
              <h2>Experience built across boardrooms, banks and government.</h2>
              <p className="lead">
                Roger Bravo’s leadership combines decades of experience in law enforcement,
                corporate affairs, investment banking, finance, vigilance and legal compliance.
              </p>
              <div className="experience">
                <div>
                  <strong>37+</strong>
                  <span>years across enforcement, corporate affairs and compliance</span>
                </div>
                <div>
                  <strong>18+</strong>
                  <span>years across banking, investment and structured finance</span>
                </div>
              </div>
              <p className="small">
                Our Managing Director has also served as arbitrator in international matters
                involving Indian and foreign companies.
              </p>
            </div>
          </div>
        </section>

        <section className="approach section">
          <div className="section-label reveal">
            <span>04</span>
            <p>How we work</p>
          </div>
          <div className="approach-intro reveal">
            <p className="eyebrow">सह वीर्यम् करवावहै</p>
            <h2>
              May we work together
              <br />
              with energy and vigour.
            </h2>
          </div>
          <div className="steps">
            {steps.map(([title, description], index) => (
              <article className="step reveal" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-top reveal">
            <p className="eyebrow">Let’s talk</p>
            <h2>
              Bring us the challenge
              <br />
              that keeps you up at night.
            </h2>
            <a className="contact-email" href="mailto:test@rogerbravo.com">
              test@rogerbravo.com
            </a>
          </div>
          <div className="contact-details reveal">
            <div>
              <span>Email</span>
              <a href="mailto:test@rogerbravo.com">test@rogerbravo.com</a>
            </div>
            <div>
              <span>India office</span>
              <address>
                Office 113, Inspire Building,
                <br />
                Bharat Nagar, BKC, Mumbai 400051
              </address>
              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Inspire+Building+Bharat+Nagar+BKC+Mumbai+400051"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps ↗
              </a>
            </div>
            <div>
              <span>Presence</span>
              <p>India · Dubai</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <Image
            src="/assets/roger-bravo-logo.png"
            alt="Roger Bravo Advisors"
            width={1800}
            height={437}
            sizes="190px"
          />
          <p>Strategic clarity. Bold action.</p>
        </div>
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Roger Bravo Advisors Pvt. Ltd.</p>
          <BackToTop />
        </div>
      </footer>
    </>
  );
}
