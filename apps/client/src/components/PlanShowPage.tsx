import React from "react";
import { Layout } from "./Layout";
import { PlanDetailsContainer, PlanDetailsContainerRow } from "elements";
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
        <PlanDetailsContainerRow>
          <PlanHeader />
        </PlanDetailsContainerRow>

        <PlanDetailsContainerRow>
          <PlanInformation />

          <PlanMedia />
        </PlanDetailsContainerRow>

        <PlanDetailsContainerRow>
          <PlanPurchaseInformation />

          <PlanDetails />
        </PlanDetailsContainerRow>
      </PlanDetailsContainer>
    </Layout>
  );
};
