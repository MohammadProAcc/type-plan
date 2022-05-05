import React from "react";
import { Layout } from "./Layout";
import { PlanDetailsContainer } from "elements";
import {
  PlanDetails,
  PlanHeader,
  PlanInformation,
  PlanMedia,
  PlanPurchaseInformation,
} from "./organisms";

export const PlanShowPage: React.FC = () => {
  return (
    <Layout>
      <PlanDetailsContainer>
        <PlanHeader />

        <PlanMedia />

        <PlanInformation />

        <PlanPurchaseInformation />

        <PlanDetails />
      </PlanDetailsContainer>
    </Layout>
  );
};
