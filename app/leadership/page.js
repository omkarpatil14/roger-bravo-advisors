import { leadershipIntro } from "../content";
import { CinematicHero } from "../components/cinematic-hero";
import { LeadershipStage } from "../components/leadership-stage";

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
    </main>
  );
}
