import PageHead from '../../component/PageHead';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/api';
import ContentItem from '../../component/ContentItem';
import TagBadge from '../../component/TagBadge';

export async function getStaticProps() {
  const list = getListByTag('All');
  return { props: { list } };
}

export default function TagIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto ">
      <PageHead title={`Tags`} />

      <Banner>
        <h1 className="text-2xl font-medium text-gray-100 ">Tags</h1>
      </Banner>

      {/*tag*/}
      <p className="flex justify-center pt-12 ">
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
