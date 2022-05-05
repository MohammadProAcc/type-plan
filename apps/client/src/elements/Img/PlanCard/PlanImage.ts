import styled from "styled-components";
import { Radius } from "styles";
import { Img } from "../Img";

export const PlanCardImage = styled(Img).attrs({
  title: "تصویر طرح",
  alt: "تصویر طرح",
})`
  width: 100%;
  height: 100%;
  border-radius: ${Radius.l2} ${Radius.l2} 0 0;

  position: absolute;
  top: 0;
  right: 0;

  object-fit: cover;
`;
