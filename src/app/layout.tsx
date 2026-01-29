import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CrownFit Men | Premium Men's Grooming Services in Pakistan",
  description: "Transform your look with CrownFit Men - Pakistan's premier men's grooming service. Professional haircuts, beard styling, skincare treatments, and more. Book your appointment today.",
  keywords: ["men's grooming", "barbershop", "haircut", "beard styling", "skincare", "Pakistan", "Lahore", "Karachi"],
  authors: [{ name: "CrownFit Men" }],
  openGraph: {
    title: "CrownFit Men | Premium Men's Grooming Services",
    description: "Transform your look with Pakistan's premier men's grooming service",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrownFit Men | Premium Men's Grooming Services",
    description: "Transform your look with Pakistan's premier men's grooming service",
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
