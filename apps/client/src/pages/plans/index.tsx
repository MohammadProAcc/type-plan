import { PlansPage } from "components";
import { GetServerSideProps, NextPage } from "next";
import { getPlans } from "state";

const Page: NextPage = () => <PlansPage />;

export default Page;
type PlanType = "Resindental" | "Commercial" | "Mixed";
type Exposure = "Northern" | "Southern" | "Eastern" | "Western";
type PlateType = "Registered" | "Normal";
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
  planType?: PlanType;
  units?: number;
  floors?: number;
  planCode?: string;
  exposure?: Exposure;
  infrastructureArea?: any;
  length?: any;
  width?: any;
  passageWidth?: number;
  plateType?: PlateType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = +(context.query.page as string ?? 1);
  const params = context.query;
  const query: TypePlanSet = {};

  (params?.units?.length > 0) && (query.units = +(params.units));
  (params?.floors?.length > 0) && (query.floors = +(params.floors));
  (params?.exposure?.length > 0) &&
    (query.exposure = params.exposure as Exposure);
  (params?.planType?.length > 0) &&
    (query.planType = params.planType as PlanType);
  (params?.plateType?.length > 0) &&
    (query.plateType = params.plateType as PlateType);

  (params["width[0]"]) && (query.width = [
    +(params["width[0]"] || 1),
    1,
  ]);
  (params["width[0]"] && params["width[1]"]) && (query.width = [
    +(params["width[0]"] || 1),
    +(params["width[1]"] || 1),
  ]);
  (params["length[0]"]) && (query.length = [
    +(params["length[0]"] || 1),
    1,
  ]);
  (params["length[0]"] && params["length[1]"]) && (query.length = [
    +(params["length[0]"] || 1),
    +(params["length[1]"] || 1),
  ]);
  (params["infrastructureArea[0]"]) &&
    (query.infrastructureArea = [
      +(params["infrastructureArea[0]"]) || 1,
      1,
    ]);
  (params["infrastructureArea[0]"] && params["infrastructureArea[1]"]) &&
    (query.infrastructureArea = [
      +(params["infrastructureArea[0]"] || 1),
      +(params["infrastructureArea[1]"] || 1),
    ]);

  const plans = await getPlans({
    set: {
      pagination: {
        limit: 20,
        page,
      },
      ...query,
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
