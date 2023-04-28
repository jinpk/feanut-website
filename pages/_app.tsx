import type { AppProps } from "next/app";
import { Global, ThemeProvider, css } from "@emotion/react";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import theme from "@/lib/theme";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMxONUvb_R-iQwYBLohOWSvuO4AYSlMC4",
  authDomain: "feanut.firebaseapp.com",
  projectId: "feanut",
  storageBucket: "feanut.appspot.com",
  messagingSenderId: "619040145320",
  appId: "1:619040145320:web:0d3e971f165bafe652e79d",
  measurementId: "G-BTPE8SW96B",
};

const app = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const analytics = getAnalytics(app);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="마음을 전하는 3초, feanut에서 만나요!"
        />
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
