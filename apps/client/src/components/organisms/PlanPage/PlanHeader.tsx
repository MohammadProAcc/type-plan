import React from "react";
import { useStore } from "state";
import { PlanShowTitle, PlanTitle } from "elements";
import { translator } from "tools";

export const PlanHeader: React.FC = () => {
  const {
    plan,
  } = useStore((state) => ({
    plan: state?.plan,
  }));

  return (
    <>
      <PlanShowTitle>جزئیات پلان</PlanShowTitle>
      <PlanTitle>نقشه خانه {translator(plan?.planType)}</PlanTitle>
    </>
  );
};
