import Head4Page from '../../component/Head4Page';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/common';
import ContentItem from '../../component/ContentItem';
import TagBadge from '../../component/TagBadge';

export async function getStaticProps() {
  const list = getListByTag('All');
  return { props: { list } };
}

export default function TagIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto ">
      <Head4Page title={'Tags - DoveRank'} />

      <Banner banner={'Tags'} />
      {/*tag*/}
      <p className="flex justify-center item-center pt-12 ">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </p>

      {/*list*/}
      <div className="pt-12 ">
        {list[1]?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}
