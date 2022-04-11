import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { IUser, users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { checkRoleFn, isAuthFn } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { throwError } from "./../../utils/mod.ts";
import { getUser } from "./funcs/getUser.ts";
import {
  checkUpdateUserRole,
  updateUserRoleDetails,
} from "./updateUserRole.type.ts";

type UpdateUserRole = (
  details: updateUserRoleDetails,
  context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * the user has logged in and has the token,
 * then she/he wants to insert its info(user completing his profile info)
 * @param details
 * @param context
 */

export const updateUserRoleFn: UpdateUserRole = async (details, context) => {
  !context ? throwError("your token is empty") : null;
  const user = await isAuthFn(context.token!);

  !user
    ? throwError("the token is not right! so we didn't find you dear user")
    : null;
  /**check the Role:just the admin can change the user info */

  !checkRoleFn(user, ["Admin"])
    ? throwError("just the admin can change the user Role")
    : null;

  const detailsIsRight = checkUpdateUserRole({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { _id, role },
    get,
  } = details;

  const userObjId = new Bson.ObjectID(_id);
  await users.updateOne(
    { _id: userObjId },
    {
      $set: { level: role },
    },
  );
  return Object.keys(get).length != 0
    ? getUser({ _id: userObjId, get })
    : { _id: userObjId };
  // return get ? await getUser({ _id: userObjId, get }) : user;
};
