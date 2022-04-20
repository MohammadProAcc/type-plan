import { createPlan } from "./plan.ts";
import { createUser } from "./user.ts";

export const createSchemas = () => {
  return {
    plans: createPlan(),
    user: createUser(),
  };
};
