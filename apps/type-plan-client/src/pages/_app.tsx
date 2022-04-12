// import { AppProps } from "next/app";
import Head from "next/head";
import "styles/styles.css";

// TODO: Fix The Temp AppProps Type Solution
function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>طرح تیپ</title>
      </Head>
      <main dir="rtl">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
