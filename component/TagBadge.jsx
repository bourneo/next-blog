import Link from 'next/link';

const text_color_dark = 'text-gray-300';
const background_color_blue = 'bg-blue-slate';

export default function TagBadge({ tag }) {
  return (
    <div className={`${background_color_blue} px-2 py-1 rounded-lg `}>
      <div className={`hover:opacity-70 `}>
        <div className={`${text_color_dark} text-xs `}>
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </div>
      </div>
    </div>
  );
}
