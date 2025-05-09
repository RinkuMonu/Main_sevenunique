"use client"; // ✅ ये सबसे पहली लाइन होनी चाहिए — ऊपर कोई comment या space नहीं!

import Head from "next/head";
import { usePathname } from "next/navigation";

type SEOProps = {
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
};

export default function SEO({ seo }: SEOProps) {
  const pathname = usePathname();
  const canonicalUrl = seo?.url || `https://sevenunique.com${pathname}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      {seo?.title && <title>{seo.title}</title>}
      {seo?.description && <meta name="description" content={seo.description} />}
      {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo?.ogTitle || seo?.title || ""} />
      <meta property="og:description" content={seo?.ogDescription || seo?.description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content={seo?.ogImage || "https://sevenunique.com/assets/images/og-thumbnail.jpg"}
      />
    </Head>
  );
}
