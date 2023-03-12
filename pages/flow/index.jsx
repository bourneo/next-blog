import Head4Page from '../../component/Head4Page';
import { getFlowList } from '../../lib/common';
import ContentItem from '../../component/ContentItem';

export async function getStaticProps() {
  const list = getFlowList();
  return { props: { list } };
}

export default function FlowIndex({ list }) {
  return (
    <div className="max-w-4xl mx-auto">
      <Head4Page title={'DoveRank - Flow'} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/planet-in-dark-space-3840x2160.webp')]`}
          >
            <div className="flex justify-center items-center h-32 w-screen ">
              <div className="text-xl text-white font-bold tracking-wider ">Flow</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}
