import Head from 'next/head';

const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
  </Head>
);

export default SEO;