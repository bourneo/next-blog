const box_color = 'bg-slate-800';

export default function RadiusBox({ children }) {
  return (
    <div className={`${box_color}`}>
      <div className="rounded-full mx-2 my-1">
        <div>{children}</div>
      </div>
    </div>
  );
}
