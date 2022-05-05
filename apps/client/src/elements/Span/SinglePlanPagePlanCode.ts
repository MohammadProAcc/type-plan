import { Span } from "./Span";
import styled from 'styled-components'
import { FontFamily, FontSize } from "styles";
import { Margin } from "styles/design/Margin";

export const SinglePlanPagePlanCode = styled(Span)`
  margin-right: ${Margin.l4};

  font-size: ${FontSize.xxl};
  font-family: ${FontFamily.bold};
  text-decoration: underline;
`;