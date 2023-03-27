import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
      <title>Jingyang's Blog</title>
        <link rel="shortcut icon" href="/images/logo.PNG" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo.PNG"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo.PNG"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
