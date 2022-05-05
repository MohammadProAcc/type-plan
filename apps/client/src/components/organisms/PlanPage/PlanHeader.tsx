import React from "react";
import { useStore } from "state";
import {
  PlanShowTitle,
  SinglePlanPagePlanCode,
  SinglePlanPagePlanType,
} from "elements";
import { translator } from "tools";

export const PlanHeader: React.FC = () => {
  const {
    plan,
  } = useStore((state) => ({
    plan: state?.plan,
  }));

  return (
    <>
      <PlanShowTitle>
        جزئیات پلان
        <SinglePlanPagePlanCode>
          {plan?.planCode}
        </SinglePlanPagePlanCode>
        <SinglePlanPagePlanType>
          ({translator(plan?.planType)})
        </SinglePlanPagePlanType>
      </PlanShowTitle>
    </>
  );
};
