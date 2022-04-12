import { cities, ICity, PuCity, RCity } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makePagination, PaginationInput } from "../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

/**
 * type of input include `{filter , get}`
 * `get` for specify what user want from City schema
 */
type GetCitiesInput = {
  filter: Bson.Document;
  getObj: RCity;
} & PaginationInput<PuCity>;

/**
 * Represent type of  GetCities function.
 * @param param - param is include `{filter , get }` as GetCitiesInput
 * @returns - return Partial<ICity>[]
 */
type GetCities = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetCitiesInput) => Promise<Partial<ICity>[]>;

/**
 * this is return the object that is got by `filter`
 * @param param - include `{filter , get}`
 * @returns
 */
export const getCities: GetCities = async ({
  filter,
  getObj,
  sort,
  pagination,
}) => {
  const projection = makeProjections(getObj, [], []); // make db projection of `get`

  const returnDocuments = await makePagination<PuCity>({
    collection: cities,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });
  return returnDocuments;
};
