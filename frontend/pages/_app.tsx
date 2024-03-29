import "../styles/utilities.css";
import "../styles/sidebar.css";
import "../styles/overview.css";
import "../styles/homepage.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-success.css";
import "../styles/sign-up-photo.css";
import "../styles/sign-up-photo-success.css";
import "../styles/transactions.css";
import "../styles/transactions-detail.css";
import "../styles/edit-profile.css";
import "../styles/navbar-log-in.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
