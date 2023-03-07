import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getFlowBySlug, getFlowSlugList } from '../../lib/api';
import CoverContent from '../../component/CoverContent';
import Head4Content from '../../component/Head4Content';
// Syntax highlight
import 'prism-themes/themes/prism-vsc-dark-plus.css';

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
        {flow.cover_path && <CoverContent path={flow.cover_path} alt={flow.title} />}
      </div>

      <Head4Content item={flow} />

      <div className="flex justify-center space-x-4 ">
        <span className="text-medium">Update: {flow.date}</span>
        <span className="text-medium">|</span>
        <span className="text-medium">Author: {flow.author}</span>
        <span className="text-medium">|</span>
        <span className="text-medium">ETA: {flow.eta}</span>
      </div>

      <article className="py-8 prose dark:prose-invert ">
        <MDXRemote {...flow.content} components={{ img: (props) => <Image {...props} /> }} />
      </article>
    </div>
  );
}
