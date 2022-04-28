import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";
import { SetState } from "zustand";

export const planPiece = (set: SetState<any>) => ({
  plan: {} as FQl_dynamic_plan_IPlan,
  plans: [],
  setPlan: (plan: FQl_dynamic_plan_IPlan) =>
    set((state: any) => {
      state.plan = plan;
    }),
  setPlans: (plans: FQl_dynamic_plan_IPlan[]) =>
    set((state: any) => {
      state.plans = plans;
    }),
});
