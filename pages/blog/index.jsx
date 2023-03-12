import Head4Page from '../../component/Head4Page';
import { getBlogList } from '../../lib/common';
import ContentItem from '../../component/ContentItem';

export async function getStaticProps() {
  const list = getBlogList();
  return { props: { list } };
}

export default function BlogIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Head4Page title={'DoveRank - Blog'} />

      <div>
        <div className="flex justify-center items-center ">
          <div
            className={`bg-cover bg-center bg-no-repeat bg-[url('/img/PIA23002-hires-5120x2880.jpg')]`}
          >
            <div className="flex justify-center items-center h-32 w-screen ">
              <div className="text-xl text-white font-bold tracking-wider ">Blog</div>
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
