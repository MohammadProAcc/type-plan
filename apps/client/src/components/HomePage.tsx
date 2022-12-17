import { createContext } from "react";
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
