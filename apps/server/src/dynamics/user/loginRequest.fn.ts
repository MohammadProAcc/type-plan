import { setLoginToken } from "./../../utils/services/inMemoryDb/login.ts";
import { countries, Level, users } from "../../schemas/mode.ts";
import {
  createVerificationCode,
  throwError,
  getPureDoc,
} from "../../utils/mod.ts";
import { refinePhone, checkValidation } from "../../utils/mod.ts";
import { checkLoginReq, SigningDetails } from "./loginRequest.type.ts";

export interface LoginRequestReturn {
  ok?: boolean;
  phone?: number;
  countryCode?: string;
}

type LoginRequest = (details: SigningDetails) => Promise<LoginRequestReturn>;

export const loginRequest: LoginRequest = async details => {
  checkValidation(checkLoginReq, { details });

  const {
    set: { phone, countryCode },
    get,
  } = details;

  /**check the user selected country */
  const foundCountry = await countries.findOne({ countryCode });

  !foundCountry ? throwError("the country is not defined!") : null;

  /**get the pure country */
  const pureCountry = await getPureDoc({
    IDocument: foundCountry,
    puProps: ["name", "enName", "countryCode"],
  });

  /**
   * the user enter its phone as number,
   * it changes to string for check the number validation by refinePhone function
   */

  const phoneNumber = Number(
    refinePhone(phone.toString(), pureCountry!.countryCode[0]),
  );

  // const phoneNumber = refinePhone(phone);
  !phoneNumber && throwError("your phone number is not correct");
  /**we check if the user is in DB before, if its not we create the new user */
  const foundedUser = (await users.findOne({ phone: phoneNumber })) || {
    _id: await users.insertOne({
      createdAt: new Date(Date.now()),
      phone: phoneNumber,
      isActive: false,
      level: [Level.Normal],
    }),
    phone: phoneNumber,
  };
  /**
   *a code is created for the user and within 100 seconds this code is valid
   */
  const code = createVerificationCode();
  await setLoginToken({ userId: foundedUser!._id.toHexString() }, code);
  const returnObj: LoginRequestReturn = {};

  get && get.ok && (returnObj.ok = true);
  get && get.phone && (returnObj.phone = foundedUser.phone);
  get &&
    get.countryCode &&
    (returnObj.countryCode = foundCountry?.countryCode[0]);
  return returnObj;
};
