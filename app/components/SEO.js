import Head from 'next/head';
import defaultSEO from './seoConfig'; // Ensure this path is correct

const SEO = ({ title, description, url, image, keywords, og, socialLinks }) => (
  <Head>
    {/* Standard Meta Tags */}
    <title>{title || defaultSEO.title}</title>
    <meta name="description" content={description || defaultSEO.description} />
    <meta name="keywords" content={(keywords || defaultSEO.keywords).join(", ")} />
    <meta name="robots" content="index, follow" />

    {/* Open Graph Meta Tags for social media sharing */}
    <meta property="og:title" content={og?.title || title || defaultSEO.og.title} />
    <meta property="og:description" content={og?.description || description || defaultSEO.og.description} />
    <meta property="og:type" content={og?.type || defaultSEO.og.type} />
    <meta property="og:url" content={url || defaultSEO.og.url} />
    <meta property="og:image" content={og?.image || image || defaultSEO.og.image} />
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
        "sameAs": socialLinks || defaultSEO.socialLinks,
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
