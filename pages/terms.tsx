import { Policy } from "@/interfaces/policy";
import { getTerms } from "@/lib/terms";
import PolicyTemplate from "@/templates/policy";
import Head from "next/head";
import { Fragment } from "react";

type TermsProps = {
  terms: Policy[];
};

export default function Terms(props: TermsProps) {
  return (
    <Fragment>
      <Head>
        <title>서비스 이용약관 - feanut</title>
      </Head>
      <PolicyTemplate data={props.terms} title="서비스 이용약관" />;
    </Fragment>
  );
}

export async function getStaticProps({}) {
  const terms = await getTerms();
  return {
    props: {
      terms,
    },
  };
}
