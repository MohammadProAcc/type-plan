import { Div } from "../Div";
import styled from 'styled-components'
import { Device } from "styles";

export const AdminPanelContentContainer = styled(Div)`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (${Device.desktop}) {
    flex-direction: row;
  }
`