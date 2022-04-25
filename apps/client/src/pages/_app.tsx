// import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { StoreProvider, useHydrate } from "state";
import "styles/styles.css";

// TODO: Fix The Temp AppProps Type Solution
function CustomApp({ Component, pageProps }) {
  const store = useHydrate(pageProps.initialState);

  return (
    <>
      <StoreProvider store={store}>
        <Head>
          <title>طرح تیپ</title>
        </Head>
        <main dir="rtl">
          <Component {...pageProps} />
        </main>
        <ToastContainer rtl />
      </StoreProvider>
    </>
  );
}

export default CustomApp;
