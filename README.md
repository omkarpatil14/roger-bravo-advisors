# Roger Bravo Advisors

Next.js site for Roger Bravo Advisors. The theme is clean white with the brand green from the logo (`#1C8A45`), deep forest-green sections for contrast, and the logo's saffron used only for “Bravo” in the name story. Copy comes from the previous site plus the client documents in `Content/` (company profile, services scope, leadership bios, name, logo and tagline meaning).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production hosting is Vercel (`roger-bravo-advisors.vercel.app`), from the `main` branch once this version is pushed.

## Fonts

Loaded with `next/font` in `app/layout.js`:

- **Plus Jakarta Sans** — headlines (`--font-jakarta`)
- **Inter** — body, navigation, and labels (`--font-inter`)

Devanagari (the tagline) uses the system font stack in `--deva`. No other font files are required.

## Theme tokens

Defined at the top of `app/globals.css`: `--paper` (white), `--paper-2` (pale green-grey), `--ink`, `--muted`, `--green`, `--accent`, `--forest` (dark sections, page wipe, footer) and `--orange`. `.tone-dark` re-scopes ink, muted, line and accent for forest sections.

## Photography and video

Real assets in the repo: the logo (`public/assets/roger-bravo-logo.png`) and three portraits (`rajesh-bakshi.webp`, `mayank-nandan.webp`, `anupam-dighe.webp`).

Heroes do not use stock footage. Optional muted, loopable MP4s (H.264, under 3MB, no audio) are picked up if present; they are skipped under `prefers-reduced-motion` or data-saver:

| File | Page | Frame | Length |
| --- | --- | --- | --- |
| `public/videos/home.mp4` | Home | 1920×1080 | 8–12s |
| `public/videos/about.mp4` | About | 1920×1080 | 8–12s |
| `public/videos/services.mp4` | Services | 1920×1080 | 8–12s |
| `public/videos/leadership.mp4` | Leadership | 1920×1080 | 8–12s |
| `public/videos/contact.mp4` | Contact | 1920×1080 | 8–12s |

## Copy waiting on the client

These lines are not in the source documents and need client approval:

- Headlines: “Sectors as diverse as the mandates.”, “Two words. One promise.”, “Receive. Be bold. Deliver.”, “A thumbs-up for the message received. A tick for the job done.”, “Open a practice to see the full scope.”, “Speak with the people who will handle your mandate.”
- Leadership lede: “Decades in law enforcement, banking and the courts—brought directly to each engagement.”
- Button labels: “Discuss your mandate”, “Send an enquiry”, “Explore our services”, “Get in touch”, “Send by email”.
- Home figures: years since 2010 (calendar year minus 2010), industries served (count of `industries` in `app/content.js`), practice areas (count of `services`), and 37+ years of the MD's experience (from his bio). No client counts or revenue claims.
- Contact: “Dubai street address — pending client confirmation.” The Mumbai office and `info@rogerbravo.com` are confirmed.
- The contact form opens the visitor's email app addressed to `info@rogerbravo.com`. Nothing is stored or sent by the server.

## Motion

Lenis smooth scroll (lerp 0.09) is driven by the GSAP ticker and synced with ScrollTrigger. Route changes cover the page with a forest panel, navigate, scroll to top, then reveal. Service links such as `/services#crisis-debt` open and scroll to that practice. “How we work”, industries and leadership pin on desktop with a fine pointer; on touch and small screens they become plain stacked layouts. `prefers-reduced-motion` turns off Lenis, the custom cursor, pinning and the page wipe.
