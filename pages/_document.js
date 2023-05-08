import { Html, Head, Main, NextScript } from 'next/document'

const Page = (props) => (
  <Html translate="no">
    <Head>
      <link rel="shortcut icon" href="./favicon2.png" />
    </Head>
    <body>
        <Main />
        <NextScript />
      </body>
  </Html>
);

export default Page;
