import {
  PlanCardAnchor,
  PlanCardButton,
  PlanCardContainer,
  PlanCardFieldName,
  PlanCardImage,
  PlanCardImgContainer,
  PlanCardInformationContainer,
} from "elements";
import { PlanCardContent } from "elements/Div/PlanCard/PlanCardContent";
import { PlanCardField } from "elements/P";
import { PlanCardFieldValue } from "elements/Span/PlanCard/FieldValue";
import { isArray } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FQl_response_plan_IPlan, InitialState, useStore } from "state";
import { deletePlan } from "state/actions/plan/deletePlan";
import styled from "styled-components";
import { Color } from "styles";
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
  plan: Partial<FQl_response_plan_IPlan>;
}

const PlanCode = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  min-width: 80%;
    padding: 0.2rem;
  height: 1.9rem;
    text-align: center;
  border-right: 2px solid goldenrod;
  border-left: 2px solid goldenrod;
  border-bottom: 3px solid goldenrod;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  color: ${Color.Text};
  background-color: ${Color.BackgroundSecondary};
`;

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const {
    me,
  } = useStore((state: InitialState) => ({
    me: state?.me.data,
  }));
  const [hover, setHover] = useState(false);
  const router = useRouter();

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

      <PlanCode>نقشه شماره : {plan?.planCode}</PlanCode>

      <PlanCardContent>
        <PlanCardInformationContainer>
          <PlanCardField>
            <PlanCardFieldName>نوع پلاک</PlanCardFieldName>
            <PlanCardFieldValue>
              {translator(plan?.plateType)}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>نوع کاربری</PlanCardFieldName>
            <PlanCardFieldValue>
              {translator(plan?.planType)}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>عرض معبر</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.passageWidth}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>مساحت زمین</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.infrastructureArea} متر
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>عرض زمین</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.width}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>طول زمین</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.length}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>تعداد واحد</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.units}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>تعداد طبقات</PlanCardFieldName>
            <PlanCardFieldValue>
              {plan?.floors}
            </PlanCardFieldValue>
          </PlanCardField>

          <PlanCardField>
            <PlanCardFieldName>موقعیت زمین</PlanCardFieldName>
            <PlanCardFieldValue>
              {isArray(plan.exposure)
                ? plan.exposure.map((exp) => (`${translator(exp)} - `))
                : translator(plan.exposure)}
            </PlanCardFieldValue>
          </PlanCardField>
        </PlanCardInformationContainer>
      </PlanCardContent>
      {router.pathname.includes("admin")
        ? (
          <PlanCardAnchor>
            <PlanCardButton
              active={hover}
              isDelete
              onClick={() =>
                deletePlan(
                  { set: { _id: plan._id }, get: { msg: "1" } },
                  me.token,
                )}
            >
              حذف نقشه
            </PlanCardButton>
          </PlanCardAnchor>
        )
        : (
          <Link href={`/plans/${plan?._id}`}>
            <PlanCardAnchor>
              <PlanCardButton active={hover}>
                مشاهده
              </PlanCardButton>
            </PlanCardAnchor>
          </Link>
        )}
    </PlanCardContainer>
  );
};
