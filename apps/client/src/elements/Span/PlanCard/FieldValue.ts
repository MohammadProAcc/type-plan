import styled from "styled-components";
import { Color, FontFamily } from "styles";
import { Span } from "../Span";

export const PlanCardFieldValue = styled(Span)`
  text-align: right;
    flex: 1;
    border: 2px solid ${Color.BackgroundLine};
  border-radius: 5px;
  padding-right: 5px;
  color: ${Color.Line};
`;
