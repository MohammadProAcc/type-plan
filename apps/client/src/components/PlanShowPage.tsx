import { PlanDetailsContainer, PlanDetailsContainerRow } from "elements";
import React from "react";
import { Layout } from "./Layout";
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

        <PlanDetailsContainerRow>
          <PlanMedia />
          <PlanInformation />

          <PlanPurchaseInformation />

          <PlanDetails />
        </PlanDetailsContainerRow>
      </PlanDetailsContainer>
    </Layout>
  );
};
