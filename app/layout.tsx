import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best Waterjet Cutting Machine In India | GimsIndia",
  description: "Efficient Waterjet Cutting Machine for precise cutting of metal, stone, glass, and more. Eco-friendly, high-performance, and cost-effective.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: "EZa194ZvDVZ2tCgP9UMVlSVXR7HGNyoxI3Xs4kT1RM8",
  },
  alternates: {
    canonical: 'http://gimsindia.in/',
  },
  openGraph: {
    title: "Best Waterjet Cutting Machine In India | GimsIndia",
    description: "Efficient Waterjet Cutting Machine for precise cutting of metal, stone, glass, and more. Eco-friendly, high-performance, and cost-effective.",
    url: 'http://gimsindia.in/',
    siteName: 'GimsIndia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@GimsIndia',
    creator: '@GimsIndia',
    title: "Best Waterjet Cutting Machine In India | GimsIndia",
    description: "Efficient Waterjet Cutting Machine for precise cutting of metal, stone, glass, and more. Eco-friendly, high-performance, and cost-effective.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
