import styled from "styled-components";
import { Breakpoint, Color, Device, Padding, Radius, Shadow } from "styles";
import { Margin } from "styles/design/Margin";
import { Div } from "../Div";

export const AdminPanelSidebarContainer = styled(Div)`
  width: 100%;
  padding: ${Padding.l5} ${Padding.l6};

  background-color: ${Color.BackgroundLight};

  display: flex;
  flex-direction: column;
  
  @media (${Device.desktop}) {
    width: ${Breakpoint.mobile}px;
    border-radius: ${Radius.l1};
    margin: ${Margin.l3};

    box-shadow: ${Shadow.secondary};
  }
`