import { Calendar, Clock, Edit, Tag } from 'react-feather';
import RadiusBoxLight from './RadiusLayoutAddition';
import Link from 'next/link';

const text_color_gray = 'text-gray-300';

export default function ContentAddition({ item }) {
  return (
    <RadiusBoxLight>
      <div className={`${text_color_gray} py-3`}>
        <span className="flex justify-center item-center space-x-2 text-2xs ">
          <Calendar size="18" />
          <span>{item.date}</span>
          <span>·</span>
          <Edit size="18" />
          <span>{item.author}</span>
          <span>·</span>
          <Clock size="18" />
          <span>{item.eta}</span>
          <span>·</span>
          <Tag size="18" />
          <div className="space-x-2 ">
            {item.tags.map((tag) => (
              <Link className="hover:opacity-70" key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        </span>
      </div>
    </RadiusBoxLight>
  );
}
