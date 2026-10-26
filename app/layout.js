import { Cormorant_Garamond, Mulish, Noto_Serif_Devanagari } from "next/font/google";
import { SiteShell } from "./components/site-shell";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Roger Bravo Advisors",
    template: "%s — Roger Bravo Advisors",
  },
  description:
    "Roger Bravo Advisors provides strategic business advisory, crisis management, fundraising, legal strategy and corporate liaison across India.",
};

export const viewport = {
  themeColor: "#f8fbfa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${devanagari.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
