import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CrownFit Men | Hair Patch & Hair System Solutions in Lahore",
  description: "Premium non-surgical hair patch solutions in Lahore. Discreet home fitting, natural results, and professional maintenance. Book your confidential consultation today.",
  keywords: ["hair patch", "hair system", "hair loss solution", "non-surgical hair", "home service", "Lahore", "Pakistan", "hair restoration", "hair replacement"],
  authors: [{ name: "CrownFit Men" }],
  openGraph: {
    title: "CrownFit Men | Hair Patch Solutions in Lahore",
    description: "Discreet, non-surgical hair patch solutions with home fitting and professional maintenance",
    type: "website",
    locale: "en_PK",
    url: "https://crownfitmen.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrownFit Men | Hair Patch Solutions",
    description: "Discreet, non-surgical hair patch solutions with home fitting",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
