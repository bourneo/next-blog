export default function Banner({ children }) {
  return (
    <section>
      <div className="flex items-center justify-center pt-6">{children}</div>
    </section>
  );
}
