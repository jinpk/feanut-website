import type { AppProps } from "next/app";
import { Global, ThemeProvider, css } from "@emotion/react";
import Head from "next/head";
import { Fragment } from "react";
import theme from "@/lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Global
            styles={css`
              body,
              html {
                margin: 0px;
              }
              a {
                cursor: pointer;
              }
              * {
                box-sizing: border-box;
              }
            `}
          />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    </>
  );
}
