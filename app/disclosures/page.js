import { disclosures, fund } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { RevealOnScroll } from "../components/reveal-on-scroll";

export const metadata = {
  title: "Disclosures",
  description: "Investor Charter, grievance redressal and investor complaints documents for Roger Bravo Alternative Investment Fund.",
};

export default function DisclosuresPage() {
  return (
    <main id="main">
      <CinematicHero
        eyebrow="Investor documents"
        title={["Disclosures."]}
        lede={`${fund.name}. SEBI AIF registration no. ${fund.registration}.`}
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
          <div className="doc-list">
            {disclosures.map((document) => (
              <article className="doc-card" key={document.file}>
                <h2 className="display display-sm">{document.title}</h2>
                <p>
                  <a className="text-link" href={document.file} target="_blank" rel="noreferrer">
                    Open document
                  </a>
                </p>
                <iframe className="doc-frame" title={document.title} src={document.file} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
