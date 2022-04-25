import { Div } from "../Div";
import styled from 'styled-components'
import { Color, Device, Radius, Shadow } from "styles";

export const AdminPanelHeaderContainer = styled(Div)`
  width: 100%;
  background-color: ${Color.BackgroundSecondary};

  display: flex;
  align-items: center;

  @media (${Device.desktop}) {
    border-radius: ${Radius.l1};
    box-shadow: ${Shadow.secondary};
  }
`