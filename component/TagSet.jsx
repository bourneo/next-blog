import TagBadge from './TagBadge';
import RadiusLayout from './RadiusLayout';

const box_color = 'bg-slate-800';

export default function TagSet({ list }) {
  return (
    <RadiusLayout>
      <div className="flex justify-center item-center space-x-4 py-6">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </RadiusLayout>
  );
}
