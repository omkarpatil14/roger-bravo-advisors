import { Cormorant_Garamond, Mulish } from "next/font/google";
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

export const metadata = {
  title: {
    default: "Roger Bravo Advisors",
    template: "%s — Roger Bravo Advisors",
  },
  description:
    "Roger Bravo Advisors provides strategic business advisory, crisis management, fundraising, legal strategy and corporate liaison across India and Dubai.",
};

export const viewport = {
  themeColor: "#F6F1E7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
