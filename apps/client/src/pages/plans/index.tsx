import { PlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";

const Page: NextPage = () => <PlansPage />;

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = +(context.query.page as string ?? 1);

  const plans = await getPlans({
    set: {
      pagination: {
        limit: 12,
        page,
      },
    },
    get: {
      updateAt: 0,
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
