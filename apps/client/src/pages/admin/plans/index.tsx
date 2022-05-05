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
    const params = context.query;

    const plans = await getPlans({
      set: {
        pagination: {
          limit: 12,
          page: +(params.page || 1),
        },
        ...params,
        units: +(params?.units?.length > 0 ? params.units : 1),
        floors: +(params?.floors?.length > 0 ? params.floors : 1),
        sleeps: +(params?.sleeps?.length > 0 ? params.sleeps : 1),
        bathroom: +(params?.bathroom?.length > 0 ? params.bathroom : 1),
        passageWidth: +(params?.passageWidth?.length > 0
          ? params.passageWidth
          : 1),
        width: (params["width[0]"] || params["width[1]"]) && [
          +(params?.["width[0]"] || 1),
          +(params?.["width[1]"] || 1),
        ],
        lenght: (params["length[0]"] || params["length[1]"]) && [
          +(params?.["lenght[0]"] || 1),
          +(params?.["lenght[1]"] || 1),
        ],
        infrastructureArea: (params["infrastructureArea[0]"] ||
          params["infrastructureArea[1]"]) &&
          [
            +(params?.["infrastructureArea[0]"] || 1),
            +(params?.["infrastructureArea[1]"] || 1),
          ],
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
  }

  return {
    redirect: {
      destination: "/",
    },
    props: {},
  };
};
