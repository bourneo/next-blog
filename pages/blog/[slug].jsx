import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import Banner from '../../component/Banner';
import { getBlogBySlug, getBlogSlugList } from '../../lib/api';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export async function getStaticPaths() {
  const blogs = getBlogSlugList();

  return {
    paths: blogs.map((blog) => ({
      params: { slug: blog },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return { props: { blog } };
}

export default function BlogItem({ blog }) {
  return (
    <div className="mt-6 max-w-3xl mx-auto ">
      <Head>
        <title>{`${blog.title} - Blog`}</title>
        <meta name="author" content="DoveRank" />
        <meta name="keywords" content={blog.tags} />
        <meta name="description" content={blog.description || ''} />
      </Head>

      <Banner>
        {/* <h1 className="text-5xl font-medium">{blog.title}</h1> */}
        <span className="mt-2 text-medium">update: {blog.date}</span>
      </Banner>

      <article className="px-4 py-8 prose max-w-none ">
        {/* md to html */}
        {/* {...blog.content} = await remark().use(html).process(markdown) */}
        <MDXRemote {...blog.content} components={{ img: (props) => <Image {...props} /> }} />
      </article>
    </div>
  );
}
