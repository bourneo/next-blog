import Head4Page from '../../component/Head4Page';
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
    fallback: false,
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
    <div className="max-w-4xl mx-auto ">
      <Head4Page title={'DoveRank - ' + slug} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/solar-system-4096x2304.webp')]`}
          >
            <div className="flex justify-center items-center h-32 w-screen ">
              <div className="text-xl text-white font-bold tracking-wider ">{slug}</div>
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
