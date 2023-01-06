import { PlansPageContainer } from "elements";
import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import { Color, Device } from "styles";
import { Layout } from "./Layout";
import { PlansPagePlans, PlansPageSidebar } from "./organisms";

export const PlansPage: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  return (
    <>
      <Head>
        <title>طرح ها</title>
      </Head>

      <Layout>
        <PlansPageContainer>
          <PlanPageTitle onClick={() => toggleSearch()}>
            جستجو{" "}
          </PlanPageTitle>
          <PlansPageSidebar
            searchPane={isSearchOpen}
            toggleSearch={toggleSearch}
          />
          <PlansPagePlans />
        </PlansPageContainer>
      </Layout>
    </>
  );
};

export const PlanPageTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  cursor: pointer;
  background-color: ${Color.BackgroundSecondary};
  margin: -1rem 0 .5rem 0;
  border-bottom: 1px solid ${Color.Line};
  font-size: 1.2rem;
  @media (${Device.laptop}) {
    display: none;
  }
`;
