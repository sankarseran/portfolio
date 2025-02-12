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

const siteUrl = "https://sankaralingam-seranthian.web.app/";
const defaultTitle = "Sankaralingam Seranthian Portfolio";
const defaultDescription =
  "Welcome to Sankaralingam Seranthian's portfolio site!";
const defaultImage = `${siteUrl}demo.png`;
const twitterUsername = "@sankar_seran";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    type: "website",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Sankaralingam Seranthian Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: twitterUsername,
    creator: twitterUsername,
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
  },
  verification: {
    google: "2T3UFxVzTBVSwI-yCgLOtkFLB3fKZvf2M20sPdQG7ek", // Google Site Verification
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
