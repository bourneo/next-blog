export default function TypeBadge({ type }) {
  const classes = 'px-2 py-0.5 rounded-xl text-xs text-gray-700';
  if (type === 'blog') {
    return <span className={`${classes} bg-red-200`}>Blog</span>;
  }
  if (type === 'flow') {
    return <span className={`${classes} bg-orange-200`}>Flow</span>;
  }
  return null;
}
