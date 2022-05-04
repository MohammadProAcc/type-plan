import { H3 } from "../H3";
import styled from 'styled-components'
import { Border, Color, Padding } from "styles";
import { Margin } from "styles/design/Margin";

export const PlansPageSidebarTitle = styled(H3)`
  padding-bottom: ${Padding.l2};
  border-bottom: ${Border("0.125rem", Color.LineSecondary)};
  margin-bottom: ${Margin.l5};
`;