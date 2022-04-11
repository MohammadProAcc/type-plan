import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RUser, UserAddress, userSelectable } from "../../schemas/mode.ts";
/**
 * this is a validator for create user, using fastest validator
 * the result is a boolean
 * this validate the input Object,
 * has two parts {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */

const v = new FastestValidator();

export const schema = {
    details: {
        type: "object",
        props: {
            set: {
                type: "object",
                strict: true,
                props: {
                    userId: { type: "string", optional: true },

                    address: {
                        type: "object",
                        props: {
                            addressId: { type: "string" },
                            country: { type: "string", optional: true },
                            state: { type: "string", optional: true },
                            city: { type: "string", optional: true },
                            addressTxt: { type: "string", optional: true },
                            location: {
                                type: "object",
                                props: {
                                    type: { type: "string", default: "Point" },
                                    location: { type: "tuple", items: ["number", "number"] },
                                },
                                optional: true,
                            },
                        },
                    },
                },
            },
            get: {
                type: "object",
                optional: true,
                props: userSelectable(1),
            },
        },
    },
};

export const checkUpdateUserAddress = v.compile(schema);

export interface UpdateUserAddressDetails {
    set: {
        userId?: string;
        address: Partial<UserAddress>;
    };
    get: RUser;
}
