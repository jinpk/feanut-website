export default function Hello() {
  return <div />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      permanent: false,
      destination: "https://feanut.page.link/hello",
    },
  };
};
