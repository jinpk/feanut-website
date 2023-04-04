import { Policy } from "@/interfaces/policy";
import { getTerms } from "@/lib/terms";
import PolicyTemplate from "@/templates/policy";

type TermsProps = {
  terms: Policy[];
};

export default function Terms(props: TermsProps) {
  return <PolicyTemplate data={props.terms} title="서비스 이용약관" />;
}

export async function getStaticProps({}) {
  const terms = await getTerms();
  return {
    props: {
      terms,
    },
  };
}
