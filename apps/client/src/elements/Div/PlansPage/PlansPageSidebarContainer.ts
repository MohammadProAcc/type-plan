import styled from "styled-components";
import { Color, Device, Padding, Radius } from "styles";
import { Div } from "../Div";

export const PlansPageSidebarContainer = styled(Div)`
  width: 100%;
  padding: ${Padding.l4};

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  background-color: ${Color.BackgroundSecondary};

  @media (${Device.desktop}) {
    min-width: 20rem;
    max-width: 20rem;
    border-radius: ${Radius.l2};
  }
`;
