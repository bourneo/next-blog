import PageHead from '../../component/PageHead';
import Banner from '../../component/Banner';
import { getListByTag } from '../../lib/api';
import ContentItem from '../../component/ContentItem';
import TagBadge from '../../component/TagBadge';

export default function TagIndex({ list }) {
  // const router = useRouter();
  // const tag = router.query['tag'];
  // const list = getListByTag({ tag });
  return (
    <div>
      <PageHead title={`Flow`} />
      <Banner>
        <h1 className="text-2xl font-medium">Tags</h1>
      </Banner>
      {/*tag*/}
      <p className="flex items-center justify-center max-w-3xl mx-auto py-12 border-b ">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </p>
      {/*list*/}
      <div className="max-w-3xl mx-auto pt-12 ">
        {list[1]?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const list = getListByTag('All');
  return { props: { list } };
}

// export async function getServerSideProps({ query }) {
//   const tag = query.tag;
//   const list = getListByTag(tag);
//   return { props: { list } };
// }

// function Post({ post }) {
//   const router = useRouter();
//   if (router.isFallback) return <div>Loading...</div>;
//   // Render post...
// }
//

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { pid: '1' } }, { params: { pid: '2' } }],
//     fallback: false,
//   };
// }
//
