import {
  GoBackAnchor,
  PlanShowTitle,
  SinglePlanPagePlanCode,
  SinglePlanPagePlanType,
} from "elements";
import { useRouter } from "next/router";
import React from "react";
import { InitialState, useStore } from "state";
import { translator } from "tools";

export const PlanHeader: React.FC = () => {
  const router = useRouter();

  const {
    plan,
  } = useStore((store: InitialState) => ({
    plan: store?.plan.data,
  }));

  return (
    <>
      <PlanShowTitle>
        <GoBackAnchor onClick={router.back} />
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
