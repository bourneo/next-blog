// import Link from 'next/link';
import PageHead from '../component/PageHead';
import Banner from '../component/Banner';
import { getAllList } from '../lib/api';
import ContentItem from '../component/ContentItem';
import 'highlight.js/styles/github.css';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';

export default function Home({ list }) {
  useEffect(() => {
    highlight.registerLanguage('jsx', javascript);
    highlight.highlightAll();
  });
  return (
    <div>
      <PageHead title="DoveRank: Rank Everything" />
      <Banner>
        <h1 className="text-2xl font-medium">Home</h1>
        {/*<h1>Rank Everything</h1>*/}
      </Banner>
      <div className="max-w-3xl mx-auto pt-12 ">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const list = getAllList();
  return {
    props: { list: list },
  };
}
