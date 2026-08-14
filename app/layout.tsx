import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" as="image" href="/holding.webp" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/logo.png" type="image/png" />
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
