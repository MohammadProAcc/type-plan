import {
  PlanInformationContainer,
  PlanInformationContainerTitle,
  PlanInformationEl,
  PlanInformationTitle,
  PlanInformationValue,
} from "elements";

export const PlanPurchaseInformation: React.FC = () => {
  return (
    <PlanInformationContainer>
      <PlanInformationContainerTitle>
        مشخصات خرید
      </PlanInformationContainerTitle>

      <PlanInformationEl>
        <PlanInformationTitle>طراح پلان:</PlanInformationTitle>
        <PlanInformationValue>۱۰۹۶</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>پلان تیپ طبقات (PDF):</PlanInformationTitle>
        <PlanInformationValue>۱۰۹۶</PlanInformationValue>
      </PlanInformationEl>

      <PlanInformationEl>
        <PlanInformationTitle>نقشه کامل معماری (CAD):</PlanInformationTitle>
        <PlanInformationValue>۱۰۹۶</PlanInformationValue>
      </PlanInformationEl>
    </PlanInformationContainer>
  );
};
