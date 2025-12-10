import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import ForestBackground from "@/components/ForestBackground";
import Fireflies from "@/components/Fireflies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamtechtonix.online"),
  title: {
    default: "The Fenceless Patrol | Team Techtonix",
    template: "%s | The Fenceless Patrol",
  },
  description: "An autonomous, solar-powered drone system designed to reduce human-wildlife conflict in a humane, intelligent way. Innovating for nature.",
  keywords: ["human-wildlife conflict", "drone patrol", "conservation technology", "Team Techtonix", "wildlife protection", "solar powered drone", "AI conservation"],
  authors: [{ name: "Team Techtonix" }],
  creator: "Team Techtonix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teamtechtonix.online",
    title: "The Fenceless Patrol | Team Techtonix",
    description: "An autonomous, solar-powered drone system designed to reduce human-wildlife conflict in a humane, intelligent way.",
    siteName: "The Fenceless Patrol",
    images: [
      {
        url: "/assets/drone.png",
        width: 1200,
        height: 630,
        alt: "The Fenceless Patrol Drone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fenceless Patrol | Team Techtonix",
    description: "An autonomous, solar-powered drone system designed to reduce human-wildlife conflict in a humane, intelligent way.",
    images: ["/assets/drone.png"],
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
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        <ForestBackground />
        <Fireflies />
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">
          {children}
        </main>
        <MobileNavbar />
        <Footer />
      </body>
    </html>
  );
}
