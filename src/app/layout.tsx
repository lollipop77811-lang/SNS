import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S & S Law Firm — Continuing a Legacy Since 1990",
  description:
    "S & S Law Firm carries forward the 35-year practice of Sinha Advocates, founded in 1990 by Diwakar Sinha, Advocate. A full-service Indian law firm serving corporate, institutional, and individual clients.",
  keywords: [
    "S & S Law Firm",
    "Sinha Advocates",
    "Diwakar Sinha",
    "Indian law firm",
    "advocate India",
    "corporate law India",
    "arbitration",
    "civil litigation",
  ],
  authors: [{ name: "S & S Law Firm" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "S & S Law Firm — Continuing a Legacy Since 1990",
    description:
      "An established legacy, modernized. A full-service Indian law firm continuing the 35-year practice of Sinha Advocates.",
    siteName: "S & S Law Firm",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plexMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
