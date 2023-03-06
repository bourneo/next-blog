import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getBlogBySlug, getBlogSlugList } from '../../lib/api';
import CoverContent from '../../component/CoverContent';

// import 'prism-themes/themes/prism-vsc-dark-plus.css';

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
    <div>
      {/*todo table*/}
      {/*<div className="absolute right-0">*/}
      {/*  <TableOfContents></TableOfContents>*/}
      {/*</div>*/}

      <div className="max-w-3xl mx-auto prose dark:prose-invert ">
        <div className="">
          {blog.cover_path && <CoverContent path={blog.cover_path} alt={blog.title} />}
        </div>

        <Head>
          <title>{`${blog.title} - Blog`}</title>
          <meta name="author" content="DoveRank" />
          <meta name="keywords" content={blog.tags} />
          <meta name="description" content={blog.description || ''} />
        </Head>

        <div className="flex space-x-4 ">
          <span className="text-medium">Update: {blog.date}</span>
          <span className="text-medium">|</span>
          <span className="text-medium">Author: {blog.author}</span>
          <span className="text-medium">|</span>
          <span className="text-medium">ETA: {blog.eta}</span>
          <span className="text-medium">|</span>
        </div>

        <article className="py-8 ">
          <MDXRemote {...blog.content} components={{ img: (props) => <Image {...props} /> }} />
        </article>
      </div>
    </div>
  );
}
