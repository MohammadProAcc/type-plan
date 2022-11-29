import {
  Em,
  PlanCardAnchor,
  PlanCardButton,
  PlanCardContainer,
  PlanCardFieldName,
  PlanCardImage,
  PlanCardImgContainer,
  PlanCardInformationContainer,
  PlanCardSeparator,
} from "elements";
import { PlanCardContent } from "elements/Div/PlanCard/PlanCardContent";
import { PlanCardField } from "elements/P";
import Link from "next/link";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";
import { translator } from "tools";
import animationData from "../../../../../../public/lottie/document.json";

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface PlanCardProps {
  plan: Partial<FQl_dynamic_plan_IPlan>;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <PlanCardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PlanCardImgContainer>
        <Link href={`/plans/${plan?._id}`} passHref>
          <PlanCardAnchor>
            <PlanCardImage Src={plan?.photo?.filename} />
          </PlanCardAnchor>
        </Link>
      </PlanCardImgContainer>

      <PlanCardContent>
        <PlanCardInformationContainer>
          <PlanCardField>
            <PlanCardFieldName>کد نقشه :</PlanCardFieldName>
            {plan?.planCode}
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>مساحت :</PlanCardFieldName>
            {plan?.infrastructureArea} متر
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>جهت جغرافیایی :</PlanCardFieldName>
            {translator(plan?.exposure)}
          </PlanCardField>
        </PlanCardInformationContainer>

        <Link href={`/plans/${plan?._id}`}>
          <PlanCardAnchor>
            <PlanCardButton active={hover}>
              <Lottie options={defaultOptions} />
              مشاهده
            </PlanCardButton>
          </PlanCardAnchor>
        </Link>
      </PlanCardContent>
    </PlanCardContainer>
  );
};
