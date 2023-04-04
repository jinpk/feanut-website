import { getPrivacyData } from "@/lib/privacy";
import { Fragment } from "react";

type PrivacyProps = {
  privacy: { title: string; date: string; contentHtml: string };
};
export default function Privacy(props: PrivacyProps) {
  return (
    <Fragment>
      {props.privacy.title}
      <br />
      {props.privacy.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.privacy.contentHtml }} />
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
