import PageHead from '../component/PageHead';
import { getAllList } from '../lib/api';
import ContentItem from '../component/ContentItem';
import CoverHome from '../component/CoverHome';
import 'highlight.js/styles/github.css';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';

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
      <CoverHome />
      <div className="max-w-3xl mx-auto">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}
