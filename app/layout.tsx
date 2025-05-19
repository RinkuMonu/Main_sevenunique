import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "@/components/LayoutWrapper";
import SEO from "@/components/SEO/SEO";
import seoConfig from "./seoConfig";
import type  { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // SEO Configuration from seoConfig
  title: seoConfig['/'].title,
  description: seoConfig['/'].description,
  keywords: seoConfig['/'].keywords,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",  
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  
  // OpenGraph Configuration
  openGraph: {
    title: seoConfig['/'].ogTitle || seoConfig['/'].title,
    description: seoConfig['/'].ogDescription || seoConfig['/'].description,
    images: [{ 
      url: seoConfig['/'].ogImage || 'https://sevenunique.com/image/logo.png',
      width: 800,
      height: 600,
      alt: 'Sevenunique Tech Logo',
    }],
    url: seoConfig['/'].url || 'https://www.sevenunique.com/',
    type: 'website',
    siteName: 'Sevenunique Tech Solution',
    locale: 'en_US',
  },
  
  // Twitter Configuration
  twitter: {
    card: seoConfig['/'].twitterCard || 'https://sevenunique.com/image/logo.png',
    title: seoConfig['/'].ogTitle || seoConfig['/'].title,
    description: seoConfig['/'].ogDescription || seoConfig['/'].description,
    images: [seoConfig['/'].ogImage || 'https://sevenunique.com/image/logo.png'],
    creator: '@sevenunique_tech',
    site: '@sevenunique_tech',
  },
  
  // Additional Metadata
  alternates: {
    canonical: seoConfig['/'].url || 'https://www.sevenunique.com/',
  },
  metadataBase: new URL('https://www.sevenunique.com'),
  themeColor: '#ffffff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

// export const metadata = {
//   title: "Best Web & App Development Company in Jaipur | Sevenunique Tech",
//   description: "Sevenunique Tech Solution is a Jaipur-based software company offering custom web apps, mobile apps, ERP, and scalable tech solutions for your business growth",
//   // title: "SevenUnique Tech Solution pvt. ltd",
//   // description: "Your trusted partner for digital solutions and services",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",  
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="RWZjH7FjpqqzM6JESht_QLhjtJvhW2vvSN3fvgS2gqI" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EKTPSQ903C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EKTPSQ903C');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SEO/>
          {/* <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div> */}
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
