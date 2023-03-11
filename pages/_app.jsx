import 'tailwindcss/tailwind.css';
import '../lib/index.css'; // tailwind base
import Header from '../component/Header';
import Footer from '../component/Footer';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import TopJumper from '../component/TopJumper';

const background_color_body = 'bg-slate-800';

NProgress.configure({ showSpinner: false });
//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Header />

      <div className={`${background_color_body} min-h-86% py-0.5 `}>
        <Component {...pageProps} />
        {/*{useScrollRestoration(Router)}*/}
        {/*<BackToTop />*/}
        <TopJumper />
      </div>

      <Footer />
    </div>
  );
}
