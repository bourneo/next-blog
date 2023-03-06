import { version } from '../lib/constant';

const head_foot_color = 'bg-slate-600';
const version_color = 'text-slate-600';

export default function Footer() {
  return (
    <footer className={`${head_foot_color}`}>
      <div className="border-t text-gray-200 text-sm my-4 ">
        <div className="max-w-5xl mx-auto my-4">
          <div className="space-y-1 sm:space-y-0 ">
            <div className="justify-center flex">
              <p>Copyright &copy; 2023 DoveRank</p>
            </div>
          </div>
          <div className="mt-2 space-y-1 sm:space-y-0 text-xs ">
            <div className="justify-center flex">
              <div>We may use cookies to enhance your experience.</div>
            </div>
            <div className="justify-center flex">
              <div>By continuing to visit this site you agree to our use of cookies.</div>
            </div>
            <div className="justify-center flex text-xs">
              <div className={`${version_color}`}>{version}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
