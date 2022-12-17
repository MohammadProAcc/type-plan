import { AdminPanelPlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { TypePlanSet } from "pages/plans";
import { getPlans } from "state";
import { isAdmin } from "tools";

const Page: NextPage = () => <AdminPanelPlansPage />;

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies[process.env.TOKEN];

  const admin = await isAdmin(token);

  if (admin) {
    const params = context.query;
    const query: TypePlanSet = {};

    (params?.units?.length > 0) && (query.units = +(params.units));
    (params?.floors?.length > 0) && (query.floors = +(params.floors));

    (params["width[0]"] || params["width[1]"]) && (query.width = [
      +(params?.["width[0]"] || 1),
      +(params?.["width[1]"] || 1),
    ]);
    (params["length[0]"] || params["length[1]"]) && (query.length = [
      +(params?.["length[0]"] || 1),
      +(params?.["length[1]"] || 1),
    ]);
    (params["infrastructureArea[0]"] || params["infrastructureArea[1]"]) &&
      (query.infrastructureArea = [
        +(params?.["infrastructureArea[0]"] || 1),
        +(params?.["infrastructureAre[1]"] || 1),
      ]);
    const plans = await getPlans({
      set: {
        pagination: {
          limit: 12,
          page: +(params.page || 1),
        },
        ...params,
        ...query,
      },
      get: {
        updateAt: 0,
      },
    });

    return {
      props: {
        initialZustandState: {
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
