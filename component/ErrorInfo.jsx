import { text_color_light } from '../lib/constant';

export default function ErrorInfo({ message }) {
  return (
    <div className={`${text_color_light}`}>
      <div className="flex justify-center item-center mt-6 pt-12 ">
        <div className="text-3xl font-bold">{message}</div>
      </div>
    </div>
  );
}
