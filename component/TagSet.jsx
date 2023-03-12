import TagBadge from './TagBadge';
import RadiusLayoutBanner from './RadiusLayoutBanner';

export default function TagSet({ list }) {
  return (
    <RadiusLayoutBanner>
      <div className="flex justify-center item-center space-x-4 py-6">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </RadiusLayoutBanner>
  );
}
