import PageHead from '../../component/PageHead';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/api';
import ContentItem from '../../component/ContentItem';
import TagBadge from '../../component/TagBadge';

export async function getStaticPaths() {
  const list = getListByTag('All');
  const tagSet = list[0];
  tagSet.push('All');

  return {
    paths: tagSet.map((tag) => ({
      params: { slug: tag },
    })),
    // fallback: false,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const list = getListByTag(params.slug);
  return { props: { list } };
}

export default function TagItem({ list }) {
  return (
    <div>
      <PageHead title={`Tags`} />
      <Banner>
        <h1 className="text-2xl font-medium">Tags</h1>
      </Banner>
      {/*tag*/}
      <p className="flex items-center justify-center pt-12 ">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </p>
      {/*list*/}
      <div className="pt-12 ">
        {list[1]?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}
