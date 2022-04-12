import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { throwError } from "./../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkDeleteUser, deleteUserDetails } from "./deleteUser.type.ts";

type DeleteOrderFn = (
  details: deleteUserDetails,
  context: Context,
) => Promise<any>;
export const deleteUserFn: DeleteOrderFn = async (details, context) => {
  const detailsIsRight = checkDeleteUser({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);

  const {
    set: { userId },
    get: {},
  } = details;
  /**find the props of wares that
   * the user filled them and they are now in the orders  */
  const user = await users.findOne({ _id: new Bson.ObjectID(userId) });

  // TODO:1.delete the user from blog

  /*delete the user from shoppingCart/fabricStudioProperties*/
  // await shoppingCarts.deleteOne({ userId: userId });

  /**delete the user from userTable*/
  const deletedUser = await users.deleteOne({
    _id: new Bson.ObjectID(userId),
  });
  // TODO:the user is deleted there is nothing to return
  return deletedUser;
  // return details.get
  //   ? getOrder({ _id: new Bson.ObjectID(deletedUser), get: details.get })
  //   : deletedUser;
};
