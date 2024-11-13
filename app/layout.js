// layout.js
import "./globals.css";
import defaultSEO from './components/seoConfig';  // Ensure path is correct
import Head from 'next/head';

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta property="og:title" content={defaultSEO.og.title} />
        <meta property="og:description" content={defaultSEO.og.description} />
        <meta property="og:url" content={defaultSEO.og.url} />
        <meta property="og:image" content={defaultSEO.og.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultSEO.title} />
        <meta name="twitter:description" content={defaultSEO.description} />
        <meta name="twitter:image" content={defaultSEO.image} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
