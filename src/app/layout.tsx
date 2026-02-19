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
  title: {
    default: "VaraKit | AI-Powered Marketing Platform",
    template: "%s | VaraKit",
  },
  description: "VaraKit is an all-in-one AI marketing platform to build websites fast and grow with SEO, social media, CRM, ads, and reputation tools—all in one place.",
  keywords: ["AI website builder", "marketing platform", "SEO automation", "social media management", "CRM", "brand management"],
  authors: [{ name: "VaraKit LLC" }],
  creator: "VaraKit LLC",
  icons: {
    icon: "/images/varakit-favicon.png",
    shortcut: "/images/varakit-favicon.png",
    apple: "/images/varakit-favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
