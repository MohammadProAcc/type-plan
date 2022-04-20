import { IPlan, plans, RPlan } from "../../../schemas/plan.ts";
import { Bson } from "../../../utils/deps.ts";
import { makeProjections } from "./../../../utils/mod.ts";
import { throwError } from "../../../utils/mod.ts";

type GetPlanInput = { _id: Bson.ObjectID; get: RPlan };
type GetPlan = ({
  _id,
  get,
}: GetPlanInput) => Promise<IPlan | object>;

export const getPlan: GetPlan = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);

  const foundedPlan = await plans.findOne(
    { _id },
    { projection },
  );
  return foundedPlan
    ? foundedPlan
    : throwError("can not find blogCategory");
};
