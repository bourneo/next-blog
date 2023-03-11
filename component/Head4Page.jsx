import Head from 'next/head';

export default function Head4Page({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="DoveRank" />
      <meta name="keywords" content="JavaScript, React.js Next.js, Node.js, Tailwind CSS" />
      <meta name="description" content="Dove Rank" />
    </Head>
  );
}
