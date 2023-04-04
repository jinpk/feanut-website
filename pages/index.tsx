import { Faq } from "@/interfaces/docs";
import { Poll } from "@/interfaces/poll";
import { getFaqs } from "@/lib/faqs";
import { getPolls } from "@/lib/polls";
import MainTemplate from "@/templates/main";
import Head from "next/head";

type HomeProps = {
  faqs: Faq[];
  polls: Poll[];
};

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>소셜 투표 서비스 - feanut</title>
      </Head>
      <MainTemplate faqs={props.faqs} polls={props.polls} />
    </>
  );
}

export async function getStaticProps({}) {
  const faqs = await getFaqs();
  const polls = await getPolls();
  return {
    props: {
      faqs,
      polls,
    },
  };
}
