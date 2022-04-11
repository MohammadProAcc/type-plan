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
import { checkUpdateUserAddress, UpdateUserAddressDetails } from "./updateUserAddress.type.ts";

type UpdateUserAddress = (
    details: UpdateUserAddressDetails,
    context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * the user has logged in and has the token,
 * then she/he wants to insert its info(user completing his profile info)
 * @param details
 * @param context
 */

export const updateUserAddressFn: UpdateUserAddress = async (
    details,
    context,
) => {
    const detailsIsRight = checkUpdateUserAddress({ details });
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

    const updateAddress = async (_id: Bson.ObjectID) => {
        const user = await users.findOne({
            _id,
        });

        !user && throwError("can not found any user!!");

        user?.addresses === undefined
            && throwError(
                `This user do not have any address at all`,
            );

        const addresses = user?.addresses;

        const addressToUpdate = addresses!.find(
            x => x.addressId === address.addressId,
        );

        addressToUpdate === undefined
            && throwError(
                `we can not find address with this ${address.addressId} id in user addresses`,
            );

        const country = address.country !== undefined
            && await countries.findOne(
                { _id: new Bson.ObjectId(address.country) },
                { projection: { name: 1, enName: 1 } },
            );

        country === undefined
            && throwError(`we can not found country with this ${address.country} id`);

        const state = address.state !== undefined
            && await states.findOne(
                { _id: new Bson.ObjectId(address.state) },
                { projection: { name: 1, enName: 1 } },
            );

        state === undefined
            && throwError(`we can not found city with this ${address.city} id`);

        const city = address.city !== undefined
            && await cities.findOne(
                { _id: new Bson.ObjectId(address.city) },
                { projection: { name: 1, enName: 1 } },
            );

        city === undefined
            && throwError(`we can not found city with this ${address.city} id`);

        const newAddress = {
            ...addressToUpdate,
            country: country as PuRelCountry,
            state: state as PuRelState,
            city: city as PuRelCity,
        };

        const updatedAddresses = [
            ...addresses!.filter(ad => ad.addressId !== newAddress.addressId),
            newAddress,
        ];

        await users.updateOne(
            { _id },
            {
                $set: {
                    addresses: updatedAddresses,
                },
            },
        );
    };

    const adminUpdateUserAddress = async () => {
        checkRoleFn(user, ["Admin"]);
        const userObjId = new Bson.ObjectID(userId);
        await updateAddress(userObjId);
        return get ? await getUser({ _id: userObjId, get }) : { _id: userObjId };
    };

    const userUpdateOwnAddress = async () => {
        await updateAddress(user._id);
        return get ? await getUser({ _id: user._id, get }) : user;
    };

    return userId ? await adminUpdateUserAddress() : await userUpdateOwnAddress();
};
