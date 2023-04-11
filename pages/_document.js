import { Html, Head, Main, NextScript } from 'next/document'

const Page = (props) => (
  <Html>
    <Head>
      <link rel="shortcut icon" href="./favicon.png" />
    </Head>
    <body>
        <Main />
        <NextScript />
      </body>
  </Html>
);

export default Page;
