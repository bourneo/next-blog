const background_box_color = 'bg-blue-sea';

export default function RadiusLayoutCover({ children }) {
  return (
    <div className={`${background_box_color} rounded-md hover:shadow hover:shadow-slate-700 `}>
      <div className="mx-3 my-0.5 ">
        <div>{children}</div>
      </div>
    </div>
  );
}
