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
        <link rel="shortcut icon" href="/images/Logo.PNG" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/Logo.PNG"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Logo.PNG"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Logo.PNG"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
