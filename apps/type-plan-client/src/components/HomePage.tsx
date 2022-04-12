import { Layout } from "./Layout";
import { HomePageIntro, HomePagePlans } from "./organisms";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomePageIntro />
      <HomePagePlans />
    </Layout>
  );
};
