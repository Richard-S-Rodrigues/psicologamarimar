import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marimar Psicóloga</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
