// components/SEO.tsx
"use client"
import seoConfig from '@/app/seoConfig';
import Head from 'next/head';
import { usePathname } from 'next/navigation';


const SEO = () => {
 const pathname = usePathname();
  
  const currentPath = pathname || '/';
  
  
  const seoData = seoConfig[currentPath] || seoConfig['/'];

  return ( 
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url || `https://www.sevenunique.com${currentPath}`} />
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      <meta property="og:image" content={seoData.ogImage || 'https://sevenunique.com/image/logo.png'} />

      <meta property="twitter:card" content={seoData.twitterCard || "summary_large_image"} />
      <meta property="twitter:url" content={seoData.url || `https://www.sevenunique.com${currentPath}`} />
      <meta property="twitter:title" content={seoData.ogTitle || seoData.title} />
      <meta property="twitter:description" content={seoData.ogDescription || seoData.description} />
      <meta property="twitter:image" content={seoData.ogImage || 'https://sevenunique.com/image/logo.png'} />

      <link rel="canonical" href={seoData.url || `https://www.sevenunique.com${currentPath}`} />
    </Head>
  );
};

export default SEO;