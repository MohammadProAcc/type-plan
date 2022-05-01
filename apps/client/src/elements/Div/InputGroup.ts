import { Div } from "./Div";
import styled from 'styled-components'
import { Flexible } from "types";
import { Margin } from "styles/design/Margin";
import { Stylable } from "types";

interface InputGroupProps extends Flexible, Stylable { }

export const InputGroup = styled(Div) <InputGroupProps>`
  width: ${props => props.fullWidth ? "100%" : "auto"};
  margin: ${Margin.l2} 0;

  display: flex;
  flex-direction: ${props => props.col && "column"};
  
  ${props => props.Style}
`;