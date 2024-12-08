export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIMS India - Waterjet Cutting Solutions",
    "url": "https://gimsindia.in",
    "logo": "https://gimsindia.in/Guhan industrial and manufacturing solution_logo.png",
    "description": "India's leading manufacturer of advanced waterjet cutting machines, specializing in abrasive suspension technology",
    "sameAs": [
      "https://www.youtube.com/@GIMSINDIA",
      "https://www.linkedin.com/company/gims-pvt-ltd/",
      "https://www.instagram.com/gims_india/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your Postal Code",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "Your-Phone-Number",
      "contactType": "sales",
      "email": "Sales@gimsindia.in",
      "areaServed": "IN"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GIMS Katana Series Waterjet Cutting Machine",
    "brand": {
      "@type": "Brand",
      "name": "GIMS India"
    },
    "description": "Advanced abrasive suspension waterjet cutting machine with superior precision and efficiency. Available in SJ150, SJ450, and SJ700 models.",
    "manufacturer": {
      "@type": "Organization",
      "name": "Guhan Industrial and Manufacturing Solutions Pvt Ltd"
    },
    "category": "Industrial Manufacturing Equipment",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "highPrice": "2000000",
      "lowPrice": "800000",
      "offerCount": "3"
    },
    "image": [
      "https://gimsindia.in/gims1.png",
      "https://gimsindia.in/sj451.png",
      "https://gimsindia.in/sj700.png"
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "India's First Abrasive Suspension Waterjet Technology",
    "description": "Learn about GIMS's revolutionary abrasive suspension waterjet technology and how it's transforming industrial cutting in India",
    "image": "https://gimsindia.in/gims1.png",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "GIMS India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}