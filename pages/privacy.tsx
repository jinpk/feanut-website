import { Policy } from "@/interfaces/policy";
import { getPrivacyData } from "@/lib/privacy";
import PolicyTemplate from "@/templates/policy";

type PrivacyProps = {
  privacy: Policy[];
};

export default function Privacy(props: PrivacyProps) {
  return <PolicyTemplate data={props.privacy} title="개인정보 처리방침" />;
}

export async function getStaticProps({}) {
  const privacy = await getPrivacyData();
  return {
    props: {
      privacy,
    },
  };
}
