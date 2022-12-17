import {
  HomePagePlansContainer,
  HomePagePlansFlexContainer,
  HomePagePlanTitle,
} from "elements";
import { InitialState, useStore } from "state";
import { PlanCard } from "../molecules";

export const HomePagePlans: React.FC = () => {
  const {
    plans,
  } = useStore((state: InitialState) => ({
    plans: state?.plans.data,
  }));

  return (
    <HomePagePlansContainer>
      <HomePagePlanTitle>جدیدترین طرح ها</HomePagePlanTitle>
      <HomePagePlansFlexContainer>
        {plans?.map((plan) => <PlanCard key={plan?._id} plan={plan} />)}
      </HomePagePlansFlexContainer>
    </HomePagePlansContainer>
  );
};
