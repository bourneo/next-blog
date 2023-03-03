import Link from 'next/link';

export default function TagBadge({ tag }) {
  const classes = 'px-2 py-1 rounded-lg text-xs text-gray-700 mr-4 ';
  return (
    <span className={`${classes} bg-blue-200`}>
      <Link href={{ pathname: '/tags', query: { tag: `${tag}` } }}>{tag}</Link>
      {/*{tag}*/}
    </span>
  );
}
