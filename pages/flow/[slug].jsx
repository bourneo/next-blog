import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getFlowBySlug, getFlowSlugList } from '../../lib/common';
import CoverContent from '../../component/CoverContent';
import Head4Content from '../../component/Head4Content';
import ContentAddition from '../../component/ContentAddition';
// Syntax highlight
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import RadiusLayout from '../../component/RadiusLayout';

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
    <div className="max-w-3xl mx-auto ">
      <div className="">
        {flow.coverPath && <CoverContent path={flow.coverPath} alt={flow.title} />}
      </div>

      <Head4Content item={flow} />

      <ContentAddition item={flow} />
      <RadiusLayout>
        <div className="py-8 max-w-2xl mx-auto prose dark:prose-invert ">
          <MDXRemote {...flow.content} components={{ img: (props) => <Image {...props} /> }} />
        </div>
      </RadiusLayout>
    </div>
  );
}
