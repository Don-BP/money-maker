import type { Metadata } from "next";
import { Inter, Outfit, Fredoka, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-PE5HREPN47";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const SITE_URL = "https://dokidokitools.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DokiDokiTools — Free Online Utility Tools",
    template: "%s | DokiDokiTools",
  },
  description:
    "DokiDokiTools offers free, fast, browser-based utility tools for gamers, writers, cooks, and developers. No account needed. Works instantly.",
  keywords: [
    "free online tools",
    "utility tools",
    "romaji to hiragana",
    "recipe scaler",
    "synonym finder",
    "ip address checker",
    "username generator",
    "DokiDokiTools",
  ],
  authors: [{ name: "DokiDokiTools" }],
  creator: "DokiDokiTools",
  publisher: "DokiDokiTools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DokiDokiTools",
    title: "DokiDokiTools —Free Online Utility Tools",
    description:
      "Free, fast, browser-based utility tools for gamers, writers, cooks, and developers. No account needed.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DokiDokiTools —Free Online Utility Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DokiDokiTools —Free Online Utility Tools",
    description:
      "Free, fast, browser-based utility tools for gamers, writers, cooks, and developers.",
    images: [`${SITE_URL}/og-image.png`],
  },
  // Replace with your actual Google Search Console verification code
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${outfit.variable} ${fredoka.variable} ${nunito.variable} font-sans min-h-full flex flex-col bg-slate-950 text-slate-50 antialiased`}
      >
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9095999965852539" crossOrigin="anonymous" strategy="afterInteractive" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
