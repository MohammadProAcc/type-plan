import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { countries } from "./../../schemas/country.ts";
import { cities, IUser, Level, states, users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { getPureDoc } from "./../../utils/mod.ts";
import { throwError } from "./../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { getUser } from "./funcs/getUser.ts";
import { checkUpdateUser, updateUserDetails } from "./updateUser.type.ts";

type UpdateUser = (
  details: updateUserDetails,
  context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * the user has logged in and has the token,
 * then she/he wants to insert its info(user completing his profile info)
 * @param details
 * @param context
 */

export const updateUserFn: UpdateUser = async (details, context) => {
  !context ? throwError("your token is empty") : null;
  const user = await isAuthFn(context.token!);

  !user
    ? throwError("the token is not right! so we didn't find you dear user")
    : null;
  /**check the Role:just the admin can change the user info */
  // !checkRoleFn(user, ["Admin"])
  //   ? throwError("just the admin can change the user info")
  //   : null;

  const detailsIsRight = checkUpdateUser({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: {
      userId,
      name,
      lastName,
      profilePicture,
      gender,
      birthDate,
      postalCode,
      email,
      creditCardNumber,
    },
    get,
  } = details;

  const userObjId = user.level.includes(Level.Admin)
    ? new Bson.ObjectID(userId)
    : user._id.equals(userId)
    ? user._id
    : throwError("You can not update this user");

  await users.updateOne(
    { _id: userObjId },
    {
      $set: {
        name,
        lastName,
        gender,
        profilePicture,
        birthDate,
        postalCode,
        email,
        creditCardNumber,
      },
    },
  );

  return get ? await getUser({ _id: userObjId, get }) : user;
};
