import { AdminPanelPlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";
import { isAdmin } from "tools";

const Page: NextPage = () => <AdminPanelPlansPage />;

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies[process.env.TOKEN];

  const admin = await isAdmin(token);

  if (admin) {
    const page = context.query.page as string;

    const { body: plans } = await getPlans({
      set: {
        pagination: {
          limit: 10,
          page: +(page || 1),
        },
      },
      get: {
        updateAt: 0,
      },
    });

    return {
      props: {
        initialState: {
          plans,
        },
      },
    };
  }

  return {
    redirect: {
      destination: "/",
    },
    props: {},
  };
};
