import PageHead from '../../component/PageHead';
import Banner from '../../component/Banner';
import { getBlogList } from '../../lib/api';
import ContentItem from '../../component/ContentItem';

export default function BlogIndex({ list }) {
  return (
    <div>
      <PageHead title={`DoveRank Blog`} />
      <Banner>
        <h1 className="text-2xl font-medium">Blog</h1>
      </Banner>
      <div className="max-w-3xl mx-auto pt-12">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const list = getBlogList();
  return {
    props: { list: list },
  };
}
