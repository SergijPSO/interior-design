import Head from "next/head";
import React from "react";

const Layout = (props) => {
  const pageTitle = props.pageTitle || "Аріна Козловська | Дизайн інтер'єру у Львові";
  const pageDescription = props.pageDescription || "Професійний дизайн інтер'єру у Львові від Аріни Козловської. Сучасний інтер'єр квартир, будинків, комерційних приміщень. Авторський проєкт, візуалізація та ремонт під ключ.";
  const canonicalUrl = props.canonicalUrl || "https://arina-kozlovska.com";
  const ogImage = props.ogImage || "https://arina-kozlovska.com/favicon.jpg";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "Аріна Козловська - Дизайн інтер'єру",
    "alternateName": "Козловська Аріна",
    "url": "https://arina-kozlovska.com",
    "image": ogImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Львів",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.8397,
      "longitude": 24.0297
    },
    "priceRange": "$$",
    "description": pageDescription,
    "sameAs": [
      "https://www.instagram.com"
    ]
  };

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name='description' content={pageDescription} />
        <meta
          name='keywords'
          content="дизайн, дизайн інтерєру, інтерєр, Львів, Козловська, Аріна, дизайн інтер'єру Львів, дизайнер інтер'єру Львів, дизайн квартир Львів, замовити дизайн інтер'єру, студія дизайну інтер'єру, дизайн будинку Львів, сучасний інтер'єр, авторський дизайн, Козловська Аріна"
        />
        <link rel='canonical' href={canonicalUrl} />
        
        {/* OpenGraph / Social Media Meta Tags */}
        <meta property='og:locale' content='uk_UA' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:site_name' content="Аріна Козловська Дизайн Інтер'єру" />
        <meta property='og:image' content={ogImage} />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={ogImage} />

        <link rel='icon' href='/favicon.jpg' />

        {/* JSON-LD Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
