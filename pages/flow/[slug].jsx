import { MDXRemote } from 'next-mdx-remote';
import { getFlowBySlug, getFlowSlugList } from '../../lib/common';
import CoverContent from '../../component/CoverContent';
import Head4Content from '../../component/Head4Content';
// Syntax highlight
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import ContentAddition from '../../component/ContentAddition';
import RadiusLayoutItem from '../../component/RadiusLayoutItem';
import ContentProgressBar from '../../component/ContentProgressBar';

export async function getStaticPaths() {
  const list = getFlowSlugList();

  return {
    paths: list.map((flow) => ({
      params: { slug: flow },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const flow = await getFlowBySlug(params.slug);
  return { props: { flow } };
}

export default function FlowItem({ flow }) {
  return (
    <div className="max-w-5xl mx-auto ">
      <ContentProgressBar />

      <div className="">
        {flow.coverPath && <CoverContent path={flow.coverPath} alt={flow.title} />}
      </div>

      <Head4Content item={flow} />

      <ContentAddition item={flow} />

      <RadiusLayoutItem>
        <div className="py-8 max-w-4xl mx-auto prose dark:prose-invert ">
          <MDXRemote
            {...flow.content}
            components={{
              // eslint-disable-next-line @next/next/no-img-element
              img: (props) => <img {...props} alt="" className="mx-auto rounded-md max-w-3xl " />,
            }}
          />
        </div>
      </RadiusLayoutItem>
    </div>
  );
}
