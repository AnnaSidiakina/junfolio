// import "@component/styles/globals.css";
import Layout from "@component/components/Layout";

import GlobalStyles from "@component/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "@component/styles/Theme";
// import {Context, initialRender} from ''

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
