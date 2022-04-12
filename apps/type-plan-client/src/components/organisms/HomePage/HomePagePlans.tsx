import { HomePagePlansContainer, HomePagePlansFlexContainer, HomePagePlanTitle } from "elements";
import { PlanCard } from "../molecules";

export const HomePagePlans: React.FC = () => {
  return (
    <HomePagePlansContainer>
      <HomePagePlanTitle>جدیدترین طرح ها</HomePagePlanTitle>
      <HomePagePlansFlexContainer>
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </HomePagePlansFlexContainer>
    </HomePagePlansContainer>
  );
};
