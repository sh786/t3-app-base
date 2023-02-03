import type { InferGetServerSidePropsType, NextPage, GetServerSidePropsContext } from "next";

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  let filter = query.filter;
  if (typeof filter === "object") {
    filter = filter[0];
  }
  return {
    props: {
      filter,
    },
  };
};

const Explore: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ filter }) => {
  return <div className="flex flex-1 flex-col">Explore {filter}</div>;
};

export default Explore;
