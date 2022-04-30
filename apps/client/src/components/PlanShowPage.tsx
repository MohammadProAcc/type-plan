import React, { useEffect } from "react";
import { Layout } from "./Layout";

import {
  PlanDescriptionContainer,
  PlanDetailsContainer,
  PlanDetailsImgContainer,
  PlanInformation,
  PlanInformationContainer,
  PlanInformationContainerTitle,
  PlanInformationTitle,
  PlanInformationValue,
  PlanLargeImg,
  PlanShowTitle,
  PlanTitle,
} from "elements";
import { useStore } from "state";
import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";
import { translator } from "tools";

export const PlanShowPage: React.FC = () => {
  const {
    plan,
  } = useStore((state) => ({
    plan: (state?.plan as FQl_dynamic_plan_IPlan),
  }));

  return (
    <Layout>
      <PlanDetailsContainer>
        <PlanShowTitle>جزئیات پلان</PlanShowTitle>
        <PlanTitle>نقشه خانه {translator(plan?.planType)}</PlanTitle>
        <PlanInformationContainer>
          <PlanInformationContainerTitle>
            مشخصات پلان
          </PlanInformationContainerTitle>
          <PlanInformation>
            <PlanInformationTitle>کد پلان:</PlanInformationTitle>
            <PlanInformationValue>{plan?.planCode}</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>نوع کاربری:</PlanInformationTitle>
            <PlanInformationValue>
              {translator(plan?.planType)}
            </PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد واحد:</PlanInformationTitle>
            <PlanInformationValue>{plan?.units}</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد طبقات:</PlanInformationTitle>
            <PlanInformationValue>{plan?.floors}</PlanInformationValue>
          </PlanInformation>
          <PlanInformation>
            <PlanInformationTitle>تعداد خواب:</PlanInformationTitle>
            <PlanInformationValue>{plan?.sleeps}</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد حمام:</PlanInformationTitle>
            <PlanInformationValue>{plan?.bathroom}</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>موقعیت زمین:</PlanInformationTitle>
            <PlanInformationValue>
              {translator(plan.exposure)}
            </PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>مساحت:</PlanInformationTitle>
            <PlanInformationValue>
              {plan.infrastructureArea[0] * plan.infrastructureArea[1]} متر مربع
            </PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>طول:</PlanInformationTitle>
            <PlanInformationValue>{plan?.lenght[0]} متر</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>عرض:</PlanInformationTitle>
            <PlanInformationValue>{plan?.width[0]} متر</PlanInformationValue>
          </PlanInformation>
        </PlanInformationContainer>

        <PlanDetailsImgContainer>
          <PlanLargeImg Src={plan?.photo?.filename} />
        </PlanDetailsImgContainer>

        <PlanInformationContainer>
          <PlanInformationContainerTitle>
            مشخصات خرید
          </PlanInformationContainerTitle>

          <PlanInformation>
            <PlanInformationTitle>طراح پلان:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>پلان تیپ طبقات (PDF):</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>نقشه کامل معماری (CAD):</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>
        </PlanInformationContainer>

        <PlanDescriptionContainer>
          <PlanInformationContainerTitle>
            مشخصات پلان
          </PlanInformationContainerTitle>
        </PlanDescriptionContainer>
      </PlanDetailsContainer>
    </Layout>
  );
};
