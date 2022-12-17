import FastestValidator from "https://esm.sh/fastest-validator@1";
const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        optional: true,
        props: {},
      },
      get: {
        type: "object",
        optional: true,
        props: {},
      },
    },
  },
};
export const checkFixedPlanDetails = v.compile(schema);
export interface FixedPlanDetails {
  set: {};
  get: {};
}
