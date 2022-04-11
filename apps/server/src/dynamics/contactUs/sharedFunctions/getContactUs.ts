import { contactUs, RContactUs, IContactUs } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makeProjections } from "../../../utils/mod.ts";
import { throwError } from "../../../utils/mod.ts";

type GetContactUsInput = { _id: Bson.ObjectID; get: RContactUs };
/**
 * Represent type of  GetContactUs function.
 * @param param - param is include `{_id , get }` as GetContactUsInput
 */
type GetContactUs = ({ _id, get }: GetContactUsInput) => any;

/**
 * Represent getIStateFn
 * @param param0
 * param is include _id , get
 * get for specify what user want
 */
export const getContactUs: GetContactUs = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  const foundContactUs = await contactUs.findOne({ _id }, { projection });
  const doRelation = async (contactUs: IContactUs, get: RContactUs) => {
    return contactUs;
  };

  return foundContactUs
    ? await doRelation(foundContactUs, get)
    : throwError("can not find contactUs blogTag");
};
