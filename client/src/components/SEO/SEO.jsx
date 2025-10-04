import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Wexably Agency - Secure Growth Partner for GTA Businesses",
  description = "Professional website security and digital marketing for Toronto businesses. We build secure, fast websites that generate leads for plumbers, roofers, dentists, and service companies across the GTA.",
  keywords = "website security Toronto, GTA web development, secure websites, digital marketing Toronto, website design GTA, cybersecurity services",
  canonicalUrl = "https://wexably.com",
  ogImage = "https://wexably.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = null,
  breadcrumbs = null
}) => {
  const siteUrl = "https://wexably.com";
  const fullUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  
  // Default structured data for individual pages
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    "url": fullUrl,
    "name": title,
    "description": description,
    "inLanguage": "en-CA",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://wexably.com/#website",
      "name": "Wexably Agency",
      "url": "https://wexably.com"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://wexably.com/#organization",
      "name": "Wexably Agency"
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://wexably.com/#organization"
    },
    "breadcrumb": breadcrumbs || {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://wexably.com/"
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Wexably Agency" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Wexably Agency - Secure Growth Partner for GTA Businesses" />
      <meta property="og:site_name" content="Wexably Agency" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Wexably Agency - Professional Website Security Services" />
      <meta name="twitter:creator" content="@wexably" />
      <meta name="twitter:site" content="@wexably" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Wexably Agency" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Mississauga" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
