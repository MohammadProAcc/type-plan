import { PlansPagePlansContainer } from "elements";
import { useStore } from "state";
import { PlanCard } from "../molecules";

export const PlansPagePlans: React.FC = () => {
  const {
    plans,
  } = useStore((state: any) => ({
    plans: state?.plans,
  }));

  return (
    <PlansPagePlansContainer>
      {plans?.map((plan) => <PlanCard key={plan?._id} plan={plan} />)}
    </PlansPagePlansContainer>
  );
};
