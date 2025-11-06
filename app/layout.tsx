import type { Metadata } from "next";
import { Manrope, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-95e977f5.vercel.app"),
  title: "K | God Level Luxury Experience",
  description:
    "Immerse in K — an ultra-luxurious, world-class digital experience with transcendent design, animations, and performance.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "K | God Level Luxury Experience",
    description:
      "Discover K — an ultra-luxurious presence with celestial visuals, high-end interactions, and impeccable design details.",
    url: "https://agentic-95e977f5.vercel.app",
    siteName: "K Luxury",
    images: [
      {
        url: "/og-preview.svg",
        width: 1200,
        height: 630,
        alt: "K Luxury Experience"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "K | God Level Luxury Experience",
    description:
      "An unrivaled, god-tier digital sanctuary of elegance, power, and luminous motion.",
    creator: "@k_luxury_studio"
  }
};

export const viewport = {
  themeColor: "#0b0d10"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cinzel.variable}`}>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
