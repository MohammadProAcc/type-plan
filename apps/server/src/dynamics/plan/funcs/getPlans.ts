import { IPlan, plans, PuPlan, RPlan } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { PaginationInput } from "../../../utils/mod.ts";
import { makePagination } from "../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

type GetPlansInput = {
  filter: Bson.Document;
  getObj: RPlan;
} & PaginationInput<PuPlan>;

type GetPlans = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetPlansInput) => Promise<Partial<IPlan>[]>;

export const getPlans: GetPlans = async ({
  filter,
  getObj,
  sort,
  pagination,
}) => {
  const projection = makeProjections(getObj, [], []);

  const returnDocuments = await makePagination<PuPlan>({
    collection: plans,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });

  return returnDocuments;
};
