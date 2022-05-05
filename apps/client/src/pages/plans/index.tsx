import { PlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";

const Page: NextPage = () => <PlansPage />;

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = +(context.query.page as string ?? 1);
  const params = context.query;

  console.log({
    width: (params["width[0]"] || params["width[1]"]) && [
      +(params?.["width[0]"] || 1),
      +(params?.["width[1]"] || 1),
    ],
    lenght: (params["lenght[0]"] || params["lenght[1]"]) && [
      +(params?.["lenght[0]"] || 1),
      +(params?.["lenght[1]"] || 1),
    ],
    infrastructureArea:
      (params["infrastructureArea[0]"] || params["infrastructureArea[1]"]) &&
      [
        +(params?.["infrastructureArea[0]"] || 1),
        +(params?.["infrastructureArea[1]"] || 1),
      ],
  });

  const plans = await getPlans({
    set: {
      pagination: {
        limit: 12,
        page,
      },
      ...params,
      units: +(params?.units?.length > 0 ? params.units : 1),
      floors: +(params?.floors?.length > 0 ? params.floors : 1),
      sleeps: +(params?.sleeps?.length > 0 ? params.sleeps : 1),
      bathroom: +(params?.bathroom?.length > 0 ? params.bathroom : 1),
      width: (params["width[0]"] || params["width[1]"]) && [
        +(params?.["width[0]"] || 1),
        +(params?.["width[1]"] || 1),
      ],
      lenght: (params["length[0]"] || params["length[1]"]) && [
        +(params?.["lenght[0]"] || 1),
        +(params?.["lenght[1]"] || 1),
      ],
      infrastructureArea:
        (params["infrastructureArea[0]"] || params["infrastructureArea[1]"]) &&
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
};
