import styled from "styled-components";
import { Color, Device, Padding, Radius } from "styles";
import { Div } from "../Div";

export interface PlansPageSidebarContainerProps {
  searchPane: boolean;
}

export const PlansPageSidebarContainer = styled(Div)<
  PlansPageSidebarContainerProps
>`
  width: 100%;
  padding: ${Padding.l4};
  position: fixed;
  top: 0;
  right: 0;

  display: ${props => props.searchPane ? "flex" : "none"};
  flex-direction: column;
  row-gap: 1rem;

  height: 100vh;
  backdrop-filter: blur(10px);
  z-index:999;
  
  overflow-y: scroll;

  @media (${Device.desktop}) {
  }
  @media (${Device.laptop}) {
    display: flex;
    min-width: 20rem;
    max-width: 20rem;
    position: static;
    height: auto;
    overflow-y: unset;
  background-color: ${Color.BackgroundSecondary};
    border-radius: ${Radius.l2};
  }
`;
