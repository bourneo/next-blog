const box_color = 'bg-slate-800';

export default function RadiusBox({ children }) {
  return (
    <div className={`${box_color} rounded-md `}>
      <div className="mx-3 my-0.5">
        <div>{children}</div>
      </div>
    </div>
  );
}
