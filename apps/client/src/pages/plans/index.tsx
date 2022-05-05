import { PlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";

const Page: NextPage = () => <PlansPage />;

export default Page;
export interface TypePlanSet {
  pagination?: {
    lastObjectId?: string;
    limit?: number;
    page?: number;
  };
  sort?: {
    createdAt?: 1 | -1;
    updateAt?: 1 | -1;
  };
  planType?: "Resindental" | "Villa";
  units?: number;
  floors?: number;
  sleeps?: number;
  bathroom?: number;
  planCode?: string;
  unitType?: "Solo" | "Duplex" | "Triplex";
  exposure?: "Northern" | "Southern" | "Eastern" | "Western";
  infrastructureArea?: any;
  lenght?: any;
  width?: any;
  passageWidth?: number;
  plateType?: "Registered" | "Normal";
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = +(context.query.page as string ?? 1);
  const params = context.query;
  const query: TypePlanSet = {};

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
  (params?.units?.length > 0) && (query.units = +(params.units));
  (params?.floors?.length > 0) && (query.floors = +(params.floors));

  (params?.sleeps?.length > 0) && (query.sleeps = +(params.floors));
  (params?.bathroom?.length > 0) && (query.bathroom = +(params.floors));
  (params["width[0]"] || params["width[1]"]) && (query.width = [
    +(params?.["width[0]"] || 1),
    +(params?.["width[1]"] || 1),
  ]);
  (params["length[0]"] || params["length[1]"]) && (query.lenght = [
    +(params?.["lenght[0]"] || 1),
    +(params?.["lenght[1]"] || 1),
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
        page,
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
      initialState: {
        plans: plans.body,
      },
    },
  };
};
