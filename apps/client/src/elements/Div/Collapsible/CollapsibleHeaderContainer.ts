import { Div } from "../Div";
import styled from 'styled-components'
import { Stylable } from "types";
import { Padding } from "styles";

export const CollapsibleHeaderContainer = styled(Div)<Stylable>`
  width: 100%;
  height: 2.5rem;
  padding: ${Padding.l2};

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${props => props.Style};
`;