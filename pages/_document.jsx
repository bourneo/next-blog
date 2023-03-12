import Document, { Head, Html, Main, NextScript } from 'next/document';

const background_color = 'bg-blue-green';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className={`${background_color} `}>
        {/*Track and analysis*/}
        {/* <script async src="https://cdn.splitbee.io/sb.js" /> */}
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
