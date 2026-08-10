import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InnHandler | All-in-One Villa & Property Management System",
  description:
    "Manage villas, hotels, and rental properties from anywhere. Sync bookings across channels, manage housekeeping, track payments, and grow revenue effortlessly with InnHandler.",
  keywords: [
    "villa management software",
    "hotel SaaS",
    "property management system",
    "villa SaaS",
    "booking channel manager",
    "manage villas anywhere",
    "inn handler",
  ],
  authors: [{ name: "InnHandler Team" }],
  creator: "InnHandler",
  openGraph: {
    title: "InnHandler | All-in-One Villa & Property Management System",
    description:
      "Run your property business smarter all in one place. Manage villas, hotels, and bookings effortlessly from anywhere.",
    url: "https://innhandler.com",
    siteName: "InnHandler Villa SaaS",
    images: [
      {
        url: "https://innhandler.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InnHandler Villa SaaS Interface Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnHandler | All-in-One Villa & Property Management System",
    description: "Manage villas, hotels, and rental properties from anywhere effortlessly.",
    images: ["https://innhandler.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://innhandler.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "InnHandler",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free Trial",
    },
    description:
      "All-in-one Villa and Hotel management software for property owners and managers to run their property business from anywhere.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1280",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnHandler",
    url: "https://innhandler.com",
    logo: "https://innhandler.com/logo.png",
    sameAs: [
      "https://twitter.com/innhandler",
      "https://linkedin.com/company/innhandler",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
