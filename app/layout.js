import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "./components/site-shell";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
