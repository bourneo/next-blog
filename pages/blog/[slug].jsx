import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getBlogBySlug, getBlogSlugList } from '../../lib/api';
import CoverContent from '../../component/CoverContent';
import Head4Content from '../../component/Head4Content';
// Syntax highlight
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import ContentAddition from '../../component/ContentAddition';

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

      <div className="max-w-3xl mx-auto ">
        <div className="">
          {blog.cover_path && <CoverContent path={blog.cover_path} alt={blog.title} />}
        </div>

        <Head4Content item={blog} />

        <ContentAddition item={blog} />

        <article className="py-8 max-w-2xl mx-auto prose dark:prose-invert ">
          <MDXRemote {...blog.content} components={{ img: (props) => <Image {...props} /> }} />
        </article>
      </div>
    </div>
  );
}
