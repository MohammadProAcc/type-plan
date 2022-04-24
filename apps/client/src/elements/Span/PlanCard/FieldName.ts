import styled from "styled-components";
import { Color, FontFamily } from "styles";
import { Margin } from "styles/design/Margin";
import { Span } from "../Span";

export const PlanCardFieldName = styled(Span)`
  margin-left: ${Margin.l2};

  font-family: ${FontFamily.bold};
  color: ${Color.Text};
`;
