import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
