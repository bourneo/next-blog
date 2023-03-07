import Link from 'next/link';
import { text_color_dark } from '../lib/constant';

export default function TagBadge({ tag }) {
  return (
    <span className="hover:underline underline-offset-2">
      <span className="px-2 py-1 rounded-lg mr-4 bg-blue-200 ">
        <span className={`${text_color_dark} text-sm font-medium`}>
          <Link href="/tags/[tag]" as={`/tags/${tag}`}>
            {tag}
          </Link>
        </span>
      </span>
    </span>
  );
}
