export default function Banner({ children }) {
  return (
    <section className="max-w-3xl mx-auto px-6 border-b">
      <div className="flex flex-col items-center justify-center pt-6 pb-12  ">{children}</div>
    </section>
  );
}
