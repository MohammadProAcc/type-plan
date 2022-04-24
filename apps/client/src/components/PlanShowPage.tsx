import React from 'react';
import { Layout } from './Layout';

import {
  PlanDetailsContainer,
  PlanTitle,
  PlanShowTitle,
  PlanInformationContainer,
  PlanInformationContainerTitle,
  PlanInformation,
  PlanInformationTitle,
  PlanInformationValue,
  PlanDetailsImgContainer,
  PlanLargeImg,
  PlanDescriptionContainer,
} from 'elements';

export const PlanShowPage: React.FC<PlanShowPageProps> = (props) => {
  return (
    <Layout>
      <PlanDetailsContainer>
        <PlanShowTitle>جزئیات پلان</PlanShowTitle>
        <PlanTitle>نقشه خانه مسکونی 110</PlanTitle>
        <PlanInformationContainer>
          <PlanInformationContainerTitle>
            مشخصات پلان
          </PlanInformationContainerTitle>
          <PlanInformation>
            <PlanInformationTitle>کد پلان:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>نوع کاربری:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد واحد:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد طبقات:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>
          <PlanInformation>
            <PlanInformationTitle>تعداد خواب:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد حمام:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>موقعیت زمین:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>مساحت:</PlanInformationTitle>
            <PlanInformationValue> 175.21 متر مربع</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>طول:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>عرض:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>

          <PlanInformation>
            <PlanInformationTitle>تعداد واحد:</PlanInformationTitle>
            <PlanInformationValue>۱۰۹۶</PlanInformationValue>
          </PlanInformation>
        </PlanInformationContainer>

        <PlanDetailsImgContainer>
          <PlanLargeImg />
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

export interface PlanShowPageProps {}
