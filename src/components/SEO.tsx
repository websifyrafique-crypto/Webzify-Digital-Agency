import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
}

export function SEO({ title, description, canonical, type = 'website', image = 'https://webzify-digital-agency.vercel.app/og-image.jpg' }: SEOProps) {
  // Determine canonical URL
  const siteUrl = 'https://webzify-digital-agency.vercel.app';
  const isBrowser = typeof window !== 'undefined';
  const path = isBrowser ? window.location.pathname : '';
  const canonicalUrl = canonical || `${siteUrl}${path}`;

  // If title already contains "Webzify", don't append it again
  const siteName = 'Webzify';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
