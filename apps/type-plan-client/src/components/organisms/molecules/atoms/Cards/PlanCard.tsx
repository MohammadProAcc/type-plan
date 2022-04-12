import {
  PlanCardContainer,
  PlanCardImgContainer,
  PlanCardImage,
  PlanCardInformationContainer,
  PlanCardFieldName,
  PlanCardButton
} from 'elements'
import { PlanCardContent } from 'elements/Div/PlanCard/PlanCardContent'
import { PlanCardField } from 'elements/P'
import Lottie from "react-lottie"
import animationData from "../../../../../../public/lottie/document.json"
import React, { useState } from 'react'

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const PlanCard: React.FC = () => {

  const [hover, setHover] = useState(false)

  return (
    <PlanCardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <PlanCardImgContainer>
        <PlanCardImage />
      </PlanCardImgContainer>

      <PlanCardContent>
        <PlanCardInformationContainer>
          <PlanCardField>
            <PlanCardFieldName>کد نقشه : </PlanCardFieldName>
            AB12C
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>مساحت : </PlanCardFieldName>
            x متر
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>جهت جغرافیایی : </PlanCardFieldName>
            شمالی
          </PlanCardField>
        </PlanCardInformationContainer>

        <PlanCardButton active={hover}>
          <Lottie
            options={defaultOptions}
          />
          مشاهده
        </PlanCardButton>

      </PlanCardContent>

    </PlanCardContainer>
  )
}