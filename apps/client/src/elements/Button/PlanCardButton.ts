import styled from "styled-components";
import { Color } from "styles";
import { Button } from "../Button";

export interface Deletable {
  isDelete?: boolean;
}

export const PlanCardButton = styled(Button).attrs({
  pure: true,
})<Deletable>`
width: 100%;
border-top: 1px solid ${Color.BackgroundLine};
margin-top: 0.5rem;

  &:hover {
    background-color: ${props =>
  props.isDelete ? Color.Text : Color.BackgroundLine};
   color: ${props => props.isDelete ? Color.BackgroundLine : Color.Text};
  }

`;
