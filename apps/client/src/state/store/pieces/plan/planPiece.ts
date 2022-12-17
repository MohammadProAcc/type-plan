import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";
import { GetState, SetState } from "zustand";

export const planPiece = (set: SetState<any>) => ({
  plan: {} as FQl_dynamic_plan_IPlan,
  plans: [],
  deletePlan: (id: string) =>
    set((state: any) => {
      state.plans = [...state.plans.filter((plan: any) => plan._id === id)];
    }),
  setPlan: (plan: FQl_dynamic_plan_IPlan) =>
    set((state: any) => {
      state.plan = plan;
    }),
  setPlans: (plans: FQl_dynamic_plan_IPlan[]) =>
    set((state: any) => {
      state.plans = plans;
    }),
});
