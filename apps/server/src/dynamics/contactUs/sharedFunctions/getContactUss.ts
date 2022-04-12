import { PaginationInput } from "./../../../utils/mod.ts";
import {
  contactUs,
  IContactUs,
  PuContactUs,
  RContactUs,
} from "../../../schemas/mode.ts";
import { makeProjections } from "./../../../utils/mod.ts";
import { makePagination } from "../../../utils/mod.ts";
import { Bson } from "../../../utils/deps.ts";

/** filter : any change that is applied on the result is defined in filter */
type GetContactUssInput = {
  filter: Bson.Document;
  getObj: RContactUs;
} & PaginationInput<PuContactUs>;

type GetContactUss = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetContactUssInput) => Promise<Partial<IContactUs>[]>;

/**
 * this is return the object that is got by `filter`
 * @param param - include `{filter , get}`
 * @returns
 */
export const getContactUss: GetContactUss = async ({
  filter,
  getObj,
  sort,
  pagination,
}) => {
  const projection = makeProjections(getObj, [], []);

  const returnDocuments = await makePagination<PuContactUs>({
    collection: contactUs,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });
  return returnDocuments;
};
