import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Psicóloga Marimar</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
