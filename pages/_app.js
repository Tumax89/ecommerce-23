import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
