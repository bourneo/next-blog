import RadiusLayoutCover from './RadiusLayoutCover';

export default function CoverContent({ path, alt }) {
  return (
    <RadiusLayoutCover>
      <div className="">
        <img
          src={path}
          alt={alt}
          className="mx-auto rounded-md max-w-4xl object-cover h-48 md:h-60 "
        />
      </div>
    </RadiusLayoutCover>
  );
}
