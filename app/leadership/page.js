import { leadershipIntro } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { LeadershipStage } from "../components/leadership-stage";
import { MagneticButton } from "../components/magnetic-button";

export const metadata = {
  title: "Leadership",
  description: leadershipIntro.title,
};

export default function LeadershipPage() {
  return (
    <main id="main">
      <CinematicHero
        video="/videos/leadership.mp4"
        eyebrow={leadershipIntro.eyebrow}
        title={["Leadership."]}
        lede="The partners who work on client matters."
        size="md"
        watermark="03"
      />
      <LeadershipStage />
      <section className="chapter" aria-labelledby="leadership-cta">
        <div className="chapter-inner asym">
          <h2 id="leadership-cta" className="display display-md">
            Contact the firm.
          </h2>
          <div className="asym-copy">
            <MagneticButton href="/contact">Contact us</MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
