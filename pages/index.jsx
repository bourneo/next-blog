import Head4Page from '../component/Head4Page';
import { getAllList } from '../lib/common';
import ContentItem from '../component/ContentItem';
import CoverHome from '../component/CoverHome';

export async function getStaticProps() {
  const list = getAllList();
  return { props: { list } };
}

export default function Home({ list }) {
  return (
    <div>
      <Head4Page title={'DoveRank: Rank Everything'} />
      <CoverHome />
      <div className="max-w-3xl mx-auto">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}
