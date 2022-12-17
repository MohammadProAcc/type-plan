import styled from "styled-components";
import { Border, Color, Radius, Shadow } from "styles";
import { Div } from "../Div";

export const PlanCardContainer = styled(Div)`
  width: 18rem;
  position: relative;
  border-radius: ${Radius.l3};
  border: ${Border("0.25rem", "goldenrod")};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background-color: ${Color.BackgroundSecondary};

  transition: 0.25s;

  &:hover {
    box-shadow: ${Shadow.primary};
  }
`;
