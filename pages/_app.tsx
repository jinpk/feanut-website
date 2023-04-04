import type { AppProps } from "next/app";
import { Global, ThemeProvider, css } from "@emotion/react";
import Head from "next/head";
import { Fragment } from "react";
import theme from "@/lib/theme";

import localFont from "next/font/local";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="친구들과 함꼐하는 소셜 투표 서비스" />
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
                text-decoration: none;
              }
              * {
                box-sizing: border-box;
                font-family: "Pretendard-Medium";
              }
              @font-face {
                font-family: "Pretendard-Medium";
                src: url("fonts/Pretendard-Medium.woff") format("woff");
              }
              @font-face {
                font-family: "Pretendard-SemiBold";
                src: url("fonts/Pretendard-SemiBold.woff") format("woff");
              }
              @font-face {
                font-family: "Pretendard-Bold";
                src: url("fonts/Pretendard-Bold.woff") format("woff");
              }
            `}
          />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    </>
  );
}
