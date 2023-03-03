import Head from 'next/head';

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/img/favicon.ico" />
      <meta name="author" content="DoveRank" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Node.js, React" />
      <meta name="description" content="Rank Everything" />
    </Head>
  );
}
