import Link from 'next/link';

export default function TypeBadge({ type }) {
  if (type === 'blog') {
    return (
      <Link href="/blog">
        <img className="rounded-lg " src={`/icon/blog.svg`} alt="blog" width={16} />
      </Link>
    );
  }
  if (type === 'flow') {
    return (
      <Link href="/flow">
        <img className="rounded-lg " src={`/icon/flow.svg`} alt="flow" width={16} />
      </Link>
    );
  }
  return null;
}
