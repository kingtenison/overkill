/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  themeColor: "#000099",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "=[ØVĒRKILL]= STUDIOS | We build the digital system your business needs",
    template: "%s | =[ØVĒRKILL]= STUDIOS",
  },
  description:
    "Websites, business systems, and automation built around how your business actually works. Tell us the problem — we handle the tech.",
  keywords: [
    "digital solutions",
    "business systems",
    "custom software",
    "web applications",
    "workflow automation",
    "OVERKILL Studios",
  ],
  authors: [{ name: "Hansen Addy Joy - OVERKILL Studios" }],
  openGraph: {
    title: "=[ØVĒRKILL]= STUDIOS | Digital Solutions Company",
    description:
      "Websites, business systems, and automation built around how your business actually works.",
    url: "https://overkillstudios.com",
    siteName: "OVERKILL Studios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={manrope.variable}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.cdnfonts.com/css/nexa" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Syne:wght@700;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:bg-ink focus:text-white focus:px-5 focus:py-3 focus:rounded-xl focus:text-sm focus:font-bold focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
