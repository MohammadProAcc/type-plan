import { cities, ICity, RCity } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makeProjections } from "../../../utils/mod.ts";
import { throwError } from "../../../utils/mod.ts";

/**
 * type of input include `{_id , get}`
 * `get` for specify what user want from City schema
 */
type GetCityInput = { _id: Bson.ObjectID; get: RCity };
/**
 * Represent type of  GetCity function.
 * @param param - param is include `{_id , get }` as GetCityInput
 */
type GetCity = ({ _id, get }: GetCityInput) => any;

/**
 * Represent getIStateFn
 * @param param0
 * param is include _id , get
 * get for specify what user want
 */
export const getCity: GetCity = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  const foundCity = await cities.findOne({ _id }, { projection });
  const doRelation = async (city: ICity, get: RCity) => {
    // if (get.blogPosts)
    //   blogTag.blogPosts = await getBlogPosts({
    //     filter: { "blogTags._id": _id },
    //     getObj: get.blogPosts,
    //   });
    return city;
  };

  return foundCity
    ? await doRelation(foundCity, get)
    : throwError("can not find city blogTag");
};
