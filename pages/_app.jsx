import 'tailwindcss/tailwind.css';
import '../lib/index.css'; // tailwind base
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Header />

      {/*<MDXProvider components={component}></MDXProvider>*/}
      <div className="min-h-84% ">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
