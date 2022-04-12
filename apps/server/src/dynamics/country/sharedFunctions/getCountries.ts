import {
  countries,
  ICountry,
  PuCountry,
  RCountry,
} from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makePagination, PaginationInput } from "../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

type GetCountriesInput = {
  filter: Bson.Document;
  getObj: RCountry;
} & PaginationInput<PuCountry>;

type GetCountries = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetCountriesInput) => Promise<Partial<ICountry>[]>;

export const getCountries: GetCountries = async ({
  filter,
  getObj,
  pagination,
  sort,
}) => {
  const projection = makeProjections(getObj, [], []);
  const returnDocuments = await makePagination<PuCountry>({
    collection: countries,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });
  return returnDocuments;
};
