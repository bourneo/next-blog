import Link from 'next/link';
import TypeBadge from './TypeBadge';
import TagBadge from './TagBadge';

const text_color_gray = 'text-gray-300';
const text_color_light = 'text-gray-200';

export default function ContentItem({ content, showBadge }) {
  return (
    // item on the list
    <div className="py-6 border-t space-y-2">
      {/*todo cover*/}

      {/*type date*/}
      <div className={`${text_color_gray}`}>
        <div className="flex space-x-2 text-sm">
          {showBadge && <TypeBadge type={content.type} />}
          <div>{content.date}</div>
        </div>
      </div>

      {/*title*/}
      <div className={`${text_color_light} text-xl font-medium `}>
        <div className="hover:underline underline-offset-4">
          <Link href={`/${content.type}/${content.slug}`}>{content.title}</Link>
        </div>
      </div>

      {/*description*/}
      <div className={`${text_color_gray} text-sm`}>
        {content.description && <div>{content.description}</div>}
      </div>

      {/*tag*/}
      <div className="flex">
        {content.tags.map((item) => (
          <TagBadge key={item} tag={item} />
        ))}
      </div>
    </div>
  );
}
