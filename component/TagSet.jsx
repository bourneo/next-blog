import TagBadge from './TagBadge';
import RadiusLayoutLight from './RadiusLayoutLight';

export default function TagSet({ list }) {
  return (
    <RadiusLayoutLight>
      <div className="flex justify-center item-center space-x-4 py-6">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </RadiusLayoutLight>
  );
}
