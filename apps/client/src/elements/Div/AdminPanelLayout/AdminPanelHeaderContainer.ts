import styled from "styled-components";
import { Color, Device, Radius, Shadow } from "styles";
import { Div } from "../Div";

export const AdminPanelHeaderContainer = styled(Div)`
  width: 100%;
  background-color: ${Color.BackgroundSecondary};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (${Device.desktop}) {
    border-radius: ${Radius.l1};
    box-shadow: ${Shadow.secondary};
  }
`;
