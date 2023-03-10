import Head4Page from '../../component/Head4Page';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/common';
import ContentItem from '../../component/ContentItem';
import TagSet from '../../component/TagSet';

export async function getStaticPaths() {
  const list = getListByTag('All');
  const tagSet = list[0];
  tagSet.push('All');

  return {
    paths: tagSet.map((tag) => ({
      params: { slug: tag },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const list = getListByTag(params.slug);
  return { props: { list } };
}

export default function TagItem({ list }) {
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
