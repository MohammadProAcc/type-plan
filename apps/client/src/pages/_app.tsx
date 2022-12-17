// import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Provider, useCreateStore } from "state";
import "styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

// TODO: Fix The Temp AppProps Type Solution
function CustomApp({ Component, pageProps }) {
  /* const store = useHydrate(pageProps.initialState); */
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <Provider createStore={createStore}>
      <Head>
        <title>طرح تیپ</title>
      </Head>
      <main dir="rtl">
        <Component {...pageProps} />
      </main>
      <ToastContainer
        rtl
        position="top-center"
      />
    </Provider>
  );
}

export default CustomApp;
