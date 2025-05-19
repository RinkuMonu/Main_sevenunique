// components/SEO.tsx
"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import seoConfig from '@/app/seoConfig';


const SEO = () => {
  const pathname = usePathname();
  const currentPath = pathname || '/';
  const seoData = seoConfig[currentPath] || seoConfig['/'];
  const baseUrl = 'https://www.sevenunique.com';

  useEffect(() => {
    // Update title
    document.title = seoData.title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', property);
        } else {
          tag.name = name;
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    
    // OpenGraph meta tags
    updateMetaTag('', seoData.ogTitle || seoData.title, 'og:title');
    updateMetaTag('', seoData.ogDescription || seoData.description, 'og:description');
    updateMetaTag('', seoData.ogImage || 'https://sevenunique.com/image/logo.png', 'og:image');
    updateMetaTag('', 'website', 'og:type');
    updateMetaTag('', seoData.url || `${baseUrl}${currentPath}`, 'og:url');
    
    // Twitter meta tags
    updateMetaTag('', seoData.twitterCard || 'summary_large_image', 'twitter:card');
    updateMetaTag('', seoData.ogTitle || seoData.title, 'twitter:title');
    updateMetaTag('', seoData.ogDescription || seoData.description, 'twitter:description');
    updateMetaTag('', seoData.ogImage || 'https://sevenunique.com/image/logo.png', 'twitter:image');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.url || `${baseUrl}${currentPath}`;
  }, [pathname, seoData, currentPath]);

  return null;
};

export default SEO;



// components/SEO.tsx
// "use client"
// import seoConfig from '@/app/seoConfig';
// import Head from 'next/head';
// import { usePathname } from 'next/navigation';


// const SEO = () => {
//  const pathname = usePathname();
  
//   const currentPath = pathname || '/';
  
  
//   const seoData = seoConfig[currentPath] || seoConfig['/'];

//   return ( 
//     <Head>
//       <title>{seoData.title}</title>
//       <meta name="title" content={seoData.title} />
//       <meta name="description" content={seoData.description} />
//       <meta name="keywords" content={seoData.keywords} />
      
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={seoData.url || `https://www.sevenunique.com${currentPath}`} />
//       <meta property="og:title" content={seoData.ogTitle || seoData.title} />
//       <meta property="og:description" content={seoData.ogDescription || seoData.description} />
//       <meta property="og:image" content={seoData.ogImage || 'https://sevenunique.com/image/logo.png'} />

//       <meta property="twitter:card" content={seoData.twitterCard || "summary_large_image"} />
//       <meta property="twitter:url" content={seoData.url || `https://www.sevenunique.com${currentPath}`} />
//       <meta property="twitter:title" content={seoData.ogTitle || seoData.title} />
//       <meta property="twitter:description" content={seoData.ogDescription || seoData.description} />
//       <meta property="twitter:image" content={seoData.ogImage || 'https://sevenunique.com/image/logo.png'} />

//       <link rel="canonical" href={seoData.url || `https://www.sevenunique.com${currentPath}`} />
//     </Head>
//   );
// };

// export default SEO;