import { IContactUs } from "../../schemas/mode.ts";
import { checkRoleFn } from "./../../utils/mod.ts";
import { contactUs } from "../../schemas/mode.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { DeleteContactUsDetails } from "./deleteContactUs.type.ts";
import { checkDeleteBlogTagDetails } from "../blogTag/deleteBlogTag.type.ts";

type DeleteContactUs = (
  details: DeleteContactUsDetails,
  context: Context,
) => Promise<Partial<IContactUs>>;

/**
 * @function
 * Represent delete contactUs(delete the desired contactUs from DB)
 * @param details
 * @param context
 */
export const deleteContactUs: DeleteContactUs = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context!.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteBlogTagDetails, { details });

  const {
    set: { _id },
    get: {},
  } = details;

  const deletedContactUs = await contactUs.findOne({
    _id: new Bson.ObjectID(_id),
  });
  !deletedContactUs ? notFoundError("contact Us") : null;

  //step 2: delete the contactUs itself
  await contactUs.deleteOne({ _id: new Bson.ObjectID(_id) });
  return deletedContactUs!;
};
