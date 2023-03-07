import { head_foot_color, version, version_color } from '../lib/constant';

export default function Footer() {
  return (
    <footer className={`${head_foot_color}`}>
      <div className="border-t text-sm my-4 ">
        <div className="max-w-5xl mx-auto my-4">
          <div className="space-y-1 sm:space-y-0 text-gray-300 ">
            <div className="flex justify-center">
              <p>Copyright &copy; 2023 DoveRank</p>
            </div>
          </div>
          <div className="mt-2 space-y-1 sm:space-y-0 text-xs text-gray-400 ">
            <div className="flex justify-center">
              <div>We may use cookies to enhance your experience.</div>
            </div>
            <div className="flex justify-center">
              <div>By continuing to visit this site you agree to our use of cookies.</div>
            </div>
            <div className="flex justify-center text-xs">
              <div className={`${version_color}`}>{version}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
