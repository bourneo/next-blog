export default function MenuButton(item) {
  return (
    <>
      <img
        className="rounded-lg mr-2"
        src={`/icon/${item.title.toLowerCase()}.svg`}
        alt={item.title}
        width={20}
        height={20}
      />
      {item.title}
    </>
  );
}
