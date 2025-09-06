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
  title: "Shaurya Gupta - Software Engineer & Full Stack Developer",
  description:
    "Software engineer experienced in building scalable and responsive web and mobile applications using React, React Native, and Expo. Currently working at 4 Way Technologies.",
  keywords:
    "Software Engineer, Full Stack Developer, React, React Native, Next.js, TypeScript, JavaScript",
  authors: [{ name: "Shaurya Gupta" }],
  creator: "Shaurya Gupta",
  openGraph: {
    title: "Shaurya Gupta - Software Engineer",
    description:
      "Software engineer experienced in building scalable and responsive web and mobile applications",
    url: "https://shauryagarg.dev",
    siteName: "Shaurya Gupta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Gupta - Software Engineer",
    description:
      "Software engineer experienced in building scalable and responsive web and mobile applications",
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
