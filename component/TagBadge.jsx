import Link from 'next/link';

export default function TagBadge({ tag }) {
  const classes = 'px-2 py-1 rounded-lg text-sm text-gray-800 mr-4 ';
  return (
    <span className="hover:underline underline-offset-2">
      <span className={`${classes} bg-blue-200`}>
        <Link href="/tags/[tag]" as={`/tags/${tag}`}>
          {tag}
        </Link>
      </span>
    </span>
  );
}
