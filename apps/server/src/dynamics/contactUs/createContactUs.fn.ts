import { IContactUs, contactUs } from "../../schemas/mode.ts";
import { Context } from "../mod.ts";
import { ICreateContactUsDetails } from "./createContactUs.type.ts";
import { Bson } from "../../utils/deps.ts";
import { getContactUs } from "./sharedFunctions/getContactUs.ts";

/**type of CreateContactUs function  */
type CreateContactUs = (
  details: ICreateContactUsDetails,
  context: Context,
) => Promise<Partial<IContactUs>>;

/**
 * @function
 * Represent createCity (insert wareType to db)
 * @param details
 * @param context
 */
export const createContactUsFn: CreateContactUs = async (details, context) => {
  const {
    set: { name, email, uploadedFiles, message },
    get,
  } = details;
  const createdContactUs = await contactUs.insertOne({
    createdAt: new Date(Date.now()),
    name,
    email,
    uploadedFiles,
    message,
  });

  const ob = new Bson.ObjectID(createdContactUs);
  return get ? getContactUs({ _id: ob, get }) : { _id: ob };
};
