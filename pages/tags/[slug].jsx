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
  return { props: { res: [list, params.slug] } };
}

export default function TagItem({ res }) {
  const list = res[0];
  const slug = res[1];
  return (
    <div className="max-w-3xl mx-auto ">
      <Head4Page title={'DoveRank - ' + slug} />

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
