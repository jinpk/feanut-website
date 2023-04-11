import constants from "@/lib/constants";

export default function Hello() {
  return <div />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      permanent: false,
      destination: constants.helloURL,
    },
  };
};
