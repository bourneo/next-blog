import { version } from '../package.json';

const text_color_deep = 'text-gray-400';
const text_color_version = 'text-gray-600';
const text_color_gray = 'text-gray-300';

export default function Footer() {
  return (
    <footer className="max-w-5xl border-t text-sm ">
      <div className={`${text_color_gray} `}>
        <div className="flex justify-center item-center mt-4">
          <div>Copyright &copy; 2023 DoveRank</div>
        </div>
      </div>

      <div className="text-xs mt-2 space-y-1 ">
        <div className={`${text_color_deep}`}>
          <div className="flex justify-center item-center">
            We may use cookies to enhance your experience.
          </div>
        </div>

        <div className={`${text_color_deep}`}>
          <div className="flex justify-center item-center">
            By continuing to visit this site you agree to our use of cookies.
          </div>
        </div>

        <div className="flex justify-center item-center">
          <div className={`${text_color_version}`}>{version}</div>
        </div>
      </div>
    </footer>
  );
}
