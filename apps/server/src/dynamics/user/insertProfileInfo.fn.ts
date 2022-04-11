import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { getUser } from "./funcs/getUser.ts";
import { IUser, users } from "../../schemas/mode.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import {
  checkInsertProfileInfo,
  InsertProfileInfoDetails,
} from "./insertProfileInfo.type.ts";

type InsertProfileInfo = (
  details: InsertProfileInfoDetails,
  context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * the user has logged in and has the token,
 * then she/he wants to insert its info(user completing his profile info)
 * @param details
 * @param context
 */

export const insertProfileInfoFn: InsertProfileInfo = async (
  details,
  context,
) => {
  !context ? throwError("your token is empty") : null;
  const user = await isAuthFn(context.token!);

  !user
    ? throwError("the token is not right! so we didn't find you dear user")
    : null;

  const detailsIsRight = checkInsertProfileInfo({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    // TODO: how to handle address
    set: {
      name,
      lastName,
      gender,
      birthDate,
      postalCode,
      email,
      creditCardNumber,
    },
    get,
  } = details;
  await users.updateOne(
    { _id: user!._id },
    {
      $set: {
        name,
        lastName,
        gender,
        birthDate,
        postalCode,
        email,
        creditCardNumber,
      },
    },
  );

  return get ? await getUser({ _id: user!._id, get }) : user;
};
