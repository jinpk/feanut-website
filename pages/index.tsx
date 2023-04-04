import { Faq } from "@/interfaces/docs";
import { getFaqs } from "@/lib/faqs";
import MainTemplate from "@/templates/main";
import Head from "next/head";

type HomeProps = {
  faqs: Faq[];
};

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>소셜 투표 서비스 | feanut</title>
        <meta name="description" content="친구들과 함꼐하는 소셜 투표 서비스" />
      </Head>
      <MainTemplate faqs={props.faqs} />
    </>
  );
}

export async function getStaticProps({}) {
  const faqs = await getFaqs();
  return {
    props: {
      faqs,
    },
  };
}
