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
      _id: 1,
      planCode: 1,
      infrastructureArea: 1,
      exposure: 1,
      photo: 1,
    },
  });

  return {
    props: {
      initialState: {
        plans: plans.body,
      },
    },
  };
};
