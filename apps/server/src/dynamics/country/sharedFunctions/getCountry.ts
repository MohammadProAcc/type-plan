import { ICountry, RCountry, countries } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makeProjections } from "../../../utils/mod.ts";
import { throwError } from "../../../utils/mod.ts";

type GetCountryInput = { _id: Bson.ObjectID; get: RCountry };

type GetCountry = ({ _id, get }: GetCountryInput) => Promise<Partial<ICountry>>;

/**
 * Represent getCountryFn
 * @param param0
 * param is include _id , get
 * get for specify what user want
 */
export const getCountry: GetCountry = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  let foundedDocument = await countries.findOne({ _id }, { projection });
  !foundedDocument && throwError("can not find country");

  // foundedDocument = (
  //   await makeLookup<ICountry, IState, PuState>(
  //     [foundedDocument!],
  //     getStates,
  //     "states",
  //     get.states
  //   )
  // )[0];

  return foundedDocument!;
};
