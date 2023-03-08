import Head4Page from '../../component/Head4Page';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/common';
import ContentItem from '../../component/ContentItem';
import TagSet from '../../component/TagSet';

export async function getStaticProps() {
  const list = getListByTag('All');
  return { props: { list } };
}

export default function TagIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto ">
      <Head4Page title={'Tags - DoveRank'} />

      <Banner banner="Tags" />

      <TagSet list={list} />

      {/*list*/}
      <div>
        {list[1]?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </div>
  );
}
