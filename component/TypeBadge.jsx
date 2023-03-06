import Link from 'next/link';

export default function TypeBadge({ type }) {
  if (type === 'blog') {
    return (
      <Link href="/blog">
        <img className="rounded-lg mx-1" src={`/icon/blog.svg`} alt="blog" width={20} />
      </Link>
    );
  }
  if (type === 'flow') {
    return (
      <Link href="/flow">
        <img className="rounded-lg mx-1" src={`/icon/flow.svg`} alt="flow" width={20} />
      </Link>
    );
  }
  return null;
}
