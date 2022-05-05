import {
  PlanInformationContainer,
  PlanInformationContainerTitle,
  PlanInformationEl,
  PlanInformationTitle,
  PlanInformationValue,
} from "elements";
import { useStore } from "state";
import { translator } from "tools";

export const PlanInformation: React.FC = () => {
  const {
    plan,
  } = useStore((state: any) => ({
    plan: state?.plan,
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
        <PlanInformationTitle>تعداد خواب:</PlanInformationTitle>
        <PlanInformationValue>{plan?.sleeps}</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>تعداد حمام:</PlanInformationTitle>
        <PlanInformationValue>{plan?.bathroom}</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>موقعیت زمین:</PlanInformationTitle>
        <PlanInformationValue>
          {translator(plan.exposure)}
        </PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>مساحت:</PlanInformationTitle>
        <PlanInformationValue>
          {plan.infrastructureArea[0] * plan.infrastructureArea[1]} متر مربع
        </PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>طول:</PlanInformationTitle>
        <PlanInformationValue>{plan?.lenght[0]} متر</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>عرض:</PlanInformationTitle>
        <PlanInformationValue>{plan?.width[0]} متر</PlanInformationValue>
      </PlanInformationEl>
    </PlanInformationContainer>
  );
};
