import { PlansPagePlansContainer } from "elements";
import { InitialState, useStore } from "state";
import { PlanCard } from "../molecules";

export const PlansPagePlans: React.FC = () => {
  const {
    plans,
  } = useStore((state: InitialState) => ({
    plans: state?.plans.data,
  }));

  return (
    <PlansPagePlansContainer>
      {plans?.map((plan) => <PlanCard key={plan?._id} plan={plan} />)}
    </PlansPagePlansContainer>
  );
};
