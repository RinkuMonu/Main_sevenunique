import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Web & App Development Company in Jaipur | Sevenunique Tech",
  description: "Sevenunique Tech Solution is a Jaipur-based software company offering custom web apps, mobile apps, ERP, and scalable tech solutions for your business growth",
  // title: "SevenUnique Tech Solution pvt. ltd",
  // description: "Your trusted partner for digital solutions and services",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="RWZjH7FjpqqzM6JESht_QLhjtJvhW2vvSN3fvgS2gqI" />
          <link rel="canonical" href={`https://www.sevenunique.com/about`} />
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
