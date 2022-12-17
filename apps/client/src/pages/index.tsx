import { HomePage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";

const Index: NextPage = () => <HomePage />;

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const plans = await getPlans({
    set: {
      pagination: {
        page: 1,
        limit: 12,
      },
    },
    get: {
      planType: 1,
      units: 1,
      floors: 1,
      planCode: 1,
      exposure: 1,
      infrastructureArea: 1,
      length: 1,
      width: 1,
      passageWidth: 1,
      plateType: 1,
      photo: 1,
      _id: 1,
    },
  });

  return {
    props: {
      initialZustandState: {
        plans,
      },
    },
  };
};
