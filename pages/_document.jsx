import Document, { Head, Html, Main, NextScript } from 'next/document';
import { background_color } from '../lib/constant';

// const background_color = 'bg-slate-800';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // website
      <Html lang="en" className={`${background_color}`}>
        {/*Track and analysis*/}
        <Head>{/* <script async src="https://cdn.splitbee.io/sb.js" /> */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
