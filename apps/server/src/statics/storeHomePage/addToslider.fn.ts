import { Context } from "../../dynamics/mod.ts";
import { StoreSlider } from "../../isdb/mod.ts";
import { addToSlider } from "../../isdb/storeHomePage/actions/addToSlider.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { notFoundError } from "../../utils/mod.ts";
import { emptyTokenError } from "../../utils/mod.ts";
import { addToSliderDetails, checkAddToSlider } from "./addToslider.type.ts";

type AddToSlider = (details: addToSliderDetails, context: Context) => any;

/**
 * Represent updateCategory (update category on db)
 * @function
 * @param details
 * @param context
 */
export const addToSliderFn: AddToSlider = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkAddToSlider, { details });

  const {
    set: { photo, title, subTitle, url, type },
  } = details;
  const slide: StoreSlider = {
    photo,
    title,
    subTitle,
    url,
    type,
  };
  console.group("slide", "===============");
  console.log(slide);
  console.groupEnd();
  return await addToSlider(slide);
};
