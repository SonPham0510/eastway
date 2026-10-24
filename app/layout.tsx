import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "./site";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EASTWAY — Global logistics & freight solutions",
  description:
    "EASTWAY provides tailor-made logistics solutions for customers around the world, serving 50+ leading industries with sea, air, road and project cargo expertise.",
  icons: {
    icon: "/icons/icon-256.png",
    apple: "/icons/icon-256.png",
  },
  openGraph: {
    title: "EASTWAY — Global logistics & freight solutions",
    description:
      "Beyond borders, beyond expectations. Tailor-made freight forwarding and supply chain solutions across sea, air, rail and road.",
    type: "website",
    images: ["/images/hero-containers.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-brand focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
