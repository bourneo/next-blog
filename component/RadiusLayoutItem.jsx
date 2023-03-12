const background_box_color = 'bg-blue-regal';

export default function RadiusLayoutItem({ children }) {
  return (
    <div className={`${background_box_color} rounded-md hover:shadow hover:shadow-gray-600 `}>
      <div className="mx-3 my-0.5 ">
        <div>{children}</div>
      </div>
    </div>
  );
}
