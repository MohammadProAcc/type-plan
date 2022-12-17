import { exists } from "https://deno.land/std@0.74.0/fs/mod.ts";
import { IPlan, plans } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { checkValidation, throwError } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkDeleteDetails, GetDeleteDetails } from "./delete.type.ts";

type GetDeleteFn = (
  details: GetDeleteDetails,
  context: Context,
) => Promise<{ msg: string }>;

const removePhotos = async (plan: IPlan) => {
  const checkExistAndDelet = async (path: string) => {
    await exists(path) && await Deno.remove(path);
  };
  plan.photo?.filename &&
    await checkExistAndDelet(`files/${plan.photo.filename}`);
  plan.pdf?.filename && await checkExistAndDelet(`files/${plan.pdf.filename}`);
  plan.slider?.map(async (slid) =>
    await checkExistAndDelet(`files/${slid.filename}`)
  );
};

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const deletePlanFn: GetDeleteFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  const foundedPlan = await plans.findOne({ _id: obId });

  foundedPlan
    ? await removePhotos(foundedPlan)
    : throwError("can not found any plan with this id");

  await plans.deleteOne({ _id: obId });

  return { msg: "the plan remove succesfull" };
};
