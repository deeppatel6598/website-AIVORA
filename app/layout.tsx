import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";
import AuroraBackground from "@/components/animations/AuroraBackground";
import GlassNav from "@/components/glass/GlassNav";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Aivora Jobs — Launch Your Career with Strategy",
  description:
    "Resume revamp, interview prep, and end-to-end placement support — engineered for tech professionals targeting Fortune 500 roles.",
  keywords: [
    "tech jobs",
    "career services",
    "resume revamp",
    "interview prep",
    "job placement",
    "Fortune 500",
  ],
  openGraph: {
    title: "Aivora Jobs — Launch Your Career with Strategy",
    description:
      "Resume revamp, interview prep, and end-to-end placement support for tech professionals.",
    siteName: "Aivora Jobs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Fixed aurora — sits behind every page */}
        <AuroraBackground />

        <SmoothScroll>
          {/* Persistent nav */}
          <GlassNav />

          {/* Animated page content */}
          <main className="relative z-10 flex-1">
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Persistent footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
