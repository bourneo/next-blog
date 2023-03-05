import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getFlowBySlug, getFlowSlugList } from '../../lib/api';

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
    <div className="mt-8 ">
      <Head>
        <title>{`${flow.title} - Flow`}</title>
        <meta name="author" content="DoveRank" />
        <meta name="keywords" content={flow.tags} />
        <meta name="description" content={flow.description || ''} />
      </Head>

      <div className="flex space-x-4">
        <span className="text-medium">Update: {flow.date}</span>
        <span className="text-medium">|</span>
        <span className="text-medium">Author: {flow.author}</span>
        <span className="text-medium">|</span>
        <span className="text-medium">ETA: {flow.eta}</span>
      </div>

      <article className="py-8 prose max-w-none">
        <MDXRemote {...flow.content} components={{ img: (props) => <Image {...props} /> }} />
      </article>
    </div>
  );
}
