import MainTemplate from "@/templates/main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>소셜 투표 서비스 | feanut</title>
        <meta name="description" content="친구들과 함꼐하는 소셜 투표 서비스" />
      </Head>
      <MainTemplate />
    </>
  );
}
