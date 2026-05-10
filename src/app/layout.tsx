import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BackgroundGrid } from "@/components/effects/BackgroundGrid";
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
  title: "SIT 2026 | CEAP",
  description: "Do primeiro código ao próximo capítulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full">
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
