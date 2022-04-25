import { createContext, useEffect } from "react";
import { useStore } from "state";
import { Layout } from "./Layout";
import { HomePageIntro, HomePagePlans } from "./organisms";

export const PlansContext = createContext({});

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomePageIntro />
      <HomePagePlans />
    </Layout>
  );
};
