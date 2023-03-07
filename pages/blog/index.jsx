import Head4Page from '../../component/Head4Page';
import Banner from '../../component/Banner';
import { getBlogList } from '../../lib/api';
import ContentItem from '../../component/ContentItem';

export async function getStaticProps() {
  const list = getBlogList();
  return { props: { list } };
}

export default function BlogIndex({ list }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Head4Page title={'Blog - DoveRank'} />

      <Banner banner={'Blog'} />

      <div className="pt-6">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}
