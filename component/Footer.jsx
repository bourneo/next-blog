import {
  background_color_head_food,
  text_color_deep,
  text_color_gray,
  text_color_version,
  version,
} from '../lib/constant';

export default function Footer() {
  return (
    <footer className={`${background_color_head_food}`}>
      <div className="max-w-5xl border-t text-sm ">
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
      </div>
    </footer>
  );
}
