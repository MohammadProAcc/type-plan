import FastestValidator from "https://esm.sh/fastest-validator@1";
import { Level, PuFile, RUser, userSelectable } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        optional: true,
        strict: true,
        props: {
          name: { type: "string" },
          phone: { type: "number" },
          lastName: { type: "string" },
          gender: { type: "enum", values: ["MALE", "FEMALE"] },
          birthDate: {
            type: "date",
            default: () => new Date(),
            optional: true,
            convert: true,
          },
          postalCode: { type: "string", optional: true },
          email: { type: "email" },
          creditCardNumber: {
            type: "number",
            optional: true,
            length: 16,
          },
          level: {
            type: "array",
            items: "string",
            enum: [
              Level.Normal,
              Level.Admin,
              Level.Ghost,
              Level.Editor,
              Level.Editor,
              Level.Author,
            ],
            default: [Level.Normal],
          },
          profilePicture: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
              // },
            },
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(2),
      },
    },
  },
};
export const checkCreateUserDetails = v.compile(schema);
export interface createUserDetails {
  set: {
    name: string;
    phone: number;
    lastName: string;
    gender: string;
    birthDate: Date;
    postalCode: string;
    email: string;
    creditCardNumber: string;
    profilePicture: PuFile;
  };
  get: RUser;
}
