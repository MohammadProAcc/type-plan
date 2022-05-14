import { PlansPageContainer } from "elements";
import Head from "next/head";
import React from "react";
import { Layout } from "./Layout";
import { PlansPagePlans, PlansPageSidebar } from "./organisms";

export const PlansPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>طرح ها</title>
      </Head>

      <Layout>
        <PlansPageContainer>
          <PlansPageSidebar />
          <PlansPagePlans />
        </PlansPageContainer>
      </Layout>
    </>
  );
};
