import { Div } from "./Div";
import styled from 'styled-components'
import { Flexible } from "types";
import { Margin } from "styles/design/Margin";

export const InputGroup = styled(Div)<Flexible>`
  width: ${props => props.fullWidth ? "100%" : "auto"};
  margin: ${Margin.l2} 0;

  display: flex;
  flex-direction: ${props => props.col && "column"};
`;