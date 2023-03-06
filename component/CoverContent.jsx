export default function CoverContent({ path, alt }) {
  return (
    <div className="">
      <img src={path} alt={alt} className="h-96 mx-auto " />
    </div>
  );
}
