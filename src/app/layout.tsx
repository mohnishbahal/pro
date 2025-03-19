import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProFlow | AI-Powered Product Innovation Platform",
  description: "Transform ideas into products 10x faster with AI mentors. ProFlow guides product teams from concept to launch with strategic alignment and measurable outcomes.",
  keywords: "product management, AI mentors, product development, innovation, idea management",
  authors: [{ name: "ProFlow Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4338CA",
  openGraph: {
    title: "ProFlow | AI-Powered Product Innovation Platform",
    description: "Transform ideas into products 10x faster with AI mentors. ProFlow guides product teams from concept to launch with strategic alignment and measurable outcomes.",
    url: "https://proflow.dev",
    siteName: "ProFlow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProFlow AI Product Innovation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProFlow | AI-Powered Product Innovation Platform",
    description: "Transform ideas into products 10x faster with AI mentors. ProFlow guides product teams from concept to launch with strategic alignment and measurable outcomes.",
    images: ["/twitter-image.png"],
    creator: "@proflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  );
}
