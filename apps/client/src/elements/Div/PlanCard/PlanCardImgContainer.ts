import styled from "styled-components";
import { Border, Color, Radius } from "styles";
import { Div } from "../Div";

export const PlanCardImgContainer = styled(Div)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  position: relative;
  border-bottom: 0.2rem solid goldenrod;

  &:hover {
    cursor: pointer;
  }
`;
