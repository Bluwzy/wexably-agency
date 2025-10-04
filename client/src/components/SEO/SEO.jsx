import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Wexably Agency - Secure Growth Partner for GTA Businesses",
  description = "We build fast, secure websites and marketing engines for Toronto-area plumbers, roofers, and dentists—so you can generate leads confidently without worrying about hackers, downtime, or missed opportunities.",
  keywords = "web design Toronto, GTA website development, secure websites, plumber websites, roofer websites, dentist websites, Toronto digital marketing",
  canonicalUrl = "https://wexably.com",
  ogImage = "https://wexably.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteUrl = "https://wexably.com";
  const fullUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  
  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    "name": "Wexably Agency",
    "alternateName": "Wexably",
    "description": description,
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/company/wexably-agency",
      "https://twitter.com/wexably"
    ],
    "logo": {
    "@type": "ImageObject",
    "url": `${siteUrl}/logo.png`,
    "width": 300,
    "height": 80
    },
    "image": {
      "@type": "ImageObject",
      "url": ogImage,
      "width": 1200,
      "height": 630
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6532,
        "longitude": -79.3832
      },
      "geoRadius": 50000
    },
    "serviceType": [
      "Web Design",
      "Web Development", 
      "Digital Marketing",
      "SEO Services",
      "Website Security"
    ],
    "priceRange": "$$",
    "telephone": "+1-289-335-7376",
    "email": "hello@wexably.com"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Wexably Agency" />
      
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
      <meta property="og:site_name" content="Wexably Agency" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@wexably" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
