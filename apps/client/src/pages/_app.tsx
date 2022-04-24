// import { AppProps } from "next/app";
import Head from "next/head";
import { Provider, useCreateStore } from "state";
import "styles/styles.css";

// TODO: Fix The Temp AppProps Type Solution
function CustomApp({ Component, pageProps }) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <>
      <Provider createStore={createStore}>
        <Head>
          <title>طرح تیپ</title>
        </Head>
        <main dir="rtl">
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default CustomApp;
