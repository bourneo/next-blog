import { version } from '../lib/constant';

export default function Footer() {
  return (
    <footer className="border-t bg-slate-600 text-gray-200 text-sm my-4 ">
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
          <div className="justify-center flex text-slate-600 text-xs">
            <div>{version}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
