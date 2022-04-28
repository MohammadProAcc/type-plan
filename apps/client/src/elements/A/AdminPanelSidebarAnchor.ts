import styled from "styled-components";
import { Border, Color, FontFamily, Padding, Radius } from "styles";
import { A } from "./A";
import { Activable } from "types"
import { Transition } from "styles";
import { Margin } from "styles/design/Margin";

export const AdminPanelSidebarAnchor = styled(A) <Activable>`
  padding: ${Padding.l3};
  border: ${Border("1px", "transparent")};
  border-radius: ${Radius.l2};
  margin-bottom: ${Margin.l3};

  font-family: ${FontFamily.medium};
  color: ${props => props.active ? Color.BackgroundSecondary : Color.Line};
  background-color: ${props => props.active ? Color.Line : "transparent"};
  
  transition: ${Transition.basic};
  
  &:hover {
    border: ${Border("1px", Color.Line)};
  }
`