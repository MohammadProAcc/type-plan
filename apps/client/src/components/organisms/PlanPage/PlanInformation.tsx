import {
  PlanInformationContainer,
  PlanInformationContainerTitle,
  PlanInformationEl,
  PlanInformationTitle,
  PlanInformationValue,
} from "elements";
import { InitialState, useStore } from "state";
import { translator } from "tools";

export const PlanInformation: React.FC = () => {
  const {
    plan,
  } = useStore((state: InitialState) => ({
    plan: state?.plan.data,
  }));

  return (
    <PlanInformationContainer>
      <PlanInformationContainerTitle>
        مشخصات پلان
      </PlanInformationContainerTitle>
      <PlanInformationEl>
        <PlanInformationTitle>کد پلان:</PlanInformationTitle>
        <PlanInformationValue>{plan?.planCode}</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>نوع کاربری:</PlanInformationTitle>
        <PlanInformationValue>
          {translator(plan?.planType)}
        </PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>تعداد واحد:</PlanInformationTitle>
        <PlanInformationValue>{plan?.units}</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>تعداد طبقات:</PlanInformationTitle>
        <PlanInformationValue>{plan?.floors}</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>موقعیت زمین:</PlanInformationTitle>
        <PlanInformationValue>
          {plan.exposure.map(exp => `${translator(exp)} - `)}
        </PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>مساحت:</PlanInformationTitle>
        <PlanInformationValue>
          {plan.infrastructureArea} متر مربع
        </PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>طول:</PlanInformationTitle>
        <PlanInformationValue>{plan?.length} متر</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>عرض:</PlanInformationTitle>
        <PlanInformationValue>{plan?.width} متر</PlanInformationValue>
      </PlanInformationEl>
    </PlanInformationContainer>
  );
};
