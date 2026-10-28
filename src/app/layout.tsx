import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md Tameem Rahman | ML & Full-Stack Developer",
    template: "%s | Md Tameem Rahman",
  },
  description:
    "CSE graduate from RUET building privacy-preserving machine learning systems and full-stack web apps with Next.js.",
  keywords: [
    "Md Tameem Rahman",
    "Machine Learning",
    "Federated Learning",
    "Full-Stack Developer",
    "Next.js",
    "RUET",
    "Portfolio",
  ],
  authors: [{ name: "Md Tameem Rahman" }],
  openGraph: {
    title: "Md Tameem Rahman | ML & Full-Stack Developer",
    description:
      "CSE graduate from RUET building privacy-preserving machine learning systems and full-stack web apps.",
    url: "/",
    siteName: "Md Tameem Rahman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Tameem Rahman | ML & Full-Stack Developer",
    description:
      "CSE graduate from RUET building privacy-preserving machine learning systems and full-stack web apps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}