import { text_color_gray } from '../lib/constant';
import { Calendar, Clock, Edit } from 'react-feather';

export default function ContentAddition({ item }) {
  return (
    <div className={`${text_color_gray}`}>
      <span className="flex justify-center space-x-3 mt-3 text-medium">
        <Calendar size="16" className="mt-1" />
        <span>{item.date}</span>
        <span>|</span>
        <Edit size="16" className="mt-1" />
        <span>{item.author}</span>
        <span>|</span>
        <Clock size="16" className="mt-1" />
        <span>{item.eta}</span>
      </span>
    </div>
  );
}
