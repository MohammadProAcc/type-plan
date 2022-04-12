import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { countries, PuRelCountry } from "./../../schemas/country.ts";
import { cities, IUser, PuRelCity, PuRelState, states, UserAddress, users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { getPureDoc } from "./../../utils/mod.ts";
import { throwError } from "./../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { AddUserAddressDetails, checkAddUserAddress } from "./addUserAddress.type.ts";
import { getUser } from "./funcs/getUser.ts";

type AddUserAddress = (
    details: AddUserAddressDetails,
    context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * the user has logged in and has the token,
 * then she/he wants to insert its info(user completing his profile info)
 * @param details
 * @param context
 */

export const addUserAddressFn: AddUserAddress = async (details, context) => {
    const detailsIsRight = checkAddUserAddress({ details });
    detailsIsRight !== true
        && throwError((detailsIsRight as ValidationError[])[0].message);
    const {
        set: { userId, address },
        get,
    } = details;

    !context && throwError("your token is empty");
    const user = await isAuthFn(context.token!);
    !user
        && throwError("the token is not right! so we didn't find you dear user");

    const addAddress = async (_id: Bson.ObjectID) => {
        const country = await countries.findOne(
            { _id: new Bson.ObjectId(address.country) },
            { projection: { name: 1, enName: 1 } },
        );

        country === undefined
            && throwError(`we can not found country with this ${address.country} id`);

        const state = await states.findOne(
            { _id: new Bson.ObjectId(address.state) },
            { projection: { name: 1, enName: 1 } },
        );

        state === undefined
            && throwError(`we can not found city with this ${address.city} id`);

        const city = await cities.findOne(
            { _id: new Bson.ObjectId(address.city) },
            { projection: { name: 1, enName: 1 } },
        );

        city === undefined
            && throwError(`we can not found city with this ${address.city} id`);

        const newAddress: UserAddress = {
            addressId: crypto.randomUUID(),
            country: country as PuRelCountry,
            state: state as PuRelState,
            city: city as PuRelCity,
            addressTxt: address.addressTxt,
            location: {
                type: "Point",
                coordinates: address.location.coordinates,
            },
        };

        await users.updateOne(
            { _id },
            {
                $addToSet: {
                    addresses: newAddress,
                },
            },
        );
    };

    const adminAddUserAddress = async () => {
        checkRoleFn(user, ["Admin"]);
        const userObjId = new Bson.ObjectID(userId);
        await addAddress(userObjId);
        return get ? await getUser({ _id: userObjId, get }) : { _id: userObjId };
    };

    const userAddOwnAddress = async () => {
        await addAddress(user._id);
        return get ? await getUser({ _id: user._id, get }) : user;
    };

    return userId ? await adminAddUserAddress() : await userAddOwnAddress();
};
