export default function MenuButton(item) {
  return (
    <div className="flex">
      <img
        className="rounded-lg mr-2 "
        src={`/icon/${item.title.toLowerCase()}.svg`}
        alt={item.title}
        width={16}
        height={16}
      />
      <div>{item.title}</div>
    </div>
  );
}
