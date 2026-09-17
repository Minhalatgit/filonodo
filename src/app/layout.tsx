import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Handmade Crochet & Custom Embroidery`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "filo.nodo",
    "handmade crochet",
    "custom embroidery",
    "embroidery frames",
    "baby crochet",
    "personalized clothing embroidery",
  ],
  openGraph: {
    title: `${siteConfig.name} — Handmade Crochet & Custom Embroidery`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/products/custom-six-sweater.jpg",
        width: 1200,
        height: 1500,
        alt: "Custom embroidered baby sweater by filo.nodo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: ["/products/custom-six-sweater.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
