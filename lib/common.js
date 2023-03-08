import fs from 'fs'; // file system
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { serialize } from 'next-mdx-remote/serialize';
import prism from 'remark-prism';
import externalLinks from 'remark-external-links';
import gfm from 'remark-gfm';
import imageSize from 'rehype-img-size';

// list
export const getBlogSlugList = () => getContentSlugList('blog');
export const getFlowSlugList = () => getContentSlugList('flow');

export const getContentSlugList = (type) => fs.readdirSync(path.join(contentDirectory, type));

const contentDirectory = path.join(process.cwd(), 'public/content');

// content list
export const getBlogList = () => getContentList('blog');
export const getFlowList = () => getContentList('flow');

export const getContentList = (type) => {
  const slugs = getContentSlugList(type);
  return slugs
    .map((slug) => getContentSummaryBySlug(type, slug))
    .sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
};

export const getContentSummaryBySlug = (type, slug) => {
  // markdown content
  const fileContent = fs.readFileSync(path.join(contentDirectory, type, slug, 'index.md'), 'utf-8');
  const { data } = matter(fileContent);
  return {
    type,
    slug,
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    tags: data.tags || [],
    author: data.author || '',
    eta: data.eta || '',
    cover_path: data.cover_path || '',
    description: data.description || '',
  };
};

// full list
export const getAllList = () => {
  const blogList = getBlogList();
  const flowList = getFlowList();
  return [...blogList, ...flowList].sort((a, b) =>
    dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1
  );
};

// list by tag
export const getListByTag = (tag) => {
  const blogList = getBlogList();
  const flowList = getFlowList();
  const fullList = [...blogList, ...flowList];
  const tagSet = getTagSet(fullList);
  if (tag === undefined || tag === 'All') {
    return [tagSet, fullList];
  }
  const listByTag = fullList.filter((item) => item.tags.includes(tag));
  return [tagSet, listByTag];
};

// tag set
export const getTagSet = (list) => {
  let lis = [];
  list.forEach((item) => {
    lis.push(...item.tags);
  });
  let as = new Set(lis);
  return Array.from(as);
};

// content detail
export const getBlogBySlug = (slug) => getContentBySlug('blog', slug);
export const getFlowBySlug = (slug) => getContentBySlug('flow', slug);

export const getContentBySlug = async (type, slug) => {
  const fileContent = fs.readFileSync(path.join(contentDirectory, type, slug, 'index.md'), 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    tags: data.tags || [],
    author: data.author || '',
    eta: data.eta || '',
    cover_path: data.cover_path || '',
    description: data.description || '',
    content: await serialize(content, {
      mdxOptions: {
        // remark style to html
        remarkPlugins: [prism, externalLinks, gfm],
        // image optimisation to html
        rehypePlugins: [[imageSize, { dir: 'public' }]],
        format: 'mdx',
      },
    }),
  };
};