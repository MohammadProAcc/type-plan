import styled from "styled-components";
import { Color, FontFamily } from "styles";
import { Span } from "../Span";

export const PlanCardFieldName = styled(Span)`
  text-align: left;
    padding-left: 5px;
    flex: 1;
  font-family: ${FontFamily.medium};
  color: ${Color.Line};
`;
