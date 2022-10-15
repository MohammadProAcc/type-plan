import { countries, Gender, IUser, Level, users } from "../../schemas/mode.ts";
import { getPureDoc, throwError } from "../../utils/mod.ts";
import { checkValidation, refinePhone } from "../../utils/mod.ts";
import { checkAdminReq, MakeAdminDetails } from "./makeAdmin.type.ts";

type MakeAdmin = (details: MakeAdminDetails) => Promise<Partial<IUser>>;

const createOrFindCountry = async () => {
  const foundCountry = await countries.find().limit(1).toArray();
  return foundCountry.length > 0
    ? foundCountry[0]
    : countries.insertOne({
      name: "ایران",
      enName: "Iran",
      countryCode: ["98"],
      geometries: {
        type: "Polygon",
        coordinates: [[0, 0]],
      },
    });
};

const findOrCreateUser = async (
  { phone, name, lastName, gender }: {
    phone: number;
    name: string;
    lastName: string;
    gender: Gender;
  },
) => {
  const foundedUser = await users.findOne({ phone });
  if (foundedUser) {
    await users.updateOne({ _id: foundedUser._id }, {
      $addToSet: {
        level: Level.Admin,
      },
    });
    return { ...foundedUser, level: [...foundedUser.level, "Admin"] } as IUser;
  } else {
    return {
      _id: await users.insertOne({
        createdAt: new Date(Date.now()),
        phone,
        name,
        lastName,
        gender,
        isActive: false,
        level: [Level.Admin],
      }),
      phone,
    } as IUser;
  }
};

export const makeAdmin: MakeAdmin = async details => {
  checkValidation(checkAdminReq, { details });

  const {
    set: { phone, name, lastName, gender },
    get,
  } = details;

  /**check the user selected country */
  const foundCountry = await createOrFindCountry();

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
  return await findOrCreateUser({
    phone: phoneNumber,
    name,
    lastName,
    gender,
  });
};
