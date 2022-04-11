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
                            country: { type: "string" },
                            state: { type: "string" },
                            city: { type: "string" },
                            addressTxt: { type: "string" },
                            location: {
                                type: "object",
                                props: {
                                    type: { type: "string", default: "Point" },
                                    location: { type: "tuple", items: ["number", "number"] },
                                },
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

export const checkAddUserAddress = v.compile(schema);

export interface AddUserAddressDetails {
    set: {
        userId?: string;
        address: Pick<UserAddress, "addressTxt" | "city" | "country" | "state" | "location">;
    };
    get: RUser;
}
