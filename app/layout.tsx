import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "OH GYM – Premium Fitness in Kochi | Old Harbour Fitness",
  description: "OH GYM (Old Harbour Fitness) — A premium fitness space in Kochi focused on strength, discipline, and transformation. Since 2022. 4.8 Rated.",
  keywords: ["gym", "fitness", "Kochi", "personal training", "strength training", "OH GYM", "Old Harbour Fitness"],
  openGraph: { title: "OH GYM – Premium Fitness in Kochi", description: "Built for Strength. Designed for You.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
