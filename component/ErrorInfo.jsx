export default function ErrorInfo({ message }) {
  return (
    <div className="flex justify-center mt-6 pt-12 ">
      <div className="text-3xl font-bold text-gray-200">{message}</div>
    </div>
  );
}
