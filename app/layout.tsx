import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} | Free ${SITE.year} Calculator`,
  description: SITE.description,
  keywords: [
    "child support calculator",
    "child support by state",
    "custody calculator",
    "child support estimator",
    "child support guidelines",
    "parenting time calculator",
    "child support 2025",
  ],
  openGraph: {
    title: `Free Child Support Calculator ${SITE.year}`,
    description: "Calculate child support payments for all 50 US states based on official guidelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
