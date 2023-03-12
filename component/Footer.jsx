import packageInfo from '../package.json';

const text_color_deep = 'text-gray-400';
const text_color_gray = 'text-gray-300';
const text_color_version = 'text-slate-900';

export default function Footer() {
  return (
    <footer className="flex flex-col text-2xs mt-2 ">
      <div className={`${text_color_gray} m-auto `}>
        Copyright &copy; 2023 · DoveRank · All Rights Reserved
      </div>

      <div className={`${text_color_deep} m-auto mt-1 `}>
        We may use cookies to enhance your experience.
      </div>

      <div className={`${text_color_deep} m-auto `}>
        By continuing to visit this site you agree to our use of cookies.
      </div>

      <div className={`${text_color_version} m-auto `}>{packageInfo.version}</div>
    </footer>
  );
}
