import Link from 'next/link';

export default function TagBadge({ tag }) {
  const classes = 'px-2 py-1 rounded-lg text-xs text-gray-700 mr-4 ';
  return (
    <span className={`${classes} bg-blue-200`}>
      <div className="hover:underline underline-offset-2">
        <Link href="/tags/[tag]" as={`/tags/${tag}`}>
          {tag}
        </Link>
      </div>
    </span>
  );
}
