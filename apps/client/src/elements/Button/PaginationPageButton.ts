import styled from "styled-components";
import { Color, Radius } from "styles";
import { Activable } from "types";
import { Button } from ".";

export const PaginationPageButton = styled(Button)<Activable>`
  width: 2rem;
  height: 2rem;
  border-radius: ${Radius.l1};

  background-color: ${props =>
  props.active ? Color.Line : Color.BackgroundSecondary};
  color: ${props => props.active ? Color.BackgroundSecondary : Color.Line};
`;
