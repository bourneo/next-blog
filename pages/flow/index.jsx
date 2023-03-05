import PageHead from '../../component/PageHead';
import Banner from '../../component/Banner';
import { getFlowList } from '../../lib/api';
import ContentItem from '../../component/ContentItem';

export async function getStaticProps() {
  const list = getFlowList();
  return { props: { list } };
}

export default function FlowIndex({ list }) {
  return (
    <div>
      <PageHead title={`Flow`} />
      <Banner>
        <h1 className="text-2xl font-medium">Flow</h1>
      </Banner>
      <div className="max-w-3xl mx-auto pt-12">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}
