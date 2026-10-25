import { disclosures, fund } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { DocumentTabs } from "../components/document-tabs";
import { RevealOnScroll } from "../components/reveal-on-scroll";

export const metadata = {
  title: "AIF",
  description:
    "Roger Bravo Alternative Investment Fund is a SEBI-registered Category II AIF, registration no. IN/AIF2/21-22/0878.",
};

export default function AifPage() {
  return (
    <main id="main">
      <CinematicHero
        title={["AIF."]}
        ledeWide
        lede={
          <div className="fund-intro">
            <p>{fund.intro}</p>
            <div className="fund-schemes">
              <p>{fund.schemesLead}</p>
              <ol>
                {fund.schemes.map((scheme) => (
                  <li key={scheme.name}>{scheme.name}</li>
                ))}
              </ol>
            </div>
          </div>
        }
        size="md"
        watermark="RB"
        meta={["Investor Charter", "Grievance redressal", "Complaints data"]}
      />

      <section className="chapter chapter-tight" aria-labelledby="documents-title">
        <div className="chapter-inner">
          <RevealOnScroll>
            <p className="eyebrow">Documents</p>
            <h2 id="documents-title" className="display display-md">
              The three investor documents.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <DocumentTabs groups={disclosures} />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
