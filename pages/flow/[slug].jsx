import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import Banner from '../../component/Banner';
import { getFlowBySlug, getFlowSlugList } from '../../lib/api';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default function FlowItem({ flow }) {
  return (
    <div className="mt-6 max-w-3xl mx-auto">
      <Head>
        <title>{`${flow.title} - Flow`}</title>
        <meta name="author" content="DoveRank" />
        <meta name="description" content={flow.description || ''} />
      </Head>
      <Banner>
        {/* <h1 className="text-3xl font-medium ">{flow.title}</h1> */}
        <span className="mt-2 text-sm">update: {flow.date}</span>
      </Banner>
      <article className="px-4 py-8 prose max-w-none">
        <MDXRemote {...flow.content} components={{ img: (props) => <Image {...props} /> }} />
      </article>
    </div>
  );
}

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
