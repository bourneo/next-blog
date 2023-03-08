import 'tailwindcss/tailwind.css';
import '../lib/index.css'; // tailwind base
import Header from '../component/Header';
import Footer from '../component/Footer';

const background_color_body = 'bg-slate-700';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Header />

      <div className={`${background_color_body}  min-h-84% py-0.5`}>
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
