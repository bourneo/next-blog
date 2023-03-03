import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // website
      <Html lang="en" className="dark:bg-gray-400">
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

export default MyDocument;
