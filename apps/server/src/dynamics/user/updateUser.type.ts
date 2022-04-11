import FastestValidator from "https://esm.sh/fastest-validator@1";
import { PuFile, RUser, userSelectable } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
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
                    userId: { type: "string" },

                    name: { type: "string", optional: true },

                    lastName: { type: "string", optional: true },

                    gender: { type: "enum", values: ["MALE", "FEMALE"], optional: true },

                    profilePicture: {
                        type: "object",
                        optional: true,
                        props: {
                            _id: { type: "objectID", ObjectID },
                            filename: { type: "string" },
                            type: { type: "string" },
                            size: { type: "number" },
                        },
                    },

                    birthDate: {
                        type: "date",
                        default: () => new Date(),
                        optional: true,
                        convert: true,
                    },
                    postalCode: { type: "string", optional: true },
                    email: { type: "email", optional: true },
                    creditCardNumber: {
                        type: "number",
                        optional: true,
                        length: 16,
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

export const checkUpdateUser = v.compile(schema);

export interface updateUserDetails {
    set: {
        userId: string;
        name?: string;
        lastName?: string;
        gender?: string;
        profilePicture?: PuFile;
        phone?: number;
        birthDate?: Date;
        postalCode?: string;
        email?: string;
        creditCardNumber?: string;
    };
    get: RUser;
}
