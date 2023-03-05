// import Link from 'next/link';
import PageHead from '../component/PageHead';
import { getAllList } from '../lib/api';
import ContentItem from '../component/ContentItem';
import 'highlight.js/styles/github.css';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';
import Cover from '../component/Cover';

export async function getStaticProps() {
  const list = getAllList();
  return { props: { list } };
}

export default function Home({ list }) {
  useEffect(() => {
    highlight.registerLanguage('jsx', javascript);
    highlight.highlightAll();
  });
  return (
    <div>
      <PageHead title="DoveRank: Rank Everything" />
      <Cover></Cover>
      <div>
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}
