import styled from "styled-components";
import { Radius } from "styles";
import { Img } from "./Img";

export const PlanTableThumb = styled(Img).attrs({
  title: "تصویر طرح",
  alt: "تصویر طرح",
})`
  width: 6rem;
  height: 4rem;
  border-radius: ${Radius.l1};
  margin: auto;
`;
