import Link from 'next/link';
import TypeBadge from './TypeBadge';
import TagBadge from './TagBadge';
import RadiusLayoutItem from './RadiusLayoutItem';

const text_color_gray = 'text-gray-300';
const text_color_light = 'text-gray-200';

export default function ContentItem({ content, showBadge }) {
  return (
    // item on the list
    <RadiusLayoutItem>
      <div className="flex ">
        <div className="grow ">
          <div className="py-3 space-y-3">
            <div className="">{/*todo cover*/}</div>

            {/*type date*/}
            <div className={`${text_color_gray}`}>
              <div className="flex item-center space-x-2 text-2xs ">
                {showBadge && <TypeBadge type={content.type} />}
                <div>{content.date}</div>
              </div>
            </div>

            {/*title*/}
            <div className={`${text_color_light} text-md font-medium `}>
              <div className="hover:underline underline-offset-4">
                <Link href={`/${content.type}/${content.slug}`}>{content.title}</Link>
              </div>
            </div>

            {/*description*/}
            <div className={`${text_color_gray} text-xs `}>
              {content.description && <div>{content.description}</div>}
            </div>

            {/*tag*/}
            <div className="flex space-x-4 pb-2 ">
              {content.tags.map((item) => (
                <TagBadge key={item} tag={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="left-0 Shrink rounded-xl ">
          <img
            className="h-48 w-48 object-cover md:h-full md:w-48 py-3 "
            src={content.coverPath}
            alt={content.title}
          />
        </div>
      </div>
    </RadiusLayoutItem>
  );
}
