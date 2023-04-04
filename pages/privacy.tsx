import { Policy } from "@/interfaces/policy";
import { getPrivacyData } from "@/lib/privacy";
import PolicyTemplate from "@/templates/policy";
import Head from "next/head";
import { Fragment } from "react";

type PrivacyProps = {
  privacy: Policy[];
};

export default function Privacy(props: PrivacyProps) {
  return (
    <Fragment>
      <Head>
        <title>개인정보 처리방침 - feanut</title>
      </Head>
      <PolicyTemplate data={props.privacy} title="개인정보 처리방침" />
    </Fragment>
  );
}

export async function getStaticProps({}) {
  const privacy = await getPrivacyData();
  return {
    props: {
      privacy,
    },
  };
}
