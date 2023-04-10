import Document, { Head, Html, Main, NextScript } from 'next/document';

const background_color = 'bg-blue-green';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' className={`${background_color} `}>
        <Head></Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
