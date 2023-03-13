import Head from 'next/head';

export default function Head4Content({ item }) {
  return (
    <Head>
      <title>{item.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="DoveRank" />
      <meta name="keywords" content={item.tags} />
      <meta name="description" content={item.description || ''} />
    </Head>
  );
}
