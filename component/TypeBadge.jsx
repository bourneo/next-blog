import Link from 'next/link';

export default function TypeBadge({ type }) {
  // const classes = 'px-2 py-0.5 rounded-xl text-xs text-gray-700';

  if (type === 'blog') {
    return (
      <Link href="/blog">
        <img className="rounded-lg mx-1" src={`/icon/blog.svg`} alt="blog" width={20} />
      </Link>
      // <span className={`${classes} bg-red-200`}>
      //   <Link href="/blog">Blog</Link>
      // </span>
    );
  }
  if (type === 'flow') {
    return (
      <Link href="/flow">
        <img className="rounded-lg mx-1" src={`/icon/flow.svg`} alt="flow" width={20} />
      </Link>
      // <span className={`${classes} bg-red-200`}>
      //   <Link href="/flow">Flow</Link>
      // </span>
    );
  }
  return null;
}
