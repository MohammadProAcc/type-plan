import { Div } from "../Div";
import styled from 'styled-components'
import { Activable, Stylable } from "types";
import { Padding, TimeStep } from "styles";

interface CollapsibleContainerProps extends Stylable, Activable {
  height: string;
}

export const CollapsibleContainer = styled(Div) <CollapsibleContainerProps>`
  width: 100%;
  height: ${props => props.height};
  padding: ${props => props.active ? Padding.l2 : "0"} ${Padding.l2};
  
  overflow-y: hidden;
  
  transition: ${TimeStep.quick};
  
  ${props => props.Style}
`;