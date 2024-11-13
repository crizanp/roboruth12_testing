// SEO.js
import Head from 'next/head';
import defaultSEO from './seoConfig'; // Adjust path based on structure

const SEO = ({ title, description, url, image }) => (
  <Head>
    {/* Standard Meta Tags */}
    <title>{title || defaultSEO.title}</title>
    <meta name="description" content={description || defaultSEO.description} />
    <meta name="keywords" content={defaultSEO.keywords.join(", ")} />
    <meta name="robots" content="index, follow" />

    {/* Open Graph Meta Tags for social media sharing */}
    <meta property="og:title" content={title || defaultSEO.og.title} />
    <meta property="og:description" content={description || defaultSEO.og.description} />
    <meta property="og:type" content={defaultSEO.og.type} />
    <meta property="og:url" content={url || defaultSEO.og.url} />
    <meta property="og:image" content={image || defaultSEO.og.image} />
    <meta property="og:site_name" content={defaultSEO.og.site_name} />

    {/* Twitter Card Data */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || defaultSEO.title} />
    <meta name="twitter:description" content={description || defaultSEO.description} />
    <meta name="twitter:image" content={image || defaultSEO.image} />

    {/* JSON-LD Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RoboRuth 12",
        "url": url || defaultSEO.url,
        "logo": image || defaultSEO.image,
        "sameAs": defaultSEO.socialLinks,
        "description": "RoboRuth 12, the AI guardian leading the meme revolution across the blockchain. Join the decentralized movement with the Meme Warriors.",
        "founder": {
          "@type": "Person",
          "name": "RoboRuth 12",
          "description": "An AI-powered heroine navigating the blockchain universe, merging ancient wisdom with futuristic technology."
        }
      })}
    </script>
</Head>


);

export default SEO;
