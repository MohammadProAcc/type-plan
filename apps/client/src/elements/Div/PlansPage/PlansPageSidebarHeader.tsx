import styled from "styled-components";
import { Border, Color, Padding } from "styles";
import { Margin } from "styles/design/Margin";
import { Div } from "../Div";

export const PlansPageSidebarHeader = styled(Div)`
  padding-bottom: ${Padding.l2};
  border-bottom: ${Border("0.125rem", Color.LineSecondary)};
  margin-bottom: ${Margin.l5};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
