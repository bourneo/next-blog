import Link from 'next/link';
import TypeBadge from './TypeBadge';
import TagBadge from './TagBadge';

export default function ContentItem({ content, showBadge }) {
  return (
    // item on the list
    <article className="py-4 border-b">
      {/*date*/}
      <p className="mb-2 flex items-center space-x-2">
        {showBadge && <TypeBadge type={content.type} />}
        <span className="text-sm text-gray-600">{content.date}</span>
      </p>

      {/*title*/}
      <h2 className="text-xl font-medium">
        <Link
          className="hover:underline underline-offset-4"
          href={`/${content.type}/${content.slug}`}
        >
          {content.title}
        </Link>
      </h2>

      {/*description*/}
      <p className="pb-2 text-sm text-gray-600">{content.description}</p>

      {/*tag*/}
      <p className="flex">
        {content.tags.map((item) => (
          <TagBadge key={item} tag={item} />
        ))}
      </p>
    </article>
  );
}
