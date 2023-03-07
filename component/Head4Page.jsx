import Head from 'next/head';

export default function Head4Page({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/img/favicon.jpg" />
      <meta name="author" content="DoveRank" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Node.js, React" />
      <meta name="description" content="Rank Everything" />
    </Head>
  );
}
