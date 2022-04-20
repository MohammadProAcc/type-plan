import { defaulted, OutRelation } from "../deps.ts";
import { boolean } from "../deps.ts";
import { array } from "../deps.ts";
import { optional } from "../deps.ts";
import { date } from "../deps.ts";
import { enums } from "../deps.ts";
import { number } from "../deps.ts";
import { string } from "../deps.ts";
import { tarhApp } from "../mod.ts";

const gender = enums(["Male", "Female"]);
const level = enums(["Admin", "Normal", "Ghost"]);
export const pureUser = {
  name: optional(string()),
  lastName: optional(string()),
  phone: number(),
  gender: optional(gender),
  birthDate: optional(date()),
  postalCode: optional(string()),
  level: defaulted(array(level), ["Normal"]),
  email: optional(string()),
  isActive: defaulted(boolean(), false),
  creditCardNumber: optional(number()),
  profilePicture: optional(string()),
};

export const outrelUser: Record<string, OutRelation> = {
  createdPlan: {
    number: 50,
    schemaName: "plan",
    sort: { field: "_id", order: "desc" },
  },
};
export const inrelUser = {};

export const users = tarhApp.odm.setModel(
  "user",
  pureUser,
  inrelUser,
  outrelUser,
);
