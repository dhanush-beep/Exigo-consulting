import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChatWidget from "@/components/ui/FloatingChatWidget";
import { siteConfig } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1B2730] selection:bg-teal-100 selection:text-teal-600 page-transition">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingChatWidget />
      </body>
    </html>
  );
}
