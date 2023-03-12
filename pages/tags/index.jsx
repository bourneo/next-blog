import Head4Page from '../../component/Head4Page';
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
      <Head4Page title={'DoveRank - Tags'} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/solar-system-4096x2304.webp')]`}
          >
            <div className="flex justify-center items-center h-32 w-screen ">
              <div className="text-xl text-white font-bold tracking-wider ">Tags</div>
            </div>
          </div>
        </div>
      </div>

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
