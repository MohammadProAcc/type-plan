import { states, IState, PuState, RState } from "../../../schemas/mode.ts";
import { PaginationInput } from "../../../utils/mod.ts";
import { Bson } from "../../../utils/deps.ts";
import { makePagination } from "../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

type GetStatesInput = {
  filter: Bson.Document;
  getObj: RState;
} & PaginationInput<PuState>;

type GetStates = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetStatesInput) => Promise<Partial<IState>[]>;
export const getStates: GetStates = async ({
  filter,
  getObj,
  pagination,
  sort,
}) => {
  const projection = makeProjections(getObj, [], []);

  const returnDocuments = await makePagination<PuState>({
    collection: states,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });

  return returnDocuments;
};
