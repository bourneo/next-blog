import Head4Page from '../../component/Head4Page';
import Banner from '../../component/Banner';
import { getFlowList } from '../../lib/common';
import ContentItem from '../../component/ContentItem';

export async function getStaticProps() {
  const list = getFlowList();
  return { props: { list } };
}

export default function FlowIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Head4Page title={'DoveRank - Flow'} />

      <Banner banner={'Flow'} />

      <div>
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}
